let browser = browserDetect();
let ieBanner = document.getElementById("banner-ie");
let allBanner = document.getElementById("banner-all");
if (browser.name === "ie") {
  ieBanner.classList.add("banner-show");
} else {
  allBanner.classList.add("banner-show");
}
