import Header from "./Header"
import Container from "react-bootstrap/Container"
import {Stack} from "react-bootstrap"

function Insights() {
  return (
    <>
      <Container className="my-4">
        <Header/>
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Insights</h1>
        </Stack>
        {/* <Header/> */}
      </Container>
    </>
  );
}

export default Insights;
