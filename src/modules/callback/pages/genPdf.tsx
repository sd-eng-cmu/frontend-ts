// import ReactDOMServer from "react-dom/server";
import htmlPdf from "html2pdf.js";
import { useContext } from "react";
import { StoreContext } from "common/contexts/StoreContext";

function Genpdf() {
  const [store] = useContext(StoreContext);
  const pdfJSX = () => {
    const today = new Date();
    return `
    <html>
    <head>
      <meta charset="utf-8" />
      <title>PDF Result Template</title>
      <style>
        .test {
          font-size: 100;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: aquamarine;
        }
      </style>
    </head>
    <body>
  <div class="test">
    <div>
      Date: ${`${today.getDate()}. ${today.getMonth() + 1}.
      ${today.getFullYear()}.`}
    </div>

    <div>
      ${store.userData?.prename}${store.userData?.first_name}
      ${store.userData?.last_name}
    </div>
    <div>รหัสนักศึกษา: ${store.userData?.student_id}</div>
    <div>วิศวคอมพิวเตอร์</div>

    <br />
  </div>
</body>
  </html>  
        `;
  };

  const printHandler = () => {
    // const printElement = ReactDOMServer.renderToString(pdfJSX());
    const printElement = pdfJSX();

    htmlPdf().from(printElement).save();
  };

  return (
    <div>
      <button onClick={printHandler}>Print</button>
    </div>
  );
}
export default Genpdf;
