"use strict";

/* =====================================================
   FANDIRA
   Roblox Portal
   ===================================================== */

const FANDIRA = {

    /* =================================================
       UGC
    ================================================= */

    ugc: [
        {
            title: "Roblox Marketplace",
            description:
                "Temukan avatar item, accessory, pakaian dan UGC terbaru langsung dari Marketplace Roblox.",
            creator: "Roblox Marketplace",
            price: "Marketplace",
            status: "TERKINI",
            image:
                "https://tr.rbxcdn.com/180DAY-9c4d6c5e6f4e8f9d3f3e4d4d5d8c5d7b/420/420/Image/Png/noFilter",
            url:
                "https://www.roblox.com/catalog"
        },
        {
            title: "The Hunt: Roblox 20",
            description:
                "Event Roblox 20 dengan berbagai pengalaman, quest dan item eksklusif.",
            creator: "Roblox Presents",
            price: "EVENT",
            status: "TERKINI",
            image:
                "https://tr.rbxcdn.com/180DAY-8c3f6e2f5c2c0f2b5e6a2d6e8c3f1b8d/420/420/Image/Png/noFilter",
            url:
                "https://www.roblox.com/games/74205509034203"
        }
    ],


    /* =================================================
       MAP
       TOP 10 VIRAL + KATEGORI MAP
       ================================================= */

    maps: [

        /* =================================================
           🔥 TOP 10 VIRAL
        ================================================= */

        {
            title: "NUNGGUAN | Broken Silence",
            description:
                "Horror adventure Indonesia dengan suasana gelap, misteri dan berbagai kejadian mengejutkan.",
            placeId: 125847422162067,
            category: ["viral", "popular", "horror"],
            tag: "TOP 1 VIRAL",
            url:
                "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
        },

        {
            title: "Gunung Kambuno",
            description:
                "Map pendakian Gunung Kambuno dengan hutan, danau, air terjun dan jalur pendakian.",
            placeId: 90996930447931,
            category: ["viral", "popular", "realistic", "openworld"],
            tag: "TOP 2 VIRAL",
            url:
                "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
        },

        {
            title: "MOUNT TRANGGULASIH",
            description:
                "Map pendakian dengan savannah, cinematic mode, free cam dan berbagai fitur eksplorasi.",
            placeId: 74052392386319,
            category: ["viral", "popular", "realistic", "openworld", "party"],
            tag: "TOP 3 VIRAL",
            url:
                "https://www.roblox.com/games/74052392386319/MOUNT-TRANGGULASIH"
        },

        {
            title: "MOUNT RINJANI",
            description:
                "Rekreasi Gunung Rinjani dengan hutan berkabut, medan terjal dan kawasan Segara Anak.",
            placeId: 138149789228609,
            category: ["viral", "popular", "realistic", "openworld"],
            tag: "TOP 4 VIRAL",
            url:
                "https://www.roblox.com/games/138149789228609/MOUNT-RINJANI"
        },

        {
            title: "KERAMAT Dusun Pocong",
            description:
                "Horror Indonesia dengan desa terpencil, pemakaman keramat dan kejadian mistis.",
            placeId: 138879663836413,
            category: ["viral", "horror"],
            tag: "TOP 5 VIRAL",
            url:
                "https://www.roblox.com/games/138879663836413/KERAMAT-Dusun-Pocong"
        },

        {
            title: "MOUNT SIJJIN",
            description:
                "Pendakian mistis dengan jumpscare, suara keras dan kejadian supernatural.",
            placeId: 116761724761682,
            category: ["viral", "horror", "new"],
            tag: "TOP 6 VIRAL",
            url:
                "https://www.roblox.com/games/116761724761682/MOUNT-SIJJIN"
        },

        {
            title: "Mount Merbabu",
            description:
                "Pendakian Gunung Merbabu dengan savannah, hutan pinus dan panorama Jawa Tengah.",
            placeId: 114440555601511,
            category: ["viral", "popular", "realistic", "openworld", "new"],
            tag: "TOP 7 VIRAL",
            url:
                "https://www.roblox.com/games/114440555601511/MOUNT-MERBABU"
        },

        {
            title: "Mount Sumbing",
            description:
                "Map pendakian realistis dengan pegunungan, cuaca dan berbagai area eksplorasi.",
            placeId: 118392527498403,
            category: ["viral", "realistic", "openworld", "new"],
            tag: "TOP 8 VIRAL",
            url:
                "https://www.roblox.com/games/118392527498403/Mount-Sumbing"
        },

        {
            title: "Mount Ijen",
            description:
                "Eksplorasi Kawah Ijen dengan hutan tropis, kawah dan fenomena Blue Fire.",
            placeId: 91278022984469,
            category: ["viral", "realistic", "openworld"],
            tag: "TOP 9 VIRAL",
            url:
                "https://www.roblox.com/games/91278022984469"
        },

        {
            title: "Ekspedisi Gunung Rinjani",
            description:
                "Ekspedisi Rinjani dengan checkpoint, spot foto, dance, sepeda dan ATV.",
            placeId: 95656495100644,
            category: ["viral", "popular", "party", "realistic", "new"],
            tag: "TOP 10 VIRAL",
            url:
                "https://www.roblox.com/games/95656495100644/Ekspedisi-Gunung-Rinjani"
        },


        /* =================================================
           👥 PALING RAMAI
        ================================================= */

        {
            title: "NUNGGUAN | Broken Silence",
            description:
                "Horror adventure Indonesia dengan jutaan kunjungan.",
            placeId: 125847422162067,
            category: ["popular", "viral", "horror"],
            tag: "RAMAI",
            url:
                "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
        },

        {
            title: "Gunung Kambuno",
            description:
                "Pendakian Gunung Kambuno dengan lebih dari satu juta kunjungan.",
            placeId: 90996930447931,
            category: ["popular", "viral", "realistic"],
            tag: "RAMAI",
            url:
                "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
        },

        {
            title: "MOUNT RINJANI",
            description:
                "Eksplorasi Gunung Rinjani dengan hutan dan Segara Anak.",
            placeId: 138149789228609,
            category: ["popular", "viral", "realistic"],
            tag: "RAMAI",
            url:
                "https://www.roblox.com/games/138149789228609/MOUNT-RINJANI"
        },

        {
            title: "MOUNT TRANGGULASIH",
            description:
                "Pendakian gunung dengan savannah dan cinematic mode.",
            placeId: 74052392386319,
            category: ["popular", "viral", "realistic"],
            tag: "RAMAI",
            url:
                "https://www.roblox.com/games/74052392386319/MOUNT-TRANGGULASIH"
        },

        {
            title: "Mount Merbabu",
            description:
                "Map pendakian dengan savannah dan hutan pinus.",
            placeId: 114440555601511,
            category: ["popular", "viral", "realistic"],
            tag: "RAMAI",
            url:
                "https://www.roblox.com/games/114440555601511/MOUNT-MERBABU"
        },


        /* =================================================
           ⭐ RATING BAGUS
        ================================================= */

        {
            title: "MOUNT TRANGGULASIH",
            description:
                "Map gunung dengan cinematic mode, free cam dan savannah.",
            placeId: 74052392386319,
            category: ["rating", "realistic", "viral"],
            tag: "RATING",
            url:
                "https://www.roblox.com/games/74052392386319/MOUNT-TRANGGULASIH"
        },

        {
            title: "Gunung Kambuno",
            description:
                "Map gunung realistis dengan hutan, danau dan air terjun.",
            placeId: 90996930447931,
            category: ["rating", "realistic", "popular"],
            tag: "RATING",
            url:
                "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
        },

        {
            title: "MOUNT RINJANI",
            description:
                "Rekreasi Gunung Rinjani dengan medan terjal dan Segara Anak.",
            placeId: 138149789228609,
            category: ["rating", "realistic", "popular"],
            tag: "RATING",
            url:
                "https://www.roblox.com/games/138149789228609/MOUNT-RINJANI"
        },

        {
            title: "Mount Merbabu",
            description:
                "Gunung Merbabu dengan savannah dan panorama pegunungan.",
            placeId: 114440555601511,
            category: ["rating", "realistic", "new"],
            tag: "RATING",
            url:
                "https://www.roblox.com/games/114440555601511/MOUNT-MERBABU"
        },

        {
            title: "Mount Ijen",
            description:
                "Eksplorasi Kawah Ijen dengan Blue Fire dan suasana alam.",
            placeId: 91278022984469,
            category: ["rating", "realistic", "openworld"],
            tag: "RATING",
            url:
                "https://www.roblox.com/games/91278022984469"
        },


        /* =================================================
           🌆 REALISTIC
        ================================================= */

        {
            title: "MOUNT TRANGGULASIH",
            description:
                "Pendakian realistis dengan jalur alam dan savannah.",
            placeId: 74052392386319,
            category: ["realistic", "viral", "popular"],
            tag: "REALISTIC",
            url:
                "https://www.roblox.com/games/74052392386319/MOUNT-TRANGGULASIH"
        },

        {
            title: "Gunung Kambuno",
            description:
                "Gunung dengan hutan, danau, air terjun dan jalur pendakian.",
            placeId: 90996930447931,
            category: ["realistic", "popular", "openworld"],
            tag: "REALISTIC",
            url:
                "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
        },

        {
            title: "MOUNT RINJANI",
            description:
                "Gunung Rinjani dengan hutan berkabut dan medan terjal.",
            placeId: 138149789228609,
            category: ["realistic", "popular", "openworld"],
            tag: "REALISTIC",
            url:
                "https://www.roblox.com/games/138149789228609/MOUNT-RINJANI"
        },

        {
            title: "Mount Merbabu",
            description:
                "Savannah, hutan pinus dan panorama Gunung Merbabu.",
            placeId: 114440555601511,
            category: ["realistic", "new", "openworld"],
            tag: "REALISTIC",
            url:
                "https://www.roblox.com/games/114440555601511/MOUNT-MERBABU"
        },

        {
            title: "Mount Ijen",
            description:
                "Kawah Ijen dengan hutan tropis dan fenomena Blue Fire.",
            placeId: 91278022984469,
            category: ["realistic", "openworld", "viral"],
            tag: "REALISTIC",
            url:
                "https://www.roblox.com/games/91278022984469"
        },

        {
            title: "Realistic Drive Simulator Indonesia",
            description:
                "Dunia berkendara open-world yang terinspirasi dari berbagai kota Indonesia.",
            placeId: 10189328024,
            category: ["realistic", "openworld", "popular"],
            tag: "REALISTIC",
            url:
                "https://www.roblox.com/games/10189328024/Realistic-Drive-Simulator-Indonesia"
        },


        /* =================================================
           🌍 OPEN WORLD
        ================================================= */

        {
            title: "Realistic Drive Simulator Indonesia",
            description:
                "Jelajahi kota, berkendara dan melakukan roleplay di dunia open-world.",
            placeId: 10189328024,
            category: ["openworld", "realistic", "popular"],
            tag: "OPEN WORLD",
            url:
                "https://www.roblox.com/games/10189328024/Realistic-Drive-Simulator-Indonesia"
        },

        {
            title: "Gunung Kambuno",
            description:
                "Eksplorasi gunung, hutan, danau dan air terjun.",
            placeId: 90996930447931,
            category: ["openworld", "realistic", "popular"],
            tag: "OPEN WORLD",
            url:
                "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
        },

        {
            title: "MOUNT TRANGGULASIH",
            description:
                "Jelajahi jalur gunung dan savannah.",
            placeId: 74052392386319,
            category: ["openworld", "realistic", "viral"],
            tag: "OPEN WORLD",
            url:
                "https://www.roblox.com/games/74052392386319/MOUNT-TRANGGULASIH"
        },

        {
            title: "MOUNT RINJANI",
            description:
                "Eksplorasi Rinjani dari hutan hingga kawasan Segara Anak.",
            placeId: 138149789228609,
            category: ["openworld", "realistic", "viral"],
            tag: "OPEN WORLD",
            url:
                "https://www.roblox.com/games/138149789228609/MOUNT-RINJANI"
        },

        {
            title: "Mount Merbabu",
            description:
                "Eksplorasi savannah dan hutan Gunung Merbabu.",
            placeId: 114440555601511,
            category: ["openworld", "realistic", "new"],
            tag: "OPEN WORLD",
            url:
                "https://www.roblox.com/games/114440555601511/MOUNT-MERBABU"
        },


        /* =================================================
           👻 HORROR
        ================================================= */

        {
            title: "NUNGGUAN | Broken Silence",
            description:
                "Horror adventure Indonesia dengan suasana gelap dan misteri.",
            placeId: 125847422162067,
            category: ["horror", "viral", "popular"],
            tag: "HORROR ID",
            url:
                "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
        },

        {
            title: "KERAMAT Dusun Pocong",
            description:
                "Horror Indonesia dengan desa dan pemakaman keramat.",
            placeId: 138879663836413,
            category: ["horror", "viral"],
            tag: "HORROR ID",
            url:
                "https://www.roblox.com/games/138879663836413/KERAMAT-Dusun-Pocong"
        },

        {
            title: "MOUNT SIJJIN",
            description:
                "Pendakian mistis dengan jumpscare dan gangguan supernatural.",
            placeId: 116761724761682,
            category: ["horror", "viral", "new"],
            tag: "HORROR ID",
            url:
                "https://www.roblox.com/games/116761724761682/MOUNT-SIJJIN"
        },

        {
            title: "MOUNT SUMBING 👻",
            description:
                "Pendakian horror dengan hantu pendaki dan hutan gelap.",
            placeId: 74573694862156,
            category: ["horror", "new"],
            tag: "HORROR ID",
            url:
                "https://www.roblox.com/games/74573694862156/MOUNT-SUMBING"
        },

        {
            title: "Mount Ijen Horror",
            description:
                "Eksplorasi Ijen dalam suasana malam dengan kabut dan Blue Fire.",
            placeId: 98736259765840,
            category: ["horror", "realistic", "new"],
            tag: "HORROR ID",
            url:
                "https://www.roblox.com/games/98736259765840/MOUNT-IJEN"
        },


        /* =================================================
           🎉 PARTY
        ================================================= */

        {
            title: "Ekspedisi Gunung Rinjani",
            description:
                "Ekspedisi dengan spot foto, dance, sepeda dan ATV.",
            placeId: 95656495100644,
            category: ["party", "new", "realistic"],
            tag: "HANGOUT",
            url:
                "https://www.roblox.com/games/95656495100644/Ekspedisi-Gunung-Rinjani"
        },

        {
            title: "MOUNT TRANGGULASIH",
            description:
                "Map gunung dengan cinematic mode dan berbagai spot hangout.",
            placeId: 74052392386319,
            category: ["party", "realistic", "viral"],
            tag: "HANGOUT",
            url:
                "https://www.roblox.com/games/74052392386319/MOUNT-TRANGGULASIH"
        },

        {
            title: "Gunung Kambuno",
            description:
                "Pendakian bersama teman dan eksplorasi alam.",
            placeId: 90996930447931,
            category: ["party", "popular", "realistic"],
            tag: "HANGOUT",
            url:
                "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
        },

        {
            title: "MOUNT RINJANI",
            description:
                "Ekspedisi gunung dan foto bersama teman.",
            placeId: 138149789228609,
            category: ["party", "realistic", "openworld"],
            tag: "HANGOUT",
            url:
                "https://www.roblox.com/games/138149789228609/MOUNT-RINJANI"
        },


        /* =================================================
           🆕 MAP BARU
        ================================================= */

        {
            title: "Mount Merbabu",
            description:
                "Map baru Gunung Merbabu dengan savannah dan hutan pinus.",
            placeId: 114440555601511,
            category: ["new", "realistic", "openworld"],
            tag: "NEW",
            url:
                "https://www.roblox.com/games/114440555601511/MOUNT-MERBABU"
        },

        {
            title: "Mount Sumbing",
            description:
                "Map baru Gunung Sumbing dengan suasana pendakian realistis.",
            placeId: 118392527498403,
            category: ["new", "realistic", "openworld"],
            tag: "NEW",
            url:
                "https://www.roblox.com/games/118392527498403/Mount-Sumbing"
        },

        {
            title: "Ekspedisi Gunung Rinjani",
            description:
                "Map ekspedisi dengan checkpoint, dance, sepeda dan ATV.",
            placeId: 95656495100644,
            category: ["new", "party", "realistic"],
            tag: "NEW",
            url:
                "https://www.roblox.com/games/95656495100644/Ekspedisi-Gunung-Rinjani"
        },

        {
            title: "MOUNT SIJJIN",
            description:
                "Map hiking mistis dengan jumpscare dan suasana supernatural.",
            placeId: 116761724761682,
            category: ["new", "horror", "viral"],
            tag: "NEW HORROR",
            url:
                "https://www.roblox.com/games/116761724761682/MOUNT-SIJJIN"
        },

        {
            title: "MOUNT SUMBING 👻",
            description:
                "Pendakian horror dengan hantu pendaki dan hutan gelap.",
            placeId: 74573694862156,
            category: ["new", "horror"],
            tag: "NEW HORROR",
            url:
                "https://www.roblox.com/games/74573694862156/MOUNT-SUMBING"
        }
    ],


    /* =================================================
       EXPERIENCE / GAME ROBLOX
    ================================================= */

    experiences: [

        {
            title: "The Hunt: Roblox 20",
            description:
                "Event Roblox 20 dengan quest dan berbagai pengalaman dari era Roblox.",
            placeId: 74205509034203,
            tag: "TERKINI",
            url:
                "https://www.roblox.com/games/74205509034203"
        },

        {
            title: "Brookhaven RP",
            description:
                "Roleplay populer untuk bermain, bersosialisasi dan membuat cerita bersama pemain lain.",
            placeId: 4924922222,
            tag: "POPULAR",
            url:
                "https://www.roblox.com/games/4924922222/Brookhaven-RP"
        },

        {
            title: "Driving Empire",
            description:
                "Game driving open-world dengan koleksi kendaraan dan dunia luas.",
            placeId: 3351674303,
            tag: "DRIVING",
            url:
                "https://www.roblox.com/games/3351674303/Driving-Empire"
        },

        {
            title: "DOORS",
            description:
                "Horror adventure dengan pintu, puzzle dan berbagai entity.",
            placeId: 6516141723,
            tag: "HORROR",
            url:
                "https://www.roblox.com/games/6516141723/DOORS"
        },

        {
            title: "Jailbreak",
            description:
                "Police versus criminals dalam dunia open-world.",
            placeId: 606849621,
            tag: "ACTION",
            url:
                "https://www.roblox.com/games/606849621/Jailbreak"
        },

        {
            title: "Murder Mystery 2",
            description:
                "Game social deduction dengan Sheriff, Innocent dan Murderer.",
            placeId: 142823291,
            tag: "POPULAR",
            url:
                "https://www.roblox.com/games/142823291/Murder-Mystery-2"
        },

        {
            title: "Piggy",
            description:
                "Horror survival dengan puzzle dan pengejaran.",
            placeId: 4623386862,
            tag: "HORROR",
            url:
                "https://www.roblox.com/games/4623386862/Piggy"
        },

        {
            title: "The Mimic",
            description:
                "Horror story dengan cerita dan dunia yang terinspirasi dari legenda Jepang.",
            placeId: 6243699076,
            tag: "HORROR",
            url:
                "https://www.roblox.com/games/6243699076/The-Mimic"
        }
    ],


    /* =================================================
       NEWS
    ================================================= */

    news: [

        {
            title: "The Hunt: Roblox 20 Resmi Dimulai",
            description:
                "Roblox merayakan 20 tahun dengan event The Hunt yang menghadirkan berbagai quest dan pengalaman.",
            date: "16 September 2026",
            source: "Roblox Newsroom",
            image:
                "https://about.roblox.com/wp-content/uploads/2026/09/Roblox20.jpg",
            url:
                "https://about.roblox.com/id/newsroom/2026/09/join-the-hunt-roblox-20"
        },

        {
            title: "Roblox 20 Menghadirkan Perjalanan Melintasi 20 Tahun",
            description:
                "Perayaan Roblox 20 menghadirkan pengalaman dan aktivitas yang mengambil inspirasi dari sejarah Roblox.",
            date: "September 2026",
            source: "Roblox",
            image:
                "https://about.roblox.com/wp-content/uploads/2026/09/Roblox20.jpg",
            url:
                "https://about.roblox.com/id/newsroom/2026/09/join-the-hunt-roblox-20"
        }
    ],


    /* =================================================
       CREATOR / STUDIO
    ================================================= */

    creator: [

        {
            title: "Roblox Creator Hub",
            description:
                "Dokumentasi resmi Roblox untuk membuat experience, avatar, scripting dan berbagai konten.",
            tag: "OFFICIAL",
            url:
                "https://create.roblox.com/docs"
        },

        {
            title: "Roblox Studio",
            description:
                "Lingkungan pengembangan resmi Roblox untuk membuat dan mengembangkan experience.",
            tag: "STUDIO",
            url:
                "https://create.roblox.com/"
        },

        {
            title: "Roblox Creator Store",
            description:
                "Cari model, plugin, audio, UI dan berbagai resource untuk Roblox Studio.",
            tag: "STORE",
            url:
                "https://create.roblox.com/store"
        },

        {
            title: "Roblox Marketplace",
            description:
                "Marketplace resmi Roblox untuk avatar item dan berbagai konten pengguna.",
            tag: "MARKETPLACE",
            url:
                "https://www.roblox.com/catalog"
        }
    ],


    /* =================================================
       TRENDING
    ================================================= */

    trending: [

        {
            rank: 1,
            title: "The Hunt: Roblox 20",
            description:
                "Event Roblox 20 yang sedang menjadi perhatian komunitas.",
            tag: "EVENT",
            url:
                "https://www.roblox.com/games/74205509034203"
        },

        {
            rank: 2,
            title: "NUNGGUAN | Broken Silence",
            description:
                "Horror Indonesia dengan jutaan kunjungan.",
            tag: "HORROR",
            url:
                "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
        },

        {
            rank: 3,
            title: "Gunung Kambuno",
            description:
                "Map pendakian Indonesia dengan lebih dari satu juta kunjungan.",
            tag: "MAP",
            url:
                "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
        },

        {
            rank: 4,
            title: "MOUNT TRANGGULASIH",
            description:
                "Map gunung Indonesia dengan cinematic mode dan berbagai fitur eksplorasi.",
            tag: "MAP",
            url:
                "https://www.roblox.com/games/74052392386319/MOUNT-TRANGGULASIH"
        },

        {
            rank: 5,
            title: "MOUNT RINJANI",
            description:
                "Eksplorasi Gunung Rinjani dengan suasana realistis.",
            tag: "MAP",
            url:
                "https://www.roblox.com/games/138149789228609/MOUNT-RINJANI"
        }
    ]
};


/* =====================================================
   HELPER
===================================================== */

function escapeHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function safeURL(value) {
    try {
        const url = new URL(value, window.location.href);

        if (
            url.protocol === "https:" ||
            url.protocol === "http:"
        ) {
            return url.href;
        }

        return "#";
    } catch {
        return "#";
    }
}


/* =====================================================
   THUMBNAIL ROBLOX
===================================================== */

async function getPlaceThumbnails(placeIds) {

    const ids = [
        ...new Set(
            placeIds
                .map(Number)
                .filter(id => Number.isFinite(id) && id > 0)
        )
    ];

    if (!ids.length) {
        return {};
    }

    const result = {};

    try {

        const url =
            "https://thumbnails.roblox.com/v1/places/gameicons" +
            "?placeIds=" +
            ids.join(",") +
            "&size=768x432" +
            "&format=Png" +
            "&isCircular=false";

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Thumbnail request failed");
        }

        const data = await response.json();

        if (Array.isArray(data.data)) {

            data.data.forEach(item => {

                if (item && item.targetId && item.imageUrl) {
                    result[item.targetId] = item.imageUrl;
                }

            });

        }

    } catch (error) {

        console.warn(
            "FANDIRA thumbnail error:",
            error
        );

    }

    return result;
}


/* =====================================================
   IMAGE
===================================================== */

function imageHTML(src, alt) {

    const safeSrc = safeURL(src);

    if (safeSrc === "#") {
        return `
            <div class="card-image-placeholder">
                FANDIRA
            </div>
        `;
    }

    return `
        <img
            src="${escapeHTML(safeSrc)}"
            alt="${escapeHTML(alt)}"
            loading="lazy"
            onerror="
                this.style.display='none';
                this.nextElementSibling.style.display='flex';
            "
        >
        <div
            class="card-image-placeholder"
            style="display:none;"
        >
            FANDIRA
        </div>
    `;
}


/* =====================================================
   UGC
===================================================== */

function renderUGC() {

    const grid =
        document.getElementById("ugcGrid");

    if (!grid) return;

    if (!Array.isArray(FANDIRA.ugc)) {
        grid.innerHTML = "";
        return;
    }

    grid.innerHTML =
        FANDIRA.ugc.map(item => {

            return `
                <a
                    class="ugc-card"
                    href="${escapeHTML(safeURL(item.url))}"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="ugc-card-image">
                        ${imageHTML(
                            item.image,
                            item.title
                        )}
                    </div>

                    <div class="ugc-card-body">

                        <div class="card-tag">
                            ${escapeHTML(item.status || "UGC")}
                        </div>

                        <h3>
                            ${escapeHTML(item.title)}
                        </h3>

                        <p>
                            ${escapeHTML(item.description)}
                        </p>

                        <div class="card-meta">
                            <span>
                                ${escapeHTML(item.creator || "")}
                            </span>

                            <span>
                                ${escapeHTML(item.price || "")}
                            </span>
                        </div>

                    </div>

                </a>
            `;

        }).join("");
}


/* =====================================================
   MAP
===================================================== */

async function renderMaps(filter = "all") {

    const grid =
        document.getElementById("mapsGrid");

    if (!grid) return;

    let maps = FANDIRA.maps.filter(map => {

        if (filter === "all") {
            return true;
        }

        return (
            Array.isArray(map.category) &&
            map.category.includes(filter)
        );

    });


    /* TOP 10 khusus filter VIRAL */

    if (filter === "viral") {
        maps = maps.slice(0, 10);
    }


    if (!maps.length) {

        grid.innerHTML = `
            <div class="empty-state">
                Belum ada map untuk kategori ini.
            </div>
        `;

        return;
    }


    grid.innerHTML = `
        <div class="loading-state">
            Memuat map Roblox...
        </div>
    `;


    const thumbnails =
        await getPlaceThumbnails(
            maps.map(map => map.placeId)
        );


    grid.innerHTML =
        maps.map((map, index) => {

            const thumbnail =
                thumbnails[map.placeId];


            return `
                <a
                    class="map-card"
                    href="${escapeHTML(safeURL(map.url))}"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="map-card-image">

                        ${
                            thumbnail
                                ? imageHTML(
                                    thumbnail,
                                    map.title
                                )
                                : `
                                    <div class="card-image-placeholder">
                                        ROBLOX MAP
                                    </div>
                                `
                        }

                    </div>

                    <div class="map-card-body">

                        <div class="card-tag">
                            ${escapeHTML(map.tag || "MAP")}
                        </div>

                        <h3>
                            ${escapeHTML(map.title)}
                        </h3>

                        <p>
                            ${escapeHTML(map.description)}
                        </p>

                        ${
                            filter === "viral"
                                ? `
                                    <div class="map-rank">
                                        #${index + 1} MAP VIRAL
                                    </div>
                                  `
                                : ""
                        }

                    </div>

                </a>
            `;

        }).join("");
}


/* =====================================================
   EXPERIENCE
===================================================== */

async function renderExperiences() {

    const grid =
        document.getElementById("gamesGrid");

    if (!grid) return;


    grid.innerHTML = `
        <div class="loading-state">
            Memuat Experience Roblox...
        </div>
    `;


    const thumbnails =
        await getPlaceThumbnails(
            FANDIRA.experiences.map(
                item => item.placeId
            )
        );


    grid.innerHTML =
        FANDIRA.experiences.map(item => {

            const thumbnail =
                thumbnails[item.placeId];


            return `
                <a
                    class="game-card"
                    href="${escapeHTML(safeURL(item.url))}"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="game-card-image">

                        ${
                            thumbnail
                                ? imageHTML(
                                    thumbnail,
                                    item.title
                                )
                                : `
                                    <div class="card-image-placeholder">
                                        ROBLOX
                                    </div>
                                `
                        }

                    </div>

                    <div class="game-card-body">

                        <div class="card-tag">
                            ${escapeHTML(item.tag || "EXPERIENCE")}
                        </div>

                        <h3>
                            ${escapeHTML(item.title)}
                        </h3>

                        <p>
                            ${escapeHTML(item.description)}
                        </p>

                    </div>

                </a>
            `;

        }).join("");
}


/* =====================================================
   NEWS
===================================================== */

function renderNews() {

    const grid =
        document.getElementById("newsGrid");

    if (!grid) return;


    grid.innerHTML =
        FANDIRA.news.map(item => {

            return `
                <a
                    class="news-card"
                    href="${escapeHTML(safeURL(item.url))}"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="news-card-image">

                        ${
                            item.image
                                ? imageHTML(
                                    item.image,
                                    item.title
                                )
                                : `
                                    <div class="card-image-placeholder">
                                        NEWS
                                    </div>
                                `
                        }

                    </div>

                    <div class="news-card-body">

                        <div class="card-tag">
                            ${escapeHTML(item.source || "NEWS")}
                        </div>

                        <h3>
                            ${escapeHTML(item.title)}
                        </h3>

                        <p>
                            ${escapeHTML(item.description)}
                        </p>

                        <div class="card-meta">
                            ${escapeHTML(item.date || "")}
                        </div>

                    </div>

                </a>
            `;

        }).join("");
}


/* =====================================================
   CREATOR
===================================================== */

function renderCreator() {

    const grid =
        document.getElementById("creatorGrid");

    if (!grid) return;


    grid.innerHTML =
        FANDIRA.creator.map(item => {

            return `
                <a
                    class="creator-card"
                    href="${escapeHTML(safeURL(item.url))}"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="creator-card-body">

                        <div class="card-tag">
                            ${escapeHTML(item.tag || "CREATOR")}
                        </div>

                        <h3>
                            ${escapeHTML(item.title)}
                        </h3>

                        <p>
                            ${escapeHTML(item.description)}
                        </p>

                    </div>

                </a>
            `;

        }).join("");
}


/* =====================================================
   TRENDING
===================================================== */

function renderTrending() {

    const grid =
        document.getElementById("trendingGrid");

    if (!grid) return;


    grid.innerHTML =
        FANDIRA.trending.map(item => {

            return `
                <a
                    class="trending-card"
                    href="${escapeHTML(safeURL(item.url))}"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="trending-rank">
                        #${escapeHTML(item.rank)}
                    </div>

                    <div class="trending-card-body">

                        <div class="card-tag">
                            ${escapeHTML(item.tag || "TRENDING")}
                        </div>

                        <h3>
                            ${escapeHTML(item.title)}
                        </h3>

                        <p>
                            ${escapeHTML(item.description)}
                        </p>

                    </div>

                </a>
            `;

        }).join("");
}


/* =====================================================
   MAP FILTER
===================================================== */

function setupMapFilters() {

    const buttons =
        document.querySelectorAll(
            ".map-filter-button"
        );


    if (!buttons.length) {
        return;
    }


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                buttons.forEach(item => {
                    item.classList.remove("active");
                });


                button.classList.add("active");


                const filter =
                    button.dataset.mapFilter ||
                    "all";


                renderMaps(filter);

            }
        );

    });
}


/* =====================================================
   NAVIGATION
===================================================== */

function setupNavigation() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


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


/* =====================================================
   INIT
===================================================== */

async function initFandira() {

    try {

        renderUGC();

        await renderMaps("all");

        await renderExperiences();

        renderNews();

        renderCreator();

        renderTrending();

        setupMapFilters();

        setupNavigation();

        console.log(
            "FANDIRA berhasil dimuat."
        );

    } catch (error) {

        console.error(
            "FANDIRA initialization error:",
            error
        );

    }

}


/* =====================================================
   START
===================================================== */

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
