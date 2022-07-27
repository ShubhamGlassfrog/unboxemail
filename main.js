// import sgMail from "@sendgrid/mail";

const sgMail = require("@sendgrid/mail");

const apiKey =
  "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"; // UNBOX Basics' SendGrid Key

function sendEmailToClient(email, subject, body) {
  sgMail.setApiKey(apiKey);
  const msgToClient = {
    to: email,
    from: {
      email: "info@unboxbasics.com",
      name: "UNBOX Basics",
    },
    subject: subject,
    html: body,
  };
  sgMail.send(msgToClient);
  console.log("Email Sent");
}

function sendEmailToAdmin(subject, body) {
  sgMail.setApiKey(apiKey);
  const msgToAdmin = {
    to: "info@unboxbasics.com",
    from: {
      email: "info@unboxbasics.com",
      name: "UNBOX Basics",
    },
    subject: subject,
    html: body,
  };
  sgMail.send(msgToAdmin);
}

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  sendEmailToClient(
    "rahul@intelgray.com",
    "UNBOX x Tabby - buy now pay later",
    html
  );
  res.send("Hello World");
});

app.listen(3000, "localhost", function () {
  console.log("Express is live on http://locahost:3000");
});

//html file

const html = `
<!DOCTYPE html>
<html
  lang="en"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="utf-8" />
    <!-- utf-8 works for most cases -->
    <meta name="viewport" content="width=device-width" />
    <!-- Forcing initial-scale shouldn't be necessary -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- Use the latest (edge) version of IE rendering engine -->
    <meta name="x-apple-disable-message-reformatting" />
    <!-- Disable auto-scale in iOS 10 Mail entirely -->
    <title></title>
    <!-- The title tag shows in email notifications, like Android 4.4. -->

    <link
      href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700"
      rel="stylesheet"
    />

    <!-- CSS Reset : BEGIN -->
    <style>
      /* What it does: Remove spaces around the email design added by some email clients. */
      /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
      html,
      body {
        margin: 0 auto !important;
        padding: 0 !important;
        height: 100% !important;
        width: 100% !important;
        background: #f1f1f1;
      }

      /* What it does: Stops email clients resizing small text. */
      * {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      /* What it does: Centers email on Android 4.4 */
      div[style*="margin: 16px 0"] {
        margin: 0 !important;
      }

      /* What it does: Stops Outlook from adding extra spacing to tables. */
      table,
      td {
        mso-table-lspace: 0pt !important;
        mso-table-rspace: 0pt !important;
      }

      /* What it does: Fixes webkit padding issue. */
      table {
        border-spacing: 0 !important;
        border-collapse: collapse !important;
        table-layout: fixed !important;
        margin: 0 auto !important;
      }

      /* What it does: Uses a better rendering method when resizing images in IE. */
      img {
        -ms-interpolation-mode: bicubic;
      }

      /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
      a {
        text-decoration: none;
      }

      /* What it does: A work-around for email clients meddling in triggered links. */
      *[x-apple-data-detectors],
    /* iOS */
    .unstyle-auto-detected-links *,
    .aBn {
        border-bottom: 0 !important;
        cursor: default !important;
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }

      /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
      .a6S {
        display: none !important;
        opacity: 0.01 !important;
      }

      /* What it does: Prevents Gmail from changing the text color in conversation threads. */
      .im {
        color: inherit !important;
      }

      /* If the above doesn't work, add a .g-img class to any image in question. */
      img.g-img + div {
        display: none !important;
      }

      /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
      /* Create one of these media queries for each additional viewport size you'd like to fix */

      /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
      @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
        u ~ div .email-container {
          min-width: 320px !important;
        }
      }

      /* iPhone 6, 6S, 7, 8, and X */
      @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
        u ~ div .email-container {
          min-width: 375px !important;
        }
      }

      /* iPhone 6+, 7+, and 8+ */
      @media only screen and (min-device-width: 414px) {
        u ~ div .email-container {
          min-width: 414px !important;
        }
      }
    </style>

    <!-- CSS Reset : END -->

    <!-- Progressive Enhancements : BEGIN -->
    <style>
      .primary {
        background: #ffffff;
      }

      .bg_white {
        background: #ffffff;
      }

      .bg_light {
        background: #fafafa;
      }

      .bg_black {
        background: #000000;
      }

      .bg_dark {
        background: rgba(0, 0, 0, 0.8);
      }

      .email-section {
        padding: 2.5em;
      }

      /*BUTTON*/
      .btn {
        padding: 5px 20px;
        display: inline-block;
      }

      .btn.btn-primary {
        border-radius: 5px;
        background: #bc90c0;
        color: #ffffff;
      }

      .btn.btn-white {
        border-radius: 5px;
        background: #ffffff;
        color: #000000;
      }

      .btn.btn-white-outline {
        border-radius: 5px;
        background: transparent;
        border: 1px solid #fff;
        color: #fff;
      }

      .btn.btn-black {
        border-radius: 20px;
        background: #000;
        color: #fff;
      }

      .btn.btn-black-outline {
        border-radius: 0px;
        background: transparent;
        border: 2px solid #000;
        color: #000;
        font-weight: 700;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        /* font-family: "Playfair Display", sans-serif; */
        color: #000000;
        margin-top: 0;
        font-weight: 400;
      }

      body {
        font-family: "Lato", sans-serif;
        font-weight: 400;
        font-size: 15px;
        line-height: 1.8;
        color: rgba(0, 0, 0, 0.5);
      }

      a {
        color: #bc90c0;
      }

      table {
      }

      /*LOGO*/

      .logo h1 {
        margin: 0;
      }

      .logo h1 a {
        color: #000000;
        font-size: 30px;
        /*text-transform: uppercase;*/
        font-family: "Playfair Display", sans-serif;
      }

      .navigation {
        padding: 0;
        padding: 1em 0;
        /*background: rgba(0,0,0,1);*/
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        margin-bottom: 0;
      }

      .navigation li {
        list-style: none;
        display: inline-block;
        margin-left: 5px;
        margin-right: 5px;
        font-size: 13px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      .navigation li a {
        color: rgba(0, 0, 0, 1);
      }

      .unbox-img {
        width: -webkit-fill-available;
      }

      /*HERO*/
      .hero {
        position: relative;
        z-index: 0;
      }

      .hero .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        width: 100%;
        background: #000000;
        z-index: -1;
        opacity: 0.2;
      }

      .hero .text {
        color: rgba(255, 255, 255, 0.9);
        max-width: 50%;
        margin: 0 auto 0;
      }

      .hero .text h2 {
        color: #fff;
        font-size: 30px;
        margin-bottom: 0;
        font-weight: 300;
        line-height: 1.4;
      }

      .hero .text h2 span {
        font-weight: 600;
        color: #bc90c0;
      }

      /*INTRO*/
      .intro {
        position: relative;
        z-index: 0;
      }

      .intro .text {
        color: rgba(0, 0, 0, 0.3);
      }

      .intro .text h2 {
        color: #000;
        font-size: 34px;
        margin-bottom: 0;
        font-weight: 300;
      }

      .intro .text h2 span {
        font-weight: 600;
        color: #bc90c0;
      }

      /*PRODUCT*/
      .text-product {
      }

      .text-product .price {
        font-size: 20px;
        color: black;
        display: inline-block;
        margin-bottom: 1em;
        border: 2px solid black;
        padding: 0 10px;
        border-radius: 2rem;
      }

      .text-product h2 {
        font-family: "Lato", sans-serif;
      }

      /*HEADING SECTION*/
      .heading-section {
      }

      .heading-section h2 {
        color: #000000;
        font-size: 28px;
        margin-top: 0;
        line-height: 1.4;
        font-weight: 400;
      }

      .heading-section .subheading {
        margin-bottom: 20px !important;
        display: inline-block;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: rgba(0, 0, 0, 0.4);
        position: relative;
      }

      .heading-section .subheading::after {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -10px;
        content: "";
        width: 100%;
        height: 2px;
        background: #bc90c0;
        margin: 0 auto;
      }

      .heading-section-white {
        color: rgba(255, 255, 255, 0.8);
      }

      .heading-section-white h2 {
        /* font-family: ; */
        line-height: 1;
        padding-bottom: 0;
      }

      .td-25 {
        width: 25%;
      }

      .heading-section-white h2 {
        color: #ffffff;
      }
      .bb {
        border-bottom: 1px dashed #ccc;
      }

      .heading-section-white .subheading {
        margin-bottom: 0;
        display: inline-block;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: rgba(255, 255, 255, 0.4);
      }

      ul.social {
        padding: 0;
      }

      ul.social li {
        display: inline-block;
        margin-right: 10px;
      }

      /*FOOTER*/

      .footer {
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        color: rgba(0, 0, 0, 0.5);
      }

      .footer .heading {
        color: #000;
        font-size: 20px;
      }

      .footer ul {
        margin: 0;
        padding: 0;
      }

      .footer ul li {
        list-style: none;
        margin-bottom: 10px;
      }

      .footer ul li a {
        color: rgba(0, 0, 0, 1);
      }

      @media screen and (max-width: 500px) {
      }
    </style>
  </head>

  <body
    width="100%"
    style="
      margin: 0;
      padding: 0 !important;
      mso-line-height-rule: exactly;
      background-color: #222222;
    "
  >
    <center style="width: 100%; background-color: #f1f1f1">
      <div
        style="
          display: none;
          font-size: 1px;
          max-height: 0px;
          max-width: 0px;
          opacity: 0;
          overflow: hidden;
          mso-hide: all;
          font-family: sans-serif;
        "
      >
        &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
      </div>
      <div style="max-width: 600px; margin: 0 auto" class="email-container">
        <!-- BEGIN BODY -->
        <table
          align="center"
          role="presentation"
          cellspacing="0"
          cellpadding="0"
          border="0"
          width="100%"
          style="margin: auto"
        >
          <tr>
            <td
              valign="top"
              class="bg_white"
              style="padding: 1em 2.5em 0 2.5em"
            >
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
              >
                <tr>
                  <td class="logo" style="text-align: center">
                    <img src="https://intelgray.com/emails/images/unboxlogo.webp" />
                    <h1><a href="#">UNBOX</a></h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- end tr -->
          <tr>
            <td valign="top" class="bg_white" style="padding: 0">
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
              >
                <tr>
                  <td width="60%" style="text-align: center">
                    <ul class="navigation">
                      <li>
                        <a href="https://www.unboxbasics.com/" target="_blank"
                          >Home</a
                        >
                      </li>
                      <li>
                        <a href="https://www.unboxbasics.com/" target="_blank"
                          >LEGGINGS</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.unboxbasics.com/boutique/t-shirts"
                          target="_blank"
                          >TOP</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.unboxbasics.com/boutique/shorts"
                          target="_blank"
                          >SHORTS</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://www.unboxbasics.com/boutique/dresses"
                          target="_blank"
                          >DRESSES</a
                        >
                      </li>

                      <li>
                        <a
                          href="https://www.unboxbasics.com/boutique/trendy-fashion"
                          target="_blank"
                          >NEW COLLECTIONS</a
                        >
                      </li>
                    </ul>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- end tr -->

          <tr>
            <td class="hero bg_white">
              <a href="https://www.unboxbasics.com/" target="_blank"
                ><img
                  style="width: -webkit-fill-available"
                  src="https://intelgray.com/emails/images/UNBOX-TABBY.png"
              /></a>
            </td>
          </tr>
          <tr>
            <td
              valign="middle"
              class="intro bg_white"
              style="padding: 2em 0 4em 0"
            >
              <table>
                <tr>
                  <td>
                    <div style="padding-left: 1rem">
                      <h2>
                        <strong><span>4</span> interest-free payments </strong>
                      </h2>
                      <p>
                        Buy now and split the cost into 4 equal payments. Your
                        debit or credit card will be billed every month. No
                        interest and no fees.
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td></td>
            </tr>
          </table>
          <!-- end tr -->

          <!-- end tr -->

          <tr>
            <td class="bg_white">
              <table
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
                width="100%"
              >
                <tr class="bb">
                  <td
                    class="primary email-section"
                    style="padding: 0; width: 100%"
                  >
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                    >
                      <tr>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td
                                class="text-product"
                                style="text-align: left; padding: 20px 30px"
                              >
                                <div class="heading-section">
                                  <h2 style="font-size: 20px">
                                    LYCRA HIGH-WAISTED LEGGINGS SKY BLUE
                                  </h2>
                                  <span class="price">AED 100.00 </span>

                                  <p>
                                    or 4 interest-free payments of
                                    <strong>25.00 AED</strong>.
                                  </p>
                                  <p>
                                    <a
                                      href="https://www.unboxbasics.com/boutique-products/lg-10004/lycra-high-waisted-leggings-sky-blue/22fe7512-90e2-487e-93bd-8baa1c3abbcc"
                                      class="btn btn-black"
                                      target="_blank"
                                      >Shop now</a
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td>
                                <img
                                  src="https://intelgray.com/emails/images/websiteimage9.png"
                                  alt=""
                                  style="
                                    width: 100%;
                                    max-width: 600px;
                                    height: auto;
                                    margin: auto;
                                    display: block;
                                  "
                                />
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- end: tr -->

                <!-- end: tr -->

                <!-- end: tr -->
                <tr class="bb">
                  <td
                    class="primary email-section"
                    style="padding: 0; width: 100%"
                  >
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                    >
                      <tr>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td>
                                <img
                                  src="https://intelgray.com/emails/images/websiteimage1.png"
                                  alt=""
                                  style="
                                    width: 100%;
                                    max-width: 600px;
                                    height: auto;
                                    margin: auto;
                                    display: block;
                                  "
                                />
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td
                                class="text-product"
                                style="text-align: left; padding: 20px 30px"
                              >
                                <div class="heading-section">
                                  <h2 style="font-size: 20px">
                                    Neon Green Single Pocket Detailed Oversize
                                    Fabia Shirt
                                  </h2>
                                  <span class="price">AED 140.00 </span>

                                  <p>
                                    or 4 interest-free payments of
                                    <strong>35.00 AED</strong>.
                                  </p>
                                  <p>
                                    <a
                                      href="https://www.unboxbasics.com/boutique-products/8861/neon-green-single-pocket-detailed-oversize-fabia-shirt/1ee8d409-b174-4ffa-8752-2ad8dddde40b"
                                      target="_blank"
                                      class="btn btn-black"
                                      >Shop now</a
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- end: tr -->
                <tr class="bb">
                  <td
                    class="primary email-section"
                    style="padding: 0; width: 100%"
                  >
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                    >
                      <tr>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td
                                class="text-product"
                                style="text-align: left; padding: 20px 30px"
                              >
                                <div class="heading-section">
                                  <h2 style="font-size: 20px">
                                    LYCRA HIGH-WAISTED LEGGINGS OLIVE
                                  </h2>
                                  <span class="price">AED 100.00</span>

                                  <p>
                                    or 4 interest-free payments of
                                    <strong>25.00 AED</strong>.
                                  </p>
                                  <p>
                                    <a
                                      href="https://www.unboxbasics.com/boutique-products/lg-10028/lycra-high-waisted-leggings-olive/a35170ce-5ee4-44c6-a984-0ab419a2dc5e"
                                      target="_blank"
                                      class="btn btn-black"
                                      >Shop now</a
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td>
                                <img
                                  src="https://intelgray.com/emails/images/websiteimage2.png"
                                  alt=""
                                  style="
                                    width: 100%;
                                    max-width: 600px;
                                    height: auto;
                                    margin: auto;
                                    display: block;
                                  "
                                />
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- end: tr -->
                <tr class="bb">
                  <td
                    class="primary email-section"
                    style="padding: 0; width: 100%"
                  >
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                    >
                      <tr>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td>
                                <img
                                  src="https://intelgray.com/emails/images/websiteimage4.png"
                                  alt=""
                                  style="
                                    width: 100%;
                                    max-width: 600px;
                                    height: auto;
                                    margin: auto;
                                    display: block;
                                  "
                                />
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td
                                class="text-product"
                                style="text-align: left; padding: 20px 30px"
                              >
                                <div class="heading-section">
                                  <h2 style="font-size: 20px">
                                    Pink Single Pocket Detailed Oversize Fabia
                                    Shirt
                                  </h2>
                                  <span class="price">AED 140.00 </span>

                                  <p>
                                    or 4 interest-free payments of
                                    <strong>35.00 AED</strong>.
                                  </p>
                                  <p>
                                    <a
                                      href="https://www.unboxbasics.com/boutique-products/8087/pink-single-pocket-detailed-oversize-fabia-shirt/12f71ea8-8e5d-4483-939b-e1f590e79e99"
                                      target="_blank"
                                      class="btn btn-black"
                                      >Shop now</a
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- end: tr -->
                <tr class="bb">
                  <td
                    class="primary email-section"
                    style="padding: 0; width: 100%"
                  >
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                    >
                      <tr>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td
                                class="text-product"
                                style="text-align: left; padding: 20px 30px"
                              >
                                <div class="heading-section">
                                  <h2 style="font-size: 20px">
                                    Royal blue square collar sexy stretchy
                                    summer dress
                                  </h2>
                                  <span class="price">AED 150.00 </span>

                                  <p>
                                    or 4 interest-free payments of
                                    <strong>37.50 AED</strong>.
                                  </p>
                                  <p>
                                    <a
                                      href="https://www.unboxbasics.com/boutique-products/rb-s1/royal-blue-square-collar-sexy-stretchy-summer-dress/aa0c9fa0-3f60-4a09-ba6e-b4744e28791a"
                                      target="_blank"
                                      class="btn btn-black"
                                      >Shop now</a
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td>
                                <img
                                  src="https://intelgray.com/emails/images/websiteimage8.png"
                                  alt=""
                                  style="
                                    width: 100%;
                                    max-width: 600px;
                                    height: auto;
                                    margin: auto;
                                    display: block;
                                  "
                                />
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr class="bb">
                  <td
                    class="primary email-section"
                    style="padding: 0; width: 100%"
                  >
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                    >
                      <tr>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td>
                                <img
                                  src="https://intelgray.com/emails/images/websiteimage5.png"
                                  alt=""
                                  style="
                                    width: 100%;
                                    max-width: 600px;
                                    height: auto;
                                    margin: auto;
                                    display: block;
                                  "
                                />
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td
                                class="text-product"
                                style="text-align: left; padding: 20px 30px"
                              >
                                <div class="heading-section">
                                  <h2 style="font-size: 20px">
                                    Orange Single Pocket Detailed Oversize Fabia
                                    Shirt
                                  </h2>
                                  <span class="price">AED 140.00 </span>

                                  <p>
                                    or 4 interest-free payments of
                                    <strong>35.00 AED</strong>.
                                  </p>
                                  <p>
                                    <a
                                      href="https://www.unboxbasics.com/boutique-products/881112/orange-single-pocket-detailed-oversize-fabia-shirt/e8128891-dc79-4f09-8ea0-98d1473947c2"
                                      target="_blank"
                                      class="btn btn-black"
                                      >Shop now</a
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr class="bb">
                  <td
                    class="primary email-section"
                    style="padding: 0; width: 100%"
                  >
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                    >
                      <tr>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td
                                class="text-product"
                                style="text-align: left; padding: 20px 30px"
                              >
                                <div class="heading-section">
                                  <h2 style="font-size: 20px">
                                    Chico's summer dress
                                  </h2>
                                  <span class="price">AED 160.00 </span>

                                  <p>
                                    or 4 interest-free payments of
                                    <strong>40.00 AED</strong>.
                                  </p>
                                  <p>
                                    <a
                                      href="https://www.unboxbasics.com/boutique-products1/cs-0001/chico's-summer-dress-/9be6227b-d752-4dd9-bde4-535cdde2efe4"
                                      target="_blank"
                                      class="btn btn-black"
                                      >Shop now</a
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td>
                                <img
                                  src="https://intelgray.com/emails/images/websiteimage7.png"
                                  alt=""
                                  style="
                                    width: 100%;
                                    max-width: 600px;
                                    height: auto;
                                    margin: auto;
                                    display: block;
                                  "
                                />
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr class="bb">
                  <td
                    class="primary email-section"
                    style="padding: 0; width: 100%"
                  >
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                    >
                      <tr>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td>
                                <img
                                  src="https://intelgray.com/emails/images/websiteimage13.png"
                                  alt=""
                                  style="
                                    width: 100%;
                                    max-width: 600px;
                                    height: auto;
                                    margin: auto;
                                    display: block;
                                  "
                                />
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td
                                class="text-product"
                                style="text-align: left; padding: 20px 30px"
                              >
                                <div class="heading-section">
                                  <h2 style="font-size: 20px">
                                    UNBOX®️ V-neck side-slit black t-shirt
                                  </h2>
                                  <span class="price">AED 80.00 </span>
                                  <p>
                                    or 4 interest-free payments of
                                    <strong>20.00 AED</strong>.
                                  </p>

                                  <p>
                                    <a
                                      href="https://www.unboxbasics.com/boutique-products/ts-10002/unbox%C2%AE%EF%B8%8F-v-neck-side-slit-black-t-shirt/422ed0a2-5cf6-48c2-a773-4211725539fb"
                                      target="_blank"
                                      class="btn btn-black"
                                      >Shop now</a
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr class="bb">
                  <td
                    class="primary email-section"
                    style="padding: 0; width: 100%"
                  >
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                    >
                      <tr>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td
                                class="text-product"
                                style="text-align: left; padding: 20px 30px"
                              >
                                <div class="heading-section">
                                  <h2 style="font-size: 20px">
                                    LYCRA HIGH-WAISTED LEGGINGS CHROME
                                  </h2>
                                  <span class="price">AED 100.00 </span>

                                  <p>
                                    or 4 interest-free payments of
                                    <strong>25.00 AED</strong>.
                                  </p>
                                  <p>
                                    <a
                                      href="https://www.unboxbasics.com/boutique-products/lg-10015/lycra-high-waisted-leggings-chrome/fe84cc7a-5c38-4535-bf1e-b585f7825987"
                                      target="_blank"
                                      class="btn btn-black"
                                      >Shop now</a
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td>
                                <img
                                  src="https://intelgray.com/emails/images/websiteimage12.png"
                                  alt=""
                                  style="
                                    width: 100%;
                                    max-width: 600px;
                                    height: auto;
                                    margin: auto;
                                    display: block;
                                  "
                                />
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr class="bb">
                  <td
                    class="primary email-section"
                    style="padding: 0; width: 100%"
                  >
                    <table
                      role="presentation"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                    >
                      <tr>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td>
                                <img
                                  src="https://intelgray.com/emails/images/websiteimage11.png"
                                  alt=""
                                  style="
                                    width: 100%;
                                    max-width: 600px;
                                    height: auto;
                                    margin: auto;
                                    display: block;
                                  "
                                />
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td valign="middle" width="50%">
                          <table
                            role="presentation"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                            width="100%"
                          >
                            <tr>
                              <td
                                class="text-product"
                                style="text-align: left; padding: 20px 30px"
                              >
                                <div class="heading-section">
                                  <h2 style="font-size: 20px">
                                    FUSCHIA CROPTOP
                                  </h2>
                                  <span class="price">AED 80.00 </span>
                                  <p>
                                    or 4 interest-free payments of
                                    <strong>20.00 AED</strong>.
                                  </p>

                                  <p>
                                    <a
                                      href="https://www.unboxbasics.com/boutique-products/ct-10008/fuschia-croptop/191abbdf-b2c8-47e8-b1a0-56e53392d98e"
                                      target="_blank"
                                      class="btn btn-black"
                                      >Shop now</a
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- end:tr -->
          <tr>
            <td valign="middle" style="padding: 2em 0">
              <table
                align="center"
                role="presentation"
                cellspacing="0"
                cellpadding="0"
                border="0"
                width="100%"
                style="margin: auto"
                class="bg_white"
              >
                <tr>
                  <td>
                    <div
                      class="text"
                      style="padding: 0 2.5em; text-align: center"
                    >
                      <p>
                        <a
                          href="https://www.unboxbasics.com/"
                          target="_blank"
                          class="btn btn-black-outline"
                          >Start Shopping</a
                        >
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- end tr -->
          <!-- 1 Column Text + Button : END -->
        </table>
        <table
          align="center"
          role="presentation"
          cellspacing="0"
          cellpadding="0"
          border="0"
          width="100%"
          style="margin: auto"
        >
          <tr>
            <td valign="middle" class="bg_white footer">
              <table>
                <tr>
                  <td style="text-align: center; width: 100%">
                    <h1>FOLLOW US ON INSTAGRAM!</h1>
                  </td>
                  <td
                    valign="middle"
                    style="padding-top: 20px; text-align: right"
                  >
                    <!-- <ul class="social">
                      <li>
                        <img
                          src="https://intelgray.com/emails/images/004-twitter-logo.png"
                          alt=""
                          style="
                            width: 24px;
                            max-width: 600px;
                            height: auto;
                            display: block;
                          "
                        />
                      </li>
                      <li>
                        <img
                          src="https://intelgray.com/emails/images/005-facebook.png"
                          alt=""s
                          style="
                            width: 24px;
                            max-width: 600px;
                            height: auto;
                            display: block;
                          "
                        />
                      </li>
                      <li>
                        <img
                          src="https://intelgray.com/emails/images/006-instagram-logo.png"
                          alt=""
                          style="
                            width: 24px;
                            max-width: 600px;
                            height: auto;
                            display: block;
                          "
                        />
                      </li>
                    </ul> -->
                  </td>
                </tr>
                <tr valign="middle">
                  <td style="text-align: center; width: 100%">
                    <!-- Instagram -->
                    <a
                      href="https://www.instagram.com/unbox.uae/"
                      target="_blank"
                      ><i class="fab fa-instagram fa-3x"></i
                    ></a>
                    <p>
                      You received this message because you've registered or
                      accepted our invitation to receive emails from UNBOX, or
                      you've made a purchase from UNBOX.
                    </p>
                    <p>
                      Please Note：to stop receiving emails, click on the
                      UNSUBSCRIBE button above/below, and do not directly reply
                      to this email, as this email was generated automatically
                      and thus your unsubscription request will not be
                      processed.
                    </p>
                    <p>
                      <a href="https://www.unboxbasics.com/privacy-policy"
                        >PRIVACY POLICY </a
                      >|
                      <a href="https://www.unboxbasics.com/terms-conditions"
                        >CONDITIONS & TERMS</a
                      >
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- end: tr -->
          <tr>
            <td class="bg_light" style="text-align: center">
              <p>
                No longer want to receive these email? You can
                <a
                  href="https://www.unboxbasics.com/"
                  style="color: rgba(0, 0, 0, 0.8)"
                  >Unsubscribe here</a
                >
              </p>
            </td>
          </tr>
        </table>
      </div>
    </center>
    <script
      src="https://kit.fontawesome.com/1442993351.js"
      crossorigin="anonymous"
    ></script>
  </body>
</html>

`;
