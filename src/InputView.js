const MissionUtils = require('@woowacourse/mission-utils');
const {Console} = MissionUtils;
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {},

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
   readMoving(callback) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n',(answer) => {
      try{
        moveValidation(answer);
        callback(answer);
      }catch(err){
        Console.print(err.message);
      }
    })
},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
