import { ProblemResponse } from "../../contracts/Errors";
import { 
  CreateUrlRequest, 
  CreateUrlResponse, 
  GetUrlRequest, 
  GetUrlResponse } from "../../contracts/Urls";
import { SWRResponse } from "swr";

export interface IUrlsApi {
  getUrl: (request: GetUrlRequest) => SWRResponse<GetUrlResponse, ProblemResponse>;
  createUrl: (request: CreateUrlRequest) => SWRResponse<CreateUrlResponse, ProblemResponse>;
}