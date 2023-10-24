import { SWRHook, Middleware } from "swr/_internal";
import { ProblemDefaultResponse, ProblemResponse, ProblemValidationResponse } from "../../../contracts/Errors";
import { AxiosError } from "axios";

export const errorResponseOverrideAxiosMiddleware: Middleware = (useSWRNext: SWRHook) => (key, fetcher, config) => {
  const res = useSWRNext(key, fetcher, config);

  const error: ProblemResponse = (res?.error as AxiosError<ProblemResponse>)?.status === 400
    ? res?.error?.response?.data as ProblemValidationResponse
    : res?.error?.response?.data as ProblemDefaultResponse;

  return {
    ...res,
    error: error as any
  };
}