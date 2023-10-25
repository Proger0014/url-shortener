import { Container, Col, Row } from "react-bootstrap";
import MainForm from "./MainForm";
import LinkList, { Action as ShortsAction, reducer as shortsReducer } from "./LinkList";
import { useReducer} from "react";
import { NotificationToastActionItem, reducer as notifyRedcuer } from "./NotificationToast";
import NotificationRoot from "./NotificationRoot";

export default function Main() {
  const [shorts, shortsDispatcher] = useReducer(shortsReducer, { urls: [ ] });
  const [notifyState, notifyDispatcher] = useReducer(notifyRedcuer, { notifications: [] });

  function notifyDispatch(notificationToastActionItem: NotificationToastActionItem) {
    notifyDispatcher({ type: "notify", notification: notificationToastActionItem });
  }

  function removeNotifyDispatcher(id: number) {
    notifyDispatcher({ type: "rem", notification: id });
  }

  function shortDispatch(action: ShortsAction) {
    shortsDispatcher(action);
  }

  return (
    <>
      <div className="bg-dark-subtle" style={{ paddingTop: 'calc(56px + 15px)', paddingBottom: "55px" }}>
        <Container fluid="sm" className="position-relative">
            {notifyState && <NotificationRoot notificationToastStateItems={notifyState.notifications} notifyClear={removeNotifyDispatcher} />}
            <div className="text-center">
              <h2 className="mb-4">Бесплатный сокращатель ссылок</h2>
              <Row className="justify-content-center">
                <Col xs={8} md={6}>
                  <p className="m-0 mb-2 text-secondary">{import.meta.env.VITE_MAIN_TITLE} это бесплатный тул для сокращения ссылок, созданный proger0014. Создавайте ссылки в мгновение ока</p>
                </Col>
              </Row>
            </div>
            <MainForm shortsDispatcher={shortDispatch} notifyHandler={notifyDispatch} shortsState={shorts} />
            <LinkList state={shorts} notifyHandler={notifyDispatch} shortDispatcher={shortDispatch} />
        </Container>
      </div>
    </>
  );
}