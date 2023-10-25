import { Link } from "react-router-dom";
import { Action, Url } from "./LinkList";
import { Button, Col } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./LinkItem.css";
import { NotificationToastActionItem } from "./NotificationToast";

export interface LinkItemProps {
  url: Url;
  notifyHandler: ({ variant, messages }: NotificationToastActionItem) => void;
  shortDispatcher: (action: Action) => void;
}

export default function LinkItem({ url, notifyHandler, shortDispatcher }: LinkItemProps) {
  function handleCopy() {
    notifyHandler({ variant: "success", messages: ["ссылка успешно скопирована"] });
  }

  function handleHide() {
    shortDispatcher({ type: "rem", url: url });
    notifyHandler({ variant: "success", messages: ["ссылка успешно убрана"] });
  }

  return (
    <Col md={9} lg={8} className="mb-3 px-3">
      <div>
        <div className="rounded bg-white p-2">
          <div className="w-100 d-flex justify-content-between align-items-center">
            <div className="overflow-hidden d-flex justify-content-between flex-xl-row flex-column me-2 me-xl-0">
              <span className="me-0 me-sm-3">{url.targetUri}</span>
              <Link className="link-offset-2 me-2" to={url.shortLink}>
                {url.shortLink}
              </Link>
            </div>
            <div className="buttons d-flex justify-content-xl-between justify-content-end flex-xl-row flex-column">
              <CopyToClipboard text={url.shortLink} onCopy={handleCopy}>
                <Button variant="glass" className="py-1 me-xl-2">Copy</Button>
              </CopyToClipboard>

              <Button variant="danger" className="py-1" onClick={handleHide}>Hide</Button>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}