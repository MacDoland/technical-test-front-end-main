import { useEffect } from "react";
import axios, { type AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T;
}

const useGetData = <T>(
  url: string,
  setState: React.Dispatch<React.SetStateAction<T>>,
): void => {
  useEffect(() => {
    axios
      .get<ApiResponse<T>>(url)
      .then((response: AxiosResponse<ApiResponse<T>>) => {
        if (typeof response?.data !== "undefined") {
          setState(response.data.data);
        }
      })
      .catch(e => {
        // Handle error
      });
  }, [url, setState]);
};

export default useGetData;
