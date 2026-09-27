"use strict";

/* =========================================================
   FANDIRA — SCRIPT UTAMA
   HTML & CSS TIDAK DIUBAH
   UGC TIDAK DISENTUH
   ========================================================= */


/* =========================================================
   ROBLOX THUMBNAIL
   ========================================================= */

const ROBLOX_THUMBNAIL_API =
    "https://thumbnails.roblox.com/v1/places/gameicons";


async function getRobloxThumbnails(placeIds) {

    const result = {};

    const ids = [
        ...new Set(
            placeIds
                .filter(Boolean)
                .map(Number)
                .filter(Number.isFinite)
        )
    ];

    if (!ids.length) {
        return result;
    }

    try {

        const url =
            ROBLOX_THUMBNAIL_API +
            "?placeIds=" +
            encodeURIComponent(ids.join(",")) +
            "&size=768x432" +
            "&format=Png" +
            "&isCircular=false";

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                "Thumbnail request failed: " +
                response.status
            );
        }

        const data = await response.json();

        if (
            data &&
            Array.isArray(data.data)
        ) {

            data.data.forEach(item => {

                if (
                    item &&
                    item.targetId &&
                    item.imageUrl
                ) {

                    result[String(item.targetId)] =
                        item.imageUrl;

                }

            });

        }

    } catch (error) {

        console.warn(
            "Thumbnail Roblox tidak tersedia:",
            error
        );

    }

    return result;
}


/* =========================================================
   HELPER
   ========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function safeURL(url) {

    if (!url) {
        return "#";
    }

    try {

        const parsed =
            new URL(
                url,
                window.location.href
            );

        if (
            parsed.protocol === "https:" ||
            parsed.protocol === "http:"
        ) {

            return parsed.href;

        }

    } catch (error) {

        console.warn(
            "URL tidak valid:",
            url
        );

    }

    return "#";
}


function fallbackImage(title) {

    return `
        <div
            class="card-image"
            style="
                display:flex;
                align-items:center;
                justify-content:center;
                min-height:180px;
                background:
                radial-gradient(
                    circle at 30% 20%,
                    rgba(53,217,255,.20),
                    transparent 40%
                ),
                radial-gradient(
                    circle at 80% 80%,
                    rgba(155,92,255,.20),
                    transparent 45%
                ),
                #10152a;
            "
        >
            <strong
                style="
                    padding:20px;
                    text-align:center;
                    font-size:18px;
                "
            >
                ${escapeHTML(title)}
            </strong>
        </div>
    `;

}


function imageHTML(url, title) {

    if (!url) {
        return fallbackImage(title);
    }

    return `
        <div class="card-image">

            <img
                src="${safeURL(url)}"
                alt="${escapeHTML(title)}"
                loading="lazy"
                onerror="
                    this.style.display='none';
                    this.parentElement.classList.add('image-error');
                "
            >

        </div>
    `;

}


/* =========================================================
   DATA MAP
   =========================================================

   CATATAN:
   - Satu map bisa masuk beberapa kategori jika memang cocok.
   - PARTY hanya party/music/dance/club/hangout.
   - HORROR hanya horror/anomaly/survival horror.
   - Setiap filter dibatasi 10.
   ========================================================= */


const MAPS = [

    /* =====================================================
       VIRAL TOP 10
       ===================================================== */

    {
        title: "Gunung Kambuno",
        placeId: 90996930447931,
        description:
            "Pendakian Indonesia dengan hutan, danau, air terjun dan jalur eksplorasi.",
        categories: ["viral", "popular", "rating", "realistic", "openworld"],
        tag: "🔥 VIRAL #1",
        url:
            "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
    },

    {
        title: "NUNGGUAN | Broken Silence",
        placeId: 125847422162067,
        description:
            "Horror story dengan mystery, suasana gelap dan kejutan.",
        categories: ["viral", "popular", "rating", "horror"],
        tag: "🔥 VIRAL #2",
        url:
            "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
    },

    {
        title: "MOUNT TRANGGULASIH",
        placeId: 74052392386319,
        description:
            "Map pendakian dengan savannah, cinematic mode dan eksplorasi alam.",
        categories: ["viral", "popular", "rating", "realistic", "openworld"],
        tag: "🔥 VIRAL #3",
        url:
            "https://www.roblox.com/games/74052392386319/MOUNT-TRANGGULASIH"
    },

    {
        title: "MOUNT SIJJIN",
        placeId: 116761724761682,
        description:
            "Pendakian bernuansa mistis dengan jumpscare dan kejadian supernatural.",
        categories: ["viral", "horror", "new"],
        tag: "🔥 VIRAL #4",
        url:
            "https://www.roblox.com/games/116761724761682/MOUNT-SIJJIN"
    },

    {
        title: "KERAMAT Dusun Pocong",
        placeId: 138879663836413,
        description:
            "Horror Indonesia bertema desa, pemakaman dan kejadian mistis.",
        categories: ["viral", "horror", "new"],
        tag: "🔥 VIRAL #5",
        url:
            "https://www.roblox.com/games/138879663836413/KERAMAT-Dusun-Pocong"
    },

    {
        title: "SHELL PARTY",
        placeId: 110172784379358,
        description:
            "Party map dengan musik, dance dan suasana hangout.",
        categories: ["viral", "party", "new"],
        tag: "🔥 VIRAL #6",
        url:
            "https://www.roblox.com/games/110172784379358/SHELL-PARTY"
    },

    {
        title: "MBUH PARTY",
        placeId: 105402575412558,
        description:
            "Party 24 jam dengan DJ, koplo, breakbeat, dance dan hangout.",
        categories: ["viral", "party", "new"],
        tag: "🔥 VIRAL #7",
        url:
            "https://www.roblox.com/games/105402575412558/MBUH-PARTY"
    },

    {
        title: "JERUJI PARTY",
        placeId: 101245429594801,
        description:
            "Club underground dengan DJ mix, funkot, EDM dan ratusan dance.",
        categories: ["viral", "party", "new"],
        tag: "🔥 VIRAL #8",
        url:
            "https://www.roblox.com/games/101245429594801/JERUJI-PARTY"
    },

    {
        title: "The FIFTH",
        placeId: 105573789233426,
        description:
            "Party dan music experience dengan DJ booth dan dance floor.",
        categories: ["viral", "party", "new"],
        tag: "🔥 VIRAL #9",
        url:
            "https://www.roblox.com/games/105573789233426/LA-QUINTA"
    },

    {
        title: "The Hunt: Roblox 20",
        placeId: 74205509034203,
        description:
            "Event Roblox 20 tahun dengan quest dan perjalanan sejarah Roblox.",
        categories: ["viral", "popular", "new"],
        tag: "🔥 EVENT",
        url:
            "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20"
    },


    /* =====================================================
       PALING RAMAI TOP 10
       ===================================================== */

    {
        title: "Brookhaven RP",
        placeId: 4924922222,
        description:
            "Experience roleplay sosial dengan dunia yang luas.",
        categories: ["popular", "openworld", "rating"],
        tag: "👥 RAMAI",
        url:
            "https://www.roblox.com/games/4924922222/Brookhaven-RP"
    },

    {
        title: "Blox Fruits",
        placeId: 2753915549,
        description:
            "Adventure RPG dengan banyak pulau, quest dan combat.",
        categories: ["popular", "openworld", "rating"],
        tag: "👥 RAMAI",
        url:
            "https://www.roblox.com/games/2753915549/Blox-Fruits"
    },

    {
        title: "RIVALS",
        placeId: 17625359962,
        description:
            "Competitive shooter dengan pertandingan cepat.",
        categories: ["popular", "rating", "new"],
        tag: "👥 RAMAI",
        url:
            "https://www.roblox.com/games/17625359962/RIVALS"
    },

    {
        title: "99 Nights in the Forest",
        placeId: 79546208627805,
        description:
            "Survival adventure dengan ancaman di tengah hutan.",
        categories: ["popular", "horror", "openworld"],
        tag: "👥 RAMAI",
        url:
            "https://www.roblox.com/games/79546208627805"
    },

    {
        title: "Murder Mystery 2",
        placeId: 142823291,
        description:
            "Multiplayer mystery dengan Murderer, Sheriff dan Innocent.",
        categories: ["popular", "rating"],
        tag: "👥 RAMAI",
        url:
            "https://www.roblox.com/games/142823291/Murder-Mystery-2"
    },

    {
        title: "Adopt Me!",
        placeId: 920587237,
        description:
            "Pet dan roleplay experience dengan komunitas besar.",
        categories: ["popular", "rating"],
        tag: "👥 RAMAI",
        url:
            "https://www.roblox.com/games/920587237/Adopt-Me"
    },

    {
        title: "Dress To Impress",
        placeId: 15101393054,
        description:
            "Fashion competition dengan runway dan voting.",
        categories: ["popular", "rating"],
        tag: "👥 RAMAI",
        url:
            "https://www.roblox.com/games/15101393054/Dress-To-Impress"
    },

    {
        title: "Jujutsu Shenanigans",
        placeId: 9391468976,
        description:
            "Combat arena bergaya anime dengan pertarungan cepat.",
        categories: ["popular", "rating"],
        tag: "👥 RAMAI",
        url:
            "https://www.roblox.com/games/9391468976/Jujutsu-Shenanigans"
    },

    {
        title: "Pet Simulator 99",
        placeId: 8737899170,
        description:
            "Pet collection, progression dan trading.",
        categories: ["popular", "rating"],
        tag: "👥 RAMAI",
        url:
            "https://www.roblox.com/games/8737899170/Pet-Simulator-99"
    },

    {
        title: "The Hunt: Roblox 20",
        placeId: 74205509034203,
        description:
            "Event resmi Roblox 20 tahun yang sedang berlangsung.",
        categories: ["popular", "viral", "new"],
        tag: "👥 EVENT",
        url:
            "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20"
    },


    /* =====================================================
       RATING BAGUS TOP 10
       ===================================================== */

    {
        title: "Gunung Kambuno",
        placeId: 90996930447931,
        description:
            "Pendakian dengan hutan, danau dan air terjun.",
        categories: ["rating", "viral", "realistic", "openworld"],
        tag: "⭐ RATING",
        url:
            "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
    },

    {
        title: "MOUNT TRANGGULASIH",
        placeId: 74052392386319,
        description:
            "Savannah dan jalur hiking dengan suasana alam.",
        categories: ["rating", "viral", "realistic", "openworld"],
        tag: "⭐ RATING",
        url:
            "https://www.roblox.com/games/74052392386319/MOUNT-TRANGGULASIH"
    },

    {
        title: "MOUNT RINJANI",
        placeId: 138149789228609,
        description:
            "Rekreasi Gunung Rinjani dengan medan dan pemandangan alam.",
        categories: ["rating", "realistic", "openworld"],
        tag: "⭐ RATING",
        url:
            "https://www.roblox.com/games/138149789228609/MOUNT-RINJANI"
    },

    {
        title: "Mount Sumbing",
        placeId: 14963184269,
        description:
            "Hiking dengan cuaca, suhu, campfire dan checkpoint.",
        categories: ["rating", "realistic", "openworld"],
        tag: "⭐ RATING",
        url:
            "https://www.roblox.com/games/14963184269/Mount-Sumbing"
    },

    {
        title: "Mount Merbabu",
        placeId: 114440555601511,
        description:
            "Savannah, hutan pinus dan panorama pegunungan Jawa.",
        categories: ["rating", "realistic", "openworld", "new"],
        tag: "⭐ RATING",
        url:
            "https://www.roblox.com/games/114440555601511/MOUNT-MERBABU"
    },

    {
        title: "Brookhaven RP",
        placeId: 4924922222,
        description:
            "Roleplay sosial dengan banyak aktivitas.",
        categories: ["rating", "popular", "openworld"],
        tag: "⭐ RATING",
        url:
            "https://www.roblox.com/games/4924922222/Brookhaven-RP"
    },

    {
        title: "Adopt Me!",
        placeId: 920587237,
        description:
            "Pet dan social roleplay.",
        categories: ["rating", "popular"],
        tag: "⭐ RATING",
        url:
            "https://www.roblox.com/games/920587237/Adopt-Me"
    },

    {
        title: "Murder Mystery 2",
        placeId: 142823291,
        description:
            "Social deduction multiplayer.",
        categories: ["rating", "popular"],
        tag: "⭐ RATING",
        url:
            "https://www.roblox.com/games/142823291/Murder-Mystery-2"
    },

    {
        title: "Dress To Impress",
        placeId: 15101393054,
        description:
            "Fashion competition dengan runway.",
        categories: ["rating", "popular"],
        tag: "⭐ RATING",
        url:
            "https://www.roblox.com/games/15101393054/Dress-To-Impress"
    },

    {
        title: "NUNGGUAN | Broken Silence",
        placeId: 125847422162067,
        description:
            "Horror story dengan atmosfer dan mystery.",
        categories: ["rating", "viral", "popular", "horror"],
        tag: "⭐ RATING",
        url:
            "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
    },


    /* =====================================================
       REALISTIC TOP 10
       ===================================================== */

    {
        title: "Realistic Drive Simulator Indonesia",
        placeId: 10189328024,
        description:
            "Driving dan roleplay dengan suasana kota Indonesia.",
        categories: ["realistic", "openworld", "viral", "popular"],
        tag: "🌆 REALISTIC",
        url:
            "https://www.roblox.com/games/10189328024/Realistic-Drive-Simulator-Indonesia"
    },

    {
        title: "Gunung Kambuno",
        placeId: 90996930447931,
        description:
            "Hutan, danau, air terjun dan jalur gunung.",
        categories: ["realistic", "viral", "popular", "rating", "openworld"],
        tag: "🌆 REALISTIC",
        url:
            "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
    },

    {
        title: "MOUNT TRANGGULASIH",
        placeId: 74052392386319,
        description:
            "Savannah dan jalur pendakian.",
        categories: ["realistic", "viral", "popular", "rating", "openworld"],
        tag: "🌆 REALISTIC",
        url:
            "https://www.roblox.com/games/74052392386319/MOUNT-TRANGGULASIH"
    },

    {
        title: "MOUNT RINJANI",
        placeId: 138149789228609,
        description:
            "Hutan berkabut, medan terjal dan Segara Anak.",
        categories: ["realistic", "rating", "openworld"],
        tag: "🌆 REALISTIC",
        url:
            "https://www.roblox.com/games/138149789228609/MOUNT-RINJANI"
    },

    {
        title: "Mount Sumbing",
        placeId: 14963184269,
        description:
            "Hiking dengan cuaca, camp dan suasana alam.",
        categories: ["realistic", "rating", "openworld"],
        tag: "🌆 REALISTIC",
        url:
            "https://www.roblox.com/games/14963184269/Mount-Sumbing"
    },

    {
        title: "Mount Merbabu",
        placeId: 114440555601511,
        description:
            "Savannah dan hutan pinus pegunungan.",
        categories: ["realistic", "rating", "openworld", "new"],
        tag: "🌆 REALISTIC",
        url:
            "https://www.roblox.com/games/114440555601511/MOUNT-MERBABU"
    },

    {
        title: "Mount IJEN",
        placeId: 98736259765840,
        description:
            "Kawah Ijen, hutan tropis dan Blue Fire.",
        categories: ["realistic", "openworld", "new"],
        tag: "🌆 REALISTIC",
        url:
            "https://www.roblox.com/games/98736259765840/MOUNT-IJEN"
    },

    {
        title: "Saat Teduh",
        placeId: 80559954948316,
        description:
            "Hutan, laut, fishing dan suasana alam.",
        categories: ["realistic", "party", "openworld", "viral"],
        tag: "🌆 REALISTIC",
        url:
            "https://www.roblox.com/games/80559954948316/SAAT-TEDUH"
    },

    {
        title: "MOUNT SUMBING [NEW]",
        placeId: 118392527498403,
        description:
            "Tiga puncak, weather dan cinematic view.",
        categories: ["realistic", "openworld", "new"],
        tag: "🌆 REALISTIC",
        url:
            "https://www.roblox.com/games/118392527498403/Mount-Sumbing"
    },

    {
        title: "Ekspedisi Gunung Rinjani",
        placeId: 95656495100644,
        description:
            "Ekspedisi Rinjani dengan checkpoint dan kendaraan.",
        categories: ["realistic", "openworld", "new"],
        tag: "🌆 REALISTIC",
        url:
            "https://www.roblox.com/games/95656495100644/Ekspedisi-Gunung-Rinjani"
    },


    /* =====================================================
       OPEN WORLD TOP 10
       ===================================================== */

    {
        title: "Realistic Drive Simulator Indonesia",
        placeId: 10189328024,
        description:
            "Kota open-world Indonesia untuk driving dan roleplay.",
        categories: ["openworld", "realistic", "popular", "viral"],
        tag: "🌍 OPEN WORLD",
        url:
            "https://www.roblox.com/games/10189328024/Realistic-Drive-Simulator-Indonesia"
    },

    {
        title: "Brookhaven RP",
        placeId: 4924922222,
        description:
            "Dunia luas untuk roleplay dan eksplorasi sosial.",
        categories: ["openworld", "popular", "rating"],
        tag: "🌍 OPEN WORLD",
        url:
            "https://www.roblox.com/games/4924922222/Brookhaven-RP"
    },

    {
        title: "Blox Fruits",
        placeId: 2753915549,
        description:
            "Pulau-pulau luas dengan quest dan eksplorasi.",
        categories: ["openworld", "popular", "rating"],
        tag: "🌍 OPEN WORLD",
        url:
            "https://www.roblox.com/games/2753915549/Blox-Fruits"
    },

    {
        title: "Gunung Kambuno",
        placeId: 90996930447931,
        description:
            "Eksplorasi hutan, danau, air terjun dan puncak.",
        categories: ["openworld", "viral", "popular", "realistic", "rating"],
        tag: "🌍 OPEN WORLD",
        url:
            "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
    },

    {
        title: "MOUNT RINJANI",
        placeId: 138149789228609,
        description:
            "Eksplorasi jalur gunung sampai Segara Anak.",
        categories: ["openworld", "realistic", "rating"],
        tag: "🌍 OPEN WORLD",
        url:
            "https://www.roblox.com/games/138149789228609/MOUNT-RINJANI"
    },

    {
        title: "MOUNT TRANGGULASIH",
        placeId: 74052392386319,
        description:
            "Eksplorasi savannah dan jalur pegunungan.",
        categories: ["openworld", "realistic", "viral", "popular", "rating"],
        tag: "🌍 OPEN WORLD",
        url:
            "https://www.roblox.com/games/74052392386319/MOUNT-TRANGGULASIH"
    },

    {
        title: "Mount Merbabu",
        placeId: 114440555601511,
        description:
            "Eksplorasi savannah, hutan pinus dan pegunungan.",
        categories: ["openworld", "realistic", "new", "rating"],
        tag: "🌍 OPEN WORLD",
        url:
            "https://www.roblox.com/games/114440555601511/MOUNT-MERBABU"
    },

    {
        title: "Mount IJEN",
        placeId: 98736259765840,
        description:
            "Eksplorasi Kawah Ijen dan Blue Fire.",
        categories: ["openworld", "realistic", "new"],
        tag: "🌍 OPEN WORLD",
        url:
            "https://www.roblox.com/games/98736259765840/MOUNT-IJEN"
    },

    {
        title: "Saat Teduh",
        placeId: 80559954948316,
        description:
            "Hutan, laut, fishing dan hangout.",
        categories: ["openworld", "party", "realistic", "viral"],
        tag: "🌍 OPEN WORLD",
        url:
            "https://www.roblox.com/games/80559954948316/SAAT-TEDUH"
    },

    {
        title: "MOUNT SUMBING [NEW]",
        placeId: 118392527498403,
        description:
            "Eksplorasi tiga puncak dengan weather dan freecam.",
        categories: ["openworld", "realistic", "new"],
        tag: "🌍 OPEN WORLD",
        url:
            "https://www.roblox.com/games/118392527498403/Mount-Sumbing"
    },


    /* =====================================================
       HORROR TOP 10
       ===================================================== */

    {
        title: "NUNGGUAN | Broken Silence",
        placeId: 125847422162067,
        description:
            "Psychological horror story dengan mystery dan jumpscare.",
        categories: ["horror", "viral", "popular", "rating"],
        tag: "👻 HORROR #1",
        url:
            "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
    },

    {
        title: "Whispers",
        placeId: 103719485671134,
        description:
            "Horror rumah sakit terbengkalai dengan monster dan jumpscare.",
        categories: ["horror", "new", "rating"],
        tag: "👻 HORROR #2",
        url:
            "https://www.roblox.com/games/103719485671134/Whispers"
    },

    {
        title: "Quietville",
        placeId: 18118453564,
        description:
            "FPS horror dengan monster, jumpscare dan survival.",
        categories: ["horror", "rating"],
        tag: "👻 HORROR #3",
        url:
            "https://www.roblox.com/games/18118453564/Quietville"
    },

    {
        title: "Ojek Anomalies",
        placeId: 93891127569519,
        description:
            "Horror anomaly Indonesia dengan suasana jalan malam.",
        categories: ["horror", "new"],
        tag: "👻 HORROR #4",
        url:
            "https://www.roblox.com/games/93891127569519/Ojek-Anomalies"
    },

    {
        title: "Warung Indomie Anomalies",
        placeId: 113138463032537,
        description:
            "Jaga Warmindo malam hari dan cari pelanggan yang bukan manusia.",
        categories: ["horror", "new"],
        tag: "👻 HORROR #5",
        url:
            "https://www.roblox.com/games/113138463032537/Warung-Indomie-Anomalies"
    },

    {
        title: "Kereta Anomalies",
        placeId: 133293231075179,
        description:
            "Jaga stasiun kereta malam dan temukan anomali.",
        categories: ["horror", "new"],
        tag: "👻 HORROR #6",
        url:
            "https://www.roblox.com/games/133293231075179/Kereta-Anomalies"
    },

    {
        title: "Nightshift Anomalies",
        placeId: 115489561568377,
        description:
            "Bekerja shift malam dan bertahan dari encounter menakutkan.",
        categories: ["horror", "new"],
        tag: "👻 HORROR #7",
        url:
            "https://www.roblox.com/games/115489561568377/Nightshift-Anomalies"
    },

    {
        title: "Verity",
        placeId: 114786795749121,
        description:
            "Story horror dengan monster, rumah dan jumpscare.",
        categories: ["horror", "new", "rating"],
        tag: "👻 HORROR #8",
        url:
            "https://www.roblox.com/games/114786795749121/Verity"
    },

    {
        title: "Hollowborn",
        placeId: 123501688825930,
        description:
            "Survival horror dengan Wendigo di benteng dalam hutan.",
        categories: ["horror", "new"],
        tag: "👻 HORROR #9",
        url:
            "https://www.roblox.com/games/123501688825930/Hollowborn"
    },

    {
        title: "DOORS",
        placeId: 6516141723,
        description:
            "Eksplorasi hotel dengan entity, puzzle dan jumpscare.",
        categories: ["horror", "popular", "rating"],
        tag: "👻 HORROR #10",
        url:
            "https://www.roblox.com/games/6516141723/DOORS"
    },


    /* =====================================================
       PARTY TOP 10
       INI KHUSUS PARTY / MUSIC / DANCE / CLUB
       ===================================================== */

    {
        title: "MBUH PARTY",
        placeId: 105402575412558,
        description:
            "Party 24 jam dengan DJ, koplo, breakbeat dan dance.",
        categories: ["party", "viral", "new"],
        tag: "🎉 PARTY #1",
        url:
            "https://www.roblox.com/games/105402575412558/MBUH-PARTY"
    },

    {
        title: "JERUJI PARTY",
        placeId: 101245429594801,
        description:
            "Club underground dengan DJ mix, funkot, EDM dan dance.",
        categories: ["party", "viral", "new"],
        tag: "🎉 PARTY #2",
        url:
            "https://www.roblox.com/games/101245429594801/JERUJI-PARTY"
    },

    {
        title: "KOPLO NIGHT",
        placeId: 135415814001564,
        description:
            "Koplo, Jawa party dan club dengan sync dance.",
        categories: ["party", "viral", "new"],
        tag: "🎉 PARTY #3",
        url:
            "https://www.roblox.com/games/135415814001564/KOPLO-NIGHT"
    },

    {
        title: "The FIFTH",
        placeId: 105573789233426,
        description:
            "Party dan music experience dengan DJ booth dan dance floor.",
        categories: ["party", "viral", "new"],
        tag: "🎉 PARTY #4",
        url:
            "https://www.roblox.com/games/105573789233426/LA-QUINTA"
    },

    {
        title: "Sunset Club 18+",
        placeId: 88278580725723,
        description:
            "Electronic music party dengan dance dan social hangout.",
        categories: ["party", "new"],
        tag: "🎉 PARTY #5",
        url:
            "https://www.roblox.com/games/88278580725723/Sunset-Club-18"
    },

    {
        title: "NIGHTFEST PRISON",
        placeId: 74226526873605,
        description:
            "Nightclub dengan live DJ, dance floor dan nonstop music.",
        categories: ["party", "new"],
        tag: "🎉 PARTY #6",
        url:
            "https://www.roblox.com/games/74226526873605/NIGHTFEST-PRISON"
    },

    {
        title: "Paradise Hangout",
        placeId: 107637013991129,
        description:
            "Beach hangout dengan DJ area, music dan dance.",
        categories: ["party", "new"],
        tag: "🎉 PARTY #7",
        url:
            "https://www.roblox.com/games/107637013991129/Paradise-Hangout"
    },

    {
        title: "Rhythm Nights: Sound Stage",
        placeId: 3409668489,
        description:
            "Concert world dengan live performance, music dan dance.",
        categories: ["party", "new"],
        tag: "🎉 PARTY #8",
        url:
            "https://www.roblox.com/games/3409668489/Rhythm-Nights-Sound-Stage"
    },

    {
        title: "DUGEM 17+ KONSER",
        placeId: 96544656850283,
        description:
            "Virtual nightclub dengan dugem, DJ, koplo dan funkot.",
        categories: ["party", "new"],
        tag: "🎉 PARTY #9",
        url:
            "https://www.roblox.com/games/96544656850283/DUGEM-17-KONSER"
    },

    {
        title: "Insomniac World Party",
        placeId: 7665856814,
        description:
            "Festival EDM dengan panggung, music dan dance-off.",
        categories: ["party", "rating"],
        tag: "🎉 PARTY #10",
        url:
            "https://www.roblox.com/games/7665856814/Insomniac-World-Party"
    },


    /* =====================================================
       MAP BARU TOP 10
       ===================================================== */

    {
        title: "KERAMAT Dusun Pocong",
        placeId: 138879663836413,
        description:
            "Horror Indonesia bertema desa dan pemakaman.",
        categories: ["new", "horror", "viral"],
        tag: "🆕 BARU",
        url:
            "https://www.roblox.com/games/138879663836413/KERAMAT-Dusun-Pocong"
    },

    {
        title: "MOUNT SIJJIN",
        placeId: 116761724761682,
        description:
            "Pendakian horror dengan unsur mistis.",
        categories: ["new", "horror", "viral"],
        tag: "🆕 BARU",
        url:
            "https://www.roblox.com/games/116761724761682/MOUNT-SIJJIN"
    },

    {
        title: "Mount Merbabu",
        placeId: 114440555601511,
        description:
            "Savannah dan hutan pinus Gunung Merbabu.",
        categories: ["new", "realistic", "openworld"],
        tag: "🆕 BARU",
        url:
            "https://www.roblox.com/games/114440555601511/MOUNT-MERBABU"
    },

    {
        title: "MOUNT SUMBING [NEW]",
        placeId: 118392527498403,
        description:
            "Tiga puncak dengan weather dan cinematic view.",
        categories: ["new", "realistic", "openworld"],
        tag: "🆕 BARU",
        url:
            "https://www.roblox.com/games/118392527498403/Mount-Sumbing"
    },

    {
        title: "Ekspedisi Gunung Rinjani",
        placeId: 95656495100644,
        description:
            "Ekspedisi Rinjani dengan checkpoint dan kendaraan.",
        categories: ["new", "realistic", "openworld"],
        tag: "🆕 BARU",
        url:
            "https://www.roblox.com/games/95656495100644/Ekspedisi-Gunung-Rinjani"
    },

    {
        title: "Ojek Anomalies",
        placeId: 93891127569519,
        description:
            "Horror urban Indonesia bertema ojek malam.",
        categories: ["new", "horror"],
        tag: "🆕 BARU",
        url:
            "https://www.roblox.com/games/93891127569519/Ojek-Anomalies"
    },

    {
        title: "Warung Indomie Anomalies",
        placeId: 113138463032537,
        description:
            "Warmindo malam dengan pelanggan anomali.",
        categories: ["new", "horror"],
        tag: "🆕 BARU",
        url:
            "https://www.roblox.com/games/113138463032537/Warung-Indomie-Anomalies"
    },

    {
        title: "SHELL PARTY",
        placeId: 110172784379358,
        description:
            "Party map dengan musik dan dance.",
        categories: ["new", "party", "viral"],
        tag: "🆕 BARU",
        url:
            "https://www.roblox.com/games/110172784379358/SHELL-PARTY"
    },

    {
        title: "JERUJI PARTY",
        placeId: 101245429594801,
        description:
            "Club underground dengan DJ dan dance.",
        categories: ["new", "party", "viral"],
        tag: "🆕 BARU",
        url:
            "https://www.roblox.com/games/101245429594801/JERUJI-PARTY"
    },

    {
        title: "The Hunt: Roblox 20",
        placeId: 74205509034203,
        description:
            "Event resmi Roblox 20 tahun.",
        categories: ["new", "viral", "popular"],
        tag: "🆕 EVENT",
        url:
            "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20"
    }

];


/* =========================================================
   EXPERIENCE TERKINI
   ========================================================= */

const EXPERIENCES = [

    {
        title: "The Hunt: Roblox 20",
        placeId: 74205509034203,
        category: "EVENT",
        description:
            "Event resmi Roblox 20 tahun yang sedang berlangsung.",
        url:
            "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20"
    },

    {
        title: "RIVALS",
        placeId: 17625359962,
        category: "TRENDING",
        description:
            "Competitive shooter dengan pertandingan cepat.",
        url:
            "https://www.roblox.com/games/17625359962/RIVALS"
    },

    {
        title: "99 Nights in the Forest",
        placeId: 79546208627805,
        category: "SURVIVAL",
        description:
            "Survival adventure dengan ancaman di malam hari.",
        url:
            "https://www.roblox.com/games/79546208627805"
    },

    {
        title: "Brookhaven RP",
        placeId: 4924922222,
        category: "ROLEPLAY",
        description:
            "Roleplay sosial dengan dunia luas.",
        url:
            "https://www.roblox.com/games/4924922222/Brookhaven-RP"
    },

    {
        title: "Blox Fruits",
        placeId: 2753915549,
        category: "RPG",
        description:
            "Adventure RPG dengan pulau dan combat.",
        url:
            "https://www.roblox.com/games/2753915549/Blox-Fruits"
    },

    {
        title: "Murder Mystery 2",
        placeId: 142823291,
        category: "MYSTERY",
        description:
            "Social deduction multiplayer.",
        url:
            "https://www.roblox.com/games/142823291/Murder-Mystery-2"
    },

    {
        title: "Dress To Impress",
        placeId: 15101393054,
        category: "FASHION",
        description:
            "Fashion competition dengan runway.",
        url:
            "https://www.roblox.com/games/15101393054/Dress-To-Impress"
    },

    {
        title: "NUNGGUAN | Broken Silence",
        placeId: 125847422162067,
        category: "HORROR",
        description:
            "Horror story Indonesia dengan mystery.",
        url:
            "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
    }
];


/* =========================================================
   BERITA
   ========================================================= */

const NEWS = [

    {
        title:
            "The Hunt: Roblox 20 Rayakan 20 Tahun Roblox",
        description:
            "Roblox menghadirkan perjalanan melalui sejarah platform selama 20 tahun melalui berbagai quest dan hadiah virtual.",
        source:
            "Roblox Newsroom",
        date:
            "16 September 2026",
        url:
            "https://about.roblox.com/id/newsroom/2026/09/join-the-hunt-roblox-20",
        image:
            "https://corp.roblox.com/wp-content/uploads/2026/09/Roblox20_TheHunt.jpg"
    },

    {
        title:
            "Roblox Innovation Awards 2026",
        description:
            "Roblox menghadirkan penghargaan untuk creator, game dan pengalaman yang menonjol.",
        source:
            "Roblox Newsroom",
        date:
            "September 2026",
        url:
            "https://about.roblox.com/newsroom/2026/09/2026-roblox-innovation-awards",
        image:
            ""
    },

    {
        title:
            "The Hunt: Roblox 20 Sedang Berlangsung",
        description:
            "Pemain dapat mengikuti quest dan menjelajahi berbagai bagian sejarah Roblox.",
        source:
            "Roblox",
        date:
            "September 2026",
        url:
            "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20",
        image:
            ""
    },

    {
        title:
            "Roblox Trending Games",
        description:
            "Lihat pengalaman yang sedang mengalami pertumbuhan playtime paling tinggi di Roblox.",
        source:
            "Roblox Charts",
        date:
            "September 2026",
        url:
            "https://www.roblox.com/id/charts/top-trending",
        image:
            ""
    },

    {
        title:
            "NUNGGUAN: Broken Silence",
        description:
            "Horror story Roblox Indonesia dengan mystery dan chapter yang terus dikembangkan.",
        source:
            "Roblox",
        date:
            "September 2026",
        url:
            "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence",
        image:
            ""
    },

    {
        title:
            "Roblox Creator Hub",
        description:
            "Portal resmi Roblox untuk creator, Studio, development dan dokumentasi.",
        source:
            "Roblox Creator",
        date:
            "2026",
        url:
            "https://create.roblox.com/",
        image:
            ""
    }
];


/* =========================================================
   TRENDING
   ========================================================= */

const TRENDING = [

    {
        title: "RIVALS",
        placeId: 17625359962,
        tag: "#1 TRENDING",
        description:
            "Competitive shooter yang sedang ramai.",
        url:
            "https://www.roblox.com/games/17625359962/RIVALS"
    },

    {
        title: "99 Nights in the Forest",
        placeId: 79546208627805,
        tag: "#2 TRENDING",
        description:
            "Survival adventure di tengah hutan.",
        url:
            "https://www.roblox.com/games/79546208627805"
    },

    {
        title: "NUNGGUAN | Broken Silence",
        placeId: 125847422162067,
        tag: "🇮🇩 VIRAL",
        description:
            "Horror Indonesia dengan jutaan kunjungan.",
        url:
            "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
    },

    {
        title: "Gunung Kambuno",
        placeId: 90996930447931,
        tag: "🇮🇩 MAP",
        description:
            "Map gunung Indonesia dengan aktivitas tinggi.",
        url:
            "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
    },

    {
        title: "MBUH PARTY",
        placeId: 105402575412558,
        tag: "🎉 PARTY",
        description:
            "Party map Indonesia dengan DJ dan dance.",
        url:
            "https://www.roblox.com/games/105402575412558/MBUH-PARTY"
    },

    {
        title: "JERUJI PARTY",
        placeId: 101245429594801,
        tag: "🎉 PARTY",
        description:
            "Club Indonesia dengan musik dan dance.",
        url:
            "https://www.roblox.com/games/101245429594801/JERUJI-PARTY"
    },

    {
        title: "The Hunt: Roblox 20",
        placeId: 74205509034203,
        tag: "🔥 EVENT",
        description:
            "Event resmi Roblox 20 tahun.",
        url:
            "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20"
    },

    {
        title: "KOPLO NIGHT",
        placeId: 135415814001564,
        tag: "🎵 PARTY",
        description:
            "Koplo, Jawa party dan club.",
        url:
            "https://www.roblox.com/games/135415814001564/KOPLO-NIGHT"
    }
];


/* =========================================================
   MAP FILTER
   ========================================================= */

const MAP_FILTERS = [
    {
        id: "all",
        label: "SEMUA"
    },
    {
        id: "viral",
        label: "🔥 VIRAL"
    },
    {
        id: "popular",
        label: "👥 PALING RAMAI"
    },
    {
        id: "rating",
        label: "⭐ RATING BAGUS"
    },
    {
        id: "realistic",
        label: "🌆 REALISTIC"
    },
    {
        id: "openworld",
        label: "🌍 OPEN WORLD"
    },
    {
        id: "horror",
        label: "👻 HORROR"
    },
    {
        id: "party",
        label: "🎉 PARTY"
    },
    {
        id: "new",
        label: "🆕 MAP BARU"
    }
];


let currentMapFilter = "all";


/* =========================================================
   BUAT FILTER MAP OTOMATIS
   ========================================================= */

function setupMapFilterUI() {

    const mapGrid =
        document.querySelector(".map-grid");

    if (!mapGrid) {
        return;
    }

    let filter =
        document.querySelector(".map-filter");


    if (!filter) {

        filter =
            document.createElement("div");

        filter.className =
            "map-filter";

        mapGrid.parentNode.insertBefore(
            filter,
            mapGrid
        );

    }


    filter.innerHTML =
        MAP_FILTERS
            .map(item => {

                return `
                    <button
                        type="button"
                        class="map-filter-button ${
                            item.id === "all"
                                ? "active"
                                : ""
                        }"
                        data-map-filter="${item.id}"
                    >
                        ${escapeHTML(item.label)}
                    </button>
                `;

            })
            .join("");


    filter
        .querySelectorAll(
            "[data-map-filter]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                async () => {

                    filter
                        .querySelectorAll(
                            ".map-filter-button"
                        )
                        .forEach(btn => {

                            btn.classList.remove(
                                "active"
                            );

                        });


                    button.classList.add(
                        "active"
                    );


                    currentMapFilter =
                        button.dataset.mapFilter ||
                        "all";


                    await renderMaps(
                        currentMapFilter
                    );

                }
            );

        });

}


/* =========================================================
   RENDER MAP
   ========================================================= */

async function renderMaps(
    filter = "all"
) {

    const grid =
        document.querySelector(".map-grid");

    if (!grid) {
        return;
    }


    let maps;


    if (filter === "all") {

        maps = MAPS.slice(0, 10);

    } else {

        maps =
            MAPS
                .filter(map =>
                    map.categories.includes(filter)
                )
                .slice(0, 10);

    }


    if (!maps.length) {

        grid.innerHTML = `
            <div class="content-card">
                <div class="card-body">
                    <h3>
                        Belum ada map
                    </h3>
                    <p>
                        Data kategori ini sedang diperbarui.
                    </p>
                </div>
            </div>
        `;

        return;
    }


    const thumbnails =
        await getRobloxThumbnails(
            maps.map(
                map => map.placeId
            )
        );


    grid.innerHTML =
        maps
            .map((map, index) => {

                const image =
                    thumbnails[
                        String(map.placeId)
                    ] || "";


                return `
                    <article class="map-card content-card">

                        ${
                            image
                                ? `
                                    <div class="card-image">
                                        <img
                                            src="${safeURL(image)}"
                                            alt="${escapeHTML(map.title)}"
                                            loading="lazy"
                                            onerror="this.style.opacity='0'"
                                        >

                                        <span class="tag hot">
                                            ${escapeHTML(map.tag)}
                                        </span>
                                    </div>
                                `
                                : fallbackImage(
                                    map.title
                                )
                        }


                        <div class="card-body">

                            <span class="category">
                                #${index + 1}
                                &nbsp; ${escapeHTML(map.tag)}
                            </span>

                            <h3>
                                ${escapeHTML(map.title)}
                            </h3>

                            <p>
                                ${escapeHTML(
                                    map.description
                                )}
                            </p>

                            <a
                                href="${safeURL(map.url)}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="card-button"
                            >
                                MAIN DI ROBLOX →
                            </a>

                        </div>

                    </article>
                `;

            })
            .join("");

}


/* =========================================================
   RENDER EXPERIENCE
   ========================================================= */

async function renderExperiences() {

    const container =
        document.querySelector(".feature-list");

    if (!container) {
        return;
    }


    const thumbnails =
        await getRobloxThumbnails(
            EXPERIENCES.map(
                item => item.placeId
            )
        );


    /*
       Kita gunakan feature-list yang sudah
       ada di HTML supaya CSS lama tetap bekerja.
    */

    container.innerHTML =
        EXPERIENCES
            .map((item, index) => {

                const number =
                    String(index + 1)
                        .padStart(2, "0");


                return `
                    <article class="feature-card">

                        <div class="feature-number">
                            ${number}
                        </div>

                        <div>

                            <span class="category">
                                ${escapeHTML(
                                    item.category
                                )}
                            </span>

                            <h3>
                                ${escapeHTML(
                                    item.title
                                )}
                            </h3>

                            <p>
                                ${escapeHTML(
                                    item.description
                                )}
                            </p>

                            <a
                                href="${safeURL(item.url)}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Main di Roblox →
                            </a>

                        </div>

                    </article>
                `;

            })
            .join("");

}


/* =========================================================
   RENDER NEWS
   ========================================================= */

function renderNews() {

    const grid =
        document.querySelector(".news-grid");

    if (!grid) {
        return;
    }


    grid.innerHTML =
        NEWS
            .map(item => {

                return `
                    <article class="news-card">

                        ${
                            item.image
                                ? `
                                    <div class="card-image">
                                        <img
                                            src="${safeURL(item.image)}"
                                            alt="${escapeHTML(item.title)}"
                                            loading="lazy"
                                            onerror="this.parentElement.style.display='none'"
                                        >
                                    </div>
                                `
                                : `
                                    <div
                                        class="card-image"
                                        style="
                                            display:flex;
                                            align-items:center;
                                            justify-content:center;
                                            background:
                                            radial-gradient(
                                                circle at 20% 20%,
                                                rgba(53,217,255,.20),
                                                transparent 40%
                                            ),
                                            radial-gradient(
                                                circle at 80% 80%,
                                                rgba(155,92,255,.20),
                                                transparent 40%
                                            ),
                                            #10152a;
                                        "
                                    >
                                        <strong
                                            style="
                                                padding:20px;
                                                text-align:center;
                                            "
                                        >
                                            ROBLOX NEWS
                                        </strong>
                                    </div>
                                `
                        }


                        <div class="card-body">

                            <span class="category">
                                ${escapeHTML(
                                    item.source
                                )}
                            </span>

                            <h3>
                                ${escapeHTML(
                                    item.title
                                )}
                            </h3>

                            <p>
                                ${escapeHTML(
                                    item.description
                                )}
                            </p>

                            <div class="news-meta">
                                ${escapeHTML(
                                    item.date
                                )}
                            </div>

                            <a
                                href="${safeURL(item.url)}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="card-button"
                            >
                                BACA / LIHAT →
                            </a>

                        </div>

                    </article>
                `;

            })
            .join("");

}


/* =========================================================
   TRENDING SECTION
   DIBUAT LEWAT JAVASCRIPT
   JADI HTML TIDAK PERLU DIUBAH
   ========================================================= */

async function renderTrending() {

    if (
        document.querySelector(
            "#fandira-trending"
        )
    ) {
        return;
    }


    const newsSection =
        document.querySelector(
            "#news"
        );

    if (!newsSection) {
        return;
    }


    const section =
        document.createElement(
            "section"
        );

    section.id =
        "fandira-trending";

    section.className =
        "section";


    section.innerHTML = `
        <div class="container">

            <div class="section-heading">

                <div>

                    <span class="section-label">
                        ROBLOX
                    </span>

                    <h2>
                        TRENDING ROBLOX
                    </h2>

                    <p>
                        Experience dan map yang sedang ramai
                        dibicarakan komunitas.
                    </p>

                </div>

            </div>

            <div class="trending-grid"></div>

        </div>
    `;


    newsSection.parentNode.insertBefore(
        section,
        newsSection
    );


    const grid =
        section.querySelector(
            ".trending-grid"
        );


    const thumbnails =
        await getRobloxThumbnails(
            TRENDING.map(
                item => item.placeId
            )
        );


    grid.innerHTML =
        TRENDING
            .map(item => {

                const image =
                    thumbnails[
                        String(item.placeId)
                    ] || "";


                return `
                    <article class="trending-card">

                        ${
                            image
                                ? `
                                    <div class="card-image">
                                        <img
                                            src="${safeURL(image)}"
                                            alt="${escapeHTML(item.title)}"
                                            loading="lazy"
                                        >
                                    </div>
                                `
                                : fallbackImage(
                                    item.title
                                )
                        }


                        <div class="card-content">

                            <span class="card-tag">
                                ${escapeHTML(
                                    item.tag
                                )}
                            </span>

                            <h3>
                                ${escapeHTML(
                                    item.title
                                )}
                            </h3>

                            <p>
                                ${escapeHTML(
                                    item.description
                                )}
                            </p>

                            <div class="card-meta">

                                <a
                                    href="${safeURL(item.url)}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="card-button"
                                >
                                    MAIN →
                                </a>

                            </div>

                        </div>

                    </article>
                `;

            })
            .join("");

}


/* =========================================================
   CREATOR
   ========================================================= */

function setupCreator() {

    const panel =
        document.querySelector(
            ".creator-panel"
        );

    if (!panel) {
        return;
    }


    /*
       Creator panel lama tetap dipertahankan.
       Tidak dihapus / tidak diganti.
    */

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetID =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetID ||
                        targetID === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetID
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });

}


/* =========================================================
   UGC
   =========================================================

   SENGAJA TIDAK ADA RENDER UGC.

   UGC YANG SUDAH ADA DI HTML DIBIARKAN UTUH.
   ========================================================= */


/* =========================================================
   INIT
   ========================================================= */

async function initFandira() {

    console.log(
        "%cFANDIRA",
        "font-size:24px;font-weight:900;color:#35d9ff;"
    );

    console.log(
        "Fandira script berhasil dimulai."
    );


    /*
       UGC TIDAK DISENTUH
    */


    setupMapFilterUI();


    await renderMaps(
        "all"
    );


    await renderExperiences();


    renderNews();


    await renderTrending();


    setupCreator();


    setupNavigation();


    console.log(
        "%cFANDIRA READY",
        "font-size:16px;font-weight:900;color:#9b5cff;"
    );

}


/* =========================================================
   START
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        () => {

            initFandira()
                .catch(error => {

                    console.error(
                        "FANDIRA ERROR:",
                        error
                    );

                });

        }
    );

} else {

    initFandira()
        .catch(error => {

            console.error(
                "FANDIRA ERROR:",
                error
            );

        });

}
