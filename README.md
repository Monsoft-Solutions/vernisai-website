# VernisAI Monorepo

<div align="center">
  <img src="apps/website/public/vernis-ai-logo.svg" alt="VernisAI Logo" width="250" />
  <p><strong>Official Website for VernisAI - Your Personal AI Assistant for Everyday Tasks</strong></p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.2-purple.svg)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC.svg)](https://tailwindcss.com/)
  [![Turborepo](https://img.shields.io/badge/Turborepo-2.4-green.svg)](https://turbo.build/)
  [![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fvernis.ai)](https://vernis.ai)
</div>

## 🚀 Overview

This monorepo contains the source code for VernisAI. VernisAI is an AI-powered no-code workflow automation platform that helps individuals and businesses save time and reduce stress by automating everyday tasks. Our mission is to democratize AI-driven automation, making it accessible to non-technical users without requiring any coding knowledge.

With VernisAI, you can:

- **Automate repetitive tasks** across multiple platforms
- **Reduce mental load** by letting AI handle routine decisions
- **Minimize human error** in repetitive processes
- **Boost productivity** by delegating routine work to AI assistants
- **Enhance collaboration** with automated information sharing

## 📂 Repository Structure

```
vernisai-monorepo/
├── apps/
│   └── website/       # Main VernisAI website
├── packages/
│   ├── ui/            # Shared UI components
│   ├── utils/         # Shared utility functions
│   └── config/        # Shared configuration files
├── turbo.json         # Turborepo configuration
└── package.json       # Root package.json
```

## ✨ Key Features

### 🔄 Actions

Well-defined, atomic operations that interact with third-party services like Google Drive, Slack, and Twitter. These serve as the building blocks for creating automated workflows.

### 🤖 Agents

AI-powered entities that can perform tasks autonomously, make decisions, process information, and execute actions based on predefined rules or learned behaviors.

### 📊 Pipelines

Connect multiple actions and agents into cohesive workflows, enabling complex automation sequences that can handle sophisticated business processes across different platforms.

### 📚 Knowledge Base

Allow your agents to access and utilize specific information relevant to your business, enabling more contextually aware automations.

## 🛠️ Tech Stack

- **Build System**: Turborepo 2.4
- **Frontend**: React 19, TypeScript 5.7, Vite 6.2, Tailwind CSS 4.0
- **UI Components**: Radix UI, Lucide React 0.479, Framer Motion 12.4
- **Form Handling**: React Hook Form 7.54, Zod 3.24
- **Routing**: React Router 7.3
- **Animations**: Lenis 1.2
- **Code Quality**: ESLint 9.21, Prettier 3.5, TypeScript-ESLint 8.24

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository

```bash
git clone https://github.com/Monsoft-Solutions/vernisai-website.git
cd vernisai-website
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

To start a specific application:

```bash
npm run dev --filter=website
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Building for Production

To build all applications:

```bash
npm run build
```

To build a specific application:

```bash
npm run build --filter=website
```

## 🧪 Development Commands

- **Development**: `npm run dev` - Start the development server for all applications
- **Build**: `npm run build` - Build all applications for production
- **Lint**: `npm run lint` - Run ESLint for all applications
- **Lint Fix**: `npm run lint:fix` - Fix linting issues for all applications
- **Typecheck**: `npm run typecheck` - Run type checking for all applications
- **Format**: `npm run format` - Format code with Prettier
- **Clean**: `npm run clean` - Clean build artifacts
- **Changeset**: `npm run changeset` - Create a new changeset to document changes
- **Version**: `npm run version` - Update versions and changelogs based on changesets
- **Release**: `npm run release` - Publish new versions of packages

## 📝 Versioning and Changelogs

This project uses [Changesets](https://github.com/changesets/changesets) for version management and changelog generation. When making changes:

1. Create a changeset to document your changes: `npm run changeset`
2. Update the appropriate file in the `changes` directory with a concise title and bullet points
3. Commit both the changeset file and your code changes

For detailed instructions on using changesets, see [docs/CHANGESETS.md](docs/CHANGESETS.md).

## 🔍 Pre-Commit Hooks

This project uses Husky and lint-staged to enforce code quality standards before commits:

- **Linting**: ESLint automatically checks and fixes JavaScript/TypeScript code
- **Formatting**: Prettier ensures consistent code style

These checks run automatically when you commit changes. If any check fails, the commit will be blocked until the issues are fixed.

## 🚀 Deployment

The website is deployed using [Vercel](https://vercel.com) for continuous deployment. Any changes pushed to the main branch will automatically be deployed to production.

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
