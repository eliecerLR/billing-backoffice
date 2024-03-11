import axios, { AxiosResponse, AxiosError } from 'axios';

export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  error: string | null;
}

export interface QueryParams {
  [key: string]: string;
}

export const http = async <T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH',
  headers?: object,
  queryParams?: QueryParams,
  data?: any
): Promise<ApiResponse<T>> => {
  try {
    let fullUrl = `${process.env.NEXT_PUBLIC_API_URL}${url}`;
    if (queryParams) {
      const queryString = Object.keys(queryParams)
        .map(key => `${key}=${queryParams[key]}`)
        .join('&');
      fullUrl += `?${queryString}`;
    }
    console.log(fullUrl);
    const response: AxiosResponse<T> = await axios({
      method,
      headers,
      url: fullUrl,
      data,
    });

    return {
      success: true,
      data: response.data,
      error: null,
    };
  } catch (error) {
    const axiosError = error as AxiosError;
    return {
      success: false,
      data: null,
      error: 'An error occurred',
    };
  }
};
