import { SWRConfig } from "swr";
import { errorResponseOverrideAxiosMiddleware } from "../common/swr/middlewares/AxiosErrorResponseOverrideMiddleware";
import Routes from "../common/routes/Routes";

export default function Configuration() {
  return (
    <SWRConfig value={{ use: [errorResponseOverrideAxiosMiddleware] }}>
      <Routes />
    </SWRConfig>
  )
}