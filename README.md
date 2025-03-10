# VernisAI Website

<div align="center">
  <img src="public/vernis-ai-logo.svg" alt="VernisAI Logo" width="250" />
  <p><strong>Official Website for VernisAI - Your Personal AI Assistant for Everyday Tasks</strong></p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.2-purple.svg)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC.svg)](https://tailwindcss.com/)
  [![CodeRabbit](https://img.shields.io/badge/CodeRabbit-AI-FF69B4.svg)](https://coderabbit.ai/)
  [![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fvernis.ai)](https://vernis.ai)
</div>

## 🚀 Overview

This repository contains the source code for the official VernisAI website. VernisAI is an AI-powered no-code workflow automation platform that helps individuals and businesses save time and reduce stress by automating everyday tasks. Our mission is to democratize AI-driven automation, making it accessible to non-technical users without requiring any coding knowledge.

With VernisAI, you can:

- **Automate repetitive tasks** across multiple platforms
- **Reduce mental load** by letting AI handle routine decisions
- **Minimize human error** in repetitive processes
- **Boost productivity** by delegating routine work to AI assistants
- **Enhance collaboration** with automated information sharing

## ✨ Key Features

### 🔄 Actions

Well-defined, atomic operations that interact with third-party services like Google Drive, Slack, and Twitter. These serve as the building blocks for creating automated workflows.

### 🤖 Agents

AI-powered entities that can perform tasks autonomously, make decisions, process information, and execute actions based on predefined rules or learned behaviors.

### 📊 Pipelines

Connect multiple actions and agents into cohesive workflows, enabling complex automation sequences that can handle sophisticated business processes across different platforms.

### 📚 Knowledge Base

Allow your agents to access and utilize specific information relevant to your business, enabling more contextually aware automations.

## 🔍 Use Cases

VernisAI can be applied to various scenarios, including:

- **Task Automation**: Automate data entry, file management, and routine operations
- **Knowledge Management**: Organize documents, extract key information, create searchable knowledge bases
- **Content Creation**: Generate drafts, optimize content, schedule publications
- **Meeting Enhancement**: Schedule meetings, create agendas, take notes, generate action items
- **Project Management**: Automate task assignment, progress tracking, deadline reminders
- **Personal Assistant**: Manage calendars, prioritize emails, set reminders, handle correspondence

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript 5.7, Vite 6.2, Tailwind CSS 4.0
- **UI Components**: Radix UI, Lucide React 0.479, Framer Motion 12.4
- **Form Handling**: React Hook Form 7.54, Zod 3.24
- **Routing**: React Router 7.3
- **Animations**: Lenis 1.2
- **Code Quality**: ESLint 9.21, Prettier 3.5, TypeScript-ESLint 8.24
- **CI/CD**: CodeRabbitAI for automated code reviews

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/Monsoft-Solutions/vernisai-website.git
cd vernisai-website
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## 📂 Project Structure

```
vernisai-website/
├── public/            # Static assets and images
│   └── vernis-ai-logo.svg  # VernisAI logo
├── src/
│   ├── assets/        # Images and other assets
│   ├── components/    # Reusable UI components
│   │   └── ui/        # shadcn/ui components
│   ├── data/          # Static data and content
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   └── styles/        # Global styles
├── .github/           # GitHub templates and workflows
└── ...                # Configuration files
```

## 🧪 Development Commands

- **Development**: `npm run dev` - Start the development server
- **Build**: `npm run build` - Build for production
- **Lint**: `npm run lint` - Run ESLint
- **Format**: `npm run format` - Format code with Prettier
- **Preview**: `npm run preview` - Preview production build locally

## 🔍 Pre-Commit Hooks

This project uses Husky and lint-staged to enforce code quality standards before commits:

- **Linting**: ESLint automatically checks and fixes JavaScript/TypeScript code
- **Formatting**: Prettier ensures consistent code style
- **Build Verification**: A test build is performed to catch compilation errors

These checks run automatically when you commit changes. If any check fails, the commit will be blocked until the issues are fixed.

To bypass pre-commit hooks in exceptional cases (not recommended), use:

```bash
git commit -m "Your message" --no-verify
```

## 🚀 Deployment

The website is deployed using [Vercel](https://vercel.com) for continuous deployment. Any changes pushed to the main branch will automatically be deployed to production.

To deploy manually:

1. Build the project

```bash
npm run build
```

2. Deploy the `dist` directory to your hosting provider of choice

## 🤝 Contributing

We welcome contributions to VernisAI! Please see our [Contributing Guidelines](.github/CONTRIBUTING.md) for more information.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact & Support

- **Website**: [vernis.ai](https://vernis.ai)
- **Email**: hello@monsoftsolutions.com
- **Twitter**: [@VernisAI](https://twitter.com/VernisAI)
- **LinkedIn**: [VernisAI](https://linkedin.com/company/vernisai)
- **Documentation**: [docs.vernis.ai](https://docs.vernis.ai)
- **Support**: [support@vernis.ai](mailto:support@vernis.ai)

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://monsoftsolutions.com">Monsoft Solutions</a></sub>
</div>
