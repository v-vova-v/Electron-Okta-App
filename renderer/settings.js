const { ipcRenderer } = require("electron");

const form = document.querySelector("form");
const submitBtn = document.querySelector('form button[type="button"]');
const runServeCheckbox = document.getElementById("runServer");

submitBtn.addEventListener("click", (e) => {
  if (_IsValidForm()) {
    _storeFormDataInStorage();
    ipcRenderer.send("runLoginWin", runServeCheckbox.checked, {
      oktaParams: localStorage.getItem("oktaParams"),
      isActiveService: localStorage.getItem("serverIsActive")
    });
  } else {
    _addErroreMsg();
  }
});

window.addEventListener("load", () => {
  _setInputValues();
});

function _IsValidForm() {
  const textElements = document.querySelectorAll('form input[type="text"]');
  let emptyFields = 0;

  textElements.forEach((el) => {
    !el.value && ++emptyFields;
  });

  return !emptyFields;
}

function _storeFormDataInStorage() {
  document.querySelector(".err") && document.querySelector(".err").remove();
  _storeOktaDataInStorage({
    clientId: document.getElementById("clientId").value,
    issuer: document.getElementById("issuer").value,
    redirectUri: document.getElementById("redirectUri").value,
  });
  localStorage.setItem("serverIsActive", runServeCheckbox.checked);
}

function _setInputValues() {
  const { clientId = "", issuer = "", redirectUri = "" } = localStorage.getItem(
    "oktaParams"
  )
    ? JSON.parse(localStorage.getItem("oktaParams"))
    : {};
  document.getElementById("clientId").value = clientId;
  document.getElementById("issuer").value = issuer;
  document.getElementById("redirectUri").value = redirectUri;
}

function _storeOktaDataInStorage(oktaParams) {
  localStorage.setItem("oktaParams", JSON.stringify(oktaParams));
}

function _addErroreMsg() {
  if (!document.querySelector(".err")) {
    const divErr = document.createElement("div");
    divErr.className = "err";
    divErr.innerHTML = "All fields should be filled";
    form.append(divErr);
  }
}
