import { Page, Document } from "@react-pdf/renderer";
import { Html } from "react-pdf-html";
import { Font } from "@react-pdf/renderer";
import MyCustomFont from "/fonts/THSarabunIT๙.ttf";
import { StoreContext } from "common/contexts/StoreContext";
import { useContext } from "react";

function setup() {
  const [{ userData }] = useContext(StoreContext);
  Font.register({
    family: "THSarabunIT๙",
    src: MyCustomFont
  });

  const first_name = userData?.first_name;
  const id = userData?.student_id;
  const major = userData?.organization_name;

  // BUG IS HERE P'JAMES
  console.log(first_name);
  console.log(id);
  console.log(major);

  const today = new Date();
  const html = `
        <html>
           <style>
                 .invoice-box {
                 max-width: 800px;
                 margin: auto;
                 padding: 30px;
                 border: 1px solid #eee;
                 font-size: 16px;
                 line-height: 24px;
                 font-family: THSarabunIT๙;
                 color: #555;
                 }
                 .margin-top {
                 margin-top: 50px;
                 }
                 .justify-center {
                 text-align: center;
                 }
                 .invoice-box table {
                 width: 100%;
                 line-height: inherit;
                 text-align: left;
                 }
                 .invoice-box table td {
                 padding: 5px;
                 }
                 .invoice-box table tr td:nth-child(2) {
                 text-align: right;
                 }
                 .invoice-box table tr.top table td {
                 padding-bottom: 20px;
                 }
                 .invoice-box table tr.top table td.title {
                 font-size: 45px;
                 line-height: 45px;
                 color: #333;
                 }
                 .invoice-box table tr.information table td {
                 padding-bottom: 40px;
                 }
                 .invoice-box table tr.heading td {
                 background: #eee;
                 border-bottom: 1px solid #ddd;
                 font-weight: bold;
                 }
                 .invoice-box table tr.details td {
                 padding-bottom: 20px;
                 }
                 .invoice-box table tr.item td {
                 border-bottom: 1px solid #eee;
                 }
                 .invoice-box table tr.item.last td {
                 border-bottom: none;
                 }
                 .invoice-box table tr.total td:nth-child(2) {
                 border-top: 2px solid #eee;
                 font-weight: bold;
                 }
                 @media only screen and (max-width: 600px) {
                 .invoice-box table tr.top table td {
                 width: 100%;
                 display: block;
                 text-align: center;
                 }
                 .invoice-box table tr.information table td {
                 width: 100%;
                 display: block;
                 text-align: center;
                 }
                 }
              </style>
           <body>
              <div class="invoice-box">
                 <table cellpadding="0" cellspacing="0">
                    <tr class="top">
                       <td colspan="2">
                          <table>
                             <tr>
                                <td>
                                   Date: ${`${today.getDate()}. ${
                                     today.getMonth() + 1
                                   }. ${today.getFullYear()}.`}
                                </td>
                             </tr>
                          </table>
                       </td>
                    </tr>
                    <tr class="information">
                       <td colspan="2">
                          <table>
                             <tr>
                                <td>
                                   Name : ${first_name}
                                </td>
                                <td>
                                   student ID : ${id}
                                </td>
                                <td>
                                   ${major}
                                </td>
                             </tr>
                          </table>
                       </td>
                    </tr>
                    
                 </table>
                 <br />
              </div>
           </body>
        </html>
        `;

  return html;
}

const PDFFile = () => {
  return (
    <Document>
      <Page>
        <Html>{setup()}</Html>
      </Page>
    </Document>
  );
};

export default PDFFile;
