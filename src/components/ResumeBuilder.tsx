'use client';

import { useState } from 'react';
import { ResumeData, DEFAULT_RESUME_DATA } from '@/types/resume';
import { downloadPDF } from '@/lib/pdf-generator';
import { downloadLatexSource } from '@/lib/latex-generator';
import { useAutoSave } from '@/hooks/useAutoSave';
import PersonalInfoForm from './resume/PersonalInfoForm';
import EducationForm from './resume/EducationForm';
import SkillsForm from './resume/SkillsForm';
import ProjectsForm from './resume/ProjectsForm';
import CertificationsForm from './resume/CertificationsForm';
import AchievementsForm from './resume/AchievementsForm';
import ResumePreview from './resume/ResumePreview';

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>(DEFAULT_RESUME_DATA);
  const [activeTab, setActiveTab] = useState<'personal' | 'education' | 'skills' | 'projects' | 'certifications' | 'achievements'>('personal');
  
  // Auto-save functionality
  const { saveStatus, saveNow, clearSavedData } = useAutoSave(resumeData, setResumeData);

  const handleExportPDF = () => {
    downloadPDF(resumeData);
  };

  const handleExportLatex = () => {
    downloadLatexSource(resumeData);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 shadow-sm">
        <div className="max-w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  ATS-Friendly Resume Builder
                </h1>
                {/* Auto-save status indicator */}
                <div className="flex items-center gap-1">
                  {saveStatus === 'saved' && (
                    <div className="flex items-center gap-1 text-green-600 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Saved</span>
                    </div>
                  )}
                  {saveStatus === 'saving' && (
                    <div className="flex items-center gap-1 text-blue-600 text-sm">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Saving...</span>
                    </div>
                  )}
                  {saveStatus === 'unsaved' && (
                    <div className="flex items-center gap-1 text-orange-600 text-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>Unsaved</span>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Create professional resumes with live preview • Auto-saves as you type
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={saveNow}
                className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md transition-colors shadow-md hover:shadow-lg"
                title="Save now"
              >
                💾 Save
              </button>
              <button
                onClick={() => {
                  if (confirm('Clear all data? This will reset the form to default values.')) {
                    clearSavedData();
                    setResumeData(DEFAULT_RESUME_DATA);
                  }
                }}
                className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition-colors shadow-md hover:shadow-lg"
                title="Clear all data"
              >
                🗑️ Clear
              </button>
              <button
                onClick={handleExportLatex}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium rounded-md transition-colors shadow-md hover:shadow-lg"
                title="Download LaTeX source for Overleaf"
              >
                📄 LaTeX
              </button>
              <button
                onClick={handleExportPDF}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors shadow-md hover:shadow-lg"
              >
                📥 Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Split Screen Layout */}
      <div className="flex h-[calc(100vh-89px)]">
        {/* Left Panel - Editor */}
        <div className="w-1/2 overflow-y-auto border-r border-gray-200 dark:border-gray-700">
          <div className="p-6">
            {/* Tab Navigation */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-6">
              <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-700">
                {[
                  { key: 'personal', label: '👤 Personal' },
                  { key: 'education', label: '🎓 Education' },
                  { key: 'skills', label: '💻 Skills' },
                  { key: 'projects', label: '🚀 Projects' },
                  { key: 'certifications', label: '📜 Certs' },
                  { key: 'achievements', label: '🏆 Achievements' }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                      activeTab === tab.key
                        ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              {activeTab === 'personal' && <PersonalInfoForm data={resumeData} setData={setResumeData} />}
              {activeTab === 'education' && <EducationForm data={resumeData} setData={setResumeData} />}
              {activeTab === 'skills' && <SkillsForm data={resumeData} setData={setResumeData} />}
              {activeTab === 'projects' && <ProjectsForm data={resumeData} setData={setResumeData} />}
              {activeTab === 'certifications' && <CertificationsForm data={resumeData} setData={setResumeData} />}
              {activeTab === 'achievements' && <AchievementsForm data={resumeData} setData={setResumeData} />}
            </div>

            {/* Instructions */}
            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">💡 Quick Tips</h3>
              <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Fill in all sections for a complete resume</li>
                <li>• Preview updates in real-time on the right</li>
                <li>• <strong>Auto-saves</strong> your work as you type - no data loss!</li>
                <li>• Click "Download PDF" for instant PDF export</li>
                <li>• Click "LaTeX" to edit in Overleaf for best quality</li>
                <li>• Use "Clear" button to start fresh</li>
                <li>• This template is ATS-friendly and tested</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="w-1/2 bg-gray-100 dark:bg-gray-950 overflow-y-auto">
          <div className="p-6">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Live Preview
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                See how your resume looks in real-time
              </p>
            </div>

            {/* Resume Preview */}
            <div className="mb-6">
              <ResumePreview data={resumeData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
