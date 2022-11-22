const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(brigeSize) {
    this.bridgeSize = Number.parseInt(brigeSize);
    this.bridge = BridgeMaker.makeBridge(this.bridgeSize, BridgeRandomNumberGenerator.generate);
    this.history=[];
    this.command = [];
    this.progress = 0;
    this.gameOver = false;
    this.gameSet = false;
    this.tryCount = 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
   move(command) {
    this.history.push(this.bridge[this.progress] === command);
    this.progress += 1;
    this.chkFailAndOver();
  }

  chkFailAndOver() {
    this.gameSet = this.progress === this.bridge.length;
    this.gameOver = this.history[this.history.length - 1] === false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
   retry() {
    this.history = [];
    this.progress = 0;
    this.gameOver = false;
    this.tryCount += 1;
  }
}

module.exports = BridgeGame;
