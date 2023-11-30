const { expect } = require("@wdio/globals");
const CharacterPage = require("../pageobjects/characters.page");

describe("main page CHARACTER", () => {
  it("should return main page", async () => {
    await CharacterPage.loadData();
    expect(CharacterPage.character).toBeExisting();
  });
  it("should click on a character title", async () => {
    await CharacterPage.open();
    await CharacterPage.navigateToMainChar();
    await expect(CharacterPage.movieDetails).toHaveText("SERIES");
  });
});

// describe("CharCard", () => {
//   it("all characters should be displayed", async () => {
//     const character = await browser.react$("CharCard");
//     expect(character.isDisplayed()).toBe(true);
//   });
// });
