"use strict";

/* =========================================================
   FANDIRA
   Roblox Portal Data
   HTML & CSS TIDAK PERLU DIUBAH
   ========================================================= */


/* =========================================================
   DATA UTAMA
   ========================================================= */

const FANDIRA = {

    /* =====================================================
       UGC
       TETAP TERPISAH DARI MAP
       ===================================================== */

    ugc: [
        {
            title: "Roblox Marketplace",
            creator: "Roblox",
            price: "Marketplace",
            tag: "UGC",
            image: "",
            url: "https://www.roblox.com/catalog"
        },
        {
            title: "The Hunt: Roblox 20",
            creator: "Roblox",
            price: "Event UGC",
            tag: "EVENT",
            image: "",
            url: "https://www.roblox.com/games/74205509034203"
        },
        {
            title: "Avatar Shop",
            creator: "Roblox",
            price: "UGC",
            tag: "SHOP",
            image: "",
            url: "https://www.roblox.com/catalog"
        },
        {
            title: "Limited Items",
            creator: "Roblox Marketplace",
            price: "Limited",
            tag: "LIMITED",
            image: "",
            url: "https://www.roblox.com/catalog?Category=1&Subcategory=2"
        },
        {
            title: "Accessories",
            creator: "Roblox Marketplace",
            price: "UGC",
            tag: "ACCESSORY",
            image: "",
            url: "https://www.roblox.com/catalog?Category=11"
        },
        {
            title: "Heads",
            creator: "Roblox Marketplace",
            price: "UGC",
            tag: "HEAD",
            image: "",
            url: "https://www.roblox.com/catalog?Category=4"
        }
    ],


    /* =====================================================
       MAP ROBLOX
       
       SATU MAP = SATU DATA
       CATEGORY = tempat map tersebut muncul.
       
       SETIAP FILTER AKAN MENGAMBIL 10 MAP.
       ===================================================== */

    maps: [

        /* =================================================
           1. VIRAL — 10
           ================================================= */

        {
            title: "Gunung Kambuno",
            description: "Map pendakian Indonesia dengan hutan, danau, air terjun dan jalur eksplorasi.",
            placeId: 90996930447931,
            category: ["viral", "popular", "rating", "realistic", "openworld"],
            tag: "VIRAL #1",
            url: "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
        },

        {
            title: "NUNGGUAN | Broken Silence",
            description: "Psychological horror story dengan misteri, suasana gelap dan kejutan.",
            placeId: 125847422162067,
            category: ["viral", "popular", "rating", "horror"],
            tag: "VIRAL #2",
            url: "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
        },

        {
            title: "MOUNT TRANGGULASIH",
            description: "Map pendakian dengan savannah, cinematic mode dan eksplorasi alam.",
            placeId: 74052392386319,
            category: ["viral", "popular", "rating", "realistic", "openworld"],
            tag: "VIRAL #3",
            url: "https://www.roblox.com/games/74052392386319/MOUNT-TRANGGULASIH"
        },

        {
            title: "MOUNT SIJJIN",
            description: "Pendakian bernuansa mistis dengan jumpscare dan kejadian supernatural.",
            placeId: 116761724761682,
            category: ["viral", "horror", "new"],
            tag: "VIRAL #4",
            url: "https://www.roblox.com/games/116761724761682/MOUNT-SIJJIN"
        },

        {
            title: "KERAMAT Dusun Pocong",
            description: "Horror Indonesia dengan desa terpencil, pemakaman dan kejadian mistis.",
            placeId: 138879663836413,
            category: ["viral", "horror", "new"],
            tag: "VIRAL #5",
            url: "https://www.roblox.com/games/138879663836413/KERAMAT-Dusun-Pocong"
        },

        {
            title: "SHELL PARTY",
            description: "Social party di gas station dengan musik, dance dan tempat nongkrong.",
            placeId: 110172784379358,
            category: ["viral", "party", "new"],
            tag: "VIRAL #6",
            url: "https://www.roblox.com/games/110172784379358/SHELL-PARTY"
        },

        {
            title: "Stop the Timer",
            description: "Party game 1v1 dengan banyak mode permainan dan gameplay cepat.",
            placeId: 139988436996662,
            category: ["viral", "popular", "party"],
            tag: "VIRAL #7",
            url: "https://www.roblox.com/games/139988436996662/Stop-the-Timer"
        },

        {
            title: "Realistic Drive Simulator Indonesia",
            description: "Open-world driving Indonesia untuk eksplorasi, roleplay dan sosial.",
            placeId: 10189328024,
            category: ["viral", "popular", "realistic", "openworld"],
            tag: "VIRAL #8",
            url: "https://www.roblox.com/games/10189328024/Realistic-Drive-Simulator-Indonesia"
        },

        {
            title: "Saat Teduh",
            description: "Hangout semi-realistic dengan hutan, laut, fishing, musik dan dance.",
            placeId: 80559954948316,
            category: ["viral", "party", "realistic", "openworld"],
            tag: "VIRAL #9",
            url: "https://www.roblox.com/games/80559954948316/SAAT-TEDUH"
        },

        {
            title: "The Hunt: Roblox 20",
            description: "Event besar ulang tahun ke-20 Roblox dengan perjalanan melewati sejarah Roblox.",
            placeId: 74205509034203,
            category: ["viral", "popular", "new"],
            tag: "EVENT VIRAL",
            url: "https://www.roblox.com/games/74205509034203"
        },


        /* =================================================
           2. PALING RAMAI — 10
           ================================================= */

        {
            title: "Brookhaven RP",
            description: "Roleplay sosial open-world dengan rumah, kendaraan dan aktivitas bersama.",
            placeId: 4924922222,
            category: ["popular", "party", "openworld", "rating"],
            tag: "RAMAI",
            url: "https://www.roblox.com/games/4924922222/Brookhaven-RP"
        },

        {
            title: "Blox Fruits",
            description: "Adventure RPG dengan eksplorasi pulau, combat dan progression.",
            placeId: 2753915549,
            category: ["popular", "openworld", "rating"],
            tag: "RAMAI",
            url: "https://www.roblox.com/games/2753915549/Blox-Fruits"
        },

        {
            title: "RIVALS",
            description: "Competitive shooter Roblox dengan pertandingan cepat.",
            placeId: 17625359962,
            category: ["popular", "rating", "new"],
            tag: "RAMAI",
            url: "https://www.roblox.com/games/17625359962/RIVALS"
        },

        {
            title: "99 Nights in the Forest",
            description: "Survival adventure dengan eksplorasi hutan dan bertahan hidup.",
            placeId: 79546208627805,
            category: ["popular", "horror", "openworld"],
            tag: "RAMAI",
            url: "https://www.roblox.com/games/79546208627805"
        },

        {
            title: "Murder Mystery 2",
            description: "Mystery multiplayer klasik dengan Sheriff, Innocent dan Murderer.",
            placeId: 142823291,
            category: ["popular", "rating", "party"],
            tag: "RAMAI",
            url: "https://www.roblox.com/games/142823291/Murder-Mystery-2"
        },

        {
            title: "Adopt Me!",
            description: "Social roleplay dan pet game dengan dunia untuk bermain bersama.",
            placeId: 920587237,
            category: ["popular", "party", "rating"],
            tag: "RAMAI",
            url: "https://www.roblox.com/games/920587237/Adopt-Me"
        },

        {
            title: "Fish It!",
            description: "Fishing adventure dengan koleksi ikan, eksplorasi dan progression.",
            placeId: 121864768012064,
            category: ["popular", "openworld", "new"],
            tag: "RAMAI",
            url: "https://www.roblox.com/games/121864768012064"
        },

        {
            title: "Jujutsu Shenanigans",
            description: "Combat arena dengan karakter dan teknik bertarung bergaya anime.",
            placeId: 9391468976,
            category: ["popular", "rating"],
            tag: "RAMAI",
            url: "https://www.roblox.com/games/9391468976/Jujutsu-Shenanigans"
        },

        {
            title: "Pet Simulator 99",
            description: "Simulator pet dengan koleksi, area progression dan trading.",
            placeId: 8737899170,
            category: ["popular", "rating"],
            tag: "RAMAI",
            url: "https://www.roblox.com/games/8737899170/Pet-Simulator-99"
        },

        {
            title: "Dress To Impress",
            description: "Fashion competition dengan outfit, runway dan voting pemain.",
            placeId: 15101393054,
            category: ["popular", "party", "rating"],
            tag: "RAMAI",
            url: "https://www.roblox.com/games/15101393054/Dress-To-Impress"
        },


        /* =================================================
           3. RATING BAGUS — 10
           ================================================= */

        {
            title: "Gunung Kambuno",
            description: "Pendakian dengan hutan, danau dan air terjun.",
            placeId: 90996930447931,
            category: ["rating", "viral", "realistic", "openworld"],
            tag: "RATING",
            url: "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
        },

        {
            title: "MOUNT TRANGGULASIH",
            description: "Map hiking dengan savannah dan fitur cinematic.",
            placeId: 74052392386319,
            category: ["rating", "viral", "realistic", "openworld"],
            tag: "RATING",
            url: "https://www.roblox.com/games/74052392386319/MOUNT-TRANGGULASIH"
        },

        {
            title: "MOUNT RINJANI",
            description: "Rekreasi Gunung Rinjani dengan medan dan pemandangan alam.",
            placeId: 138149789228609,
            category: ["rating", "realistic", "openworld"],
            tag: "RATING",
            url: "https://www.roblox.com/games/138149789228609/MOUNT-RINJANI"
        },

        {
            title: "Mount Sumbing",
            description: "Hiking dengan cuaca, suhu, campfire dan checkpoint.",
            placeId: 14963184269,
            category: ["rating", "realistic", "openworld"],
            tag: "RATING",
            url: "https://www.roblox.com/games/14963184269/Mount-Sumbing"
        },

        {
            title: "Mount Merbabu",
            description: "Savannah, hutan pinus dan panorama pegunungan Jawa.",
            placeId: 114440555601511,
            category: ["rating", "realistic", "openworld", "new"],
            tag: "RATING",
            url: "https://www.roblox.com/games/114440555601511/MOUNT-MERBABU"
        },

        {
            title: "Brookhaven RP",
            description: "Roleplay sosial dengan dunia yang luas dan banyak aktivitas.",
            placeId: 4924922222,
            category: ["rating", "popular", "party", "openworld"],
            tag: "RATING",
            url: "https://www.roblox.com/games/4924922222/Brookhaven-RP"
        },

        {
            title: "Adopt Me!",
            description: "Roleplay sosial dan pet collection dengan komunitas besar.",
            placeId: 920587237,
            category: ["rating", "popular", "party"],
            tag: "RATING",
            url: "https://www.roblox.com/games/920587237/Adopt-Me"
        },

        {
            title: "Murder Mystery 2",
            description: "Mystery multiplayer yang tetap aktif dimainkan komunitas.",
            placeId: 142823291,
            category: ["rating", "popular", "party"],
            tag: "RATING",
            url: "https://www.roblox.com/games/142823291/Murder-Mystery-2"
        },

        {
            title: "Dress To Impress",
            description: "Fashion competition dengan runway dan voting.",
            placeId: 15101393054,
            category: ["rating", "popular", "party"],
            tag: "RATING",
            url: "https://www.roblox.com/games/15101393054/Dress-To-Impress"
        },

        {
            title: "NUNGGUAN | Broken Silence",
            description: "Horror story dengan atmosfer, mystery dan chapter.",
            placeId: 125847422162067,
            category: ["rating", "viral", "popular", "horror"],
            tag: "RATING",
            url: "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
        },


        /* =================================================
           4. REALISTIC — 10
           ================================================= */

        {
            title: "Realistic Drive Simulator Indonesia",
            description: "Kota fiksi terinspirasi beberapa kota Indonesia dengan driving dan roleplay.",
            placeId: 10189328024,
            category: ["realistic", "openworld", "popular", "viral"],
            tag: "REALISTIC",
            url: "https://www.roblox.com/games/10189328024/Realistic-Drive-Simulator-Indonesia"
        },

        {
            title: "Gunung Kambuno",
            description: "Gunung dengan hutan, danau, air terjun dan jalur alam.",
            placeId: 90996930447931,
            category: ["realistic", "viral", "popular", "rating", "openworld"],
            tag: "REALISTIC",
            url: "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
        },

        {
            title: "MOUNT TRANGGULASIH",
            description: "Savannah dan jalur hiking dengan suasana alam.",
            placeId: 74052392386319,
            category: ["realistic", "viral", "popular", "rating", "openworld"],
            tag: "REALISTIC",
            url: "https://www.roblox.com/games/74052392386319/MOUNT-TRANGGULASIH"
        },

        {
            title: "MOUNT RINJANI",
            description: "Gunung dengan hutan berkabut, medan terjal dan Segara Anak.",
            placeId: 138149789228609,
            category: ["realistic", "rating", "openworld"],
            tag: "REALISTIC",
            url: "https://www.roblox.com/games/138149789228609/MOUNT-RINJANI"
        },

        {
            title: "Mount Sumbing",
            description: "Hiking dengan cuaca, kabut, camp dan cinematic view.",
            placeId: 14963184269,
            category: ["realistic", "rating", "openworld"],
            tag: "REALISTIC",
            url: "https://www.roblox.com/games/14963184269/Mount-Sumbing"
        },

        {
            title: "Mount Merbabu",
            description: "Savannah, hutan pinus dan panorama pegunungan.",
            placeId: 114440555601511,
            category: ["realistic", "rating", "openworld", "new"],
            tag: "REALISTIC",
            url: "https://www.roblox.com/games/114440555601511/MOUNT-MERBABU"
        },

        {
            title: "Mount IJEN",
            description: "Kawah Ijen dengan hutan tropis, kabut dan Blue Fire.",
            placeId: 98736259765840,
            category: ["realistic", "openworld", "new"],
            tag: "REALISTIC",
            url: "https://www.roblox.com/games/98736259765840/MOUNT-IJEN"
        },

        {
            title: "Saat Teduh",
            description: "Hutan hijau, laut, fishing dan suasana hangout semi-realistic.",
            placeId: 80559954948316,
            category: ["realistic", "party", "openworld", "viral"],
            tag: "REALISTIC",
            url: "https://www.roblox.com/games/80559954948316/SAAT-TEDUH"
        },

        {
            title: "MOUNT SUMBING [NEW]",
            description: "Eksplorasi gunung dengan tiga puncak, cuaca dan cinematic view.",
            placeId: 118392527498403,
            category: ["realistic", "openworld", "new"],
            tag: "REALISTIC",
            url: "https://www.roblox.com/games/118392527498403/Mount-Sumbing"
        },

        {
            title: "Ekspedisi Gunung Rinjani",
            description: "Ekspedisi Rinjani dengan checkpoint, carry, dance dan kendaraan.",
            placeId: 95656495100644,
            category: ["realistic", "openworld", "new"],
            tag: "REALISTIC",
            url: "https://www.roblox.com/games/95656495100644/Ekspedisi-Gunung-Rinjani"
        },


        /* =================================================
           5. OPEN WORLD — 10
           ================================================= */

        {
            title: "Realistic Drive Simulator Indonesia",
            description: "Kota open-world Indonesia untuk driving dan roleplay.",
            placeId: 10189328024,
            category: ["openworld", "realistic", "popular", "viral"],
            tag: "OPEN WORLD",
            url: "https://www.roblox.com/games/10189328024/Realistic-Drive-Simulator-Indonesia"
        },

        {
            title: "Brookhaven RP",
            description: "Dunia sosial open-world dengan rumah, kendaraan dan roleplay.",
            placeId: 4924922222,
            category: ["openworld", "popular", "party", "rating"],
            tag: "OPEN WORLD",
            url: "https://www.roblox.com/games/4924922222/Brookhaven-RP"
        },

        {
            title: "Blox Fruits",
            description: "Dunia luas dengan pulau, quest, combat dan eksplorasi.",
            placeId: 2753915549,
            category: ["openworld", "popular", "rating"],
            tag: "OPEN WORLD",
            url: "https://www.roblox.com/games/2753915549/Blox-Fruits"
        },

        {
            title: "Gunung Kambuno",
            description: "Eksplorasi hutan, danau, air terjun dan puncak.",
            placeId: 90996930447931,
            category: ["openworld", "viral", "popular", "realistic", "rating"],
            tag: "OPEN WORLD",
            url: "https://www.roblox.com/games/90996930447931/Gunung-Kambuno"
        },

        {
            title: "MOUNT RINJANI",
            description: "Eksplorasi jalur gunung sampai kawasan Segara Anak.",
            placeId: 138149789228609,
            category: ["openworld", "realistic", "rating"],
            tag: "OPEN WORLD",
            url: "https://www.roblox.com/games/138149789228609/MOUNT-RINJANI"
        },

        {
            title: "MOUNT TRANGGULASIH",
            description: "Eksplorasi savannah dan jalur pegunungan.",
            placeId: 74052392386319,
            category: ["openworld", "realistic", "viral", "popular", "rating"],
            tag: "OPEN WORLD",
            url: "https://www.roblox.com/games/74052392386319/MOUNT-TRANGGULASIH"
        },

        {
            title: "Mount Merbabu",
            description: "Eksplorasi savannah, hutan pinus dan pegunungan.",
            placeId: 114440555601511,
            category: ["openworld", "realistic", "new", "rating"],
            tag: "OPEN WORLD",
            url: "https://www.roblox.com/games/114440555601511/MOUNT-MERBABU"
        },

        {
            title: "Mount IJEN",
            description: "Eksplorasi Kawah Ijen dan Blue Fire.",
            placeId: 98736259765840,
            category: ["openworld", "realistic", "new"],
            tag: "OPEN WORLD",
            url: "https://www.roblox.com/games/98736259765840/MOUNT-IJEN"
        },

        {
            title: "Saat Teduh",
            description: "Hutan, laut, fishing, treasure hunting dan hangout.",
            placeId: 80559954948316,
            category: ["openworld", "party", "realistic", "viral"],
            tag: "OPEN WORLD",
            url: "https://www.roblox.com/games/80559954948316/SAAT-TEDUH"
        },

        {
            title: "MOUNT SUMBING [NEW]",
            description: "Eksplorasi tiga puncak gunung dengan weather dan freecam.",
            placeId: 118392527498403,
            category: ["openworld", "realistic", "new"],
            tag: "OPEN WORLD",
            url: "https://www.roblox.com/games/118392527498403/Mount-Sumbing"
        },


        /* =================================================
           6. HORROR — 10
           ================================================= */

        {
            title: "Forsaken",
            description: "Horror multiplayer dengan survival dan gameplay kompetitif.",
            placeId: 18687417158,
            category: ["horror", "popular", "trending"],
            tag: "HORROR",
            url: "https://www.roblox.com/games/18687417158/Forsaken"
        },

        {
            title: "Evade",
            description: "Survival horror dengan kejar-kejaran dan map multiplayer.",
            placeId: 9872472334,
            category: ["horror", "popular", "party"],
            tag: "HORROR",
            url: "https://www.roblox.com/games/9872472334/Evade"
        },

        {
            title: "DOORS",
            description: "Horror exploration dengan pintu, entity dan puzzle.",
            placeId: 6516141723,
            category: ["horror", "popular", "rating"],
            tag: "HORROR",
            url: "https://www.roblox.com/games/6516141723/DOORS"
        },

        {
            title: "Dandy's World",
            description: "Horror survival dengan karakter unik dan dunia penuh bahaya.",
            placeId: 16124321365,
            category: ["horror", "popular", "new"],
            tag: "HORROR",
            url: "https://www.roblox.com/games/16124321365/Dandys-World"
        },

        {
            title: "NUNGGUAN | Broken Silence",
            description: "Psychological horror Indonesia dengan mystery dan chapter.",
            placeId: 125847422162067,
            category: ["horror", "viral", "popular", "rating"],
            tag: "HORROR ID",
            url: "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
        },

        {
            title: "KERAMAT Dusun Pocong",
            description: "Horror Indonesia bertema desa dan pemakaman keramat.",
            placeId: 138879663836413,
            category: ["horror", "viral", "new"],
            tag: "HORROR ID",
            url: "https://www.roblox.com/games/138879663836413/KERAMAT-Dusun-Pocong"
        },

        {
            title: "MOUNT SIJJIN",
            description: "Pendakian horror dengan jumpscare dan kejadian supernatural.",
            placeId: 116761724761682,
            category: ["horror", "viral", "new"],
            tag: "HORROR ID",
            url: "https://www.roblox.com/games/116761724761682/MOUNT-SIJJIN"
        },

        {
            title: "Ojek Anomalies",
            description: "Analog horror Indonesia dengan suasana jalan malam dan ojek.",
            placeId: 93891127569519,
            category: ["horror", "new"],
            tag: "HORROR ID",
            url: "https://www.roblox.com/games/93891127569519/Ojek-Anomalies"
        },

        {
            title: "MOUNT IJEN",
            description: "Eksplorasi Kawah Ijen dengan kabut, malam dan Blue Fire.",
            placeId: 98736259765840,
            category: ["horror", "realistic", "new"],
            tag: "HORROR",
            url: "https://www.roblox.com/games/98736259765840/MOUNT-IJEN"
        },

        {
            title: "Piggy",
            description: "Survival horror dengan puzzle, chase dan berbagai chapter.",
            placeId: 6219326244,
            category: ["horror", "popular", "rating"],
            tag: "HORROR",
            url: "https://www.roblox.com/games/6219326244/Piggy"
        },


        /* =================================================
           7. PARTY — 10
           ================================================= */

        {
            title: "SHELL PARTY",
            description: "Gas station party 24/7 dengan live music, dance dan social hangout.",
            placeId: 110172784379358,
            category: ["party", "viral", "new"],
            tag: "PARTY",
            url: "https://www.roblox.com/games/110172784379358/SHELL-PARTY"
        },

        {
            title: "Stop the Timer",
            description: "Party & casual game dengan banyak gamemode dan pertandingan cepat.",
            placeId: 139988436996662,
            category: ["party", "viral", "popular"],
            tag: "PARTY",
            url: "https://www.roblox.com/games/139988436996662/Stop-the-Timer"
        },

        {
            title: "Brookhaven RP",
            description: "Hangout, roleplay dan aktivitas sosial bersama teman.",
            placeId: 4924922222,
            category: ["party", "popular", "openworld", "rating"],
            tag: "PARTY",
            url: "https://www.roblox.com/games/4924922222/Brookhaven-RP"
        },

        {
            title: "Adopt Me!",
            description: "Social roleplay dengan pet, rumah dan aktivitas bersama.",
            placeId: 920587237,
            category: ["party", "popular", "rating"],
            tag: "PARTY",
            url: "https://www.roblox.com/games/920587237/Adopt-Me"
        },

        {
            title: "Dress To Impress",
            description: "Fashion party dengan runway, outfit dan voting.",
            placeId: 15101393054,
            category: ["party", "popular", "rating"],
            tag: "PARTY",
            url: "https://www.roblox.com/games/15101393054/Dress-To-Impress"
        },

        {
            title: "Murder Mystery 2",
            description: "Multiplayer social deduction dengan round cepat.",
            placeId: 142823291,
            category: ["party", "popular", "rating"],
            tag: "PARTY",
            url: "https://www.roblox.com/games/142823291/Murder-Mystery-2"
        },

        {
            title: "Saat Teduh",
            description: "Hangout santai dengan dance, music, fishing dan teman.",
            placeId: 80559954948316,
            category: ["party", "viral", "realistic", "openworld"],
            tag: "PARTY",
            url: "https://www.roblox.com/games/80559954948316/SAAT-TEDUH"
        },

        {
            title: "Indo Hangout",
            description: "Hangout Indonesia dengan voice chat, fishing, event dan social activities.",
            placeId: 9788848685,
            category: ["party", "rating", "openworld"],
            tag: "PARTY ID",
            url: "https://www.roblox.com/games/9788848685/Indo-Hangout"
        },

        {
            title: "Epic Minigames",
            description: "Kumpulan minigame multiplayer untuk dimainkan bersama teman.",
            placeId: 277751860,
            category: ["party", "popular", "rating"],
            tag: "PARTY",
            url: "https://www.roblox.com/games/277751860/Epic-Minigames"
        },

        {
            title: "Work at a Pizza Place",
            description: "Social roleplay klasik dengan pekerjaan, rumah dan aktivitas bersama.",
            placeId: 192800,
            category: ["party", "popular", "openworld"],
            tag: "PARTY",
            url: "https://www.roblox.com/games/192800/Work-at-a-Pizza-Place"
        },


        /* =================================================
           8. MAP BARU — 10
           ================================================= */

        {
            title: "KERAMAT Dusun Pocong",
            description: "Horror Indonesia dengan desa, pemakaman dan suasana mistis.",
            placeId: 138879663836413,
            category: ["new", "horror", "viral"],
            tag: "MAP BARU",
            url: "https://www.roblox.com/games/138879663836413/KERAMAT-Dusun-Pocong"
        },

        {
            title: "Mount Merbabu",
            description: "Eksplorasi Merbabu dengan savannah dan hutan pinus.",
            placeId: 114440555601511,
            category: ["new", "realistic", "openworld", "rating"],
            tag: "MAP BARU",
            url: "https://www.roblox.com/games/114440555601511/MOUNT-MERBABU"
        },

        {
            title: "MOUNT SIJJIN",
            description: "Pendakian horror dengan unsur mistis dan jumpscare.",
            placeId: 116761724761682,
            category: ["new", "horror", "viral"],
            tag: "MAP BARU",
            url: "https://www.roblox.com/games/116761724761682/MOUNT-SIJJIN"
        },

        {
            title: "MOUNT SUMBING [NEW]",
            description: "Map gunung dengan tiga puncak, weather dan cinematic.",
            placeId: 118392527498403,
            category: ["new", "realistic", "openworld"],
            tag: "MAP BARU",
            url: "https://www.roblox.com/games/118392527498403/Mount-Sumbing"
        },

        {
            title: "Ekspedisi Gunung Rinjani",
            description: "Ekspedisi baru dengan checkpoint, dance, carry dan kendaraan.",
            placeId: 95656495100644,
            category: ["new", "realistic", "openworld"],
            tag: "MAP BARU",
            url: "https://www.roblox.com/games/95656495100644/Ekspedisi-Gunung-Rinjani"
        },

        {
            title: "SHELL PARTY",
            description: "Party map baru dengan live music, dance dan social hangout.",
            placeId: 110172784379358,
            category: ["new", "party", "viral"],
            tag: "MAP BARU",
            url: "https://www.roblox.com/games/110172784379358/SHELL-PARTY"
        },

        {
            title: "Ojek Anomalies",
            description: "Horror urban Indonesia bertema ojek dan jalan malam.",
            placeId: 93891127569519,
            category: ["new", "horror"],
            tag: "MAP BARU",
            url: "https://www.roblox.com/games/93891127569519/Ojek-Anomalies"
        },

        {
            title: "Saat Teduh",
            description: "Hangout alam dengan laut, hutan, fishing dan dance.",
            placeId: 80559954948316,
            category: ["new", "party", "realistic", "openworld"],
            tag: "MAP BARU",
            url: "https://www.roblox.com/games/80559954948316/SAAT-TEDUH"
        },

        {
            title: "Mount IJEN",
            description: "Eksplorasi Ijen dengan kawah, kabut dan Blue Fire.",
            placeId: 98736259765840,
            category: ["new", "realistic", "openworld", "horror"],
            tag: "MAP BARU",
            url: "https://www.roblox.com/games/98736259765840/MOUNT-IJEN"
        },

        {
            title: "The Hunt: Roblox 20",
            description: "Event besar Roblox 20 tahun yang sedang berlangsung.",
            placeId: 74205509034203,
            category: ["new", "viral", "popular"],
            tag: "EVENT BARU",
            url: "https://www.roblox.com/games/74205509034203"
        }
    ],


    /* =====================================================
       EXPERIENCE TERKINI
       ===================================================== */

    experiences: [

        {
            title: "Brookhaven RP",
            description: "Roleplay sosial paling dikenal di Roblox.",
            placeId: 4924922222,
            tag: "TRENDING",
            url: "https://www.roblox.com/games/4924922222/Brookhaven-RP"
        },

        {
            title: "Blox Fruits",
            description: "Adventure RPG dengan dunia luas.",
            placeId: 2753915549,
            tag: "TRENDING",
            url: "https://www.roblox.com/games/2753915549/Blox-Fruits"
        },

        {
            title: "RIVALS",
            description: "Competitive shooter cepat.",
            placeId: 17625359962,
            tag: "TRENDING",
            url: "https://www.roblox.com/games/17625359962/RIVALS"
        },

        {
            title: "99 Nights in the Forest",
            description: "Survival adventure di tengah hutan.",
            placeId: 79546208627805,
            tag: "TRENDING",
            url: "https://www.roblox.com/games/79546208627805"
        },

        {
            title: "Murder Mystery 2",
            description: "Social deduction multiplayer.",
            placeId: 142823291,
            tag: "POPULAR",
            url: "https://www.roblox.com/games/142823291/Murder-Mystery-2"
        },

        {
            title: "Adopt Me!",
            description: "Pet dan social roleplay.",
            placeId: 920587237,
            tag: "POPULAR",
            url: "https://www.roblox.com/games/920587237/Adopt-Me"
        },

        {
            title: "Dress To Impress",
            description: "Fashion competition dan runway.",
            placeId: 15101393054,
            tag: "TRENDING",
            url: "https://www.roblox.com/games/15101393054/Dress-To-Impress"
        },

        {
            title: "Forsaken",
            description: "Horror multiplayer yang sedang ramai.",
            placeId: 18687417158,
            tag: "HORROR",
            url: "https://www.roblox.com/games/18687417158/Forsaken"
        },

        {
            title: "The Hunt: Roblox 20",
            description: "Event resmi perayaan 20 tahun Roblox.",
            placeId: 74205509034203,
            tag: "EVENT",
            url: "https://www.roblox.com/games/74205509034203"
        },

        {
            title: "NUNGGUAN | Broken Silence",
            description: "Horror story Indonesia dengan chapter dan mystery.",
            placeId: 125847422162067,
            tag: "VIRAL ID",
            url: "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
        }
    ],


    /* =====================================================
       BERITA ROBLOX
       ===================================================== */

    news: [

        {
            title: "The Hunt: Roblox 20 Resmi Berlangsung",
            description: "Roblox merayakan ulang tahun ke-20 melalui event The Hunt: Roblox 20.",
            date: "16 September 2026",
            source: "Roblox Newsroom",
            image: "",
            url: "https://about.roblox.com/id/newsroom/2026/09/join-the-hunt-roblox-20"
        },

        {
            title: "Roblox 20 Mengajak Pemain Menjelajahi 20 Tahun Sejarah Roblox",
            description: "Pemain dapat mengikuti perjalanan dari game klasik hingga pengalaman modern.",
            date: "September 2026",
            source: "Roblox",
            image: "",
            url: "https://about.roblox.com/id/newsroom/2026/09/join-the-hunt-roblox-20"
        },

        {
            title: "Roblox Fall Games Preview 2026",
            description: "Roblox memperkenalkan sejumlah game dan update yang hadir pada musim gugur 2026.",
            date: "2 September 2026",
            source: "Roblox Newsroom",
            image: "",
            url: "https://about.roblox.com/en-au/newsroom/2026/09/roblox-fall-games-preview"
        },

        {
            title: "Roblox Trending Games Terus Berubah",
            description: "Halaman Trending Roblox menampilkan pengalaman yang mengalami pertumbuhan playtime tercepat.",
            date: "September 2026",
            source: "Roblox",
            image: "",
            url: "https://www.roblox.com/id/charts/top-trending"
        },

        {
            title: "NUNGGUAN Mendapat Update Chapter",
            description: "NUNGGUAN: Broken Silence terus mengembangkan chapter horror story dan mystery.",
            date: "9 September 2026",
            source: "Roblox",
            image: "",
            url: "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence"
        }
    ],


    /* =====================================================
       CREATOR / STUDIO
       ===================================================== */

    creator: [

        {
            title: "Roblox Creator Hub",
            description: "Pusat resmi untuk membuat dan mengembangkan pengalaman Roblox.",
            tag: "OFFICIAL",
            url: "https://create.roblox.com/"
        },

        {
            title: "Creator Documentation",
            description: "Dokumentasi resmi Roblox untuk scripting, building dan publishing.",
            tag: "DOCS",
            url: "https://create.roblox.com/docs"
        },

        {
            title: "Creator Store",
            description: "Model, plugin, audio dan asset untuk membantu development.",
            tag: "STORE",
            url: "https://create.roblox.com/store"
        },

        {
            title: "Roblox Studio",
            description: "Software utama untuk membuat pengalaman Roblox.",
            tag: "STUDIO",
            url: "https://create.roblox.com/docs/studio"
        },

        {
            title: "Roblox Creator Dashboard",
            description: "Kelola experience, analytics, monetization dan creator tools.",
            tag: "DASHBOARD",
            url: "https://create.roblox.com/dashboard"
        },

        {
            title: "Roblox Developer Forum",
            description: "Forum komunitas developer Roblox.",
            tag: "COMMUNITY",
            url: "https://devforum.roblox.com/"
        }
    ],


    /* =====================================================
       TRENDING
       ===================================================== */

    trending: [

        {
            title: "Brookhaven RP",
            description: "Salah satu experience dengan jumlah pemain aktif yang sangat besar.",
            tag: "#1",
            url: "https://www.roblox.com/games/4924922222/Brookhaven-RP",
            placeId: 4924922222
        },

        {
            title: "Blox Fruits",
            description: "Adventure RPG populer dengan dunia dan progression besar.",
            tag: "#2",
            url: "https://www.roblox.com/games/2753915549/Blox-Fruits",
            placeId: 2753915549
        },

        {
            title: "RIVALS",
            description: "Competitive shooter dengan match cepat.",
            tag: "#3",
            url: "https://www.roblox.com/games/17625359962/RIVALS",
            placeId: 17625359962
        },

        {
            title: "99 Nights in the Forest",
            description: "Survival horror adventure yang sedang ramai.",
            tag: "#4",
            url: "https://www.roblox.com/games/79546208627805",
            placeId: 79546208627805
        },

        {
            title: "Murder Mystery 2",
            description: "Social deduction klasik yang tetap ramai dimainkan.",
            tag: "#5",
            url: "https://www.roblox.com/games/142823291/Murder-Mystery-2",
            placeId: 142823291
        },

        {
            title: "NUNGGUAN | Broken Silence",
            description: "Horror story Indonesia dengan jutaan kunjungan.",
            tag: "VIRAL ID",
            url: "https://www.roblox.com/games/125847422162067/NUNGGUAN-Broken-Silence",
            placeId: 125847422162067
        },

        {
            title: "Gunung Kambuno",
            description: "Map Indonesia dengan lebih dari satu juta kunjungan.",
            tag: "MAP ID",
            url: "https://www.roblox.com/games/90996930447931/Gunung-Kambuno",
            placeId: 90996930447931
        },

        {
            title: "SHELL PARTY",
            description: "Party hangout baru dengan live music dan dance.",
            tag: "PARTY",
            url: "https://www.roblox.com/games/110172784379358/SHELL-PARTY",
            placeId: 110172784379358
        },

        {
            title: "Stop the Timer",
            description: "Party game dengan banyak mode permainan.",
            tag: "PARTY",
            url: "https://www.roblox.com/games/139988436996662/Stop-the-Timer",
            placeId: 139988436996662
        },

        {
            title: "The Hunt: Roblox 20",
            description: "Event resmi Roblox yang sedang berlangsung.",
            tag: "EVENT",
            url: "https://www.roblox.com/games/74205509034203",
            placeId: 74205509034203
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

    if (!url) {
        return "#";
    }

    try {

        const parsed = new URL(url, window.location.href);

        if (
            parsed.protocol === "https:" ||
            parsed.protocol === "http:"
        ) {
            return parsed.href;
        }

    } catch (error) {
        console.warn("URL tidak valid:", url);
    }

    return "#";
}


function placeholderImage(title) {

    const text = encodeURIComponent(
        String(title || "FANDIRA").slice(0, 35)
    );

    return `
        <div class="fandira-image-placeholder">
            <span>${escapeHTML(title || "FANDIRA")}</span>
        </div>
    `;
}


function imageHTML(src, alt) {

    if (!src) {
        return placeholderImage(alt);
    }

    return `
        <img
            src="${safeURL(src)}"
            alt="${escapeHTML(alt)}"
            loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
        >
        <div class="fandira-image-placeholder" style="display:none;">
            <span>${escapeHTML(alt)}</span>
        </div>
    `;
}


/* =========================================================
   ROBLOX THUMBNAIL
   ========================================================= */

async function getPlaceThumbnails(placeIds) {

    const result = {};

    const ids = [
        ...new Set(
            placeIds
                .map(Number)
                .filter(Boolean)
        )
    ];

    if (!ids.length) {
        return result;
    }

    try {

        const endpoint =
            "https://thumbnails.roblox.com/v1/places/gameicons" +
            "?placeIds=" +
            encodeURIComponent(ids.join(",")) +
            "&size=768x432" +
            "&format=Png" +
            "&isCircular=false";

        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(
                "Thumbnail Roblox gagal: " +
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
            "Tidak bisa mengambil thumbnail Roblox:",
            error
        );

    }

    return result;
}


/* =========================================================
   CARD WRAPPER
   ========================================================= */

function cardLink(url, content) {

    return `
        <a
            href="${safeURL(url)}"
            target="_blank"
            rel="noopener noreferrer"
            class="fandira-card-link"
        >
            ${content}
        </a>
    `;
}


/* =========================================================
   UGC
   ========================================================= */

function renderUGC() {

    const grid =
        document.getElementById("ugcGrid");

    if (!grid) {
        return;
    }

    try {

        grid.innerHTML =
            FANDIRA.ugc
                .map(item => {

                    return `
                        <article class="ugc-card">

                            ${cardLink(
                                item.url,
                                `
                                ${
                                    item.image
                                    ? imageHTML(
                                        item.image,
                                        item.title
                                    )
                                    : placeholderImage(
                                        item.title
                                    )
                                }

                                <div class="card-body">

                                    <span class="card-tag">
                                        ${escapeHTML(item.tag)}
                                    </span>

                                    <h3>
                                        ${escapeHTML(item.title)}
                                    </h3>

                                    <p>
                                        ${escapeHTML(item.creator)}
                                    </p>

                                    <strong>
                                        ${escapeHTML(item.price)}
                                    </strong>

                                </div>
                                `
                            )}

                        </article>
                    `;

                })
                .join("");

    } catch (error) {

        console.error(
            "UGC gagal dirender:",
            error
        );

        grid.innerHTML = "";
    }
}


/* =========================================================
   MAP
   ========================================================= */

let currentMapFilter = "all";


async function renderMaps(filter = "all") {

    const grid =
        document.getElementById("mapsGrid");

    if (!grid) {
        return;
    }

    currentMapFilter = filter;

    try {

        let maps =
            FANDIRA.maps.filter(map => {

                if (filter === "all") {
                    return true;
                }

                return (
                    Array.isArray(map.category) &&
                    map.category.includes(filter)
                );

            });


        /* ---------------------------------------------
           TOP 10 UNTUK FILTER
           --------------------------------------------- */

        maps = maps.slice(0, 10);


        if (!maps.length) {

            grid.innerHTML = `
                <div class="empty-state">
                    Belum ada map untuk kategori ini.
                </div>
            `;

            return;
        }


        const thumbnails =
            await getPlaceThumbnails(
                maps.map(map => map.placeId)
            );


        grid.innerHTML =
            maps
                .map((map, index) => {

                    const thumbnail =
                        thumbnails[String(map.placeId)] ||
                        "";


                    const rank =
                        filter !== "all"
                        ? `
                            <span class="map-rank">
                                #${index + 1}
                            </span>
                          `
                        : "";


                    return `
                        <article class="map-card">

                            ${cardLink(
                                map.url,
                                `
                                <div class="map-image-wrap">

                                    ${
                                        thumbnail
                                        ? imageHTML(
                                            thumbnail,
                                            map.title
                                        )
                                        : placeholderImage(
                                            map.title
                                        )
                                    }

                                    ${rank}

                                </div>


                                <div class="card-body">

                                    <span class="card-tag">
                                        ${escapeHTML(map.tag)}
                                    </span>

                                    <h3>
                                        ${escapeHTML(map.title)}
                                    </h3>

                                    <p>
                                        ${escapeHTML(
                                            map.description
                                        )}
                                    </p>

                                </div>
                                `
                            )}

                        </article>
                    `;

                })
                .join("");

    } catch (error) {

        console.error(
            "Map gagal dirender:",
            error
        );

        grid.innerHTML = `
            <div class="empty-state">
                Map sedang dimuat ulang...
            </div>
        `;
    }
}


/* =========================================================
   EXPERIENCE
   ========================================================= */

async function renderExperiences() {

    const grid =
        document.getElementById("gamesGrid");

    if (!grid) {
        return;
    }

    try {

        const thumbnails =
            await getPlaceThumbnails(
                FANDIRA.experiences
                    .map(item => item.placeId)
            );


        grid.innerHTML =
            FANDIRA.experiences
                .map(item => {

                    const thumbnail =
                        thumbnails[String(item.placeId)] ||
                        "";


                    return `
                        <article class="game-card">

                            ${cardLink(
                                item.url,
                                `
                                ${
                                    thumbnail
                                    ? imageHTML(
                                        thumbnail,
                                        item.title
                                    )
                                    : placeholderImage(
                                        item.title
                                    )
                                }

                                <div class="card-body">

                                    <span class="card-tag">
                                        ${escapeHTML(item.tag)}
                                    </span>

                                    <h3>
                                        ${escapeHTML(item.title)}
                                    </h3>

                                    <p>
                                        ${escapeHTML(
                                            item.description
                                        )}
                                    </p>

                                </div>
                                `
                            )}

                        </article>
                    `;

                })
                .join("");

    } catch (error) {

        console.error(
            "Experience gagal dirender:",
            error
        );

    }
}


/* =========================================================
   NEWS
   ========================================================= */

function renderNews() {

    const grid =
        document.getElementById("newsGrid");

    if (!grid) {
        return;
    }

    try {

        grid.innerHTML =
            FANDIRA.news
                .map(item => {

                    return `
                        <article class="news-card">

                            ${cardLink(
                                item.url,
                                `
                                ${
                                    item.image
                                    ? imageHTML(
                                        item.image,
                                        item.title
                                    )
                                    : placeholderImage(
                                        item.source
                                    )
                                }

                                <div class="card-body">

                                    <span class="card-tag">
                                        ${escapeHTML(item.source)}
                                    </span>

                                    <h3>
                                        ${escapeHTML(item.title)}
                                    </h3>

                                    <p>
                                        ${escapeHTML(
                                            item.description
                                        )}
                                    </p>

                                    <small>
                                        ${escapeHTML(item.date)}
                                    </small>

                                </div>
                                `
                            )}

                        </article>
                    `;

                })
                .join("");

    } catch (error) {

        console.error(
            "News gagal dirender:",
            error
        );

    }
}


/* =========================================================
   CREATOR
   ========================================================= */

function renderCreator() {

    const grid =
        document.getElementById("creatorGrid");

    if (!grid) {
        return;
    }

    try {

        grid.innerHTML =
            FANDIRA.creator
                .map(item => {

                    return `
                        <article class="creator-card">

                            ${cardLink(
                                item.url,
                                `
                                <div class="card-body">

                                    <span class="card-tag">
                                        ${escapeHTML(item.tag)}
                                    </span>

                                    <h3>
                                        ${escapeHTML(item.title)}
                                    </h3>

                                    <p>
                                        ${escapeHTML(
                                            item.description
                                        )}
                                    </p>

                                </div>
                                `
                            )}

                        </article>
                    `;

                })
                .join("");

    } catch (error) {

        console.error(
            "Creator gagal dirender:",
            error
        );

    }
}


/* =========================================================
   TRENDING
   ========================================================= */

async function renderTrending() {

    const grid =
        document.getElementById("trendingGrid");

    if (!grid) {
        return;
    }

    try {

        const thumbnails =
            await getPlaceThumbnails(
                FANDIRA.trending
                    .map(item => item.placeId)
                    .filter(Boolean)
            );


        grid.innerHTML =
            FANDIRA.trending
                .map(item => {

                    const thumbnail =
                        item.placeId
                        ? thumbnails[String(item.placeId)] || ""
                        : "";


                    return `
                        <article class="trending-card">

                            ${cardLink(
                                item.url,
                                `
                                ${
                                    thumbnail
                                    ? imageHTML(
                                        thumbnail,
                                        item.title
                                    )
                                    : placeholderImage(
                                        item.title
                                    )
                                }

                                <div class="card-body">

                                    <span class="card-tag">
                                        ${escapeHTML(item.tag)}
                                    </span>

                                    <h3>
                                        ${escapeHTML(item.title)}
                                    </h3>

                                    <p>
                                        ${escapeHTML(
                                            item.description
                                        )}
                                    </p>

                                </div>
                                `
                            )}

                        </article>
                    `;

                })
                .join("");

    } catch (error) {

        console.error(
            "Trending gagal dirender:",
            error
        );

    }
}


/* =========================================================
   FILTER MAP
   ========================================================= */

function setupMapFilters() {

    const buttons =
        document.querySelectorAll(
            "[data-map-filter]"
        );


    if (!buttons.length) {
        return;
    }


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            async () => {

                buttons.forEach(btn => {
                    btn.classList.remove("active");
                });


                button.classList.add("active");


                const filter =
                    button.dataset.mapFilter ||
                    "all";


                await renderMaps(filter);

            }
        );

    });
}


/* =========================================================
   NAVIGATION
   ========================================================= */

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
                    document.querySelector(
                        targetId
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
        "%cFANDIRA",
        "font-size:24px;font-weight:bold;"
    );

    console.log(
        "Fandira website initialized."
    );


    /* Jangan menunggu thumbnail untuk
       membuat section lain tampil. */

    renderUGC();

    renderNews();

    renderCreator();

    setupNavigation();

    setupMapFilters();


    /* Render map pertama */

    await renderMaps("all");


    /* Experience */

    await renderExperiences();


    /* Trending */

    await renderTrending();


    console.log(
        "Fandira selesai dimuat."
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
                        "FANDIRA INIT ERROR:",
                        error
                    );
                });
        }
    );

} else {

    initFandira()
        .catch(error => {
            console.error(
                "FANDIRA INIT ERROR:",
                error
            );
        });

}
