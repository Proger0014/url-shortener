import { 
  CreateUrlRequest, 
  CreateUrlResponse, 
  GetUrlRequest, 
  GetUrlResponse } from "../../contracts/Urls";

export interface IUrlsApi {
  getUrl: (request: GetUrlRequest) => Promise<GetUrlResponse>;
  createUrl: (request: CreateUrlRequest) => Promise<CreateUrlResponse>;
}