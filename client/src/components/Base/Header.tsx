import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" className="z-3 d-block w-100 position-fixed bg-dark-subtle">
      <Container fluid="sm">
        <Navbar.Brand href="/">{import.meta.env.VITE_MAIN_TITLE}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}