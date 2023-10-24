import { Toast, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export interface NotificationToastProps {
  variant: "success" | "danger";
  messages: string[]
}

export default function NotificationToast({ variant, messages }: NotificationToastProps) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    open();
  }, [messages])

  function close() {
    setShow(false);
  }

  function open() {
    setShow(true);
  }

  return (
    <Toast role="alert"
      onClose={close}
      className="position-absolute end-0 bottom-100 z-3 text-bg-primary border-0 m-lg-0 m-2"
      show={show}
      autohide
      delay={5000}
      id="toast"
      bg={variant}>
      <div className="d-flex" style={{ maxWidth: "348px" }}>
        <Toast.Body className="text-light">
          {messages}
        </Toast.Body>
        <Button variant="close" onClick={close} className="btn-close-white me-2 m-auto" data-bs-dismiss="toast" />
      </div>
    </Toast>
  )
}