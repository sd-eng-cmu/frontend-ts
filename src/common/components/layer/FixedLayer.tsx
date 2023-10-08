import styled from "styled-components";

const FixedLayer = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: var(--z-sticky);
`;

export default FixedLayer;
