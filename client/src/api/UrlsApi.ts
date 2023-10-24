import { IUrlsApi } from "../abstraction/api/IUrlsApi";
import { CreateUrlRequest, CreateUrlResponse, GetUrlRequest, GetUrlResponse } from "../contracts/Urls";
import AxiosConfiguration from "../common/axios/AxiosConfiguration";

export const UrlsApi: IUrlsApi = {
  getUrl: async (request: GetUrlRequest) =>
    await AxiosConfiguration
      .get<GetUrlResponse>(`api/urls/${request.shortUrl}`)
      .then(res => res.data),
  createUrl: async (request: CreateUrlRequest) =>
    await AxiosConfiguration
      .post<CreateUrlResponse>("api/urls", { ...request })
      .then(res => res.data)
};