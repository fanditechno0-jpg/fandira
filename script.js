// ============================================================
// FANDIRA - ROBLOX PORTAL
// DATA TERPISAH:
// UGC | MAP | EXPERIENCE | BERITA | CREATOR | TRENDING
// ============================================================

const FANDIRA = {

  // ==========================================================
  // 1. UGC TERKINI
  // ==========================================================
  ugc: [
    {
      title: "The Hunt: Roblox 20",
      creator: "Roblox",
      type: "EVENT UGC",
      status: "TERKINI",
      link: "https://www.roblox.com/catalog",
      image: "https://tr.rbxcdn.com/180DAY-8f0e7f9c0c6f9c7c2f5c2c7e8f5c5c9d/768/432/Image/Webp/noFilter"
    },

    {
      title: "Roblox 20th Anniversary",
      creator: "Roblox",
      type: "ANNIVERSARY",
      status: "EVENT",
      link: "https://www.roblox.com/catalog",
      image: "https://tr.rbxcdn.com/180DAY-8f0e7f9c0c6f9c7c2f5c2c7e8f5c5c9d/768/432/Image/Webp/noFilter"
    },

    {
      title: "The Hunt Rewards",
      creator: "Roblox",
      type: "REWARD",
      status: "LIMITED EVENT",
      link: "https://www.roblox.com/catalog",
      image: "https://tr.rbxcdn.com/180DAY-8f0e7f9c0c6f9c7c2f5c2c7e8f5c5c9d/768/432/Image/Webp/noFilter"
    }
  ],


  // ==========================================================
  // 2. MAP ROBLOX PILIHAN
  // ==========================================================
  maps: [
    {
      title: "The Hunt: Roblox 20",
      description:
        "Dunia event resmi Roblox untuk merayakan 20 tahun perjalanan Roblox.",
      category: "EVENT",
      universeId: "74205509034203",
      link:
        "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20"
    },

    {
      title: "Jailbreak",
      description:
        "Dunia open-world kriminal dengan polisi, kendaraan dan berbagai aksi.",
      category: "OPEN WORLD",
      universeId: "606849621",
      link:
        "https://www.roblox.com/games/606849621/Jailbreak"
    },

    {
      title: "Adopt Me!",
      description:
        "Dunia roleplay dengan rumah, pet, trading dan aktivitas bersama pemain.",
      category: "ROLEPLAY",
      universeId: "920587237",
      link:
        "https://www.roblox.com/games/920587237/Adopt-Me"
    },

    {
      title: "Grow a Garden",
      description:
        "Dunia berkebun dengan sistem menanam, memanen dan mengembangkan kebun.",
      category: "TRENDING",
      universeId: "126884695634066",
      link:
        "https://www.roblox.com/games/126884695634066/Grow-a-Garden"
    }
  ],


  // ==========================================================
  // 3. EXPERIENCE ROBLOX TERKINI
  // ==========================================================
  experiences: [
    {
      title: "RIVALS",
      description:
        "FPS kompetitif dengan pertarungan cepat dari duel 1v1 sampai 5v5.",
      category: "FPS",
      universeId: "17625359962",
      link:
        "https://www.roblox.com/games/17625359962/RIVALS"
    },

    {
      title: "DOORS",
      description:
        "Horror experience dengan berbagai ruangan, puzzle dan entity misterius.",
      category: "HORROR",
      universeId: "6516141723",
      link:
        "https://www.roblox.com/games/6516141723/DOORS"
    },

    {
      title: "99 Nights in the Forest",
      description:
        "Survival horror dengan tantangan bertahan hidup di dalam hutan.",
      category: "SURVIVAL",
      universeId: "79546208627805",
      link:
        "https://www.roblox.com/games/79546208627805/99-Nights-in-the-Forest"
    },

    {
      title: "Jujutsu Shenanigans",
      description:
        "Arena fighting dengan pertarungan cepat dan kemampuan karakter.",
      category: "FIGHTING",
      universeId: "9391468976",
      link:
        "https://www.roblox.com/games/9391468976/Jujutsu-Shenanigans"
    }
  ],


  // ==========================================================
  // 4. BERITA ROBLOX
  // ==========================================================
  news: [
    {
      title: "Join The Hunt: Roblox 20",
      description:
        "Roblox merayakan ulang tahun ke-20 melalui event The Hunt: Roblox 20.",
      date: "16 September 2026",
      source: "Roblox News",
      link:
        "https://about.roblox.com/id/newsroom/2026/09/join-the-hunt-roblox-20",
      image:
        "https://about.roblox.com/wp-content/uploads/2026/09/Roblox20_TheHunt_Hero.jpg"
    },

    {
      title: "Roblox Innovation Awards 2026",
      description:
        "Roblox mengumumkan game, creator dan studio yang mendapat penghargaan tahun 2026.",
      date: "12 September 2026",
      source: "Roblox News",
      link:
        "https://about.roblox.com/id/newsroom/2026/09/2026-roblox-innovation-awards",
      image:
        "https://about.roblox.com/wp-content/uploads/2026/09/innovation-awards.jpg"
    },

    {
      title: "RDC 2026: Dunia Membutuhkan Lebih Banyak Bermain",
      description:
        "Roblox membahas masa depan platform, creator dan teknologi pembangunan experience.",
      date: "11 September 2026",
      source: "Roblox News",
      link:
        "https://about.roblox.com/id/newsroom/2026/09/rdc-2026-the-world-needs-more-play",
      image:
        "https://about.roblox.com/wp-content/uploads/2026/09/rdc-2026.jpg"
    }
  ],


  // ==========================================================
  // 5. ROBLOX CREATOR / STUDIO
  // ==========================================================
  creator: [
    {
      title: "Roblox Creator Hub",
      description:
        "Pusat dokumentasi resmi untuk developer dan creator Roblox.",
      category: "CREATOR",
      link:
        "https://create.roblox.com/docs",
      image:
        "https://tr.rbxcdn.com/180DAY-8f0e7f9c0c6f9c7c2f5c2c7e8f5c5c9d/768/432/Image/Webp/noFilter"
    },

    {
      title: "Roblox Studio",
      description:
        "Tools utama untuk membuat experience, scripting dan berbagai konten Roblox.",
      category: "STUDIO",
      link:
        "https://create.roblox.com/",
      image:
        "https://tr.rbxcdn.com/180DAY-8f0e7f9c0c6f9c7c2f5c2c7e8f5c5c9d/768/432/Image/Webp/noFilter"
    },

    {
      title: "Creator Store",
      description:
        "Tempat mencari berbagai asset yang dapat digunakan creator Roblox.",
      category: "ASSET",
      link:
        "https://create.roblox.com/store",
      image:
        "https://tr.rbxcdn.com/180DAY-8f0e7f9c0c6f9c7c2f5c2c7e8f5c5c9d/768/432/Image/Webp/noFilter"
    }
  ],


  // ==========================================================
  // 6. TRENDING ROBLOX
  // ==========================================================
  trending: [
    {
      rank: 1,
      title: "The Hunt: Roblox 20",
      type: "EVENT",
      link:
        "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20"
    },

    {
      rank: 2,
      title: "RIVALS",
      type: "EXPERIENCE",
      link:
        "https://www.roblox.com/games/17625359962/RIVALS"
    },

    {
      rank: 3,
      title: "Grow a Garden",
      type: "EXPERIENCE",
      link:
        "https://www.roblox.com/games/126884695634066/Grow-a-Garden"
    },

    {
      rank: 4,
      title: "DOORS",
      type: "EXPERIENCE",
      link:
        "https://www.roblox.com/games/6516141723/DOORS"
    }
  ]

};


// ============================================================
// HELPER
// ============================================================

function escapeHTML(value) {

  const div = document.createElement("div");

  div.textContent = value ?? "";

  return div.innerHTML;

}


// ============================================================
// THUMBNAIL EXPERIENCE ROBLOX
// ============================================================

async function getRobloxThumbnail(universeId) {

  try {

    const url =
      `https://thumbnails.roblox.com/v1/games/multiget/thumbnails` +
      `?universeIds=${universeId}` +
      `&countPerUniverse=1` +
      `&defaults=true` +
      `&size=768x432` +
      `&format=Png` +
      `&isCircular=false`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Thumbnail API error");
    }

    const data = await response.json();

    if (
      data.data &&
      data.data[0] &&
      data.data[0].thumbnails &&
      data.data[0].thumbnails[0]
    ) {

      return data.data[0].thumbnails[0].imageUrl;

    }

  } catch (error) {

    console.warn(
      "Gagal mengambil thumbnail Roblox:",
      universeId
    );

  }

  return "";

}


// ============================================================
// LOAD SEMUA THUMBNAIL
// ============================================================

async function loadThumbnails(container) {

  const images =
    container.querySelectorAll(
      "img[data-universe-id]"
    );

  for (const img of images) {

    const universeId =
      img.dataset.universeId;

    const thumbnail =
      await getRobloxThumbnail(universeId);

    if (thumbnail) {

      img.src = thumbnail;

    }

  }

}


// ============================================================
// RENDER MAP
// ============================================================

function renderMaps() {

  const container =
    document.querySelector("#mapsGrid") ||
    document.querySelector(".maps-grid") ||
    document.querySelector("#maps .grid");

  if (!container) return;

  container.innerHTML = "";

  FANDIRA.maps.forEach((map) => {

    const card =
      document.createElement("article");

    card.className = "map-card";

    card.innerHTML = `

      <a
        href="${map.link}"
        target="_blank"
        rel="noopener noreferrer"
      >

        <div class="map-image">

          <img
            src=""
            alt="${escapeHTML(map.title)}"
            data-universe-id="${map.universeId}"
            loading="lazy"
          >

          <span class="map-badge">
            ${escapeHTML(map.category)}
          </span>

        </div>

        <div class="map-content">

          <h3>
            ${escapeHTML(map.title)}
          </h3>

          <p>
            ${escapeHTML(map.description)}
          </p>

          <span>
            Buka Map →
          </span>

        </div>

      </a>

    `;

    container.appendChild(card);

  });

  loadThumbnails(container);

}


// ============================================================
// RENDER EXPERIENCE
// ============================================================

function renderExperiences() {

  const container =
    document.querySelector("#gamesGrid") ||
    document.querySelector(".games-grid") ||
    document.querySelector("#games .grid");

  if (!container) return;

  container.innerHTML = "";

  FANDIRA.experiences.forEach((game) => {

    const card =
      document.createElement("article");

    card.className = "game-card";

    card.innerHTML = `

      <a
        href="${game.link}"
        target="_blank"
        rel="noopener noreferrer"
      >

        <div class="game-image">

          <img
            src=""
            alt="${escapeHTML(game.title)}"
            data-universe-id="${game.universeId}"
            loading="lazy"
          >

          <span class="game-badge">
            ${escapeHTML(game.category)}
          </span>

        </div>

        <div class="game-content">

          <h3>
            ${escapeHTML(game.title)}
          </h3>

          <p>
            ${escapeHTML(game.description)}
          </p>

          <span class="game-button">
            Mainkan di Roblox →
          </span>

        </div>

      </a>

    `;

    container.appendChild(card);

  });

  loadThumbnails(container);

}


// ============================================================
// RENDER UGC
// ============================================================

function renderUGC() {

  const container =
    document.querySelector("#ugcGrid") ||
    document.querySelector(".ugc-grid") ||
    document.querySelector("#ugc .grid");

  if (!container) return;

  container.innerHTML = "";

  FANDIRA.ugc.forEach((item) => {

    const card =
      document.createElement("article");

    card.className = "ugc-card";

    card.innerHTML = `

      <a
        href="${item.link}"
        target="_blank"
        rel="noopener noreferrer"
      >

        <div class="ugc-image">

          <img
            src="${item.image}"
            alt="${escapeHTML(item.title)}"
            loading="lazy"
          >

          <span class="ugc-status">
            ${escapeHTML(item.status)}
          </span>

        </div>

        <div class="ugc-content">

          <h3>
            ${escapeHTML(item.title)}
          </h3>

          <p>
            ${escapeHTML(item.creator)}
          </p>

          <strong>
            ${escapeHTML(item.type)}
          </strong>

        </div>

      </a>

    `;

    container.appendChild(card);

  });

}


// ============================================================
// RENDER NEWS
// ============================================================

function renderNews() {

  const container =
    document.querySelector("#newsGrid") ||
    document.querySelector(".news-grid") ||
    document.querySelector("#news .grid");

  if (!container) return;

  container.innerHTML = "";

  FANDIRA.news.forEach((news) => {

    const card =
      document.createElement("article");

    card.className = "news-card";

    card.innerHTML = `

      <a
        href="${news.link}"
        target="_blank"
        rel="noopener noreferrer"
      >

        <div class="news-image">

          <img
            src="${news.image}"
            alt="${escapeHTML(news.title)}"
            loading="lazy"
          >

        </div>

        <div class="news-content">

          <span class="news-source">
            ${escapeHTML(news.source)}
          </span>

          <h3>
            ${escapeHTML(news.title)}
          </h3>

          <p>
            ${escapeHTML(news.description)}
          </p>

          <small>
            ${escapeHTML(news.date)}
          </small>

        </div>

      </a>

    `;

    container.appendChild(card);

  });

}


// ============================================================
// RENDER CREATOR
// ============================================================

function renderCreator() {

  const container =
    document.querySelector("#creatorGrid") ||
    document.querySelector(".creator-grid") ||
    document.querySelector("#creator .grid");

  if (!container) return;

  container.innerHTML = "";

  FANDIRA.creator.forEach((item) => {

    const card =
      document.createElement("article");

    card.className = "creator-card";

    card.innerHTML = `

      <a
        href="${item.link}"
        target="_blank"
        rel="noopener noreferrer"
      >

        <div class="creator-image">

          <img
            src="${item.image}"
            alt="${escapeHTML(item.title)}"
            loading="lazy"
          >

          <span>
            ${escapeHTML(item.category)}
          </span>

        </div>

        <div class="creator-content">

          <h3>
            ${escapeHTML(item.title)}
          </h3>

          <p>
            ${escapeHTML(item.description)}
          </p>

          <strong>
            Buka Creator Hub →
          </strong>

        </div>

      </a>

    `;

    container.appendChild(card);

  });

}


// ============================================================
// RENDER TRENDING
// ============================================================

function renderTrending() {

  const container =
    document.querySelector("#trendingGrid") ||
    document.querySelector(".trending-grid") ||
    document.querySelector("#trending .grid");

  if (!container) return;

  container.innerHTML = "";

  FANDIRA.trending.forEach((item) => {

    const card =
      document.createElement("article");

    card.className = "trending-card";

    card.innerHTML = `

      <a
        href="${item.link}"
        target="_blank"
        rel="noopener noreferrer"
      >

        <span class="trending-rank">
          #${item.rank}
        </span>

        <div>

          <h3>
            ${escapeHTML(item.title)}
          </h3>

          <p>
            ${escapeHTML(item.type)}
          </p>

        </div>

      </a>

    `;

    container.appendChild(card);

  });

}


// ============================================================
// START FANDIRA
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderUGC();

    renderMaps();

    renderExperiences();

    renderNews();

    renderCreator();

    renderTrending();

  }
);
