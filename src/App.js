const BridgeGame = require("./BridgeGame.js");
const OutputView = require("./OutputView.js");
const InputView = require("./InputView");
class App {
  async play() {
    OutputView.printStart();
    InputView.readBridgeSize((size) => {
      this.game = new BridgeGame(size);
    });
  }
}

const app = new App();
app.play();
module.exports = App;
