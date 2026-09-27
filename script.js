/* =========================================================
   FANDIRA
   Roblox Portal
========================================================= */

"use strict";


/* =========================================================
   DATA
========================================================= */

const FANDIRA = {

    /* -----------------------------------------------------
       UGC
       Untuk tahap awal kita buat struktur datanya dahulu.
       Nanti bisa kita sambungkan ke katalog UGC Roblox.
    ----------------------------------------------------- */

    ugc: [
        {
            title: "The Hunt: Roblox 20",
            creator: "Roblox",
            type: "EVENT",
            price: "Event",
            image:
                "https://tr.rbxcdn.com/180DAY-4B5A1B0F1A7D7D7A4B0C6D9E8F7A6B5C/768/432/Image/Webp/noFilter",
            url:
                "https://www.roblox.com/games/74205509034203"
        },

        {
            title: "Roblox Avatar Items",
            creator: "Roblox Marketplace",
            type: "MARKETPLACE",
            price: "Lihat item",
            image:
                "https://tr.rbxcdn.com/180DAY-7b5a8e1b1d6a6e5b5c1b3e7c2c6a4f1e/420/420/Hat/Png",
            url:
                "https://www.roblox.com/catalog"
        },

        {
            title: "Trending Avatar Items",
            creator: "Roblox Marketplace",
            type: "TRENDING",
            price: "Marketplace",
            image:
                "https://tr.rbxcdn.com/180DAY-7b5a8e1b1d6a6e5b5c1b3e7c2c6a4f1e/420/420/Hat/Png",
            url:
                "https://www.roblox.com/catalog"
        },

        {
            title: "Roblox Marketplace",
            creator: "Roblox",
            type: "CATALOG",
            price: "Browse",
            image:
                "https://tr.rbxcdn.com/180DAY-7b5a8e1b1d6a6e5b5c1b3e7c2c6a4f1e/420/420/Hat/Png",
            url:
                "https://www.roblox.com/catalog"
        }
    ],



    /* -----------------------------------------------------
       MAP
    ----------------------------------------------------- */

    maps: [

        {
            title: "Driving Empire",
            description:
                "Dunia open-world bertema kendaraan dengan kota besar, jalan raya dan eksplorasi.",
            placeId: 3351674303,
            category: [
                "popular",
                "realistic",
                "openworld"
            ],
            tag: "REALISTIC",
            url:
                "https://www.roblox.com/games/3351674303/Driving-Empire"
        },

        {
            title: "The Hunt: Roblox 20",
            description:
                "Event Roblox 20 tahun dengan berbagai quest dan pengalaman dari dunia Roblox.",
            placeId: 74205509034203,
            category: [
                "viral",
                "popular",
                "new"
            ],
            tag: "VIRAL",
            url:
                "https://www.roblox.com/games/74205509034203"
        },

        {
            title: "Horror & Adventure",
            description:
                "Temukan pengalaman Roblox bertema horor dan petualangan yang sedang dicari pemain.",
            placeId: 74205509034203,
            category: [
                "horror",
                "viral"
            ],
            tag: "HORROR",
            url:
                "https://www.roblox.com/discover/?Keyword=horror"
        },

        {
            title: "Party Experiences",
            description:
                "Kumpulan pengalaman Roblox untuk bermain bersama teman dan komunitas.",
            placeId: 74205509034203,
            category: [
                "party",
                "popular"
            ],
            tag: "PARTY",
            url:
                "https://www.roblox.com/discover/?Keyword=party"
        }

    ],



    /* -----------------------------------------------------
       EXPERIENCE
    ----------------------------------------------------- */

    experiences: [

        {
            title: "The Hunt: Roblox 20",
            description:
                "Event resmi Roblox untuk merayakan 20 tahun Roblox, dengan quest dan hadiah eksklusif.",
            placeId: 74205509034203,
            tag: "EVENT",
            meta: "Roblox Presents",
            url:
                "https://www.roblox.com/games/74205509034203"
        },

        {
            title: "Driving Empire",
            description:
                "Experience open-world kendaraan dengan eksplorasi kota, mobil dan berbagai aktivitas.",
            placeId: 3351674303,
            tag: "OPEN WORLD",
            meta: "Driving",
            url:
                "https://www.roblox.com/games/3351674303/Driving-Empire"
        },

        {
            title: "Roblox Trending",
            description:
                "Jelajahi experience yang sedang mendapatkan perhatian pemain Roblox.",
            placeId: 74205509034203,
            tag: "TRENDING",
            meta: "Discover",
            url:
                "https://www.roblox.com/charts/top-trending"
        }

    ],



    /* -----------------------------------------------------
       NEWS
    ----------------------------------------------------- */

    news: [

        {
            title:
                "Join the Hunt: Roblox 20",

            description:
                "Roblox merayakan 20 tahun dengan event The Hunt: Roblox 20 yang berlangsung pada September 2026.",

            date:
                "16 September 2026",

            source:
                "Roblox Newsroom",

            image:
                "",

            url:
                "https://about.roblox.com/id/newsroom/2026/09/join-the-hunt-roblox-20"
        },

        {
            title:
                "Roblox Innovation Awards 2026",

            description:
                "Roblox menghadirkan Innovation Awards 2026 untuk merayakan creator dan inovasi dalam platform.",

            date:
                "September 2026",

            source:
                "Roblox Newsroom",

            image:
                "",

            url:
                "https://about.roblox.com/id/newsroom/2026/09/2026-roblox-innovation-awards"
        },

        {
            title:
                "The Hunt: Roblox 20",

            description:
                "Event ulang tahun Roblox menghadirkan perjalanan melewati berbagai era dan pengalaman Roblox.",

            date:
                "September 2026",

            source:
                "Roblox",

            image:
                "",

            url:
                "https://www.roblox.com/games/74205509034203"
        }

    ],



    /* -----------------------------------------------------
       CREATOR
    ----------------------------------------------------- */

    creator: [

        {
            title:
                "Roblox Creator Hub",

            description:
                "Dokumentasi resmi untuk developer dan creator Roblox.",

            tag:
                "DOCUMENTATION",

            url:
                "https://create.roblox.com/docs"
        },

        {
            title:
                "Roblox Studio",

            description:
                "Tempat membuat experience, map, scripting dan berbagai project Roblox.",

            tag:
                "STUDIO",

            url:
                "https://create.roblox.com/"
        },

        {
            title:
                "Creator Store",

            description:
                "Temukan model, plugin, audio dan resource untuk membantu pengembangan experience.",

            tag:
                "STORE",

            url:
                "https://create.roblox.com/store"
        }

    ],



    /* -----------------------------------------------------
       TRENDING
    ----------------------------------------------------- */

    trending: [

        {
            number: "01",
            title:
                "The Hunt: Roblox 20",
            description:
                "Event Roblox 20 tahun yang sedang berlangsung.",
            tag:
                "EVENT",
            url:
                "https://www.roblox.com/games/74205509034203"
        },

        {
            number: "02",
            title:
                "Roblox 20",
            description:
                "Perayaan dua dekade Roblox dan berbagai experience terkait.",
            tag:
                "TRENDING",
            url:
                "https://about.roblox.com/id/newsroom/2026/09/join-the-hunt-roblox-20"
        },

        {
            number: "03",
            title:
                "Driving Empire",
            description:
                "Experience open-world kendaraan dan eksplorasi.",
            tag:
                "OPEN WORLD",
            url:
                "https://www.roblox.com/games/3351674303/Driving-Empire"
        },

        {
            number: "04",
            title:
                "Creator Economy",
            description:
                "Dunia creator, development dan Roblox Studio.",
            tag:
                "CREATOR",
            url:
                "https://create.roblox.com/"
        }

    ]

};



/* =========================================================
   HELPERS
========================================================= */

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

        const url = new URL(value);

        if (
            url.protocol === "https:" ||
            url.protocol === "http:"
        ) {
            return url.href;
        }

    } catch (error) {}

    return "#";

}


function createImageFallback() {

    return `
        <div
            style="
                width:100%;
                height:100%;
                display:flex;
                align-items:center;
                justify-content:center;
                background:
                    radial-gradient(
                        circle at 30% 30%,
                        rgba(53,217,255,.22),
                        transparent 35%
                    ),
                    radial-gradient(
                        circle at 70% 70%,
                        rgba(155,92,255,.25),
                        transparent 40%
                    ),
                    #0d1124;
                color:#35d9ff;
                font-weight:900;
                font-size:13px;
                letter-spacing:1px;
            "
        >
            FANDIRA
        </div>
    `;

}



/* =========================================================
   ROBLOX THUMBNAILS
========================================================= */

/*
    Roblox menyediakan endpoint resmi untuk thumbnail
    experience berdasarkan Place ID.

    Endpoint:
    https://thumbnails.roblox.com/v1/places/gameicons
*/

async function getPlaceThumbnails(placeIds) {

    if (!placeIds.length) {
        return {};
    }

    const uniqueIds = [
        ...new Set(
            placeIds
                .map(Number)
                .filter(Boolean)
        )
    ];

    const url =
        "https://thumbnails.roblox.com/v1/places/gameicons" +
        "?placeIds=" +
        uniqueIds.join(",") +
        "&size=768x432" +
        "&format=Png" +
        "&isCircular=false";


    try {

        const response =
            await fetch(url);

        if (!response.ok) {
            throw new Error(
                "Thumbnail request failed"
            );
        }


        const json =
            await response.json();


        const result = {};


        (json.data || []).forEach(item => {

            if (
                item.targetId &&
                item.imageUrl
            ) {

                result[item.targetId] =
                    item.imageUrl;

            }

        });


        return result;

    } catch (error) {

        console.warn(
            "Fandira thumbnail error:",
            error
        );

        return {};

    }

}



/* =========================================================
   GENERIC IMAGE
========================================================= */

function imageHTML(
    image,
    alt
) {

    if (!image) {

        return createImageFallback();

    }


    return `
        <img
            src="${safeURL(image)}"
            alt="${escapeHTML(alt)}"
            loading="lazy"
            onerror="
                this.style.display='none';
                this.parentElement.innerHTML =
                '<div style=\\'
                    width:100%;
                    height:100%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    color:#35d9ff;
                    font-weight:900;
                    background:#0d1124;
                \\'>FANDIRA</div>';
            "
        >
    `;

}



/* =========================================================
   UGC RENDER
========================================================= */

function renderUGC() {

    const grid =
        document.getElementById(
            "ugcGrid"
        );

    if (!grid) return;


    grid.innerHTML =
        FANDIRA.ugc.map(item => {

            return `
                <a
                    class="ugc-card"
                    href="${safeURL(item.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="card-image">

                        ${imageHTML(
                            item.image,
                            item.title
                        )}

                    </div>


                    <div class="card-content">

                        <span class="card-tag">
                            ${escapeHTML(item.type)}
                        </span>


                        <h3>
                            ${escapeHTML(item.title)}
                        </h3>


                        <p>
                            ${escapeHTML(item.creator)}
                        </p>


                        <div class="card-meta">

                            <span class="ugc-price">
                                ${escapeHTML(item.price)}
                            </span>

                            <span>
                                ↗ Roblox
                            </span>

                        </div>

                    </div>

                </a>
            `;

        }).join("");

}



/* =========================================================
   MAP RENDER
========================================================= */

let currentMapFilter = "all";


let mapThumbnailCache = {};


async function renderMaps(
    filter = currentMapFilter
) {

    currentMapFilter =
        filter;


    const grid =
        document.getElementById(
            "mapsGrid"
        );

    if (!grid) return;


    const maps =
        FANDIRA.maps.filter(map => {

            if (filter === "all") {
                return true;
            }

            return (
                Array.isArray(map.category) &&
                map.category.includes(filter)
            );

        });


    if (!maps.length) {

        grid.innerHTML = `
            <div class="empty-state">
                Belum ada map dalam kategori ini.
            </div>
        `;

        return;

    }


    grid.innerHTML =
        maps.map(map => {

            const image =
                mapThumbnailCache[
                    map.placeId
                ] || "";


            return `
                <a
                    class="map-card"
                    href="${safeURL(map.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="card-image">

                        ${
                            image
                            ? imageHTML(
                                image,
                                map.title
                            )
                            : createImageFallback()
                        }

                    </div>


                    <div class="card-content">

                        <span class="card-tag">
                            ${escapeHTML(map.tag)}
                        </span>


                        <h3>
                            ${escapeHTML(map.title)}
                        </h3>


                        <p>
                            ${escapeHTML(map.description)}
                        </p>


                        <div class="card-meta">

                            <span>
                                Roblox
                            </span>

                            <span>
                                Main →
                            </span>

                        </div>

                    </div>

                </a>
            `;

        }).join("");


    const missingIds =
        maps
            .map(map => map.placeId)
            .filter(
                id =>
                    !mapThumbnailCache[id]
            );


    if (missingIds.length) {

        const thumbnails =
            await getPlaceThumbnails(
                missingIds
            );


        mapThumbnailCache =
            {
                ...mapThumbnailCache,
                ...thumbnails
            };


        maps.forEach(map => {

            const image =
                mapThumbnailCache[
                    map.placeId
                ];

            const card =
                grid.querySelector(
                    `a[href="${CSS.escape(map.url)}"]`
                );


            if (
                image &&
                card
            ) {

                const imageBox =
                    card.querySelector(
                        ".card-image"
                    );


                if (imageBox) {

                    imageBox.innerHTML =
                        imageHTML(
                            image,
                            map.title
                        );

                }

            }

        });

    }

}



/* =========================================================
   EXPERIENCE RENDER
========================================================= */

async function renderExperiences() {

    const grid =
        document.getElementById(
            "gamesGrid"
        );

    if (!grid) return;


    grid.innerHTML =
        FANDIRA.experiences.map(game => {

            return `
                <a
                    class="game-card"
                    href="${safeURL(game.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-place-id="${game.placeId}"
                >

                    <div class="card-image">

                        ${createImageFallback()}

                    </div>


                    <div class="card-content">

                        <span class="card-tag">
                            ${escapeHTML(game.tag)}
                        </span>


                        <h3>
                            ${escapeHTML(game.title)}
                        </h3>


                        <p>
                            ${escapeHTML(game.description)}
                        </p>


                        <div class="card-meta">

                            <span>
                                ${escapeHTML(game.meta)}
                            </span>

                            <span>
                                Main →
                            </span>

                        </div>

                    </div>

                </a>
            `;

        }).join("");


    const ids =
        FANDIRA.experiences
            .map(game => game.placeId);


    const thumbnails =
        await getPlaceThumbnails(ids);


    grid.querySelectorAll(
        ".game-card"
    ).forEach(card => {

        const id =
            Number(
                card.dataset.placeId
            );


        if (
            thumbnails[id]
        ) {

            const imageBox =
                card.querySelector(
                    ".card-image"
                );


            imageBox.innerHTML =
                imageHTML(
                    thumbnails[id],
                    card.querySelector("h3")
                        ?.textContent || "Roblox"
                );

        }

    });

}



/* =========================================================
   NEWS RENDER
========================================================= */

function renderNews() {

    const grid =
        document.getElementById(
            "newsGrid"
        );

    if (!grid) return;


    grid.innerHTML =
        FANDIRA.news.map(item => {

            return `
                <a
                    class="news-card"
                    href="${safeURL(item.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="card-image">

                        ${
                            item.image
                            ? imageHTML(
                                item.image,
                                item.title
                            )
                            : createImageFallback()
                        }

                    </div>


                    <div class="card-content">

                        <span class="news-source">
                            ${escapeHTML(item.source)}
                        </span>


                        <h3>
                            ${escapeHTML(item.title)}
                        </h3>


                        <p>
                            ${escapeHTML(item.description)}
                        </p>


                        <div class="card-meta">

                            <span>
                                ${escapeHTML(item.date)}
                            </span>

                            <span>
                                Baca →
                            </span>

                        </div>

                    </div>

                </a>
            `;

        }).join("");

}



/* =========================================================
   CREATOR RENDER
========================================================= */

function renderCreator() {

    const grid =
        document.getElementById(
            "creatorGrid"
        );

    if (!grid) return;


    grid.innerHTML =
        FANDIRA.creator.map(item => {

            return `
                <a
                    class="creator-card"
                    href="${safeURL(item.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div>

                        <span class="card-tag">
                            ${escapeHTML(item.tag)}
                        </span>


                        <h3>
                            ${escapeHTML(item.title)}
                        </h3>


                        <p>
                            ${escapeHTML(item.description)}
                        </p>

                    </div>


                    <div class="card-meta">

                        <span>
                            Roblox Creator
                        </span>

                        <span>
                            Buka →
                        </span>

                    </div>

                </a>
            `;

        }).join("");

}



/* =========================================================
   TRENDING RENDER
========================================================= */

function renderTrending() {

    const grid =
        document.getElementById(
            "trendingGrid"
        );

    if (!grid) return;


    grid.innerHTML =
        FANDIRA.trending.map(item => {

            return `
                <a
                    class="trending-card"
                    href="${safeURL(item.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <div class="trending-number">
                        ${escapeHTML(item.number)}
                    </div>


                    <span class="card-tag">
                        ${escapeHTML(item.tag)}
                    </span>


                    <h3 style="margin-top:14px;">
                        ${escapeHTML(item.title)}
                    </h3>


                    <p style="
                        color:#9ba3c7;
                        font-size:13px;
                        line-height:1.6;
                        margin-top:8px;
                    ">
                        ${escapeHTML(item.description)}
                    </p>


                    <div class="card-meta">

                        <span>
                            Trending
                        </span>

                        <span>
                            Buka →
                        </span>

                    </div>

                </a>
            `;

        }).join("");

}



/* =========================================================
   MAP FILTER
========================================================= */

function setupMapFilters() {

    const buttons =
        document.querySelectorAll(
            ".map-filter-button"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                buttons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                button.classList.add(
                    "active"
                );


                const filter =
                    button.dataset.mapFilter ||
                    "all";


                renderMaps(filter);

            }
        );

    });

}



/* =========================================================
   ACTIVE NAV
========================================================= */

function setupNavigation() {

    const links =
        document.querySelectorAll(
            "nav a"
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                links.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                link.classList.add(
                    "active"
                );

            }
        );

    });

}



/* =========================================================
   INIT
========================================================= */

async function initFandira() {

    console.log(
        "Fandira starting..."
    );


    renderUGC();

    renderNews();

    renderCreator();

    renderTrending();

    setupMapFilters();

    setupNavigation();


    await renderMaps("all");

    await renderExperiences();


    console.log(
        "Fandira loaded."
    );

}


if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initFandira
    );

} else {

    initFandira();

}
