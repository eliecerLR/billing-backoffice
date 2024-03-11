import { http, ApiResponse, QueryParams } from './httpCore';

class ApiService {
  async get<T>(
    url: string,
    headers?: object,
    queryParams?: QueryParams
  ): Promise<ApiResponse<T>> {
    return http<T>(url, 'GET', headers, queryParams);
  }

  async post<T>(
    url: string,
    data: any,
    headers?: object,
    queryParams?: QueryParams
  ): Promise<ApiResponse<T>> {
    return http<T>(url, 'POST', headers, queryParams, data);
  }

  async put<T>(
    url: string,
    data: any,
    headers?: object,
    queryParams?: QueryParams
  ): Promise<ApiResponse<T>> {
    return http<T>(url, 'PUT', headers, queryParams, data);
  }

  async patch<T>(
    url: string,
    data: any,
    headers?: object,
    queryParams?: QueryParams
  ): Promise<ApiResponse<T>> {
    return http<T>(url, 'PATCH', headers, queryParams, data);
  }
}

export default ApiService;
