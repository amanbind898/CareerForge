# 💼 CareerForge

> **Build. Polish. Launch your career.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Hacktoberfest](https://img.shields.io/badge/Hacktoberfest-2025-orange)](https://hacktoberfest.com/)

CareerForge is an AI-powered platform that helps professionals create outstanding resumes, optimize LinkedIn profiles, and generate compelling GitHub profile READMEs. Whether you're a job seeker, career changer, or looking to enhance your professional presence, CareerForge provides the tools you need to stand out.

## Features

- **AI Resume Builder**: Create ATS-optimized resumes with intelligent content suggestions
- **LinkedIn Profile Optimizer**: Generate compelling headlines, summaries, and job descriptions
- **GitHub Profile README Generator**: Build professional profile README that showcases your work on your GitHub profile page
- **Career Analytics**: Track your progress and get personalized recommendations
- **Modern UI/UX**: Beautiful, responsive design with dark mode support
- **Privacy First**: Your data stays secure and private

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4 with custom design system
- **AI Integration**: OpenAI GPT / Google Gemini APIs (coming soon)
- **Database**: MongoDB with Mongoose (coming soon)
- **Authentication**: NextAuth.js (coming soon)
- **Deployment**: Vercel

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/CareerForge.git
   cd CareerForge
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up environment variables** (optional for basic setup)
   ```bash
   cp .env.example .env.local
   ```
4. **Run the development server**
   ```bash
   npm run dev
   ```
5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
CareerForge/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── resume-builder/  # Resume builder page
│   │   ├── linkedin/        # LinkedIn optimizer page
│   │   ├── github-readme/   # GitHub profile README generator page
│   │   └── layout.tsx       # Root layout with navbar/footer
│   ├── components/          # Reusable React components
│   │   ├── Navbar.tsx       # Navigation component
│   │   └── Footer.tsx       # Footer component
│   └── lib/                 # Utility functions and constants
│       ├── utils.ts         # Helper functions
│       └── constants.ts     # App constants
├── public/                  # Static assets
├── .github/                 # GitHub templates and workflows
└── README.md               # You are here!
```

## 🤝 Contributing

We love contributions! CareerForge is participating in **Hacktoberfest 2025** 🎃

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add: amazing feature description'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Good First Issues

Look for issues labeled:
- `good first issue` - Perfect for newcomers
- `hacktoberfest` - Hacktoberfest eligible
- `documentation` - Help improve our docs
- `frontend` - UI/UX improvements
- `backend` - API and server work

## 🎯 Roadmap

- [x] **Phase 1**: Core UI/UX (✅ Completed)
- [ ] **Phase 2**: AI Integration (OpenAI/Gemini APIs)
- [ ] **Phase 3**: User Authentication & Profiles
- [ ] **Phase 4**: Database Integration & Data Persistence
- [ ] **Phase 5**: Advanced Features (Templates, Export Options)
- [ ] **Phase 6**: Analytics & Insights Dashboard

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature idea? We'd love to hear from you!

- [Report a Bug](https://github.com/yourusername/CareerForge/issues/new)
- [Request a Feature](https://github.com/yourusername/CareerForge/issues/new)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)

---

<div align="center">

**Ready to transform your career?** 

[🚀 Get Started](https://careerforge.dev) • [📖 Documentation](https://docs.careerforge.dev) • [💬 Community](https://discord.gg/careerforge)

Made with ❤️ for the open-source community

</div>
