import { ToastContainer } from "react-bootstrap";
import NotificationToast, { NotificationToastStateItem } from "./NotificationToast";

export interface NotificationRootProps {
  notificationToastStateItems: NotificationToastStateItem[];
  notifyClear: (id: number) => void;
}

export default function NotificationRoot({ notificationToastStateItems, notifyClear }: NotificationRootProps) {
  const toasts = notificationToastStateItems.map(notificationToastStateItem => (
    <NotificationToast key={notificationToastStateItem.id} notificationToastStateItem={notificationToastStateItem} notifyClear={notifyClear} />
  ));

  return (
    <ToastContainer style={{ top: "-60px" }} className="end-0">
      {toasts}
    </ToastContainer>
  );
}