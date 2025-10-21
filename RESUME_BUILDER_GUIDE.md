# Resume Builder Guide

## Overview

The CareerForge Resume Builder is a powerful, ATS-friendly LaTeX resume generator with a **split-screen interface** featuring:

- **Left Panel**: Interactive form editor with tabbed sections
- **Right Panel**: Live resume preview that updates in real-time
- **Export**: Download as `.tex` file for compilation

## Features

### ✨ Split-Screen Interface

- **50/50 Layout**: Editor on left, preview on right
- **Real-time Updates**: See changes instantly as you type
- **Sticky Header**: Quick access to export and code view buttons
- **Responsive Tabs**: Navigate between different resume sections

### 📝 Resume Sections

1. **Personal Info** 👤
   - Full name, phone, emails
   - GitHub and LinkedIn profiles

2. **Education** 🎓
   - Add unlimited education entries
   - Support for CGPA and Percentage
   - Institution, degree, field, dates

3. **Technical Skills** 💻
   - Programming languages
   - Frameworks & libraries
   - Databases & cloud platforms
   - Developer tools
   - Relevant coursework

4. **Projects** 🚀
   - Unlimited project entries
   - Multiple description points per project
   - Technologies used
   - Links to GitHub/Live demos

5. **Certifications** 📜
   - Add multiple certifications
   - Include credential links

6. **Achievements** 🏆
   - Competitive programming ranks
   - Hackathon wins
   - Open source contributions
   - Any notable achievements

### 🎨 Live Preview

The right panel shows a **visual representation** of your resume that mimics the final LaTeX output:

- Proper formatting and spacing
- Section headers with underlines
- Bullet points for lists
- Professional typography
- Empty state when no data

### 📥 Export Options

1. **Download LaTeX File**: Click "📥 Download .tex" to get the LaTeX source
2. **View LaTeX Code**: Toggle "📝 Show LaTeX" to see the generated code
3. **Compile**: Upload to [Overleaf](https://overleaf.com) or use any LaTeX compiler

## How to Use

### Step 1: Fill Personal Information
Start with the **Personal Info** tab and enter your basic details.

### Step 2: Add Education
Switch to **Education** tab and click "+ Add Education" for each degree/certification.

### Step 3: List Technical Skills
In the **Skills** tab, enter your technical skills separated by commas.

### Step 4: Add Projects
Go to **Projects** tab:
- Click "+ Add Project"
- Fill in project details
- Click "+ Add Point" to add multiple description bullets
- Repeat for all projects

### Step 5: Add Certifications
In **Certifications** tab, add your certificates with links.

### Step 6: List Achievements
Use **Achievements** tab for competitive programming, hackathons, etc.

### Step 7: Export
Click "📥 Download .tex" to download your resume as a LaTeX file.

### Step 8: Compile
1. Go to [Overleaf.com](https://overleaf.com)
2. Create a new project → Upload Project
3. Upload your `.tex` file
4. Click "Recompile" to generate PDF
5. Download the PDF

## ATS-Friendly Template

This template is specifically designed to pass **Applicant Tracking Systems (ATS)**:

- ✅ Clean, parseable structure
- ✅ Standard section headers
- ✅ No complex graphics or tables
- ✅ Proper formatting hierarchy
- ✅ Tested with real job applications

## Tips for Best Results

1. **Be Concise**: Keep descriptions clear and impactful
2. **Use Action Verbs**: Start bullet points with strong verbs (Developed, Implemented, Built)
3. **Quantify Results**: Include numbers and metrics (96% accuracy, 800+ problems)
4. **Tailor Content**: Customize for each job application
5. **Proofread**: Check for typos before exporting

## Technical Details

### Technologies Used
- **React 19** with TypeScript
- **Next.js 15** for framework
- **Tailwind CSS v4** for styling
- **LaTeX** for PDF generation

### File Structure
```
src/
├── components/
│   ├── ResumeBuilder.tsx          # Main split-screen component
│   └── resume/
│       ├── PersonalInfoForm.tsx   # Personal info form
│       ├── EducationForm.tsx      # Education form
│       ├── SkillsForm.tsx         # Skills form
│       ├── ProjectsForm.tsx       # Projects form
│       ├── CertificationsForm.tsx # Certifications form
│       ├── AchievementsForm.tsx   # Achievements form
│       └── ResumePreview.tsx      # Live preview component
├── types/
│   └── resume.ts                  # TypeScript type definitions
└── lib/
    └── latex-generator.ts         # LaTeX template generator
```

## Keyboard Shortcuts

- **Tab**: Navigate between form fields
- **Enter**: Submit current field
- **Ctrl/Cmd + S**: (Future) Save draft

## Browser Compatibility

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## Troubleshooting

### Preview not updating?
- Ensure JavaScript is enabled
- Try refreshing the page
- Check browser console for errors

### LaTeX compilation errors?
- Ensure all required LaTeX packages are installed
- Use Overleaf for easiest compilation
- Check for special characters that need escaping

### Export not working?
- Check browser download settings
- Ensure pop-ups are not blocked
- Try a different browser

## Future Enhancements

- [ ] PDF generation in-browser
- [ ] Multiple template styles
- [ ] Save/load resume data
- [ ] AI-powered content suggestions
- [ ] Export to PDF directly
- [ ] Import from LinkedIn
- [ ] Drag-and-drop section reordering

## Support

For issues or questions:
- Open an issue on [GitHub](https://github.com/amanbind898/CareerForge/issues)
- Check existing documentation
- Join our community discussions

---

**Made with ❤️ by the CareerForge Team**
