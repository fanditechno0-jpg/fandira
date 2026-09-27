/* =========================================================
   FANDIRA
   ROBLOX AUTO CONTENT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadLatestUGC();

});


/* =========================================================
   ROBLOX MARKETPLACE
   UGC TERKINI
========================================================= */

async function loadLatestUGC() {

    const ugcGrid = document.querySelector(".ugc-grid");

    if (!ugcGrid) {
        return;
    }

    /*
        Roblox Marketplace API

        Category:
        11 = Accessories

        SortType:
        3 = Updated

        SortAggregation:
        1 = PastDay

        Limit:
        10
    */

    const apiURL =
        "https://catalog.roblox.com/v1/search/items/details" +
        "?Category=11" +
        "&Subcategory=19" +
        "&SortType=3" +
        "&SortAggregation=1" +
        "&Limit=10";


    try {

        showUGCLoading(ugcGrid);


        const response = await fetch(apiURL);


        if (!response.ok) {

            throw new Error(
                "Roblox API error: " +
                response.status
            );

        }


        const result = await response.json();


        if (
            !result ||
            !Array.isArray(result.data) ||
            result.data.length === 0
        ) {

            throw new Error(
                "Tidak ada UGC yang ditemukan."
            );

        }


        const items =
            result.data.slice(0, 4);


        const thumbnails =
            await getUGCThumbnails(items);


        renderUGC(
            ugcGrid,
            items,
            thumbnails
        );


    } catch (error) {

        console.error(
            "FANDIRA UGC ERROR:",
            error
        );


        showUGCError(
            ugcGrid
        );

    }

}


/* =========================================================
   THUMBNAIL ROBLOX
========================================================= */

async function getUGCThumbnails(items) {

    const ids =
        items
            .map(item => item.id)
            .join(",");


    const url =
        "https://thumbnails.roblox.com/v1/assets" +
        "?assetIds=" +
        ids +
        "&returnPolicy=PlaceHolder" +
        "&size=420x420" +
        "&format=Png" +
        "&isCircular=false";


    try {

        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                "Thumbnail API error"
            );

        }


        const result =
            await response.json();


        return result.data || [];


    } catch (error) {

        console.error(
            "FANDIRA THUMBNAIL ERROR:",
            error
        );


        return [];

    }

}


/* =========================================================
   RENDER UGC
========================================================= */

function renderUGC(
    container,
    items,
    thumbnails
) {

    container.innerHTML = "";


    items.forEach(
        (item, index) => {

            const thumbnail =
                thumbnails.find(
                    thumb =>
                        thumb.targetId === item.id
                );


            const image =
                thumbnail &&
                thumbnail.imageUrl
                    ? thumbnail.imageUrl
                    : "";


            const card =
                document.createElement("a");


            card.className =
                "ugc-card";


            card.href =
                "https://www.roblox.com/catalog/" +
                item.id;


            card.target =
                "_blank";


            card.rel =
                "noopener noreferrer";


            const imageClass =
                [
                    "ugc-purple",
                    "ugc-blue",
                    "ugc-pink",
                    "ugc-green"
                ][index] ||
                "ugc-purple";


            card.innerHTML = `

                <div class="ugc-image ${imageClass}">

                    ${
                        image
                        ?
                        `
                        <img
                            src="${image}"
                            alt="${escapeHTML(item.name)}"
                            loading="lazy"
                            class="ugc-real-image"
                        >
                        `
                        :
                        `
                        <div class="ugc-placeholder">
                            UGC
                        </div>
                        `
                    }

                    <span class="ugc-label">
                        TERBARU
                    </span>

                </div>


                <div class="ugc-info">

                    <div>

                        <h3>
                            ${escapeHTML(item.name)}
                        </h3>

                        <p>
                            ${
                                item.creatorName
                                ?
                                escapeHTML(
                                    item.creatorName
                                )
                                :
                                "Roblox Creator"
                            }
                            ·
                            ${
                                formatRobux(
                                    item.price
                                )
                            }
                        </p>

                    </div>

                    <span class="ugc-arrow">
                        ↗
                    </span>

                </div>

            `;


            container.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   LOADING
========================================================= */

function showUGCLoading(container) {

    container.innerHTML = "";


    for (
        let i = 0;
        i < 4;
        i++
    ) {

        const loading =
            document.createElement("div");


        loading.className =
            "ugc-card ugc-loading-card";


        loading.innerHTML = `

            <div class="ugc-image">

                <div class="ugc-loading">
                    MEMUAT...
                </div>

            </div>


            <div class="ugc-info">

                <div>

                    <h3>
                        Mengambil UGC...
                    </h3>

                    <p>
                        Roblox Marketplace
                    </p>

                </div>

            </div>

        `;


        container.appendChild(
            loading
        );

    }

}


/* =========================================================
   ERROR
========================================================= */

function showUGCError(container) {

    container.innerHTML = `

        <div
            style="
                grid-column:1/-1;
                padding:35px;
                text-align:center;
                border:1px solid rgba(255,255,255,.08);
                border-radius:22px;
                background:rgba(255,255,255,.025);
            "
        >

            <strong>
                UGC sedang tidak dapat dimuat.
            </strong>

            <p
                style="
                    color:#9ba1b5;
                    margin-top:8px;
                    font-size:13px;
                "
            >
                Coba refresh halaman beberapa saat lagi.
            </p>

        </div>

    `;

}


/* =========================================================
   ROBUX FORMAT
========================================================= */

function formatRobux(price) {

    if (
        price === null ||
        price === undefined
    ) {

        return "Harga tidak tersedia";

    }


    if (
        typeof price !== "number"
    ) {

        return "Harga tidak tersedia";

    }


    return (
        Number(price)
            .toLocaleString("id-ID")
        +
        " R$"
    );

}


/* =========================================================
   SECURITY
========================================================= */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}
