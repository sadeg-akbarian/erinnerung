export function forAppJs() {
  const firstPassword = document.querySelector("#first-password");
  const secondPassword = document.querySelector("#second-password");
  const passwordButton = document.querySelector("#password-button");
  const equalSymbol = document.querySelector("#equalSymbol");
  const lowCaseSymbol = document.querySelector("#lowCaseSymbol");
  const uppCaseSymbol = document.querySelector("#uppCaseSymbol");
  const numberSymbol = document.querySelector("#numberSymbol");
  const tenCharacterSymbol = document.querySelector("#tenCharacterSymbol");

  firstPassword.addEventListener("input", function (event) {
    updateSymbolState(firstPassword, secondPassword);
    renderSymbolState(
      equalSymbol,
      lowCaseSymbol,
      uppCaseSymbol,
      numberSymbol,
      tenCharacterSymbol
    );
  });
  secondPassword.addEventListener("input", function (event) {
    updateSymbolState(firstPassword, secondPassword);
    renderSymbolState(
      equalSymbol,
      lowCaseSymbol,
      uppCaseSymbol,
      numberSymbol,
      tenCharacterSymbol
    );
  });
  passwordButton.addEventListener("click", function (event) {
    const changedButtonState = togglePasswordButton(event);
    localStorage.setItem("buttonState", JSON.stringify(changedButtonState));
    renderButtonState(event.target, firstPassword, secondPassword);
  });

  initialButtonStateFunction();
  renderButtonState(passwordButton, firstPassword, secondPassword);
  initialSymbolStateFunction();
  renderSymbolState(
    equalSymbol,
    lowCaseSymbol,
    uppCaseSymbol,
    numberSymbol,
    tenCharacterSymbol
  );
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

export const initialSymbolState = {
  equal: "no",
  lowCase: "no",
  uppCase: "no",
  numbers: "no",
  tenChar: "no",
};

export function initialSymbolStateFunction() {
  localStorage.setItem("symbolState", JSON.stringify(initialSymbolState));
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
  } else {
    symbolEqual.innerText = "❌";
  }
  if (symbolState.lowCase === "yes") {
    symbolLowCase.innerText = "✅";
  } else {
    symbolLowCase.innerText = "❌";
  }
  if (symbolState.uppCase === "yes") {
    symbolUppCase.innerText = "✅";
  } else {
    symbolUppCase.innerText = "❌";
  }
  if (symbolState.numbers === "yes") {
    symbolNumber.innerText = "✅";
  } else {
    symbolNumber.innerText = "❌";
  }
  if (symbolState.tenChar === "yes") {
    symbolTenChar.innerText = "✅";
  } else {
    symbolTenChar.innerText = "❌";
  }
}

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: All Password Functions :::::::::::::::::

export function compareThePasswords(passwordOne, passwordTwo) {
  if (passwordOne.value === passwordTwo.value) {
    const symbolState = {
      equal: "yes",
      lowCase: "no",
      uppCase: "no",
      numbers: "no",
      tenChar: "no",
    };
    const regexLowerCase = /[a-z]/;
    if (regexLowerCase.test(passwordOne.value)) {
      symbolState.lowCase = "yes";
    }
    const regexUpperCase = /[A-Z]/;
    if (regexUpperCase.test(passwordOne.value)) {
      symbolState.uppCase = "yes";
    }
    const regexNumbers = /\d/;
    if (regexNumbers.test(passwordOne.value) === true) {
      symbolState.numbers = "yes";
    }
    console.log(passwordOne.value.length);
    if (passwordOne.value.length >= 10) {
      symbolState.tenChar = "yes";
    }
    return symbolState;
  } else {
    return "Not equal";
  }
}

export function updateSymbolState(passwordOne, passwordTwo) {
  const changedSymbolState = compareThePasswords(passwordOne, passwordTwo);
  if (changedSymbolState === "Not equal") {
    localStorage.setItem("symbolState", JSON.stringify(initialSymbolState));
  } else {
    localStorage.setItem("symbolState", JSON.stringify(changedSymbolState));
  }
}
