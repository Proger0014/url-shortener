import { useState } from "react";
import UrlsUtils from "../../utils/UrlsUtils";

export interface RedirectAlertProps {
  targetUri: string;
  finishCountdown: () => void;
}

export default function RedirectAlert({ targetUri, finishCountdown }: RedirectAlertProps) {
  const [countdown, setCountdown] = useState<number>(30);

  function handleCountdown() {
    setCountdown(countdown - 1);
  }

  if (countdown > 0) {
    UrlsUtils.countdown(handleCountdown);
  } else {
    finishCountdown();
  }

  const absoluteUri = UrlsUtils.fixUri(targetUri);

  return (
    <div className="rounded bg-dark-subtle p-2 text-center">
      Переход на страницу <a href={absoluteUri} className="link-offset-2">{targetUri}</a> произойдет через {countdown} секунд...
    </div>
  )
}