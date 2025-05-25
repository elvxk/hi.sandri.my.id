import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Konversi __dirname untuk ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3006;

// Baca ascii art dari file
const asciiArt = fs.readFileSync(path.join(__dirname, "ascii.txt"), "utf8");

app.get("/", (req, res) => {
  const userAgent = req.headers["user-agent"] || "";

  if (userAgent.includes("curl")) {
    res.type("text/plain").send(`\n${asciiArt}\n`);
  } else {
    res.send("pliss curl hi.sandri.my.id");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
