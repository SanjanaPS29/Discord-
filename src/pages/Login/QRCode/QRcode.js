import React from "react";
import { QRStyle } from "./QRCode.style";
import QR from "../../../assets/QR.png";

function QRcode() {
  return (
    <QRStyle>
      <div>
        <img src={QR} alert="QRcode img" width="60%" />
      </div>
      <div>
        <h3>Login in with QR Code</h3>
      </div>
      <div>
        <p>
          Scan this with the <strong>Discord mobile app</strong> to log in
          instantly.
        </p>
      </div>
    </QRStyle>
  );
}

export default QRcode;
