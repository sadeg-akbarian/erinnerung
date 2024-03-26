///<reference types="jest" />

import { togglePasswordButton } from "./lib.js";
import { compareThePasswords } from "./lib.js";

describe("testing the toggle-function", () => {
  it("shows 'Hide Passwords'", () => {});
  const buttonObject = {
    target: {
      innerText: "Show Passwords",
    },
  };
  const expectedResult = {
    buttonText: "Hide Passwords",
  };
  const theResult = togglePasswordButton(buttonObject);
  expect(theResult).toEqual(expectedResult);
});

describe("test the compare-function", () => {
  it("should return 'Not equal'", () => {
    const firstPassword = {
      value: "hallo",
    };
    const secondPassword = {
      value: "Hallo",
    };
    const theResult = compareThePasswords(firstPassword, secondPassword);
    expect(theResult).toEqual("Not equal");
  });

  it("should return yes for equal and lowCase", () => {
    const firstPassword = {
      value: "hallo",
    };
    const secondPassword = {
      value: "hallo",
    };
    const symbolState = {
      equal: "yes",
      lowCase: "yes",
      uppCase: "no",
      numbers: "no",
      tenChar: "no",
    };
    const theResult = compareThePasswords(firstPassword, secondPassword);
    expect(theResult).toEqual(symbolState);
  });

  it("should return yes for equal, lowCase and uppCase", () => {
    const firstPassword = {
      value: "Hallo",
    };
    const secondPassword = {
      value: "Hallo",
    };
    const symbolState = {
      equal: "yes",
      lowCase: "yes",
      uppCase: "yes",
      numbers: "no",
      tenChar: "no",
    };
    const theResult = compareThePasswords(firstPassword, secondPassword);
    expect(theResult).toEqual(symbolState);
  });

  it("should return yes for equal, lowCase, uppCase and numbers", () => {
    const firstPassword = {
      value: "Hallo1",
    };
    const secondPassword = {
      value: "Hallo1",
    };
    const symbolState = {
      equal: "yes",
      lowCase: "yes",
      uppCase: "yes",
      numbers: "yes",
      tenChar: "no",
    };
    const theResult = compareThePasswords(firstPassword, secondPassword);
    expect(theResult).toEqual(symbolState);
  });

  it("should return yes for all", () => {
    const firstPassword = {
      value: "Hallo1mmmmmmmm",
    };
    const secondPassword = {
      value: "Hallo1mmmmmmmm",
    };
    const symbolState = {
      equal: "yes",
      lowCase: "yes",
      uppCase: "yes",
      numbers: "yes",
      tenChar: "yes",
    };
    const theResult = compareThePasswords(firstPassword, secondPassword);
    expect(theResult).toEqual(symbolState);
  });
});
