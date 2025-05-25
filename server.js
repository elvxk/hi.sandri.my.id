const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3006;

const asciiArt = fs.readFileSync("ascii.txt", "utf8");

app.get("/", (req, res) => {
  const userAgent = req.headers["user-agent"] || "";

  if (userAgent.includes("curl")) {
    if (userAgent.includes("curl")) {
      res.send(`\n${asciiArt}\n`);
    } else {
      res.send("pliss curl hi.sandri.my.id");
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
