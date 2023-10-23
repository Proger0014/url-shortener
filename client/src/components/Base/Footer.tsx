import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="bg-dark text-light">
      <Container className="py-3">
        <div className="d-flex justify-content-end">
          <p className="m-0">
            <b>
              <a
                className="link-underline link-underline-opacity-0 link-opacity-75-hover link-light"
                href={import.meta.env.VITE_GITHUB_LINK}>
                Proger0014 Inc.
              </a>
            </b>
          </p>
        </div>
      </Container>
    </div>
  )
}