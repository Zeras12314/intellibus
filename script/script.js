const stabTitle = document.querySelector("#stability");
const monitorTitle = document.querySelector("#monitor");
const archiTitle = document.querySelector("#architecture");
const uiTitle = document.querySelector("#ui");
const perfTitle = document.querySelector("#performance");
const awsTitle = document.querySelector("#aws");

const stabText = document.querySelector("#stabtext");
const moniText = document.querySelector("#monitext");
const archiText = document.querySelector("#archiText");
const uiText = document.querySelector("#uiText");
const perfText = document.querySelector("#perfText");
const awsText = document.querySelector("#awsText");

const moniImg = document.querySelector("#moniImg");
const archiImg = document.querySelector("#archiImg");
const stabImg = document.querySelector("#stabImg");
const uiImg = document.querySelector("#uiImg");
const perfImg = document.querySelector("#perfImg");
const awsImg = document.querySelector("#awImg");

const btnWeb = document.querySelector("#btnWeb");
const btn = document.querySelector("#btnDropdown");

function stability() {
  monitorTitle.classList.remove("active");
  stabTitle.classList.add("active");
  archiTitle.classList.remove("active");
  uiTitle.classList.remove("active");
  perfTitle.classList.remove("active");
  awsTitle.classList.remove("active");

  moniText.classList.add("d-none");
  stabText.classList.remove("d-none");
  archiText.classList.add("d-none");
  uiText.classList.add("d-none");
  perfText.classList.add("d-none");
  awsText.classList.add("d-none");

  moniImg.classList.add("d-none");
  stabImg.classList.remove("d-none");
  archiImg.classList.add("d-none");
  uiImg.classList.add("d-none");
  perfImg.classList.add("d-none");
  awsImg.classList.add("d-none");

  btn.innerHTML = "Stability";
  btnWeb.innerHTML = "LEARN MORE";
}

function architecture() {
  monitorTitle.classList.remove("active");
  stabTitle.classList.remove("active");
  archiTitle.classList.add("active");
  uiTitle.classList.remove("active");
  perfTitle.classList.remove("active");
  awsTitle.classList.remove("active");

  moniText.classList.add("d-none");
  stabText.classList.add("d-none");
  archiText.classList.remove("d-none");
  uiText.classList.add("d-none");
  perfText.classList.add("d-none");
  awsText.classList.add("d-none");

  moniImg.classList.add("d-none");
  stabImg.classList.add("d-none");
  archiImg.classList.remove("d-none");
  uiImg.classList.add("d-none");
  perfImg.classList.add("d-none");
  awsImg.classList.add("d-none");

  btn.innerHTML = "Architecture";
  btnWeb.innerHTML = "LEARN MORE";
}

function ui() {
  monitorTitle.classList.remove("active");
  stabTitle.classList.remove("active");
  archiTitle.classList.remove("active");
  uiTitle.classList.add("active");
  perfTitle.classList.remove("active");
  awsTitle.classList.remove("active");

  moniText.classList.add("d-none");
  stabText.classList.add("d-none");
  archiText.classList.add("d-none");
  uiText.classList.remove("d-none");
  perfText.classList.add("d-none");
  awsText.classList.add("d-none");

  moniImg.classList.add("d-none");
  stabImg.classList.add("d-none");
  archiImg.classList.add("d-none");
  uiImg.classList.remove("d-none");
  perfImg.classList.add("d-none");
  awsImg.classList.add("d-none");

  btn.innerHTML = "UI ";
  btnWeb.innerHTML = "LEARN MORE";
}

function monitor() {
  monitorTitle.classList.add("active");
  stabTitle.classList.remove("active");
  archiTitle.classList.remove("active");
  uiTitle.classList.remove("active");
  perfTitle.classList.remove("active");
  awsTitle.classList.remove("active");

  moniText.classList.remove("d-none");
  stabText.classList.add("d-none");
  archiText.classList.add("d-none");
  uiText.classList.add("d-none");
  perfText.classList.add("d-none");
  awsText.classList.add("d-none");

  moniImg.classList.remove("d-none");
  stabImg.classList.add("d-none");
  archiImg.classList.add("d-none");
  uiImg.classList.add("d-none");
  perfImg.classList.add("d-none");
  awsImg.classList.add("d-none");

  btn.innerHTML = "Monitor";
  btnWeb.innerHTML = "GET STARTED";
}

function performance() {
  monitorTitle.classList.remove("active");
  stabTitle.classList.remove("active");
  archiTitle.classList.remove("active");
  uiTitle.classList.remove("active");
  perfTitle.classList.add("active");
  awsTitle.classList.remove("active");

  moniText.classList.add("d-none");
  stabText.classList.add("d-none");
  archiText.classList.add("d-none");
  uiText.classList.add("d-none");
  perfText.classList.remove("d-none");
  awsText.classList.add("d-none");

  moniImg.classList.add("d-none");
  stabImg.classList.add("d-none");
  archiImg.classList.add("d-none");
  uiImg.classList.add("d-none");
  perfImg.classList.remove("d-none");
  awsImg.classList.add("d-none");

  btn.innerHTML = "Performance";
  btnWeb.innerHTML = "LEARN MORE";
}

function aws() {
  monitorTitle.classList.remove("active");
  stabTitle.classList.remove("active");
  archiTitle.classList.remove("active");
  uiTitle.classList.remove("active");
  perfTitle.classList.remove("active");
  awsTitle.classList.add("active");

  moniText.classList.add("d-none");
  stabText.classList.add("d-none");
  archiText.classList.add("d-none");
  uiText.classList.add("d-none");
  perfText.classList.add("d-none");
  awsText.classList.remove("d-none");

  moniImg.classList.add("d-none");
  stabImg.classList.add("d-none");
  archiImg.classList.add("d-none");
  uiImg.classList.add("d-none");
  perfImg.classList.add("d-none");
  awsImg.classList.remove("d-none");

  btn.innerHTML = "AWS & Cloud";
  btnWeb.innerHTML = "LEARN MORE";
}
