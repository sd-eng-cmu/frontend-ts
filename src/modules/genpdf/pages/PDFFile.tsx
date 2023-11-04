import { Page, Document } from "@react-pdf/renderer";
import { Html } from "react-pdf-html";
import { Font } from "@react-pdf/renderer";
import MyCustomFont from "/fonts/THSarabunNew.ttf";
import { useContext } from "react";
import { StoreContext } from "common/contexts/StoreContext";

const PDFFile: React.FC = () => {
  const [{ userData }] = useContext(StoreContext);
  const first_name = userData?.first_name;
  const id = userData?.student_id;
  const major = userData?.organization_name;

  // BUG IS HERE P'JAMES
  console.log(first_name);
  console.log(id);
  console.log(major);

  Font.register({
    family: "THSarabunNew",
    src: MyCustomFont
  });

  const today = new Date();
  const html = `<html>
      <body>
        <p>
          Date: ${`${today.getDate()}. ${
            today.getMonth() + 1
          }. ${today.getFullYear()}.`}
        </p>
        <p>Name : ${first_name}</p>
        <p>student ID : ${id}</p>
        <p>${major}</p>
      </body>
    </html>`;

  return (
    <Document>
      <Page>
        <Html>{html}</Html>
      </Page>
    </Document>
  );
};

export default PDFFile;
