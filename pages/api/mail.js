import sendgrid from "@sendgrid/mail";
import NextCors from "nextjs-cors";
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const msg = {
    to: "gian.donofrio2000@gmail.com",
    from: "gian.donofrio2000@gmail.com",
    subject: `[Lead from website] : ${req.body.subject}`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en">
    <head>
      <meta charset="utf-8">

      <title>The HTML5 Herald</title>
      <meta name="description" content="The HTML5 Herald">
      <meta name="author" content="SitePoint">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

      <link rel="stylesheet" href="css/styles.css?v=1.0">

    </head>

    <body>
    <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
          </div>
          <div class="container" style="margin-left: 20px;margin-right: 20px;">
          <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
          <div style="font-size: 16px;">
          <p>Message:</p>
          <p>${req.body.message}</p>
          <br>
          </div>
          </div>
  </body>
  </html>`,
  };

  try {
    await NextCors(req, res, {
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    await sendgrid.send(msg);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(error.code).json(error);
  }
}

export default sendEmail;
