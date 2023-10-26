import useSWR from "swr";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import RedirectAlert from "./RedirectAlert";
import { useState } from "react";
import UrlsUtils from "../../utils/UrlsUtils";
import { UrlsApi } from "../../api/UrlsApi";
import { GetUrlResponse } from "../../contracts/Urls";
import { ProblemResponse} from "../../contracts/Errors";

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
      UrlsUtils.redirect(
        UrlsUtils.fixUri(data?.targetUri ?? "") 
        ?? ""), 1000);
  }

  return (
    <Container fluid="sm">
      <div style={{ paddingTop: "calc(56px + 15px)" }}>
        <RedirectAlert targetUri={data?.targetUri ?? ""} finishCountdown={finishCountdown} />
      </div>
    </Container>
  )
}