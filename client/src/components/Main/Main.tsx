import { Container, Col, Row } from "react-bootstrap";
import MainForm from "./MainForm";
import LinkList, { Action, shortsReducer } from "./LinkList";
import { useReducer, useState } from "react";
import NotificationToast, { NotificationToastProps } from "./NotificationToast";

export default function Main() {
  const [shorts, shortsDispatcher] = useReducer(shortsReducer, { urls: [ ] });
  const [notifyState, setNotifyMessages] = useState<NotificationToastProps>();

  function notifyInfo({ variant, messages }: NotificationToastProps) {
    setNotifyMessages({ variant, messages });
  }

  function shortDispatch(action: Action) {
    shortsDispatcher(action);
  }

  return (
    <>
      <div className="bg-dark-subtle" style={{ paddingTop: 'calc(56px + 15px)', paddingBottom: "55px" }}>
        <Container fluid="sm" className="position-relative">
            {notifyState && <NotificationToast variant={notifyState!.variant} messages={notifyState!.messages} />}
            <div className="text-center">
              <h2 className="mb-4">Бесплатный сокращатель ссылок</h2>
              <Row className="justify-content-center">
                <Col xs={8} md={6}>
                  <p className="m-0 mb-2 text-secondary">{import.meta.env.VITE_MAIN_TITLE} это бесплатный тул для сокращения ссылок, созданный proger0014. Создавайте ссылки в мгновение ока</p>
                </Col>
              </Row>
            </div>
            <MainForm shortsDispatcher={shortDispatch} notifyHandler={notifyInfo} shortsState={shorts} />
            <LinkList state={shorts} notifyHandler={notifyInfo} shortDispatcher={shortDispatch} />
        </Container>
      </div>
    </>
  );
}