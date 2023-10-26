import useSWR from "swr";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import RedirectAlert from "./RedirectAlert";
import { useState } from "react";
import UrlsUtils from "../../utils/UrlsUtils";
import { UrlsApi } from "../../api/UrlsApi";
import { GetUrlResponse } from "../../contracts/Urls";
import { ProblemResponse} from "../../contracts/Errors";
import BaseContainer from "../Base/BaseContainer";

export default function Redirect() {
  const { shortUrl } = useParams();
  const [isCountdownFinish, setIsCountdownFinish] = useState<boolean>(false);
  const { data } = useSWR<GetUrlResponse, ProblemResponse>("fetcher", 
    () => UrlsApi.getUrl({ shortUrl: shortUrl! }));

  function finishCountdown() {
    setIsCountdownFinish(true);
  }
  
  if (isCountdownFinish) {
    setTimeout(() => 
      UrlsUtils.redirect(UrlsUtils.fixUri(data?.targetUri ?? "") ?? "", true), 1000);
  }

  return (
    <BaseContainer>
      <Container fluid="sm">
        <RedirectAlert targetUri={data?.targetUri ?? ""} finishCountdown={finishCountdown} />
      </Container>
    </BaseContainer>
  )
}