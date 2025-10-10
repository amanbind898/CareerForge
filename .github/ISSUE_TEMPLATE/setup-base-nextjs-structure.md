---
name: "🏗️ Setup base Next.js project structure"
about: "Set up the initial CareerForge project scaffold with modern architecture"
title: "🏗️ Setup base Next.js project structure"
labels: ["setup", "frontend", "good first issue", "hacktoberfest", "hacktoberfest-accepted"]
assignees: ""
---

## 🎯 **Goal**
Establish a robust, scalable Next.js 15 foundation for CareerForge with modern development practices, clean architecture, and contributor-friendly structure.

## 📋 **Detailed Tasks**

### **Phase 1: Project Foundation** ⚡
- [ ] **Initialize Next.js 15 with TypeScript**
  - Use `create-next-app@latest` with TypeScript template
  - Configure `tsconfig.json` with strict mode
  - Set up App Router (not Pages Router)

- [ ] **Configure Tailwind CSS v4**
  - Install and configure Tailwind CSS v4
  - Set up custom design system in `globals.css`
  - Add dark mode support
  - Configure responsive breakpoints

### **Phase 2: Project Structure** 📁
Create organized folder structure:
```
src/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Route groups
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── forms/            # Form components
│   └── layout/           # Layout components
├── lib/                  # Utilities & configurations
│   ├── utils.ts          # Helper functions
│   ├── constants.ts      # App constants
│   └── types.ts          # TypeScript types
└── hooks/                # Custom React hooks
```

### **Phase 3: Core Components** 🧩
- [ ] **Navigation System**
  - Responsive navbar with mobile menu
  - Dark/light mode toggle
  - Active route highlighting
  - Smooth animations

- [ ] **Layout Components**
  - Professional footer with links
  - Page wrapper with consistent spacing
  - Loading states and error boundaries

### **Phase 4: Routing & Pages** 🛣️
- [ ] **Core Pages Setup**
  - `/` - Landing page with hero section
  - `/resume-builder` - Resume creation interface
  - `/linkedin` - LinkedIn optimization tools
  - `/github-readme` - README generator
  - `/about` - About CareerForge page

- [ ] **Page Structure**
  - Consistent page layouts
  - SEO-optimized metadata
  - Proper heading hierarchy (h1, h2, h3)

### **Phase 5: Development Tools** 🛠️
- [ ] **Code Quality Setup**
  - ESLint configuration with Next.js rules
  - Prettier for code formatting
  - Husky for pre-commit hooks
  - TypeScript strict mode

- [ ] **Development Experience**
  - VS Code settings and extensions recommendations
  - Clear npm scripts in `package.json`
  - Environment variables template (`.env.example`)

### **Phase 6: Documentation** 📚
- [ ] **Enhanced README.md**
  - Project overview with clear value proposition
  - Installation and setup instructions
  - Development workflow guide
  - Contributing guidelines
  - Tech stack documentation
  - Project structure explanation

## 🎨 **Design Requirements**

### **Visual Design**
- Modern, clean interface with professional aesthetics
- Consistent color scheme (primary: blue, secondary: gray)
- Responsive design (mobile-first approach)
- Accessibility compliance (WCAG 2.1 AA)

### **User Experience**
- Intuitive navigation with clear CTAs
- Fast loading times (<3s initial load)
- Smooth transitions and micro-interactions
- Error handling with helpful messages

## 🧪 **Acceptance Criteria**

### **Functionality**
- [ ] All pages load without errors
- [ ] Navigation works on all screen sizes
- [ ] Dark/light mode toggle functions properly
- [ ] TypeScript compiles without errors
- [ ] ESLint passes with no warnings

### **Performance**
- [ ] Lighthouse score >90 for Performance
- [ ] Core Web Vitals in green
- [ ] Images optimized with Next.js Image component
- [ ] Proper lazy loading implementation

### **Code Quality**
- [ ] Clean, readable code with proper comments
- [ ] Consistent naming conventions
- [ ] Proper TypeScript types throughout
- [ ] No console errors in browser

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ installed
- Basic knowledge of React and TypeScript
- Familiarity with Tailwind CSS

### **Setup Steps**
1. Fork the repository
2. Clone your fork locally
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start development server
5. Open `http://localhost:3000` to view the app

## 📖 **Resources**

### **Documentation**
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Guide](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### **Design Inspiration**
- [Vercel Design System](https://vercel.com/design)
- [Shadcn/ui Components](https://ui.shadcn.com/)
- [Tailwind UI Examples](https://tailwindui.com/)

## 💡 **Tips for Contributors**

- Start with the folder structure to understand the architecture
- Use semantic HTML elements for better accessibility
- Follow the existing code style and conventions
- Test your changes on different screen sizes
- Ask questions in the issue comments if stuck

## 🏆 **Expected Outcome**
A production-ready Next.js application foundation that serves as the base for all CareerForge features, with excellent developer experience and user interface.
