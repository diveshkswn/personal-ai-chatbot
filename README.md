
# Personal AI Chatbot

[![GitHub stars](https://img.shields.io/github/stars/diveshkswn/personal-ai-chatbot?style=social)](https://github.com/diveshkswn/personal-ai-chatbot/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/diveshkswn/personal-ai-chatbot?style=social)](https://github.com/diveshkswn/personal-ai-chatbot/network/members)
[![GitHub issues](https://img.shields.io/github/issues/diveshkswn/personal-ai-chatbot)](https://github.com/diveshkswn/personal-ai-chatbot/issues)
[![Last Commit](https://img.shields.io/github/last-commit/diveshkswn/personal-ai-chatbot)](https://github.com/diveshkswn/personal-ai-chatbot/commits)
[![License](https://img.shields.io/github/license/diveshkswn/personal-ai-chatbot)](./LICENSE)

---

## 📌 Introduction

**Personal AI Chatbot** is a modern AI-powered chatbot interface that uses Google's Gemini model to simulate human-like conversations. The app is built with React + Vite, written in TypeScript, and styled for responsiveness. It serves as a minimal, customizable base for personal AI assistants or NLP-powered interfaces.

---

## 📚 Table of Contents

1. [Features](#-features)  
2. [Installation](#-installation)  
3. [Setup & Configuration](#-setup--configuration)  
4. [Usage](#-usage)  
5. [Deployment](#-deployment)  
6. [Troubleshooting](#-troubleshooting)  
7. [Contributing](#-contributing)  
8. [License](#-license)  
9. [Author](#-author)  

---

## 🚀 Features

- 🔮 Powered by Google's Gemini LLM
- ⚡ Built with React + Vite for fast development
- ✅ TypeScript support
- 🧹 ESLint & Prettier configured for clean code
- 🖥️ Responsive UI for optimal user experience

---

## ⚙️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/diveshkswn/personal-ai-chatbot
cd personal-ai-chatbot
npm install
```

---

## 🔧 Setup & Configuration

### 1. Create Environment File

If Gemini API is used, create a `.env` file in the root directory and add:

```env
GEMINI_API_KEY=your-api-key-here
```

Update the key reference in `gemini.ts` as needed.

### 2. Linting and Formatting

```bash
npm run lint     # Lint the codebase
npm run format   # Auto-format code using Prettier
```

---

## 🧪 Usage

Run the app in development mode:

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

You can begin chatting with the Gemini-powered assistant through the provided UI.

---

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

Then host the contents of the `dist/` folder using:

- **Vercel**
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

---

## 🛠 Troubleshooting

- Ensure `GEMINI_API_KEY` is set and correct.
- Run `npm run lint` to find potential code issues.
- Clear Vite cache if experiencing issues:
  ```bash
  rm -rf node_modules/.vite
  ```

---

## 🤝 Contributing

We welcome contributions!

1. Fork the repository
2. Create a branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request

> Make sure to follow existing ESLint and Prettier rules.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 👤 Author

**Divesh Keswani**  
GitHub: [@diveshkswn](https://github.com/diveshkswn)

---
