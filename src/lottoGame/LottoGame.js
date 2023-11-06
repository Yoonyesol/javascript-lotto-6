import { Console } from "@woowacourse/mission-utils";
import Lotto from "../lotto/Lotto.js";
import LottoUtils from "./lottoUtils.js";

class LottoGame {
  #purchasedLottos;
  #winningNumbers;
  #bonusNumber;
  #rank;

  constructor() {
    this.#purchasedLottos = [];
    this.#winningNumbers = [];
    this.#bonusNumber = 1;
    this.#rank = {
      firstPlace: 0,
      secondPlace: 0,
      thirdPlace: 0,
      fourthPlace: 0,
      fifthPlace: 0,
    };
  }

  generateLotto(lottoCount) {
    this.#purchasedLottos = [];

    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = LottoUtils.generateRandomNumber();
      this.#purchasedLottos.push(new Lotto(lottoNumbers));
    }

    this.printPurchasedLottos(lottoCount);
  }

  printPurchasedLottos(lottoCount) {
    Console.print(`${lottoCount}개를 구매했습니다.`);

    this.#purchasedLottos.forEach((lotto) =>
      Console.print(LottoUtils.ascendingSort(lotto.getNumbers()))
    );
  }

  setWinningNumbers(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  calculateWinner() {
    this.#purchasedLottos.forEach((lotto) => {
      const sameNumbers = lotto
        .getNumbers()
        .filter((number) => this.#winningNumbers.includes(number));

      switch (sameNumbers.length) {
        case 6:
          this.#rank.firstPlace++;
          break;
        case 5:
          if (sameNumbers.includes(this.#bonusNumber)) {
            this.#rank.secondPlace++;
            break;
          }
          this.#rank.thirdPlace++;
          break;
        case 4:
          this.#rank.fourthPlace++;
          break;
        case 3:
          this.#rank.fifthPlace++;
          break;
        default:
          break;
      }
    });

    this.printWinner();
  }

  printWinner() {
    Console.print("당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${this.#rank.fifthPlace}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#rank.fourthPlace}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#rank.thirdPlace}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#rank.secondPlace}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.#rank.firstPlace}개`);
  }
}

export default LottoGame;
