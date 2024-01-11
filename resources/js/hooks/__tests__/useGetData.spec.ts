import { renderHook } from "@testing-library/react";
import axios from "axios";
import useGetData from "./useGetData";

jest.mock("axios");
const mockSetState = jest.fn();

describe("useGetData", () => {
  test("should use our setState callback and invoke it with the expected data", async () => {
    // Arrange
    const responseData = { data: "mock" };
    axios.get.mockResolvedValueOnce({ data: responseData });

    // Act
    renderHook(() => {
      return useGetData("url", mockSetState);
    });

    // Assert
    expect(mockSetState).toHaveBeenCalledWith(responseData.data);
    expect(mockSetState).toHaveBeenCalledTimes(1);
  });
});
