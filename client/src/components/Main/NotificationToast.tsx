import { Toast, Button } from "react-bootstrap";
import { useState, Reducer } from "react";
import CommonUtils from "../../utils/CommonUtils";

export interface NotificationToastProps {
  notificationToastStateItem: NotificationToastStateItem;
  notifyClear: (id: number) => void;
}

export interface NotificationToastStateItem extends NotificationToastActionItem {
  id: number;
}

export interface NotificationToastActionItem {
  variant: "success" | "danger";
  messages: string[]
}

export interface State {
  notifications: NotificationToastStateItem[];
}

export interface Action {
  type: "notify" | "rem";
  notification: NotificationToastActionItem | number;
}

export const reducer: Reducer<State, Action> = (state: State, action: Action) => {
  const newState = { ...state };

  switch (action.type) {
    case "notify":
      if (typeof action.notification == "object") {
        newState.notifications
          .push({ ...action.notification as NotificationToastActionItem, id: CommonUtils.getRandomNumDefault() });
      }

      break;
    case "rem":
      if (typeof action.notification == "number" && action.notification != -1) {
        newState.notifications.splice(newState.notifications.findIndex(v => v.id == action.notification as number), 1);
      }

      break;
  }

  action.notification = -1;

  return newState;
}

export default function NotificationToast({ notificationToastStateItem, notifyClear }: NotificationToastProps) {
  const [show, setShow] = useState<boolean>(true);

  function close() {
    setShow(false);
    notifyClear(notificationToastStateItem.id);
  }

  const messageComponents = notificationToastStateItem.messages
    .map(message => <p className="mb-1" key={message}>{message}</p>);

  return (
    <Toast role="alert"
      onClose={close}
      className="text-bg-primary border-0 m-lg-0 mb-lg-2 m-2"
      show={show}
      autohide
      delay={5000}
      id="toast"
      bg={notificationToastStateItem.variant}>
      <div className="d-flex">
        <Toast.Body className="text-light">
          {messageComponents}
        </Toast.Body>
        <Button variant="close" onClick={close} className="btn-close-white me-2 m-auto" data-bs-dismiss="toast" />
      </div>
    </Toast>
  )
}