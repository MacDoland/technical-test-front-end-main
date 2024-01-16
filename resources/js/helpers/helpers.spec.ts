import { isNotNullOrUndefined } from "./helpers";

describe("Helpers", () => {
  describe("isNotNullOrUndefined", () => {
    test("returns false when parameter is null", async () => {
      // Arrange
      const param = null;
      const expectedResult = false;

      // Act
      const result = isNotNullOrUndefined(param);

      // Assert
      expect(result).toBe(expectedResult);
    });

    test("returns false when parameter is undefined", async () => {
      // Arrange
      const param = undefined;
      const expectedResult = false;

      // Act
      const result = isNotNullOrUndefined(param);

      // Assert
      expect(result).toBe(expectedResult);
    });

    test("returns true when parameter is not null or undefined", async () => {
      // Arrange
      const param = 2;
      const expectedResult = true;

      // Act
      const result = isNotNullOrUndefined(param);

      // Assert
      expect(result).toBe(expectedResult);
    });
  });

  describe("isNotUndefined", () => {
    test("returns false when parameter is undefined", async () => {
      // Arrange
      const param = undefined;
      const expectedResult = false;

      // Act
      const result = isNotNullOrUndefined(param);

      // Assert
      expect(result).toBe(expectedResult);
    });
    test("returns true when parameter is not undefined", async () => {
      // Arrange
      const param = 6;
      const expectedResult = true;

      // Act
      const result = isNotNullOrUndefined(param);

      // Assert
      expect(result).toBe(expectedResult);
    });
  });
});
