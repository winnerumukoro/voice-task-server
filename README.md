# Voice Task Server (Backend)

Voice Task Server is a lightweight Node.js backend designed to support the Voice Task Assistant mobile app.

Its primary purpose is to handle **audio processing and transcription**, and later evolve into a task intelligence and calendar automation service.

---

## 🚀 What This Server Does (Current)

- Accepts audio uploads from the mobile app
- Processes audio files
- (Previously) handled AI-based transcription
- Provides a REST API for the mobile client

> Note: Paid AI transcription has been disabled during development to keep the project cost-free.

---

## 🧠 Vision for the Server

The server is planned to become the “brain” of the system by:

- Converting voice input into structured tasks
- Understanding deadlines, dates, and intent
- Integrating with Google Calendar APIs
- Acting as a secure bridge between the app and external services

---

## 🛠 Tech Stack

- **Node.js**
- **Express**
- **Multer** (file uploads)
- **CORS**
- Environment-based configuration (`.env`)

---

## 📂 Project Structure

- `server.js` – Main server entry point
- `uploads/` – Temporary audio uploads (ignored in Git)
- `.env` – Environment variables (not committed)
- `package.json` – Dependencies and scripts

---

## 🔐 Security Notes

- API keys are stored in `.env`
- `.env`, `node_modules`, and uploads are ignored via `.gitignore`
- GitHub push protection is enabled to prevent secret leaks

---

## 📌 Next Steps (Planned)

- Replace paid transcription with free or offline alternatives
- Add task parsing logic
- Integrate Google Calendar API
- Add authentication for users
- Deploy server to a cloud provider (Render / Railway / Fly.io)

---

## 👤 Author

Built by **Winner Umukoro**  
As part of a full-stack learning project focused on voice interfaces and automation.
