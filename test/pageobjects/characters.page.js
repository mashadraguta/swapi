const { $ } = require("@wdio/globals");
const Page = require("./page");

class CharacterPage extends Page {
  get character() {
    return $("#character");
  }
  get characterArray() {
    return $$("#character");
  }

  get title() {
    return $("#title-toggle-click");
  }
  //The command only works with applications using React v16.x.
  //   get allChars() {
  //     return browser.react$("Characters");

  //   }
  get movieDetails() {
    return $("#movie-details");
  }

  async loadData() {
    await this.open();
    await this.character.waitForDisplayed({ timeout: 10000 });
  }

  async navigateToMainChar() {
    await this.character.waitForDisplayed({ timeout: 10000 });
    let charArr = await this.characterArray;
    await charArr[0].$("#title-toggle-click").click();

    // this.open(`/character/${allChars[0].name}`);
  }

  open() {
    return super.open(`/`);
  }
}

module.exports = new CharacterPage();
