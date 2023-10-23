import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { useState } from "react";

export interface MainFormValues {
  shortUrl?: string;
  targetUri: string;
}

const onSubmit: SubmitHandler<MainFormValues> = (data) => {
  alert(JSON.stringify(data));
}

export default function MainForm() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { control, handleSubmit, resetField } = useForm<MainFormValues>({
    defaultValues: {
      shortUrl: "",
      targetUri: ""
    }
  });

  function toggleOpen() {
    if (isOpen) {
      resetField("shortUrl");
    }
    
    setIsOpen(!isOpen);
  }

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row className="justify-content-center align-items-top mb-3 px-2">
        <Controller
          name="targetUri"
          control={control}
          rules={{ required: { value: true, message: "не введена ссылка" }, pattern: { value: /^((https|http)\:\/\/)?(www\.)([a-zA-Z\./]+)(\.\w+)$/ig, message: "не вверно введена ссылка" } }}
          render={({ field, fieldState }) => (
            <Form.Group as={Col} md={6} sm={12} xs={12} className="mb-sm-4 mb-4 mb-md-0 order-1">
              <InputGroup>
                <Button variant="secondary" onClick={toggleOpen}>
                  URL
                </Button>
                <Form.Control
                  {...field}
                  isInvalid={fieldState.invalid} 
                  type="text" 
                  className="py-2 fs-5 col-sm-12" 
                  placeholder="Введите ссылку" />
                {fieldState.error && (
                  <Form.Control.Feedback type="invalid">
                    {fieldState.error.message}
                  </Form.Control.Feedback>
                )}
              </InputGroup>
            </Form.Group>
          )} />
        {isOpen && (
          <Controller
          name="shortUrl"
          control={control}
          rules={{ required: { value: true, message: "не введена ссылка" }, pattern: { value: /^([A-Za-z0-9]+)$/ig, message: "не вверно введена ссылка" } }}
          render={({ field, fieldState }) => (
            <Form.Group as={Col} md={9} lg={8} sm={12} xs={12} className="mt-md-4 mb-sm-4 mb-4 mb-md-0 order-2 order-md-3">
              <Form.Control
                {...field}
                isInvalid={fieldState.invalid} 
                type="text" 
                className="py-2 fs-5 col-sm-12" 
                placeholder="Введите ссылку" />
              {fieldState.error && (
                <Form.Control.Feedback type="invalid">
                  {fieldState.error.message}
                </Form.Control.Feedback>
              )}
            </Form.Group>
          )} />
        )}
        <Col sm={12} xs={12} md={3} lg={2} className="order-3 order-md-2">
          <Button className="py-2 fs-5 col-12" type="submit" variant="primary">Сократить</Button>
        </Col>
      </Row>
    </Form>
  )
}