// =====================================================
// FANDIRA - ROBLOX PORTAL
// STAGE 1 - REAL CONTENT + REAL ROBLOX THUMBNAILS
// =====================================================

const ugcData = [
  {
    title: "The Hunt: Roblox 20",
    creator: "Roblox Presents",
    status: "EVENT",
    price: "Limited Event",
    link: "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20",
    image:
      "https://tr.rbxcdn.com/180DAY-8f0e7f9c0c6f9c7c2f5c2c7e8f5c5c9d/768/432/Image/Webp/noFilter"
  },
  {
    title: "Roblox 20th Anniversary",
    creator: "Roblox",
    status: "EVENT",
    price: "Limited",
    link: "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20",
    image:
      "https://tr.rbxcdn.com/180DAY-8f0e7f9c0c6f9c7c2f5c2c7e8f5c5c9d/768/432/Image/Webp/noFilter"
  },
  {
    title: "The Hunt UGC",
    creator: "Roblox",
    status: "HUNT",
    price: "Event Reward",
    link:
      "https://www.roblox.com/spotlight/the-hunt-roblox-20",
    image:
      "https://tr.rbxcdn.com/180DAY-8f0e7f9c0c6f9c7c2f5c2c7e8f5c5c9d/768/432/Image/Webp/noFilter"
  }
];


// =====================================================
// GAME DATA
// =====================================================

// Universe IDs
// Thumbnail akan diambil langsung dari Roblox API.

const gameData = [
  {
    title: "The Hunt: Roblox 20",
    description:
      "Rayakan 20 tahun Roblox melalui event resmi yang membawa pemain menjelajahi berbagai era Roblox.",
    universeId: "74205509034203",
    link:
      "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20",
    category: "EVENT"
  },

  {
    title: "Jailbreak",
    description:
      "Game aksi kriminal populer Roblox yang menjadi salah satu game penting dalam sejarah platform.",
    universeId: "606849621",
    link:
      "https://www.roblox.com/games/606849621/Jailbreak",
    category: "POPULAR"
  },

  {
    title: "Adopt Me!",
    description:
      "Game roleplay dan pet collection populer dengan komunitas Roblox yang sangat besar.",
    universeId: "920587237",
    link:
      "https://www.roblox.com/games/920587237/Adopt-Me",
    category: "ROLEPLAY"
  },

  {
    title: "Grow a Garden",
    description:
      "Game berkebun Roblox yang menjadi salah satu fenomena besar dalam tren Roblox.",
    universeId: "126884695634066",
    link:
      "https://www.roblox.com/games/126884695634066/Grow-a-Garden",
    category: "TRENDING"
  },

  {
    title: "RIVALS",
    description:
      "FPS kompetitif Roblox dengan sistem pertarungan cepat dan berbagai mode permainan.",
    universeId: "17625359962",
    link:
      "https://www.roblox.com/games/17625359962/RIVALS",
    category: "FPS"
  },

  {
    title: "DOORS",
    description:
      "Game horror Roblox dengan eksplorasi ruangan, puzzle, dan berbagai entity misterius.",
    universeId: "6516141723",
    link:
      "https://www.roblox.com/games/6516141723/DOORS",
    category: "HORROR"
  },

  {
    title: "99 Nights in the Forest",
    description:
      "Survival horror Roblox dengan tantangan bertahan hidup di dalam hutan.",
    universeId: "79546208627805",
    link:
      "https://www.roblox.com/games/79546208627805/99-Nights-in-the-Forest",
    category: "SURVIVAL"
  },

  {
    title: "Jujutsu Shenanigans",
    description:
      "Arena fighting Roblox bertema Jujutsu dengan pertarungan cepat dan kemampuan karakter.",
    universeId: "9391468976",
    link:
      "https://www.roblox.com/games/9391468976/Jujutsu-Shenanigans",
    category: "FIGHTING"
  }
];


// =====================================================
// NEWS DATA
// =====================================================

const newsData = [
  {
    title: "The Hunt: Roblox 20 Resmi Dimulai",
    description:
      "Roblox merayakan ulang tahun ke-20 melalui event The Hunt: Roblox 20 yang membawa pemain menjelajahi sejarah Roblox.",
    date: "16 September 2026",
    source: "Roblox News",
    link:
      "https://about.roblox.com/id/newsroom/2026/09/join-the-hunt-roblox-20",
    image:
      "https://about.roblox.com/wp-content/uploads/2026/09/Roblox20_TheHunt_Hero.jpg"
  },

  {
    title: "The Hunt: Roblox 20",
    description:
      "Mainkan berbagai game dari 20 tahun sejarah Roblox dan selesaikan quest untuk membuka hadiah virtual.",
    date: "17 September 2026",
    source: "Roblox",
    link:
      "https://www.roblox.com/id/spotlight/the-hunt-roblox-20",
    image:
      "https://tr.rbxcdn.com/180DAY-8f0e7f9c0c6f9c7c2f5c2c7e8f5c5c9d/768/432/Image/Webp/noFilter"
  },

  {
    title: "Roblox Innovation Awards 2026",
    description:
      "Roblox kembali menyoroti berbagai creator dan experience yang menjadi bagian penting dari perkembangan platform.",
    date: "2026",
    source: "Roblox News",
    link:
      "https://about.roblox.com/id/newsroom/2026/09/2026-roblox-innovation-awards",
    image:
      "https://about.roblox.com/wp-content/uploads/2026/09/innovation-awards.jpg"
  },

  {
    title: "Roblox Memasuki Era Baru",
    description:
      "Perkembangan Roblox Creator dan ekosistem kreator terus menjadi bagian penting dari masa depan platform.",
    date: "2026",
    source: "Roblox News",
    link:
      "https://about.roblox.com/id/newsroom",
    image:
      "https://about.roblox.com/wp-content/uploads/2026/09/roblox-creator.jpg"
  }
];


// =====================================================
// HELPER
// =====================================================

function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text ?? "";
  return div.innerHTML;
}


// =====================================================
// ROBLOX THUMBNAIL
// =====================================================

function robloxThumbnail(universeId) {
  return `https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=${universeId}&countPerUniverse=1&defaults=true&size=768x432&format=Png&isCircular=false`;
}


// =====================================================
// GAME CARD
// =====================================================

function createGameCard(game) {
  const card = document.createElement("article");
  card.className = "game-card";

  card.innerHTML = `
    <a
      href="${game.link}"
      target="_blank"
      rel="noopener noreferrer"
      class="game-link"
    >

      <div class="game-image">
        <img
          src=""
          alt="${escapeHTML(game.title)}"
          loading="lazy"
          data-universe-id="${game.universeId}"
        >

        <span class="game-badge">
          ${escapeHTML(game.category)}
        </span>
      </div>

      <div class="game-content">
        <h3>${escapeHTML(game.title)}</h3>

        <p>
          ${escapeHTML(game.description)}
        </p>

        <span class="game-button">
          Lihat di Roblox →
        </span>
      </div>

    </a>
  `;

  return card;
}


// =====================================================
// LOAD GAME THUMBNAIL
// =====================================================

async function loadGameThumbnail(img) {
  const universeId = img.dataset.universeId;

  try {
    const response = await fetch(
      `https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=${universeId}&countPerUniverse=1&defaults=true&size=768x432&format=Png&isCircular=false`
    );

    if (!response.ok) {
      throw new Error("Thumbnail request failed");
    }

    const data = await response.json();

    if (
      data.data &&
      data.data[0] &&
      data.data[0].thumbnails &&
      data.data[0].thumbnails[0]
    ) {
      img.src = data.data[0].thumbnails[0].imageUrl;
    }
  } catch (error) {
    console.warn(
      "Thumbnail Roblox gagal dimuat:",
      universeId,
      error
    );

    // fallback
    img.src =
      "https://tr.rbxcdn.com/180DAY-8f0e7f9c0c6f9c7c2f5c2c7e8f5c5c9d/768/432/Image/Webp/noFilter";
  }
}


// =====================================================
// RENDER GAMES
// =====================================================

function renderGames() {
  const container =
    document.querySelector("#gamesGrid") ||
    document.querySelector(".games-grid") ||
    document.querySelector("#games .grid");

  if (!container) return;

  container.innerHTML = "";

  gameData.forEach((game) => {
    const card = createGameCard(game);

    container.appendChild(card);

    const img = card.querySelector("img");

    loadGameThumbnail(img);
  });
}


// =====================================================
// UGC
// =====================================================

function renderUGC() {
  const container =
    document.querySelector("#ugcGrid") ||
    document.querySelector(".ugc-grid") ||
    document.querySelector("#ugc .grid");

  if (!container) return;

  container.innerHTML = "";

  ugcData.forEach((item) => {
    const card = document.createElement("article");

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
            ${escapeHTML(item.price)}
          </strong>

        </div>

      </a>
    `;

    container.appendChild(card);
  });
}


// =====================================================
// MAP
// =====================================================

const mapData = [
  {
    title: "The Hunt: Roblox 20",
    description:
      "Hub resmi untuk merayakan 20 tahun Roblox dan menjelajahi berbagai era Roblox.",
    link:
      "https://www.roblox.com/games/74205509034203/The-Hunt-Roblox-20",
    universeId: "74205509034203",
    category: "EVENT"
  },

  {
    title: "Jailbreak",
    description:
      "Kejar-kejaran polisi dan kriminal yang menjadi salah satu game klasik Roblox.",
    link:
      "https://www.roblox.com/games/606849621/Jailbreak",
    universeId: "606849621",
    category: "CLASSIC"
  },

  {
    title: "Adopt Me!",
    description:
      "Roleplay, rumah, trading, dan koleksi pet dalam dunia Roblox.",
    link:
      "https://www.roblox.com/games/920587237/Adopt-Me",
    universeId: "920587237",
    category: "ROLEPLAY"
  },

  {
    title: "Grow a Garden",
    description:
      "Game berkebun Roblox yang menjadi salah satu tren terbesar di platform.",
    link:
      "https://www.roblox.com/games/126884695634066/Grow-a-Garden",
    universeId: "126884695634066",
    category: "TRENDING"
  }
];


function renderMaps() {
  const container =
    document.querySelector("#mapsGrid") ||
    document.querySelector(".maps-grid") ||
    document.querySelector("#maps .grid");

  if (!container) return;

  container.innerHTML = "";

  mapData.forEach((map) => {
    const card = document.createElement("article");

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
            loading="lazy"
            data-universe-id="${map.universeId}"
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
            Buka Game →
          </span>

        </div>

      </a>
    `;

    container.appendChild(card);

    const img = card.querySelector("img");

    loadGameThumbnail(img);
  });
}


// =====================================================
// NEWS
// =====================================================

function renderNews() {
  const container =
    document.querySelector("#newsGrid") ||
    document.querySelector(".news-grid") ||
    document.querySelector("#news .grid");

  if (!container) return;

  container.innerHTML = "";

  newsData.forEach((news) => {
    const card = document.createElement("article");

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


// =====================================================
// START
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

  renderUGC();

  renderMaps();

  renderGames();

  renderNews();

});
