"use strict";

/* =========================================================
   FANDIRA
   SCRIPT UTAMA
   ========================================================= */

const FANDIRA = {

    /* =====================================================
       MAP ROBLOX
       ===================================================== */

    maps: [

        /* ================= VIRAL ================= */

        {
            title: "Gunung Kambuno",
            placeId: 90996930447931,
            categories: ["viral", "popular", "rating", "realistic", "openworld"],
            description: "Map pendakian Indonesia dengan hutan, danau, air terjun dan jalur eksplorasi.",
            url: "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
        },

        {
            title: "NUNGGUAN | Broken Silence",
            placeId: 125847422162067,
            categories: ["viral", "popular", "rating", "horror"],
            description: "Horror story dengan suasana gelap, mystery dan kejutan.",
            url: "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
        },

        {
            title: "MOUNT TRANGGULASIH",
            placeId: 74052392386319,
            categories: ["viral", "popular", "rating", "realistic", "openworld"],
            description: "Map gunung dengan savannah, cinematic mode dan eksplorasi alam.",
            url: "https://www.roblox.com/games/74052392386319/MOUNT-TRANGGULASIH"
        },

        {
            title: "MOUNT SIJJIN",
            placeId: 116761724761682,
            categories: ["viral", "horror", "new"],
            description: "Pendakian bernuansa mistis dengan kejadian supernatural.",
            url: "https://www.roblox.com/games/116761724761682/MOUNT-SIJJIN"
        },

        {
            title: "KERAMAT Dusun Pocong",
            placeId: 138879663836413,
            categories: ["viral", "horror", "new"],
            description: "Horror Indonesia bertema desa, makam dan kejadian mistis.",
            url: "https://www.roblox.com/games/138879663836413/KERAMAT-Dusun-Pocong"
        },

        {
            title: "SHELL PARTY",
            placeId: 110172784379358,
            categories: ["viral", "party", "new"],
            description: "Party map dengan live music, dance dan hangout.",
            url: "https://www.roblox.com/games/110172784379358/SHELL-PARTY"
        },

        {
            title: "MBUH PARTY",
            placeId: 105402575412558,
            categories: ["viral", "party", "new"],
            description: "Party 24 jam dengan DJ, koplo, breakbeat dan dance.",
            url: "https://www.roblox.com/games/105402575412558/MBUH-PARTY"
        },

        {
            title: "JERUJI PARTY",
            placeId: 101245429594801,
            categories: ["viral", "party", "new"],
            description: "Club dengan DJ, musik dan berbagai dance.",
            url: "https://www.roblox.com/games/101245429594801/JERUJI-PARTY"
        },

        {
            title: "KOPLO NIGHT",
            placeId: 135415814001564,
            categories: ["viral", "party", "new"],
            description: "Koplo, Jawa party, club dan sync dance.",
            url: "https://www.roblox.com/games/135415814001564/KOPLO-NIGHT"
        },

        {
            title: "The FIFTH",
            placeId: 105573789233426,
            categories: ["viral", "party", "new"],
            description: "Music experience dengan DJ, club dan dance floor.",
            url: "https://www.roblox.com/games/105573789233426/LA-QUINTA"
        },


        /* ================= POPULAR ================= */

        {
            title: "Brookhaven RP",
            placeId: 4924922222,
            categories: ["popular", "rating", "openworld"],
            description: "Roleplay sosial dengan dunia yang luas.",
            url: "https://www.roblox.com/games/4924922222/Brookhaven-RP"
        },

        {
            title: "Blox Fruits",
            placeId: 2753915549,
            categories: ["popular", "rating", "openworld"],
            description: "Adventure RPG dengan pulau, quest dan combat.",
            url: "https://www.roblox.com/games/2753915549/Blox-Fruits"
        },

        {
            title: "RIVALS",
            placeId: 17625359962,
            categories: ["popular", "rating", "new"],
            description: "Competitive shooter dengan pertandingan cepat.",
            url: "https://www.roblox.com/games/17625359962/RIVALS"
        },

        {
            title: "99 Nights in the Forest",
            placeId: 79546208627805,
            categories: ["popular", "horror", "openworld"],
            description: "Survival adventure dengan ancaman di tengah hutan.",
            url: "https://www.roblox.com/games/79546208627805"
        },

        {
            title: "Murder Mystery 2",
            placeId: 142823291,
            categories: ["popular", "rating"],
            description: "Multiplayer mystery dengan Murderer, Sheriff dan Innocent.",
            url: "https://www.roblox.com/games/142823291/Murder-Mystery-2"
        },

        {
            title: "Adopt Me!",
            placeId: 920587237,
            categories: ["popular", "rating"],
            description: "Pet collection dan social roleplay.",
            url: "https://www.roblox.com/games/920587237/Adopt-Me"
        },

        {
            title: "Dress To Impress",
            placeId: 15101393054,
            categories: ["popular", "rating"],
            description: "Fashion competition dengan runway dan voting.",
            url: "https://www.roblox.com/games/15101393054/Dress-To-Impress"
        },

        {
            title: "Jujutsu Shenanigans",
            placeId: 9391468976,
            categories: ["popular", "rating"],
            description: "Combat arena bergaya anime.",
            url: "https://www.roblox.com/games/9391468976/Jujutsu-Shenanigans"
        },

        {
            title: "Pet Simulator 99",
            placeId: 8737899170,
            categories: ["popular", "rating"],
            description: "Pet collection, progression dan trading.",
            url: "https://www.roblox.com/games/8737899170/Pet-Simulator-99"
        },

        {
            title: "The Hunt: Roblox 20",
            placeId: 74205509034203,
            categories: ["popular", "viral", "new"],
            description: "Event resmi Roblox 20 tahun.",
            url: "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20"
        },


        /* ================= REALISTIC ================= */

        {
            title: "Gunung Kambuno",
            placeId: 90996930447931,
            categories: ["realistic", "viral", "popular", "rating", "openworld"],
            description: "Gunung, hutan, danau dan air terjun.",
            url: "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
        },

        {
            title: "MOUNT TRANGGULASIH",
            placeId: 74052392386319,
            categories: ["realistic", "viral", "popular", "rating", "openworld"],
            description: "Savannah dan jalur pendakian.",
            url: "https://www.roblox.com/games/74052392386319/MOUNT-TRANGGULASIH"
        },

        {
            title: "MOUNT RINJANI",
            placeId: 138149789228609,
            categories: ["realistic", "rating", "openworld"],
            description: "Rekreasi Gunung Rinjani dengan medan dan pemandangan alam.",
            url: "https://www.roblox.com/games/138149789228609/MOUNT-RINJANI"
        },

        {
            title: "Mount Sumbing",
            placeId: 14963184269,
            categories: ["realistic", "rating", "openworld"],
            description: "Mountain climbing dengan cuaca, suhu dan campfire.",
            url: "https://www.roblox.com/games/14963184269/Mount-Sumbing"
        },

        {
            title: "Mount Merbabu",
            placeId: 114440555601511,
            categories: ["realistic", "rating", "openworld", "new"],
            description: "Savannah, hutan pinus dan panorama pegunungan.",
            url: "https://www.roblox.com/games/114440555601511/MOUNT-MERBABU"
        },

        {
            title: "Mount IJEN",
            placeId: 98736259765840,
            categories: ["realistic", "openworld", "new"],
            description: "Kawah Ijen, hutan tropis dan Blue Fire.",
            url: "https://www.roblox.com/games/98736259765840/MOUNT-IJEN"
        },

        {
            title: "Saat Teduh",
            placeId: 80559954948316,
            categories: ["realistic", "openworld", "party"],
            description: "Hutan, laut, fishing, music dan hangout.",
            url: "https://www.roblox.com/games/80559954948316/SAAT-TEDUH"
        },

        {
            title: "MOUNT SUMBING [NEW]",
            placeId: 118392527498403,
            categories: ["realistic", "openworld", "new"],
            description: "Tiga puncak dengan weather dan cinematic view.",
            url: "https://www.roblox.com/games/118392527498403/Mount-Sumbing"
        },

        {
            title: "Ekspedisi Gunung Rinjani",
            placeId: 95656495100644,
            categories: ["realistic", "openworld", "new"],
            description: "Ekspedisi Rinjani dengan checkpoint.",
            url: "https://www.roblox.com/games/95656495100644/Ekspedisi-Gunung-Rinjani"
        },

        {
            title: "Realistic Drive Simulator Indonesia",
            placeId: 10189328024,
            categories: ["realistic", "openworld", "popular"],
            description: "Driving dan roleplay dengan suasana Indonesia.",
            url: "https://www.roblox.com/games/10189328024/Realistic-Drive-Simulator-Indonesia"
        },


        /* ================= HORROR ================= */

        {
            title: "NUNGGUAN | Broken Silence",
            placeId: 125847422162067,
            categories: ["horror", "viral", "popular", "rating"],
            description: "Horror story dengan mystery dan jumpscare.",
            url: "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
        },

        {
            title: "Whispers",
            placeId: 103719485671134,
            categories: ["horror", "rating", "new"],
            description: "Horror rumah sakit terbengkalai dengan monster.",
            url: "https://www.roblox.com/games/103719485671134/Whispers"
        },

        {
            title: "Quietville",
            placeId: 18118453564,
            categories: ["horror", "rating"],
            description: "FPS horror dengan jumpscare dan survival.",
            url: "https://www.roblox.com/games/18118453564/Quietville-HORROR"
        },

        {
            title: "Ojek Anomalies",
            placeId: 93891127569519,
            categories: ["horror", "new"],
            description: "Analog horror Indonesia dengan penumpang anomali.",
            url: "https://www.roblox.com/games/93891127569519/Ojek-Anomalies"
        },

        {
            title: "Warung Indomie Anomalies",
            placeId: 113138463032537,
            categories: ["horror", "new"],
            description: "Jaga Warmindo malam dan hadapi anomali.",
            url: "https://www.roblox.com/games/113138463032537/Warung-Indomie-Anomalies"
        },

        {
            title: "Kereta Anomalies",
            placeId: 133293231075179,
            categories: ["horror", "new"],
            description: "Stasiun kereta malam dengan kejadian anomali.",
            url: "https://www.roblox.com/games/133293231075179/Kereta-Anomalies"
        },

        {
            title: "Nightshift Anomalies",
            placeId: 115489561568377,
            categories: ["horror", "new"],
            description: "Shift malam dengan encounter menakutkan.",
            url: "https://www.roblox.com/games/115489561568377/Nightshift-Anomalies"
        },

        {
            title: "Verity",
            placeId: 114786795749121,
            categories: ["horror", "new", "rating"],
            description: "Story horror dengan jumpscare.",
            url: "https://www.roblox.com/games/114786795749121/Verity"
        },

        {
            title: "FNaF: Freddy's Unlocked",
            placeId: 14795008081,
            categories: ["horror", "popular", "rating"],
            description: "FNaF-inspired horror dengan night shift.",
            url: "https://www.roblox.com/games/14795008081/FNaF-Freddys-Unlocked"
        },

        {
            title: "DOORS",
            placeId: 6516141723,
            categories: ["horror", "popular", "rating"],
            description: "Hotel penuh entity, puzzle dan jumpscare.",
            url: "https://www.roblox.com/games/6516141723/DOORS"
        },


        /* ================= PARTY ================= */

        {
            title: "MBUH PARTY",
            placeId: 105402575412558,
            categories: ["party", "viral", "new"],
            description: "Party 24 jam dengan DJ, koplo, breakbeat dan dance.",
            url: "https://www.roblox.com/games/105402575412558/MBUH-PARTY"
        },

        {
            title: "JERUJI PARTY",
            placeId: 101245429594801,
            categories: ["party", "viral", "new"],
            description: "Club dengan DJ mix, EDM dan dance.",
            url: "https://www.roblox.com/games/101245429594801/JERUJI-PARTY"
        },

        {
            title: "KOPLO NIGHT",
            placeId: 135415814001564,
            categories: ["party", "viral", "new"],
            description: "Koplo, Jawa party, club dan sync dance.",
            url: "https://www.roblox.com/games/135415814001564/KOPLO-NIGHT"
        },

        {
            title: "SHELL PARTY",
            placeId: 110172784379358,
            categories: ["party", "viral", "new"],
            description: "Gas station party dengan live music dan dance.",
            url: "https://www.roblox.com/games/110172784379358/SHELL-PARTY"
        },

        {
            title: "The FIFTH",
            placeId: 105573789233426,
            categories: ["party", "viral", "new"],
            description: "Party, DJ, club dan dance floor.",
            url: "https://www.roblox.com/games/105573789233426/LA-QUINTA"
        },

        {
            title: "Hardtekk-Bunker",
            placeId: 127632055134656,
            categories: ["party", "new"],
            description: "Underground club dengan DJ, hardtekk dan dance.",
            url: "https://www.roblox.com/games/127632055134656/Hardtekk-Bunker-Du-bist-der-DJ"
        },

        {
            title: "DANCE AND MAKE NEW FRIENDS",
            placeId: 112082755539965,
            categories: ["party", "new"],
            description: "Electronic music party dengan dance dan club vibes.",
            url: "https://www.roblox.com/games/112082755539965/DANCE-AND-MAKE-NEW-FRIENDS"
        },

        {
            title: "Hell's Void",
            placeId: 97433784347344,
            categories: ["party", "new"],
            description: "Social club dengan music dan dance vibes.",
            url: "https://www.roblox.com/games/97433784347344/Hells-Void"
        },

        {
            title: "Saat Teduh",
            placeId: 80559954948316,
            categories: ["party", "realistic", "openworld"],
            description: "Hangout alam dengan music, dance dan social.",
            url: "https://www.roblox.com/games/80559954948316/SAAT-TEDUH"
        },

        {
            title: "Insomniac World Party",
            placeId: 7665856814,
            categories: ["party", "rating"],
            description: "Festival EDM dengan music dan dance.",
            url: "https://www.roblox.com/games/7665856814/Insomniac-World-Party"
        },


        /* ================= NEW ================= */

        {
            title: "The Hunt: Roblox 20",
            placeId: 74205509034203,
            categories: ["new", "viral", "popular"],
            description: "Event resmi Roblox 20 tahun.",
            url: "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20"
        },

        {
            title: "KERAMAT Dusun Pocong",
            placeId: 138879663836413,
            categories: ["new", "horror", "viral"],
            description: "Horror Indonesia.",
            url: "https://www.roblox.com/games/138879663836413/KERAMAT-Dusun-Pocong"
        },

        {
            title: "Ojek Anomalies",
            placeId: 93891127569519,
            categories: ["new", "horror"],
            description: "Horror anomaly Indonesia.",
            url: "https://www.roblox.com/games/93891127569519/Ojek-Anomalies"
        },

        {
            title: "Kereta Anomalies",
            placeId: 133293231075179,
            categories: ["new", "horror"],
            description: "Anomaly horror di stasiun kereta.",
            url: "https://www.roblox.com/games/133293231075179/Kereta-Anomalies"
        },

        {
            title: "MOUNT SUMBING [NEW]",
            placeId: 118392527498403,
            categories: ["new", "realistic", "openworld"],
            description: "Map gunung dengan cinematic view.",
            url: "https://www.roblox.com/games/118392527498403/Mount-Sumbing"
        },

        {
            title: "Mount Merbabu",
            placeId: 114440555601511,
            categories: ["new", "realistic", "openworld"],
            description: "Gunung Merbabu dengan savannah.",
            url: "https://www.roblox.com/games/114440555601511/MOUNT-MERBABU"
        },

        {
            title: "SHELL PARTY",
            placeId: 110172784379358,
            categories: ["new", "party"],
            description: "Party dengan live music dan dance.",
            url: "https://www.roblox.com/games/110172784379358/SHELL-PARTY"
        },

        {
            title: "MBUH PARTY",
            placeId: 105402575412558,
            categories: ["new", "party"],
            description: "Party DJ dan dance.",
            url: "https://www.roblox.com/games/105402575412558/MBUH-PARTY"
        },

        {
            title: "JERUJI PARTY",
            placeId: 101245429594801,
            categories: ["new", "party"],
            description: "Club dan dance.",
            url: "https://www.roblox.com/games/101245429594801/JERUJI-PARTY"
        },

        {
            title: "KOPLO NIGHT",
            placeId: 135415814001564,
            categories: ["new", "party"],
            description: "Koplo party dan club.",
            url: "https://www.roblox.com/games/135415814001564/KOPLO-NIGHT"
        }

    ],


    /* =====================================================
       EXPERIENCE
       ===================================================== */

    experiences: [

        {
            title: "The Hunt: Roblox 20",
            placeId: 74205509034203,
            category: "EVENT",
            description: "Event resmi Roblox 20 tahun.",
            url: "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20"
        },

        {
            title: "RIVALS",
            placeId: 17625359962,
            category: "TRENDING",
            description: "Competitive shooter dengan pertandingan cepat.",
            url: "https://www.roblox.com/games/17625359962/RIVALS"
        },

        {
            title: "99 Nights in the Forest",
            placeId: 79546208627805,
            category: "SURVIVAL",
            description: "Survival adventure di tengah hutan.",
            url: "https://www.roblox.com/games/79546208627805"
        },

        {
            title: "Brookhaven RP",
            placeId: 4924922222,
            category: "ROLEPLAY",
            description: "Roleplay sosial dengan dunia luas.",
            url: "https://www.roblox.com/games/4924922222/Brookhaven-RP"
        },

        {
            title: "Blox Fruits",
            placeId: 2753915549,
            category: "RPG",
            description: "Adventure RPG dengan banyak pulau.",
            url: "https://www.roblox.com/games/2753915549/Blox-Fruits"
        },

        {
            title: "Murder Mystery 2",
            placeId: 142823291,
            category: "MYSTERY",
            description: "Social deduction multiplayer.",
            url: "https://www.roblox.com/games/142823291/Murder-Mystery-2"
        },

        {
            title: "Dress To Impress",
            placeId: 15101393054,
            category: "FASHION",
            description: "Fashion competition.",
            url: "https://www.roblox.com/games/15101393054/Dress-To-Impress"
        },

        {
            title: "NUNGGUAN | Broken Silence",
            placeId: 125847422162067,
            category: "HORROR",
            description: "Horror story Indonesia.",
            url: "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
        }

    ],


    /* =====================================================
       CREATOR
       ===================================================== */

    creator: [

        {
            title: "Roblox Creator Hub",
            description: "Dokumentasi resmi untuk membuat experience dan sistem Roblox.",
            url: "https://create.roblox.com/"
        },

        {
            title: "Roblox Studio",
            description: "Platform resmi untuk membuat dan mengembangkan experience Roblox.",
            url: "https://create.roblox.com/docs/studio"
        },

        {
            title: "Creator Store",
            description: "Cari model, plugin, audio dan asset untuk development.",
            url: "https://create.roblox.com/store/"
        },

        {
            title: "Roblox Marketplace",
            description: "Marketplace resmi untuk avatar item dan UGC.",
            url: "https://www.roblox.com/catalog"
        },

        {
            title: "Roblox Creator Documentation",
            description: "Dokumentasi scripting, UI, physics dan development.",
            url: "https://create.roblox.com/docs/"
        },

        {
            title: "Roblox DevForum",
            description: "Komunitas developer Roblox untuk diskusi dan bantuan.",
            url: "https://devforum.roblox.com/"
        }

    ],


    /* =====================================================
       TRENDING
       ===================================================== */

    trending: [

        {
            title: "RIVALS",
            placeId: 17625359962,
            tag: "#1 TRENDING",
            description: "Competitive shooter.",
            url: "https://www.roblox.com/games/17625359962/RIVALS"
        },

        {
            title: "99 Nights in the Forest",
            placeId: 79546208627805,
            tag: "#2 TRENDING",
            description: "Survival adventure.",
            url: "https://www.roblox.com/games/79546208627805"
        },

        {
            title: "NUNGGUAN | Broken Silence",
            placeId: 125847422162067,
            tag: "🇮🇩 VIRAL",
            description: "Horror Indonesia.",
            url: "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
        },

        {
            title: "Gunung Kambuno",
            placeId: 90996930447931,
            tag: "🇮🇩 MAP",
            description: "Map gunung Indonesia.",
            url: "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
        },

        {
            title: "MBUH PARTY",
            placeId: 105402575412558,
            tag: "🎉 PARTY",
            description: "Party Indonesia.",
            url: "https://www.roblox.com/games/105402575412558/MBUH-PARTY"
        },

        {
            title: "JERUJI PARTY",
            placeId: 101245429594801,
            tag: "🎉 PARTY",
            description: "Club dan dance.",
            url: "https://www.roblox.com/games/101245429594801/JERUJI-PARTY"
        },

        {
            title: "KOPLO NIGHT",
            placeId: 135415814001564,
            tag: "🎵 PARTY",
            description: "Koplo dan club.",
            url: "https://www.roblox.com/games/135415814001564/KOPLO-NIGHT"
        },

        {
            title: "The Hunt: Roblox 20",
            placeId: 74205509034203,
            tag: "🔥 EVENT",
            description: "Event Roblox 20 tahun.",
            url: "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20"
        }

    ]

};


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

    try {

        const parsed = new URL(
            url,
            window.location.href
        );

        if (
            parsed.protocol === "http:" ||
            parsed.protocol === "https:"
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
                min-height:180px;
                display:flex;
                align-items:center;
                justify-content:center;
                text-align:center;
                padding:20px;
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
            <strong>
                ${escapeHTML(title)}
            </strong>
        </div>
    `;

}


/* =========================================================
   ROBLOX THUMBNAILS
   ========================================================= */

async function getPlaceThumbnails(placeIds) {

    const result = {};

    const ids = [
        ...new Set(
            placeIds
                .map(Number)
                .filter(Number.isFinite)
        )
    ];

    if (!ids.length) {
        return result;
    }

    try {

        const response = await fetch(
            "https://thumbnails.roblox.com/v1/places/gameicons" +
            "?placeIds=" +
            encodeURIComponent(ids.join(",")) +
            "&size=768x432" +
            "&format=Png" +
            "&isCircular=false"
        );

        if (!response.ok) {
            throw new Error(
                "Thumbnail HTTP " +
                response.status
            );
        }

        const data =
            await response.json();

        if (
            data &&
            Array.isArray(data.data)
        ) {

            data.data.forEach(item => {

                if (
                    item.targetId &&
                    item.imageUrl
                ) {

                    result[
                        String(item.targetId)
                    ] = item.imageUrl;

                }

            });

        }

    } catch (error) {

        console.warn(
            "Thumbnail Roblox gagal:",
            error
        );

    }

    return result;

}


/* =========================================================
   UGC DINAMIS
   ========================================================= */

async function loadUGC() {

    const grid =
        document.getElementById(
            "ugcGrid"
        );

    if (!grid) {
        return;
    }


    grid.innerHTML = `
        <div class="loading-card">
            Memuat UGC Roblox terbaru...
        </div>
    `;


    try {

        const url =
            "https://catalog.roblox.com/v1/search/items/details" +
            "?Category=11" +
            "&Subcategory=19" +
            "&SortType=3" +
            "&SortAggregation=3" +
            "&Limit=10";


        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                "UGC API HTTP " +
                response.status
            );

        }


        const json =
            await response.json();


        const items =
            Array.isArray(json.data)
                ? json.data
                : [];


        if (!items.length) {

            throw new Error(
                "Tidak ada UGC"
            );

        }


        const assetIds =
            items
                .map(item => item.id)
                .filter(Boolean);


        let thumbnails = {};


        try {

            const thumbResponse =
                await fetch(
                    "https://thumbnails.roblox.com/v1/assets" +
                    "?assetIds=" +
                    encodeURIComponent(
                        assetIds.join(",")
                    ) +
                    "&size=420x420" +
                    "&format=Png" +
                    "&isCircular=false"
                );


            if (thumbResponse.ok) {

                const thumbJSON =
                    await thumbResponse.json();


                if (
                    Array.isArray(
                        thumbJSON.data
                    )
                ) {

                    thumbJSON.data.forEach(
                        item => {

                            if (
                                item.targetId &&
                                item.imageUrl
                            ) {

                                thumbnails[
                                    String(
                                        item.targetId
                                    )
                                ] =
                                    item.imageUrl;

                            }

                        }
                    );

                }

            }

        } catch (thumbError) {

            console.warn(
                "Thumbnail UGC gagal:",
                thumbError
            );

        }


        grid.innerHTML =
            items
                .map(item => {

                    const id =
                        item.id;

                    const title =
                        item.name ||
                        "Roblox UGC";


                    const creator =
                        item.creatorName ||
                        "Roblox Creator";


                    const price =
                        item.price != null
                            ? `${item.price} R$`
                            : "Lihat Roblox";


                    const image =
                        thumbnails[
                            String(id)
                        ];


                    const link =
                        `https://www.roblox.com/catalog/${id}`;


                    return `
                        <article
                            class="ugc-card content-card"
                        >

                            ${
                                image
                                    ? `
                                        <div class="card-image">
                                            <img
                                                src="${safeURL(image)}"
                                                alt="${escapeHTML(title)}"
                                                loading="lazy"
                                            >
                                        </div>
                                    `
                                    : fallbackImage(
                                        title
                                    )
                            }


                            <div class="card-body">

                                <span class="category">
                                    UGC TERKINI
                                </span>

                                <h3>
                                    ${escapeHTML(title)}
                                </h3>

                                <p>
                                    Creator:
                                    ${escapeHTML(creator)}
                                </p>

                                <strong>
                                    ${escapeHTML(price)}
                                </strong>

                                <br><br>

                                <a
                                    href="${safeURL(link)}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="card-button"
                                >
                                    LIHAT DI ROBLOX →
                                </a>

                            </div>

                        </article>
                    `;

                })
                .join("");


    } catch (error) {

        console.error(
            "UGC gagal dimuat:",
            error
        );


        grid.innerHTML = `
            <div class="content-card">
                <div class="card-body">

                    <h3>
                        UGC sedang tidak tersedia
                    </h3>

                    <p>
                        Roblox Marketplace sedang
                        tidak memberikan data.
                    </p>

                    <a
                        href="https://www.roblox.com/catalog"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="card-button"
                    >
                        BUKA MARKETPLACE ROBLOX →
                    </a>

                </div>
            </div>
        `;

    }

}


/* =========================================================
   MAP
   ========================================================= */

let currentMapFilter = "all";


async function renderMaps(
    filter = "all"
) {

    const grid =
        document.getElementById(
            "mapsGrid"
        );

    if (!grid) {
        return;
    }


    currentMapFilter =
        filter;


    let maps;


    if (filter === "all") {

        maps =
            FANDIRA.maps
                .filter(
                    (map, index, self) =>
                        index ===
                        self.findIndex(
                            item =>
                                item.placeId ===
                                map.placeId
                        )
                )
                .slice(0, 10);

    } else {

        maps =
            FANDIRA.maps
                .filter(
                    map =>
                        Array.isArray(
                            map.categories
                        ) &&
                        map.categories.includes(
                            filter
                        )
                )
                .filter(
                    (map, index, self) =>
                        index ===
                        self.findIndex(
                            item =>
                                item.placeId ===
                                map.placeId
                        )
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
                        Data kategori sedang diperbarui.
                    </p>
                </div>
            </div>
        `;

        return;
    }


    const thumbnails =
        await getPlaceThumbnails(
            maps.map(
                map =>
                    map.placeId
            )
        );


    grid.innerHTML =
        maps
            .map(
                (map, index) => {

                    const image =
                        thumbnails[
                            String(
                                map.placeId
                            )
                        ];


                    return `
                        <article
                            class="map-card content-card"
                        >

                            ${
                                image
                                    ? `
                                        <div class="card-image">

                                            <img
                                                src="${safeURL(image)}"
                                                alt="${escapeHTML(map.title)}"
                                                loading="lazy"
                                            >

                                        </div>
                                    `
                                    : fallbackImage(
                                        map.title
                                    )
                            }


                            <div class="card-body">

                                <span class="category">
                                    #${index + 1}
                                    ${
                                        filter !== "all"
                                            ? " • " +
                                              escapeHTML(
                                                  filter
                                              )
                                            : ""
                                    }
                                </span>

                                <h3>
                                    ${escapeHTML(
                                        map.title
                                    )}
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

                }
            )
            .join("");

}


/* =========================================================
   MAP FILTER
   ========================================================= */

function setupMapFilters() {

    const buttons =
        document.querySelectorAll(
            "[data-map-filter]"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            async () => {

                buttons.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );


                button.classList.add(
                    "active"
                );


                const filter =
                    button.dataset.mapFilter ||
                    "all";


                await renderMaps(
                    filter
                );

            }
        );

    });

}


/* =========================================================
   EXPERIENCE
   ========================================================= */

async function renderExperiences() {

    const grid =
        document.getElementById(
            "gamesGrid"
        );

    if (!grid) {
        return;
    }


    const thumbnails =
        await getPlaceThumbnails(
            FANDIRA.experiences.map(
                item =>
                    item.placeId
            )
        );


    grid.innerHTML =
        FANDIRA.experiences
            .map(
                (item, index) => {

                    const image =
                        thumbnails[
                            String(
                                item.placeId
                            )
                        ];


                    return `
                        <article
                            class="game-card content-card"
                        >

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


                            <div class="card-body">

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
                                    class="card-button"
                                >
                                    MAIN DI ROBLOX →
                                </a>

                            </div>

                        </article>
                    `;

                }
            )
            .join("");

}


/* =========================================================
   NEWS
   ========================================================= */

const NEWS = [

    {
        title: "The Hunt: Roblox 20",
        description:
            "Roblox menghadirkan event perayaan 20 tahun dengan quest dan reward.",
        source: "Roblox Newsroom",
        date: "16 September 2026",
        url: "https://about.roblox.com/id/newsroom/2026/09/join-the-hunt-roblox-20"
    },

    {
        title: "The Hunt: Roblox 20",
        description:
            "Ikuti event resmi Roblox 20 tahun melalui experience The Hunt.",
        source: "Roblox",
        date: "September 2026",
        url: "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20"
    },

    {
        title: "Roblox Trending Games",
        description:
            "Lihat experience yang sedang mengalami peningkatan playtime.",
        source: "Roblox Charts",
        date: "September 2026",
        url: "https://www.roblox.com/id/charts/top-trending"
    },

    {
        title: "Roblox Creator Hub",
        description:
            "Portal resmi creator untuk Roblox Studio, scripting dan development.",
        source: "Roblox Creator",
        date: "2026",
        url: "https://create.roblox.com/"
    },

    {
        title: "NUNGGUAN | Broken Silence",
        description:
            "Horror experience Indonesia dengan mystery dan jumpscare.",
        source: "Roblox",
        date: "September 2026",
        url: "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
    },

    {
        title: "Gunung Kambuno",
        description:
            "Map pendakian Indonesia dengan alam dan jalur eksplorasi.",
        source: "Roblox",
        date: "September 2026",
        url: "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
    }

];


function renderNews() {

    const grid =
        document.getElementById(
            "newsGrid"
        );

    if (!grid) {
        return;
    }


    grid.innerHTML =
        NEWS
            .map(
                item => {

                    return `
                        <article
                            class="news-card"
                        >

                            <div
                                class="card-image"
                                style="
                                    min-height:180px;
                                    display:flex;
                                    align-items:center;
                                    justify-content:center;
                                    text-align:center;
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

                                <strong>
                                    ROBLOX
                                </strong>

                            </div>


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

                                <small>
                                    ${escapeHTML(
                                        item.date
                                    )}
                                </small>

                                <br><br>

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

                }
            )
            .join("");

}


/* =========================================================
   CREATOR
   ========================================================= */

function renderCreator() {

    const grid =
        document.getElementById(
            "creatorGrid"
        );

    if (!grid) {
        return;
    }


    grid.innerHTML =
        FANDIRA.creator
            .map(
                item => {

                    return `
                        <article
                            class="creator-card content-card"
                        >

                            <div class="card-body">

                                <span class="category">
                                    ROBLOX CREATOR
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
                                    class="card-button"
                                >
                                    BUKA →
                                </a>

                            </div>

                        </article>
                    `;

                }
            )
            .join("");

}


/* =========================================================
   TRENDING
   ========================================================= */

async function renderTrending() {

    const grid =
        document.getElementById(
            "trendingGrid"
        );

    if (!grid) {
        return;
    }


    const thumbnails =
        await getPlaceThumbnails(
            FANDIRA.trending.map(
                item =>
                    item.placeId
            )
        );


    grid.innerHTML =
        FANDIRA.trending
            .map(
                item => {

                    const image =
                        thumbnails[
                            String(
                                item.placeId
                            )
                        ];


                    return `
                        <article
                            class="trending-card"
                        >

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


                            <div class="card-body">

                                <span class="category">
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

                                <a
                                    href="${safeURL(item.url)}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="card-button"
                                >
                                    MAIN DI ROBLOX →
                                </a>

                            </div>

                        </article>
                    `;

                }
            )
            .join("");

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

                    const id =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !id ||
                        id === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            id
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
   INIT
   ========================================================= */

async function initFandira() {

    console.log(
        "%cFANDIRA START",
        "color:#35d9ff;font-size:24px;font-weight:bold;"
    );


    /*
       SEMUA SECTION DIJALANKAN TERPISAH.

       Kalau satu API gagal,
       section lain tetap jalan.
    */


    await loadUGC()
        .catch(error =>
            console.error(
                "UGC ERROR:",
                error
            )
        );


    await renderMaps("all")
        .catch(error =>
            console.error(
                "MAP ERROR:",
                error
            )
        );


    await renderExperiences()
        .catch(error =>
            console.error(
                "EXPERIENCE ERROR:",
                error
            )
        );


    renderNews();


    renderCreator();


    await renderTrending()
        .catch(error =>
            console.error(
                "TRENDING ERROR:",
                error
            )
        );


    setupMapFilters();


    setupNavigation();


    console.log(
        "%cFANDIRA READY",
        "color:#9b5cff;font-size:18px;font-weight:bold;"
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
        initFandira
    );

} else {

    initFandira();

}
