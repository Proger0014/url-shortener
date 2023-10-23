import { IUrlsApi } from "../abstraction/api/IUrlsApi";
import { CreateUrlRequest, CreateUrlResponse, GetUrlRequest, GetUrlResponse } from "../contracts/Urls";
import AxiosConfiguration from "../common/axios/AxiosConfiguration";
import useSWR from "swr";
import { ProblemResponse } from "../contracts/Errors";

export const UrlsApi: IUrlsApi = {
  getUrl: (request: GetUrlRequest) => {
    return useSWR<GetUrlResponse, ProblemResponse>(`api/urls/${request.shortUrl}`, (url: string) => 
      AxiosConfiguration
        .get<GetUrlResponse>(url)
        .then<GetUrlResponse>(res => res.data));
  },
  createUrl: (request: CreateUrlRequest) => {
    return useSWR<CreateUrlResponse, ProblemResponse>("api/urls", async (url: string) => 
      await AxiosConfiguration
        .post<CreateUrlResponse>(url, { ...request })
        .then(res => res.data));
  }
};