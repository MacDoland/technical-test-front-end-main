import { renderHook } from "@testing-library/react";
import axios from "axios";
import useGetData from "../useGetData";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("useGetData", () => {
  test("should use our setState callback and invoke it with the expected data", async () => {
    // Arrange
    const responseData = { data: "mock" };
    mockedAxios.get.mockResolvedValueOnce({ data: responseData });

    // Act
    const result = renderHook(() => {
      return useGetData("url");
    });

    // Assert
    expect(result).toBe(responseData.data);
  });
});
