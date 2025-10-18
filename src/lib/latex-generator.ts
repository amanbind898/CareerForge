import { ResumeData } from '@/types/resume';

/**
 * Escapes special LaTeX characters in a string
 */
function escapeLatex(text: string): string {
  if (!text) return '';
  return text
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/[&%$#_{}]/g, '\\$&')
    .replace(/~/g, '\\textasciitilde{}')
    .replace(/\^/g, '\\textasciicircum{}');
}

/**
 * Generates LaTeX code for personal information header
 */
function generatePersonalInfo(data: ResumeData): string {
  const { personalInfo } = data;
  
  let header = `\\begin{center}
  \\textbf{\\LARGE ${escapeLatex(personalInfo.name)}} \\\\[1mm]

  \\small
  \\faPhone\\ +${escapeLatex(personalInfo.phone)}\\quad
  \\faEnvelope\\ \\href{mailto:${personalInfo.email1}}{${escapeLatex(personalInfo.email1)}}`;

  if (personalInfo.email2) {
    header += `\\quad
  \\faEnvelope\\ \\href{mailto:${personalInfo.email2}}{${escapeLatex(personalInfo.email2)}}`;
  }

  header += ` \\\\[1mm]`;

  if (personalInfo.github) {
    header += `
  \\faGithub\\ \\href{https://github.com/${personalInfo.github}}{${escapeLatex(personalInfo.github)}}`;
  }

  if (personalInfo.linkedin) {
    header += ` \\quad
  \\faLinkedin\\ \\href{https://www.linkedin.com/in/${personalInfo.linkedin}/}{${escapeLatex(personalInfo.linkedin)}}`;
  }

  header += `
\\end{center}
\\vspace{-3mm}`;

  return header;
}

/**
 * Generates LaTeX code for education section
 */
function generateEducation(data: ResumeData): string {
  if (data.education.length === 0) return '';

  let section = `%-----------EDUCATION-----------
\\section{\\textbf{Education}}
  \\resumeSubHeadingListStart\n`;

  data.education.forEach((edu) => {
    section += `    \\resumeSubheading
      {${escapeLatex(edu.institution)}}{${escapeLatex(edu.scoreType)}: ${escapeLatex(edu.score)}}
      {${escapeLatex(edu.degree)} in ${escapeLatex(edu.field)}}{${escapeLatex(edu.startYear)} - ${escapeLatex(edu.endYear)}}\n`;
  });

  section += `  \\resumeSubHeadingListEnd
\\vspace{-5.5mm}\n\n`;

  return section;
}

/**
 * Generates LaTeX code for technical skills section
 */
function generateTechnicalSkills(data: ResumeData): string {
  const { technicalSkills } = data;
  
  if (!technicalSkills.programmingLanguages && !technicalSkills.frameworks && 
      !technicalSkills.databases && !technicalSkills.developerTools && 
      !technicalSkills.coursework) {
    return '';
  }

  let section = `%-----------TECHNICAL SKILLS-----------
\\section{\\textbf{Technical Skills}}
 \\begin{itemize}[leftmargin=0.05in, label={}]
    \\small{\\item{\n`;

  if (technicalSkills.programmingLanguages) {
    section += `     \\textbf{Programming Languages}{: ${escapeLatex(technicalSkills.programmingLanguages)}} \\\\\n`;
  }

  if (technicalSkills.frameworks) {
    section += `     \\textbf{Frameworks / Libraries}{: ${escapeLatex(technicalSkills.frameworks)}} \\\\\n`;
  }

  if (technicalSkills.databases) {
    section += `     \\textbf{Databases / Cloud}{: ${escapeLatex(technicalSkills.databases)}} \\\\\n`;
  }

  if (technicalSkills.developerTools) {
    section += `     \\textbf{Developer Tools}{: ${escapeLatex(technicalSkills.developerTools)}} \\\\\n`;
  }

  if (technicalSkills.coursework) {
    section += `     \\textbf{Relevant Coursework}{: ${escapeLatex(technicalSkills.coursework)}} \\\\\n`;
  }

  section += `    }}
 \\end{itemize}


\\vspace{-12pt}\n\n`;

  return section;
}

/**
 * Generates LaTeX code for projects section
 */
function generateProjects(data: ResumeData): string {
  if (data.projects.length === 0) return '';

  let section = `%-----------PROJECTS-----------------
\\section{\\textbf{Projects}}
\\resumeSubHeadingListStart\n\n`;

  data.projects.forEach((project) => {
    section += `

\\resumeProject
  {${escapeLatex(project.title)}}
  {${escapeLatex(project.technologies)}}
  {${escapeLatex(project.year)}}
  {${escapeLatex(project.links)}}
  \\resumeItemListStart\n`;

    project.description.forEach((desc) => {
      section += `    \\item {${escapeLatex(desc)}}\n`;
    });

    section += `  \\resumeItemListEnd
\\vspace{-2mm}\n`;
  });

  section += `\\resumeSubHeadingListEnd
\\vspace{-2mm}\n\n`;

  return section;
}

/**
 * Generates LaTeX code for certifications section
 */
function generateCertifications(data: ResumeData): string {
  if (data.certifications.length === 0) return '';

  let section = `\\section{\\textbf{Certifications}}
\\begin{itemize}[leftmargin=*,labelsep=0.8mm,itemsep=0.6mm]\n`;

  data.certifications.forEach((cert) => {
    section += `\\item ${escapeLatex(cert.title)}: \\href{${cert.link}}{View credential}\n`;
  });

  section += `\\end{itemize}

\n\n`;

  return section;
}

/**
 * Generates LaTeX code for achievements section
 */
function generateAchievements(data: ResumeData): string {
  if (data.achievements.length === 0) return '';

  let section = `%-----------ACHIEVEMENTS-----------
\\section{\\textbf{Achievements}}
\\resumeSubHeadingListStart\n`;

  data.achievements.forEach((achievement) => {
    const year = achievement.year ? `{${escapeLatex(achievement.year)}}` : '';
    section += `    \\resumePOR{${escapeLatex(achievement.title)}}
        {${escapeLatex(achievement.description)}}
        ${year}\n\n`;
  });

  section += `\\resumeSubHeadingListEnd
\\vspace{-2mm}\n\n`;

  return section;
}

/**
 * Downloads LaTeX source file
 */
export function downloadLatexSource(data: ResumeData) {
  const latexContent = generateLatexResume(data);
  const blob = new Blob([latexContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${data.personalInfo.name.replace(/\s+/g, '_') || 'Resume'}_Resume.tex`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Generates complete LaTeX resume document
 */
export function generateLatexResume(data: ResumeData): string {
  const template = `%-------------------------
% Resume in Latex
% Author: ${escapeLatex(data.personalInfo.name)}
% License: MIT
%------------------------

%---- Required Packages and Functions ----

\\documentclass[a4paper,11pt]{article}
\\usepackage{latexsym}
\\usepackage{xcolor}
\\usepackage{float}
\\usepackage{ragged2e}
\\usepackage[empty]{fullpage}
\\usepackage{wrapfig}
\\usepackage{lipsum}
\\usepackage{tabularx}
\\usepackage{titlesec}
\\usepackage{geometry}
\\usepackage{marvosym}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage{fontawesome5}
\\usepackage{multicol}
\\usepackage{graphicx}
\\usepackage{cfr-lm}
\\usepackage[T1]{fontenc}
\\setlength{\\multicolsep}{0pt} 
\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}
\\geometry{left=1.4cm, top=0.8cm, right=1.2cm, bottom=1cm}
\\usepackage[most]{tcolorbox}
\\tcbset{
	frame code={},
	center title,
	left=0pt,
	right=0pt,
	top=0pt,
	bottom=0pt,
	colback=gray!20,
	colframe=white,
	width=\\dimexpr\\textwidth\\relax,
	enlarge left by=-2mm,
	boxsep=4pt,
	arc=0pt,outer arc=0pt,
}

\\urlstyle{same}

\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-7pt}]

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[2]{
  \\item{
    \\textbf{#1}{\\hspace{0.5mm}#2 \\vspace{-0.5mm}}
  }
}

\\newcommand{\\resumePOR}[3]{
\\vspace{0.3mm}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
        \\textbf{#1}\\hspace{0.3mm}#2 & \\textit{\\small{#3}} 
    \\end{tabular*}
    \\vspace{-2mm}
}

\\newcommand{\\resumeSubheading}[4]{
\\vspace{0.5mm}\\item
    \\begin{tabular*}{0.98\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
        \\textbf{#1} & \\textit{\\footnotesize{#4}} \\\\
        \\textit{\\footnotesize{#3}} &  \\footnotesize{#2}\\\\
    \\end{tabular*}
    \\vspace{-2.4mm}
}

\\newcommand{\\resumeProject}[4]{
\\vspace{0.5mm}\\item
    \\begin{tabular*}{0.98\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
        \\textbf{#1} & \\textit{\\footnotesize{#3}} \\\\
        \\footnotesize{\\textit{#2}} & \\footnotesize{#4}
    \\end{tabular*}
    \\vspace{-2.4mm}
}

\\newcommand{\\resumeSubItem}[2]{\\resumeItem{#1}{#2}\\vspace{-6pt}}

\\renewcommand{\\labelitemi}{$\\vcenter{\\hbox{\\tiny$\\bullet $  }}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=*,labelsep=0mm]}
\\newcommand{\\resumeHeadingSkillStart}{\\begin{itemize}[leftmargin=*,itemsep=1.7mm, rightmargin=2ex]}
\\newcommand{\\resumeItemListStart}{\\begin{justify}\\begin{itemize}[leftmargin=3ex, rightmargin=2ex, noitemsep,labelsep=1.2mm,itemsep=0mm]\\small}

\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}\\vspace{2mm}}
\\newcommand{\\resumeHeadingSkillEnd}{\\end{itemize}\\vspace{-2mm}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\end{justify}\\vspace{-3mm}}
\\newcommand{\\cvsection}[1]{%
\\vspace{1mm}
\\begin{tcolorbox}
    \\textbf{\\large #1}
\\end{tcolorbox}
    \\vspace{-4mm}
}

\\newcolumntype{L}{>{\\raggedright\\arraybackslash}X}%
\\newcolumntype{R}{>{\\raggedleft\\arraybackslash}X}%
\\newcolumntype{C}{>{\\centering\\arraybackslash}X}%

\\begin{document}
\\fontfamily{cmr}\\selectfont

%----------HEADER-----------------

\\vspace{-40mm}

${generatePersonalInfo(data)}

${generateEducation(data)}${generateTechnicalSkills(data)}${generateProjects(data)}${generateCertifications(data)}${generateAchievements(data)}
\\end{document}`;

  return template;
}
