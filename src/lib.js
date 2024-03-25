export function forAppJs() {
  console.log("yyyyyyyyyyyyyyyy");
  const firstPassword = document.querySelector("#first-password");
  const secondPassword = document.querySelector("#second-password");
  const passwordButton = document.querySelector("#password-button");
  const equalSymbol = document.querySelector("#equalSymbol");
  const lowCaseSymbol = document.querySelector("#lowCaseSymbol");
  const uppCaseSymbol = document.querySelector("#uppCaseSymbol");
  const numberSymbol = document.querySelector("#numberSymbol");
  const tenCharacterSymbol = document.querySelector("#tenCharacterSymbol");

  firstPassword.addEventListener("input", function (event) {
    console.log("first");
  });
  secondPassword.addEventListener("input", function (event) {
    console.log("second");
  });
  passwordButton.addEventListener("click", function (event) {
    const changedButtonState = togglePasswordButton(event);
    localStorage.setItem("buttonState", JSON.stringify(changedButtonState));
    renderButtonState(event.target, firstPassword, secondPassword);
  });

  initialButtonStateFunction();
  renderButtonState(passwordButton, firstPassword, secondPassword);
  initialSymbolStateFunction();
}

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: All button functions :::::::::::::::::::::::::::::::

export function initialButtonStateFunction() {
  const buttonState = {
    buttonText: "Show Passwords",
  };

  localStorage.setItem("buttonState", JSON.stringify(buttonState));
}

export function renderButtonState(buttonElement, passwordOne, passwordTwo) {
  const buttonState = JSON.parse(localStorage.getItem("buttonState"));
  buttonElement.innerText = buttonState.buttonText;
  if (buttonState.buttonText === "Show Passwords") {
    passwordOne.type = "password";
    passwordTwo.type = "password";
  } else {
    passwordOne.type = "text";
    passwordTwo.type = "text";
  }
}

export function togglePasswordButton(whichEvent) {
  const buttonState = {
    buttonText: "...",
  };
  if (whichEvent.target.innerText === "Show Passwords") {
    buttonState.buttonText = "Hide Passwords";
  } else {
    buttonState.buttonText = "Show Passwords";
  }
  return buttonState;
}

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: All Symbol functions ::::::::::::::::::::::::::::::::::

export function initialSymbolStateFunction() {
  const symbolState = {
    equal: "no",
    lowCase: "no",
    uppCase: "no",
    numbers: "no",
    tenChar: "no",
  };
  localStorage.setItem("symbolState", JSON.stringify(symbolState));
}

export function renderSymbolState(
  symbolEqual,
  symbolLowCase,
  symbolUppCase,
  symbolNumber,
  symbolTenChar
) {
  const symbolState = JSON.parse(localStorage.getItem("symbolState"));
  if (symbolState.equal === "yes") {
    symbolEqual.innerText = "✅";
  }
  if (symbolState.lowCase === "yes") {
    symbolLowCase.innerText = "✅";
  }
  if (symbolState.uppCase === "yes") {
    symbolUppCase.innerText = "✅";
  }
  if (symbolState.numbers === "yes") {
    symbolNumber.innerText = "✅";
  }
  if (symbolState.tenChar === "yes") {
    symbolTenChar.innerText = "✅";
  }
}

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: All Password Functions :::::::::::::::::
