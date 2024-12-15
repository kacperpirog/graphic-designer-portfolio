// Dynamic imports using Webpack require.context
const importAssets = (context) =>
  context.keys().map((key) => ({
    path: context(key),
    name: key.split("/").pop().split(".")[0], // Extract file name without extension
  }));

// Import assets dynamically
const lpAssets = importAssets(
  require.context("../assets/LP", false, /\.(png|jpg)$/)
);
const smAssets = importAssets(
  require.context("../assets/Sm", false, /\.(png|jpg)$/)
);
const dtpAssets = importAssets(
  require.context("../assets/DTP", false, /\.(png|jpg|jpeg)$/)
);
const wwwAssets = importAssets(
  require.context("../assets/www", false, /\.(png|jpg)$/)
);
const mediaAssets = importAssets(
  require.context("../assets/media", false, /\.(mp4)$/)
);

// Map assets to data structure
const mapAssetsToData = (assets, type, tags) =>
  assets.map((asset, index) => ({
    id: index + 1,
    name: type,
    [type === "media" ? "video" : "image"]: asset.path,
    type: type === "media" ? "video/mp4" : "image",
    tags: ["all", ...tags],
  }));

// Final data structure
export const data = [
  ...mapAssetsToData(smAssets, "social media", ["sm"]),
  ...mapAssetsToData(lpAssets, "landing page", ["lp"]),
  ...mapAssetsToData(dtpAssets, "DTP", ["DTP"]),
  ...mapAssetsToData(wwwAssets, "www", ["www"]),
  ...mapAssetsToData(mediaAssets, "media", ["media"]),
];
