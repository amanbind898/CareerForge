'use client';

import { ResumeData } from '@/types/resume';

interface Props {
  data: ResumeData;
}

export default function ResumePreview({ data }: Props) {
  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden mx-auto" style={{ width: '210mm', minHeight: '297mm' }}>
      <div className="p-8 text-black" style={{ fontSize: '11px', lineHeight: '1.5', fontFamily: '"Computer Modern", "Latin Modern Roman", "Times New Roman", serif' }}>
        {/* Header */}
        {data.personalInfo.name && (
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold mb-2">{data.personalInfo.name}</h1>
            <div className="text-xs space-x-2">
              {data.personalInfo.phone && <span>📞 +{data.personalInfo.phone}</span>}
              {data.personalInfo.email1 && <span>✉️ {data.personalInfo.email1}</span>}
            </div>
            <div className="text-xs space-x-2 mt-1">
              {data.personalInfo.github && <span>🔗 github.com/{data.personalInfo.github}</span>}
              {data.personalInfo.linkedin && <span>💼 linkedin.com/in/{data.personalInfo.linkedin}</span>}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-4">
            <div className="border-b-2 border-gray-800 mb-2">
              <h2 className="text-sm font-bold uppercase">Education</h2>
            </div>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-2">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="font-bold text-xs">{edu.institution}</div>
                    <div className="text-xs italic">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </div>
                  </div>
                  <div className="text-right text-xs">
                    <div className="italic">{edu.startYear} - {edu.endYear}</div>
                    <div className="text-xs">{edu.scoreType}: {edu.score}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technical Skills */}
        {(data.technicalSkills.programmingLanguages || 
          data.technicalSkills.frameworks || 
          data.technicalSkills.databases || 
          data.technicalSkills.developerTools) && (
          <div className="mb-4">
            <div className="border-b-2 border-gray-800 mb-2">
              <h2 className="text-sm font-bold uppercase">Technical Skills</h2>
            </div>
            <div className="space-y-1 text-xs">
              {data.technicalSkills.programmingLanguages && (
                <div><span className="font-bold">Programming Languages:</span> {data.technicalSkills.programmingLanguages}</div>
              )}
              {data.technicalSkills.frameworks && (
                <div><span className="font-bold">Frameworks / Libraries:</span> {data.technicalSkills.frameworks}</div>
              )}
              {data.technicalSkills.databases && (
                <div><span className="font-bold">Databases / Cloud:</span> {data.technicalSkills.databases}</div>
              )}
              {data.technicalSkills.developerTools && (
                <div><span className="font-bold">Developer Tools:</span> {data.technicalSkills.developerTools}</div>
              )}
              {data.technicalSkills.coursework && (
                <div><span className="font-bold">Relevant Coursework:</span> {data.technicalSkills.coursework}</div>
              )}
            </div>
          </div>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <div className="mb-4">
            <div className="border-b-2 border-gray-800 mb-2">
              <h2 className="text-sm font-bold uppercase">Projects</h2>
            </div>
            {data.projects.map((project) => (
              <div key={project.id} className="mb-3">
                <div className="flex justify-between items-start mb-1">
                  <div className="font-bold text-xs">{project.title}</div>
                  <div className="text-xs italic">{project.year}</div>
                </div>
                <div className="text-xs italic mb-1">{project.technologies}</div>
                {project.links && <div className="text-xs mb-1">{project.links}</div>}
                <ul className="list-disc list-inside text-xs space-y-0.5">
                  {project.description.map((desc, idx) => (
                    desc && <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <div className="mb-4">
            <div className="border-b-2 border-gray-800 mb-2">
              <h2 className="text-sm font-bold uppercase">Certifications</h2>
            </div>
            <ul className="list-disc list-inside text-xs space-y-0.5">
              {data.certifications.map((cert) => (
                <li key={cert.id}>{cert.title}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Achievements */}
        {data.achievements.length > 0 && (
          <div className="mb-4">
            <div className="border-b-2 border-gray-800 mb-2">
              <h2 className="text-sm font-bold uppercase">Achievements</h2>
            </div>
            {data.achievements.map((ach) => (
              <div key={ach.id} className="mb-2">
                <div className="flex justify-between items-start">
                  <div className="font-bold text-xs">{ach.title}</div>
                  {ach.year && <div className="text-xs italic">{ach.year}</div>}
                </div>
                <div className="text-xs">{ach.description}</div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!data.personalInfo.name && data.education.length === 0 && data.projects.length === 0 && (
          <div className="flex items-center justify-center h-full text-gray-400">
            <div className="text-center">
              <p className="text-lg">Start filling in your information</p>
              <p className="text-sm">Your resume preview will appear here</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
