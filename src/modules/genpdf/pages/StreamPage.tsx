import styled from "styled-components";
import { StoreContext } from "common/contexts/StoreContext";
import { useContext } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./PDFFile";

function StreamPage() {
  const [{ userData }] = useContext(StoreContext);
  const __filename = "_หนังสือรับรองความประพฤติ";
  return (
    <Container>
      <Login className="p-4 md:p-16">
        <img
          className="object-scale-down w-[20em] mx-auto mt-[-2em]"
          src="/images/logoFaculty.png"
        />
        <div className="topic-container">
          <p className="text-2xl font-semibold md:text-3xl">Download PDF</p>
          <p className="font-normal text-base md:text-[1.35em]">
            {userData?.first_name} {userData?.last_name}
          </p>
        </div>
        <PDFDownloadLink
          document={<PDFFile />}
          fileName={userData?.student_id + __filename}
        >
          {({ loading }) =>
            loading ? (
              <button>Loading Document...</button>
            ) : (
              <button>Download</button>
            )
          }
        </PDFDownloadLink>
      </Login>
    </Container>
  );
}

export default StreamPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = styled.div`
  max-width: fit-content;
  max-height: fit-content;
  border-radius: 1.5em;
  background: #fff;
  filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.25));

  .topic-container {
    text-align: center;
    color: #68010e;
    margin-top: -5em;
  }
`;
