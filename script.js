document.addEventListener("DOMContentLoaded", () => {
    console.log("Fandira Portal aktif");

    /*
    ============================================
    FANDIRA — ROBLOX PORTAL
    TAHAP 1
    ============================================
    */

    // ==========================================
    // DATA UGC / EVENT
    // ==========================================

    const ugcData = [
        {
            title: "The Hunt: Roblox 20",
            category: "ROBLOX 20",
            tag: "🔥 VIRAL",
            description:
                "Event 20 tahun Roblox dengan quest dari berbagai era Roblox dan hadiah UGC yang bisa dikumpulkan.",
            link:
                "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20"
        },
        {
            title: "UGC The Hunt Roblox 20",
            category: "EVENT UGC",
            tag: "🎁 REWARD",
            description:
                "Berbagai hadiah avatar dan UGC tersedia melalui quest The Hunt: Roblox 20.",
            link:
                "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20"
        },
        {
            title: "Roblox 20th Anniversary",
            category: "ANNIVERSARY",
            tag: "🆕 EVENT",
            description:
                "Perayaan 20 tahun Roblox membawa pemain menjelajahi sejarah Roblox dari tahun 2006 hingga sekarang.",
            link:
                "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20"
        },
        {
            title: "Explore Roblox Marketplace",
            category: "MARKETPLACE",
            tag: "🔥 TRENDING",
            description:
                "Jelajahi berbagai aksesori dan avatar item terbaru di Roblox Marketplace.",
            link:
                "https://www.roblox.com/catalog"
        }
    ];


    // ==========================================
    // MAP / GAME PILIHAN
    // ==========================================

    const mapData = [
        {
            title: "The Hunt: Roblox 20",
            category: "EVENT",
            tag: "🔥 EVENT",
            description:
                "Hub event 20 tahun Roblox yang membawa pemain melewati game-game dari sejarah Roblox.",
            link:
                "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20"
        },

        {
            title: "Jailbreak",
            category: "ACTION",
            tag: "🚓 ACTION",
            description:
                "Game open-world polisi dan kriminal yang menjadi bagian dari perjalanan The Hunt: Roblox 20.",
            link:
                "https://www.roblox.com/games/606849621/Jailbreak"
        },

        {
            title: "Adopt Me!",
            category: "ROLEPLAY",
            tag: "🐾 ROLEPLAY",
            description:
                "Game roleplay populer dengan pet, rumah dan dunia sosial yang luas.",
            link:
                "https://www.roblox.com/games/920587237/Adopt-Me"
        },

        {
            title: "Grow a Garden",
            category: "SIMULATOR",
            tag: "🌱 SIMULATOR",
            description:
                "Game berkebun dan simulator yang juga menjadi salah satu game dalam perjalanan The Hunt.",
            link:
                "https://www.roblox.com/games/126884695634066/Grow-a-Garden"
        }
    ];


    // ==========================================
    // GAME TERKINI
    // ==========================================

    const gameData = [
        {
            title: "RIVALS",
            category: "FPS",
            description:
                "FPS kompetitif Roblox dengan pertarungan 1v1 hingga 5v5.",
            link:
                "https://www.roblox.com/discover/?Keyword=RIVALS"
        },

        {
            title: "DOORS",
            category: "HORROR",
            description:
                "Game horror Roblox yang mengandalkan eksplorasi, audio dan berbagai ancaman.",
            link:
                "https://www.roblox.com/games/6516141723/DOORS"
        },

        {
            title: "99 Nights in the Forest",
            category: "SURVIVAL",
            description:
                "Bertahan hidup di hutan, membangun camp dan mencari anak-anak yang hilang.",
            link:
                "https://www.roblox.com/discover/?Keyword=99%20Nights%20in%20the%20Forest"
        },

        {
            title: "Animal Hospital",
            category: "NEW GAME",
            description:
                "Pengalaman rumah sakit hewan dengan suasana misterius dan anomali.",
            link:
                "https://www.roblox.com/discover/?Keyword=Animal%20Hospital"
        },

        {
            title: "FIFA Super Soccer",
            category: "SPORT",
            description:
                "Game sepak bola Roblox dengan pertandingan dan kompetisi multiplayer.",
            link:
                "https://www.roblox.com/discover/?Keyword=FIFA%20Super%20Soccer"
        },

        {
            title: "Jujutsu Shenanigans",
            category: "ACTION",
            description:
                "Game action dengan pertarungan cepat dan berbagai kemampuan.",
            link:
                "https://www.roblox.com/discover/?Keyword=Jujutsu%20Shenanigans"
        }
    ];


    // ==========================================
    // BERITA ROBLOX
    // ==========================================

    const newsData = [
        {
            title: "The Hunt: Roblox 20 Resmi Dimulai",
            category: "ROBLOX OFFICIAL",
            date: "16 September 2026",
            description:
                "Roblox merayakan ulang tahun ke-20 dengan event lintas platform yang membawa pemain melewati sejarah Roblox selama dua dekade dan memberikan hadiah UGC sepanjang perjalanan.",
            source: "Roblox News",
            link:
                "https://about.roblox.com/id/newsroom/2026/09/join-the-hunt-roblox-20"
        },

        {
            title: "Roblox Innovation Awards 2026",
            category: "CREATOR",
            date: "12 September 2026",
            description:
                "Roblox mengumumkan penghargaan untuk game, creator dan studio yang menonjol pada tahun 2026, termasuk RIVALS, DOORS, 99 Nights in the Forest dan Animal Hospital.",
            source: "Roblox News",
            link:
                "https://about.roblox.com/id/newsroom/2026/09/2026-roblox-innovation-awards"
        },

        {
            title: "RDC 2026: Roblox Memasuki Era Baru",
            category: "ROBLOX UPDATE",
            date: "11 September 2026",
            description:
                "Roblox membahas perkembangan platform, fitur baru untuk pemain, creator dan berbagai teknologi baru yang sedang dikembangkan.",
            source: "Roblox News",
            link:
                "https://about.roblox.com/newsroom/2026/09/rdc-2026-the-world-needs-more-play"
        },

        {
            title: "Panduan UGC The Hunt: Roblox 20",
            category: "GUIDE",
            date: "September 2026",
            description:
                "Panduan komunitas untuk mendapatkan berbagai badge dan hadiah UGC dari quest The Hunt: Roblox 20.",
            source: "Games.gg",
            link:
                "https://games.gg/roblox/guides/the-hunt-roblox-20-how-to-get-roblox-high-school-badge-and-ugc/"
        }
    ];


    // ==========================================
    // RENDER HELPER
    // ==========================================

    function escapeHTML(text) {
        return String(text)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }


    // ==========================================
    // UGC
    // ==========================================

    function renderUGC() {

        const container =
            document.querySelector(".ugc-grid");

        if (!container) return;

        container.innerHTML = "";

        ugcData.forEach((item) => {

            const card =
                document.createElement("article");

            card.className = "content-card";

            card.innerHTML = `
                <div class="card-image ugc-placeholder">

                    <div class="placeholder-icon">
                        ✨
                    </div>

                    <span class="tag">
                        ${escapeHTML(item.tag)}
                    </span>

                </div>

                <div class="card-body">

                    <span class="category">
                        ${escapeHTML(item.category)}
                    </span>

                    <h3>
                        ${escapeHTML(item.title)}
                    </h3>

                    <p>
                        ${escapeHTML(item.description)}
                    </p>

                    <div class="card-meta">
                        <span>
                            ROBLOX
                        </span>
                    </div>

                    <a
                        href="${item.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="card-button"
                    >
                        LIHAT DI ROBLOX →
                    </a>

                </div>
            `;

            container.appendChild(card);
        });
    }


    // ==========================================
    // MAP
    // ==========================================

    function renderMaps() {

        const container =
            document.querySelector(".map-grid");

        if (!container) return;

        container.innerHTML = "";

        mapData.forEach((item) => {

            const card =
                document.createElement("article");

            card.className = "content-card";

            card.innerHTML = `
                <div class="card-image map-placeholder">

                    <div class="placeholder-icon">
                        🎮
                    </div>

                    <span class="tag">
                        ${escapeHTML(item.tag)}
                    </span>

                </div>

                <div class="card-body">

                    <span class="category">
                        ${escapeHTML(item.category)}
                    </span>

                    <h3>
                        ${escapeHTML(item.title)}
                    </h3>

                    <p>
                        ${escapeHTML(item.description)}
                    </p>

                    <a
                        href="${item.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="card-button"
                    >
                        MAIN DI ROBLOX →
                    </a>

                </div>
            `;

            container.appendChild(card);
        });
    }


    // ==========================================
    // GAME
    // ==========================================

    function renderGames() {

        const container =
            document.querySelector(".feature-list");

        if (!container) return;

        container.innerHTML = "";

        gameData.forEach((game, index) => {

            const card =
                document.createElement("article");

            card.className = "feature-card";

            card.innerHTML = `
                <div class="feature-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <div>

                    <span class="category">
                        ${escapeHTML(game.category)}
                    </span>

                    <h3>
                        ${escapeHTML(game.title)}
                    </h3>

                    <p>
                        ${escapeHTML(game.description)}
                    </p>

                    <a
                        href="${game.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Main di Roblox →
                    </a>

                </div>
            `;

            container.appendChild(card);
        });
    }


    // ==========================================
    // NEWS
    // ==========================================

    function renderNews() {

        const container =
            document.querySelector(".news-grid");

        if (!container) return;

        container.innerHTML = "";

        newsData.forEach((news) => {

            const card =
                document.createElement("article");

            card.className = "news-card";

            card.innerHTML = `

                <div class="news-image news-placeholder">

                    <div class="placeholder-icon">
                        📰
                    </div>

                </div>

                <div class="news-body">

                    <span class="category">
                        ${escapeHTML(news.category)}
                    </span>

                    <h3>
                        ${escapeHTML(news.title)}
                    </h3>

                    <p>
                        ${escapeHTML(news.description)}
                    </p>

                    <div class="news-meta">
                        ${escapeHTML(news.source)}
                        ·
                        ${escapeHTML(news.date)}
                    </div>

                    <a
                        href="${news.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="card-button"
                    >
                        BACA ARTIKEL →
                    </a>

                </div>
            `;

            container.appendChild(card);
        });
    }


    // ==========================================
    // START
    // ==========================================

    renderUGC();
    renderMaps();
    renderGames();
    renderNews();

});
