import { Console } from "@woowacourse/mission-utils";
import UserInput from "./utils/UserInput.js";

class App {
  async play() {
    const lottoAmount = await UserInput.getPurchaseAmount();
    Console.print(lottoAmount);

    const lottoNumbers = await UserInput.getLottoNumbers();
    Console.print(lottoNumbers);
  }
}

export default App;
