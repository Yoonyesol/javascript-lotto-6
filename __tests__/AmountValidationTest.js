import UserInput from "../src/utils/UserInput.js";

describe("로또 테스트: 금액 입력 예외 테스트", () => {
  test("공백 입력", () => {
    const emptyInput = " ";

    expect(() => UserInput.validateAmount(emptyInput)).toThrow(
      "[ERROR] 입력값이 비어 있습니다."
    );
  });

  test("입력값이 숫자가 아닌 경우", () => {
    const nonNumericInput = "abc";

    expect(() => UserInput.validateAmount(nonNumericInput)).toThrow(
      "[ERROR] 숫자가 아닌 값이 입력되었습니다."
    );
  });

  test("0이하 또는 음수 입력", () => {
    const negativeInput = "0";

    expect(() => UserInput.validateAmount(negativeInput)).toThrow(
      "[ERROR] 유효한 범위의 값을 입력해 주세요."
    );
  });

  test("0이하 또는 음수 입력", () => {
    const negativeInput = "-1000";

    expect(() => UserInput.validateAmount(negativeInput)).toThrow(
      "[ERROR] 유효한 범위의 값을 입력해 주세요."
    );
  });

  test("1000원 단위가 아닌 수 입력", () => {
    const invalidAmount = "2500";

    expect(() => UserInput.validateAmount(invalidAmount)).toThrow(
      "[ERROR] 구입금액은 1000원 단위로 입력해야 합니다."
    );
  });

  test("유효한 입력", () => {
    const validInput = "3000";

    expect(UserInput.validateAmount(validInput)).toBe(3000);
  });
});
