import { useEffect, useState } from "react";
import axios, { type AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T;
}

const useGetData = <T>(url: string, dependencyArray: any[] = []): T | null => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    axios
      .get<ApiResponse<T>>(url)
      .then((response: AxiosResponse<ApiResponse<T>>) => {
        if (typeof response?.data !== "undefined") {
          setData(response.data.data);
        }
      })
      .catch(e => {
        // Handle error
      });
  }, [url, dependencyArray]);

  return data;
};

export default useGetData;
