const express = require("express");
const http = require("request");
const config = require("config");
const router = express.Router({ mergeParams: true });

router.post("/", async (req, res) => {
  try {
    let fields = [
      "<b>Name</b>: " + req.body.name,
      "<b>Email</b>: " + req.body.email,
      req.body.message,
    ];

    let message = "";
    fields.forEach((field) => {
      message += field + "\n";
    });

    message = encodeURI(message);

    http.post(
      `https://api.telegram.org/bot${config.telegramToken}/sendMessage?chat_id=${config.chatId}&parse_mode=html&text=${message}`,
      function (error, response, body) {
        console.log("error:", error);
        console.log("statusCode:", response && response.statusCode);
        console.log("body:", body);
        if (response.statusCode === 200) {
          res
            .status(200)
            .json({ status: "ok", message: "Успешно отправлено!" });
        }
        if (response.statusCode === 400) {
          res
            .status(400)
            .json({ status: "error", message: "Произошла ошибка!" });
        }
      }
    );
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка при отправке сообщения",
    });
  }
});
module.exports = router;
