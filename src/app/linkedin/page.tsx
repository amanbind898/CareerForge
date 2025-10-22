"use client";

import { useState, useEffect } from 'react';
import LinkedInProfilePreview from '@/components/LinkedInProfilePreview';

type GeneratorType = 'headline' | 'summary' | 'experience';

interface FormData {
  headline: { role: string; skills: string };
  summary: { background: string; tone: string };
  experience: { jobTitle: string; description: string };
}

export default function LinkedIn() {
  const [formData, setFormData] = useState<FormData>({
    headline: { role: '', skills: '' },
    summary: { background: '', tone: '' },
    experience: { jobTitle: '', description: '' },
  });

  const [results, setResults] = useState<Record<GeneratorType, string>>({
    headline: '',
    summary: '',
    experience: '',
  });

  const [loading, setLoading] = useState<Record<GeneratorType, boolean>>({
    headline: false,
    summary: false,
    experience: false,
  });

  const [errors, setErrors] = useState<Record<GeneratorType, string>>({
    headline: '',
    summary: '',
    experience: '',
  });

  const handleGenerate = async (type: GeneratorType) => {
    setLoading((prev) => ({ ...prev, [type]: true }));
    setErrors((prev) => ({ ...prev, [type]: '' }));
    setResults((prev) => ({ ...prev, [type]: '' }));

    try {
      const response = await fetch('/api/linkedin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, data: formData[type] }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate content');
      }

      setResults((prev) => ({ ...prev, [type]: data.content }));
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        [type]: error instanceof Error ? error.message : 'An error occurred',
      }));
    } finally {
      setLoading((prev) => ({ ...prev, [type]: false }));
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const insertIntoPreview = (type: GeneratorType, content: string) => {
    // Get current profile data from localStorage
    const saved = localStorage.getItem('linkedinProfilePreview');
    let profileData = saved ? JSON.parse(saved) : { name: '', headline: '', about: '', experience: [] };

    // Update the appropriate field
    if (type === 'headline') {
      profileData.headline = content;
    } else if (type === 'summary') {
      profileData.about = content;
    } else if (type === 'experience') {
      // Add as new experience or update the last one
      if (profileData.experience.length === 0) {
        profileData.experience.push({
          id: Date.now().toString(),
          title: formData.experience.jobTitle || 'Job Title',
          company: 'Company Name',
          description: content,
        });
      } else {
        // Update the last experience entry
        profileData.experience[profileData.experience.length - 1].description = content;
      }
    }

    // Save back to localStorage
    localStorage.setItem('linkedinProfilePreview', JSON.stringify(profileData));
    
    // Trigger a storage event to update the preview component
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            LinkedIn Profile Optimizer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Enhance your LinkedIn presence with AI-generated headlines, summaries, and job descriptions that attract recruiters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Headline Generator */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Headline Generator
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Create compelling headlines that showcase your expertise and attract the right opportunities.
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Your current role"
                value={formData.headline.role}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    headline: { ...prev.headline, role: e.target.value },
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <input
                type="text"
                placeholder="Key skills (comma separated)"
                value={formData.headline.skills}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    headline: { ...prev.headline, skills: e.target.value },
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={() => handleGenerate('headline')}
                disabled={loading.headline || !formData.headline.role || !formData.headline.skills}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                {loading.headline ? 'Generating...' : 'Generate Headlines'}
              </button>
              {errors.headline && (
                <p className="text-red-500 text-sm">{errors.headline}</p>
              )}
              {results.headline && (
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Generated Headlines:</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => insertIntoPreview('headline', results.headline)}
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                      >
                        Insert →
                      </button>
                      <button
                        onClick={() => copyToClipboard(results.headline)}
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap text-sm">
                    {results.headline}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Summary Generator */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                About Section
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Craft a professional summary that tells your career story and highlights your value proposition.
            </p>
            <div className="space-y-3">
              <textarea
                placeholder="Brief description of your background"
                rows={3}
                value={formData.summary.background}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    summary: { ...prev.summary, background: e.target.value },
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <select
                value={formData.summary.tone}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    summary: { ...prev.summary, tone: e.target.value },
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select tone</option>
                <option value="professional">Professional</option>
                <option value="conversational">Conversational</option>
                <option value="confident">Confident</option>
              </select>
              <button
                onClick={() => handleGenerate('summary')}
                disabled={loading.summary || !formData.summary.background || !formData.summary.tone}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                {loading.summary ? 'Generating...' : 'Generate Summary'}
              </button>
              {errors.summary && (
                <p className="text-red-500 text-sm">{errors.summary}</p>
              )}
              {results.summary && (
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Generated Summary:</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => insertIntoPreview('summary', results.summary)}
                        className="text-green-600 dark:text-green-400 hover:underline text-sm"
                      >
                        Insert →
                      </button>
                      <button
                        onClick={() => copyToClipboard(results.summary)}
                        className="text-green-600 dark:text-green-400 hover:underline text-sm"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap text-sm">
                    {results.summary}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Experience Optimizer */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Experience Optimizer
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Transform your job descriptions into achievement-focused bullet points that demonstrate impact.
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Job title"
                value={formData.experience.jobTitle}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    experience: { ...prev.experience, jobTitle: e.target.value },
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <textarea
                placeholder="What did you do in this role?"
                rows={3}
                value={formData.experience.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    experience: { ...prev.experience, description: e.target.value },
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={() => handleGenerate('experience')}
                disabled={loading.experience || !formData.experience.jobTitle || !formData.experience.description}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                {loading.experience ? 'Optimizing...' : 'Optimize Description'}
              </button>
              {errors.experience && (
                <p className="text-red-500 text-sm">{errors.experience}</p>
              )}
              {results.experience && (
                <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-md">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Optimized Description:</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => insertIntoPreview('experience', results.experience)}
                        className="text-purple-600 dark:text-purple-400 hover:underline text-sm"
                      >
                        Insert →
                      </button>
                      <button
                        onClick={() => copyToClipboard(results.experience)}
                        className="text-purple-600 dark:text-purple-400 hover:underline text-sm"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap text-sm">
                    {results.experience}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* LinkedIn Profile Preview */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Profile Preview
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
            See how your generated content will look on LinkedIn. Click "Insert →" buttons above to add content here.
          </p>
          <LinkedInProfilePreview />
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            LinkedIn Optimization Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Professional Photo</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Use a high-quality headshot with good lighting</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Custom URL</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Create a custom LinkedIn URL with your name</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Skills & Endorsements</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">List relevant skills and get endorsements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">Regular Posts</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Share industry insights and engage with content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
