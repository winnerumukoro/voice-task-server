import "dotenv/config";
console.log("KEY LOADED?", process.env.OPENAI_API_KEY ? "YES" : "NO");
import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use((req, res, next) => {
  console.log("REQ:", req.method, req.url);
  next();
});

const upload = multer({ dest: "uploads/" });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// health check
app.get("/", (req, res) => {
  res.json({ ok: true });
});

app.post("/transcribe", upload.single("audio"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No audio file uploaded" });
    }

    const result = await openai.audio.transcriptions.create({
      file: fs.createReadStream(req.file.path),
      model: "gpt-4o-mini-transcribe",
    });

    fs.unlinkSync(req.file.path);

    res.json({ text: result.text });
  } catch (err) {
    console.error("Transcription error:", err);
    res.status(500).json({ error: "Transcription failed" });
  }
});

app.listen(3001, "0.0.0.0", () => {
  console.log("Server running on http://0.0.0.0:3001");
});