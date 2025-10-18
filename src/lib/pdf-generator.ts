import { jsPDF } from 'jspdf';
import { ResumeData } from '@/types/resume';

/**
 * Generates a PDF resume matching the LaTeX template styling
 */
export function generatePDF(data: ResumeData): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  // Page margins matching LaTeX template (left=1.4cm, top=0.8cm, right=1.2cm, bottom=1cm)
  const margins = {
    left: 14,
    right: 12,
    top: 8,
    bottom: 10,
  };

  const pageWidth = 210; // A4 width in mm
  const contentWidth = pageWidth - margins.left - margins.right;
  let yPos = margins.top;

  // Font sizes matching LaTeX template
  const fontSize = {
    name: 18,
    header: 9,
    sectionTitle: 12,
    subsectionTitle: 10,
    body: 9,
    small: 8,
  };

  // Helper function to add section title with underline
  const addSectionTitle = (title: string) => {
    doc.setFontSize(fontSize.sectionTitle);
    doc.setFont('helvetica', 'bold');
    doc.text(title.toUpperCase(), margins.left, yPos);
    yPos += 1.5;
    // Draw underline
    doc.setLineWidth(0.4);
    doc.line(margins.left, yPos, margins.left + contentWidth, yPos);
    yPos += 4;
  };

  // Helper function to check if we need a new page
  const checkPageBreak = (requiredSpace: number) => {
    if (yPos + requiredSpace > 297 - margins.bottom) {
      doc.addPage();
      yPos = margins.top;
      return true;
    }
    return false;
  };


  // ========== HEADER ==========
  if (data.personalInfo.name) {
    doc.setFontSize(fontSize.name);
    doc.setFont('helvetica', 'bold');
    const nameWidth = doc.getTextWidth(data.personalInfo.name);
    doc.text(data.personalInfo.name, (pageWidth - nameWidth) / 2, yPos);
    yPos += 5;

    // Contact info - Line 1
    doc.setFontSize(fontSize.small);
    doc.setFont('helvetica', 'normal');
    
    const contactParts1: string[] = [];
    if (data.personalInfo.phone) contactParts1.push(`+${data.personalInfo.phone}`);
    if (data.personalInfo.email1) contactParts1.push(data.personalInfo.email1);
    if (data.personalInfo.email2) contactParts1.push(data.personalInfo.email2);
    
    if (contactParts1.length > 0) {
      const contactLine1 = contactParts1.join(' | ');
      const line1Width = doc.getTextWidth(contactLine1);
      doc.text(contactLine1, (pageWidth - line1Width) / 2, yPos);
      yPos += 3.5;
    }

    // Contact info - Line 2 (Social)
    const contactParts2: string[] = [];
    if (data.personalInfo.github) {
      contactParts2.push(`github.com/${data.personalInfo.github}`);
      doc.textWithLink(`github.com/${data.personalInfo.github}`, 0, 0, { 
        url: `https://github.com/${data.personalInfo.github}` 
      });
    }
    if (data.personalInfo.linkedin) {
      contactParts2.push(`linkedin.com/in/${data.personalInfo.linkedin}`);
    }
    
    if (contactParts2.length > 0) {
      const contactLine2 = contactParts2.join(' | ');
      const line2Width = doc.getTextWidth(contactLine2);
      const xPos = (pageWidth - line2Width) / 2;
      
      // Add clickable links
      let currentX = xPos;
      if (data.personalInfo.github) {
        const githubText = `github.com/${data.personalInfo.github}`;
        doc.textWithLink(githubText, currentX, yPos, { 
          url: `https://github.com/${data.personalInfo.github}` 
        });
        currentX += doc.getTextWidth(githubText);
        
        if (data.personalInfo.linkedin) {
          const separator = ' | ';
          doc.text(separator, currentX, yPos);
          currentX += doc.getTextWidth(separator);
        }
      }
      
      if (data.personalInfo.linkedin) {
        const linkedinText = `linkedin.com/in/${data.personalInfo.linkedin}`;
        doc.textWithLink(linkedinText, currentX, yPos, { 
          url: `https://www.linkedin.com/in/${data.personalInfo.linkedin}` 
        });
      }
      
      yPos += 3.5;
    }

    yPos += 1;
  }

  // ========== EDUCATION ==========
  if (data.education.length > 0) {
    checkPageBreak(20);
    addSectionTitle('Education');

    data.education.forEach((edu) => {
      checkPageBreak(15);
      
      // Institution and Score
      doc.setFontSize(fontSize.subsectionTitle);
      doc.setFont('helvetica', 'bold');
      doc.text(edu.institution, margins.left, yPos);
      
      const scoreText = `${edu.scoreType}: ${edu.score}`;
      const scoreWidth = doc.getTextWidth(scoreText);
      doc.text(scoreText, margins.left + contentWidth - scoreWidth, yPos);
      yPos += 4;

      // Degree and Years
      doc.setFontSize(fontSize.body);
      doc.setFont('helvetica', 'italic');
      doc.text(`${edu.degree} in ${edu.field}`, margins.left, yPos);
      
      const yearsText = `${edu.startYear} - ${edu.endYear}`;
      const yearsWidth = doc.getTextWidth(yearsText);
      doc.setFont('helvetica', 'normal');
      doc.text(yearsText, margins.left + contentWidth - yearsWidth, yPos);
      yPos += 6;
    });

    yPos += 2;
  }

  // ========== TECHNICAL SKILLS ==========
  if (data.technicalSkills.programmingLanguages || data.technicalSkills.frameworks || 
      data.technicalSkills.databases || data.technicalSkills.developerTools || 
      data.technicalSkills.coursework) {
    checkPageBreak(20);
    addSectionTitle('Technical Skills');

    doc.setFontSize(fontSize.body);

    const addSkillLine = (label: string, value: string) => {
      if (!value) return;
      checkPageBreak(8);
      
      // Add label
      doc.setFont('helvetica', 'bold');
      const labelText = label + ': ';
      doc.text(labelText, margins.left, yPos);
      
      // Add value on same line
      doc.setFont('helvetica', 'normal');
      const labelWidth = doc.getTextWidth(labelText);
      const valueMaxWidth = contentWidth - labelWidth;
      
      // Split text if needed, but render properly
      const lines = doc.splitTextToSize(value, valueMaxWidth);
      doc.text(lines[0], margins.left + labelWidth, yPos);
      yPos += 4;
      
      // Add remaining lines if any (indented)
      for (let i = 1; i < lines.length; i++) {
        checkPageBreak(4);
        doc.text(lines[i], margins.left + labelWidth, yPos);
        yPos += 4;
      }
    };

    addSkillLine('Programming Languages', data.technicalSkills.programmingLanguages);
    addSkillLine('Frameworks / Libraries', data.technicalSkills.frameworks);
    addSkillLine('Databases / Cloud', data.technicalSkills.databases);
    addSkillLine('Developer Tools', data.technicalSkills.developerTools);
    addSkillLine('Relevant Coursework', data.technicalSkills.coursework);

    yPos += 1;
  }

  // ========== PROJECTS ==========
  if (data.projects.length > 0) {
    checkPageBreak(20);
    addSectionTitle('Projects');

    data.projects.forEach((project) => {
      checkPageBreak(20);
      
      // Project title and Year
      doc.setFontSize(fontSize.subsectionTitle);
      doc.setFont('helvetica', 'bold');
      doc.text(project.title, margins.left, yPos);
      
      if (project.year) {
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(fontSize.small);
        const yearWidth = doc.getTextWidth(project.year);
        doc.text(project.year, margins.left + contentWidth - yearWidth, yPos);
      }
      yPos += 4;

      // Technologies
      if (project.technologies) {
        doc.setFontSize(fontSize.small);
        doc.setFont('helvetica', 'italic');
        const techLines = doc.splitTextToSize(project.technologies, contentWidth);
        techLines.forEach((line: string) => {
          checkPageBreak(3.5);
          doc.text(line, margins.left, yPos);
          yPos += 3.5;
        });
      }

      // Links
      if (project.links) {
        checkPageBreak(4);
        doc.setFontSize(fontSize.small);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 255); // Blue color for links
        doc.text(project.links, margins.left, yPos);
        doc.setTextColor(0, 0, 0); // Reset to black
        yPos += 4;
      }

      // Description bullets
      doc.setFontSize(fontSize.body);
      doc.setFont('helvetica', 'normal');
      project.description.forEach((desc) => {
        if (desc) {
          checkPageBreak(8);
          const bulletX = margins.left + 2;
          const textX = margins.left + 6;
          
          doc.text('•', bulletX, yPos);
          
          const descLines = doc.splitTextToSize(desc, contentWidth - 6);
          descLines.forEach((line: string, index: number) => {
            if (index > 0) checkPageBreak(4);
            doc.text(line, textX, yPos);
            yPos += 4;
          });
        }
      });

      yPos += 2;
    });

    yPos += 1;
  }

  // ========== CERTIFICATIONS ==========
  if (data.certifications.length > 0) {
    checkPageBreak(20);
    addSectionTitle('Certifications');

    doc.setFontSize(fontSize.body);
    doc.setFont('helvetica', 'normal');

    data.certifications.forEach((cert) => {
      checkPageBreak(8);
      const bulletX = margins.left + 2;
      const textX = margins.left + 6;
      
      doc.text('•', bulletX, yPos);
      
      // Add certification title
      doc.text(cert.title, textX, yPos);
      
      // Add link if available
      if (cert.link) {
        const titleWidth = doc.getTextWidth(cert.title);
        const linkText = ' (View)';
        doc.setTextColor(0, 0, 255);
        doc.textWithLink(linkText, textX + titleWidth, yPos, { url: cert.link });
        doc.setTextColor(0, 0, 0);
      }
      
      yPos += 4;
    });

    yPos += 1;
  }

  // ========== ACHIEVEMENTS ==========
  if (data.achievements.length > 0) {
    checkPageBreak(20);
    addSectionTitle('Achievements');

    data.achievements.forEach((ach) => {
      checkPageBreak(15);
      
      // Achievement title and Year
      doc.setFontSize(fontSize.subsectionTitle);
      doc.setFont('helvetica', 'bold');
      doc.text(ach.title, margins.left, yPos);
      
      if (ach.year) {
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(fontSize.small);
        const yearWidth = doc.getTextWidth(ach.year);
        doc.text(ach.year, margins.left + contentWidth - yearWidth, yPos);
      }
      yPos += 4;

      // Description
      if (ach.description) {
        doc.setFontSize(fontSize.body);
        doc.setFont('helvetica', 'normal');
        const descLines = doc.splitTextToSize(ach.description, contentWidth);
        descLines.forEach((line: string) => {
          checkPageBreak(4);
          doc.text(line, margins.left, yPos);
          yPos += 4;
        });
      }

      yPos += 2;
    });
  }

  return doc;
}

/**
 * Downloads the generated PDF
 */
export function downloadPDF(data: ResumeData) {
  const doc = generatePDF(data);
  const fileName = `${data.personalInfo.name.replace(/\s+/g, '_') || 'Resume'}_Resume.pdf`;
  doc.save(fileName);
}

/**
 * Gets PDF as blob for preview
 */
export function getPDFBlob(data: ResumeData): Blob {
  const doc = generatePDF(data);
  return doc.output('blob');
}
