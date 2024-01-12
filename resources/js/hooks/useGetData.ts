import { useEffect, useRef, useState } from "react";
import axios, { type AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T;
}

const useGetData = <T>(
  url: string,
  defaultValue: T | null = null,
): T | null => {
  const isDataFetched = useRef(false);

  const [data, setData] = useState<T | null>(defaultValue);

  useEffect(() => {
    if (!isDataFetched.current) {
      isDataFetched.current = true;

      axios
        .get<ApiResponse<T>>(url)
        .then((response: AxiosResponse<ApiResponse<T>>) => {
          if (typeof response?.data !== "undefined") {
            setData(response.data.data);
          }
        })
        .catch(e => {
          isDataFetched.current = false;
          // TODO: handle error
        });
    }
  }, [url]);

  return data;
};

export default useGetData;
