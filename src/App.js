const BridgeGame = require("./BridgeGame.js");
const OutputView = require("./OutputView.js");
const InputView = require("./InputView");
class App {
  async play() {
    OutputView.printStart();
    InputView.readBridgeSize((size) => {
      this.game = new BridgeGame(size);
      this.move();
    });
  }

  async move() {
    InputView.readMoving((command) => {
      this.game.move(command);
      OutputView.printMap(this.game);
    });
  }
}

const app = new App();
app.play();
module.exports = App;
