import styled from "styled-components";

import Forms from "components/form";

function FormPage() {
  return (
    <Container>
      <Forms></Forms>
    </Container>
  );
}

export default FormPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
