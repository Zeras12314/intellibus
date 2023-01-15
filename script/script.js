const stabTitle = document.querySelector("#stability");
const monitorTitle = document.querySelector("#monitor");
const archiTitle = document.querySelector("#architecture");
const uiTitle = document.querySelector("#ui");

const stabText = document.querySelector("#stabtext");
const moniText = document.querySelector("#monitext");
const archiText = document.querySelector("#archiText");
const uiText = document.querySelector("#uiText");
const btn = document.querySelector("#btnDropdown");

const moniImg = document.querySelector("#moniImg");
const archiImg = document.querySelector("#archiImg");
const stabImg = document.querySelector("#stabImg");
const uiImg = document.querySelector("#uiImg");

function stability() {
  monitorTitle.classList.remove("active");
  stabTitle.classList.add("active");
  archiTitle.classList.remove("active");
  uiTitle.classList.remove("active");

  moniText.classList.add("d-none");
  stabText.classList.remove("d-none");
  archiText.classList.add("d-none");
  uiText.classList.add("d-none");

  moniImg.classList.add("d-none");
  stabImg.classList.remove("d-none");
  archiImg.classList.add("d-none");
  uiImg.classList.add("d-none");

  btn.innerHTML = "Stability";
}

function architecture() {
  monitorTitle.classList.remove("active");
  stabTitle.classList.remove("active");
  archiTitle.classList.add("active");
  uiTitle.classList.remove("active");

  moniText.classList.add("d-none");
  stabText.classList.add("d-none");
  archiText.classList.remove("d-none");
  uiText.classList.add("d-none");

  moniImg.classList.add("d-none");
  stabImg.classList.add("d-none");
  archiImg.classList.remove("d-none");
  uiImg.classList.add("d-none");

  btn.innerHTML = "Architecture";
}

function ui() {
  monitorTitle.classList.remove("active");
  stabTitle.classList.remove("active");
  archiTitle.classList.remove("active");
  uiTitle.classList.add("active");

  moniText.classList.add("d-none");
  stabText.classList.add("d-none");
  archiText.classList.add("d-none");
  uiText.classList.remove("d-none");

  moniImg.classList.add("d-none");
  stabImg.classList.add("d-none");
  archiImg.classList.add("d-none");
  uiImg.classList.remove("d-none");

  btn.innerHTML = "UI";
}

function monitor() {
  monitorTitle.classList.add("active");
  stabTitle.classList.remove("active");
  archiTitle.classList.remove("active");
  uiTitle.classList.remove("active");

  moniText.classList.remove("d-none");
  stabText.classList.add("d-none");
  archiText.classList.add("d-none");
  uiText.classList.add("d-none");

  moniImg.classList.remove("d-none");
  stabImg.classList.add("d-none");
  archiImg.classList.add("d-none");
  uiImg.classList.add("d-none");

  btn.innerHTML = "Monitor";
}
