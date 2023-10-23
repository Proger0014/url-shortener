import { Container, Col, Row } from "react-bootstrap";
import MainForm from "./MainForm";

export default function Main() {
  return (
    <>
      <div className="bg-dark-subtle" style={{ paddingTop: 'calc(56px + 15px)', height: '40vh' }}>
        <Container fluid="sm">
            <div className="text-center">
              <h2 className="mb-4">Бесплатный сокращатель ссылок</h2>
              <Row className="justify-content-center">
                <Col xs={8} md={6}>
                  <p className="m-0 mb-2 text-secondary">{import.meta.env.VITE_MAIN_TITLE} это бесплатный тул для сокращения ссылок, созданный proger0014. Создавайте ссылки в мгновение ока</p>
                </Col>
              </Row>
            </div>
            <MainForm />
        </Container>
      </div>
      <div style={{ height: '100.2vh' }}></div>
    </>
  );
}