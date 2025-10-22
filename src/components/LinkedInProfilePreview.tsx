"use client";

import { useEffect, useState } from 'react';

interface ProfileData {
  name: string;
  headline: string;
  about: string;
  experience: Array<{
    id: string;
    title: string;
    company: string;
    description: string;
  }>;
  profileImage?: string;
}

interface LinkedInProfilePreviewProps {
  onSelectHeadline?: (headline: string) => void;
  onSelectAbout?: (about: string) => void;
  onSelectExperience?: (description: string) => void;
}

export default function LinkedInProfilePreview({
  onSelectHeadline,
  onSelectAbout,
  onSelectExperience,
}: LinkedInProfilePreviewProps) {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: '',
    headline: '',
    about: '',
    experience: [],
  });

  const [isEditing, setIsEditing] = useState({
    name: false,
    headline: false,
    about: false,
  });

  // Load from localStorage on mount
  useEffect(() => {
    const loadData = () => {
      const saved = localStorage.getItem('linkedinProfilePreview');
      if (saved) {
        try {
          setProfileData(JSON.parse(saved));
        } catch (e) {
          console.error('Failed to load profile data:', e);
        }
      }
    };

    loadData();

    // Listen for storage events (when data is inserted from generators)
    const handleStorageChange = () => {
      loadData();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Save to localStorage whenever profileData changes
  useEffect(() => {
    localStorage.setItem('linkedinProfilePreview', JSON.stringify(profileData));
  }, [profileData]);

  const updateField = (field: keyof ProfileData, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const addExperience = () => {
    const newExp = {
      id: Date.now().toString(),
      title: 'Job Title',
      company: 'Company Name',
      description: 'Click to add description...',
    };
    setProfileData((prev) => ({
      ...prev,
      experience: [...prev.experience, newExp],
    }));
  };

  const updateExperience = (id: string, field: string, value: string) => {
    setProfileData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const deleteExperience = (id: string) => {
    setProfileData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  const clearProfile = () => {
    if (confirm('Are you sure you want to clear all profile data?')) {
      setProfileData({
        name: '',
        headline: '',
        about: '',
        experience: [],
      });
      localStorage.removeItem('linkedinProfilePreview');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-32"></div>

      {/* Profile Section */}
      <div className="px-6 pb-6">
        {/* Profile Image & Name */}
        <div className="flex items-start -mt-16 mb-4">
          <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center text-4xl font-bold text-gray-600 dark:text-gray-300">
            {profileData.name ? profileData.name.charAt(0).toUpperCase() : '?'}
          </div>
          <div className="ml-auto mt-20">
            <button
              onClick={clearProfile}
              className="text-sm text-red-600 dark:text-red-400 hover:underline"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Name */}
        <div className="mb-2">
          {isEditing.name ? (
            <input
              type="text"
              value={profileData.name}
              onChange={(e) => updateField('name', e.target.value)}
              onBlur={() => setIsEditing((prev) => ({ ...prev, name: false }))}
              autoFocus
              className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-blue-500 focus:outline-none bg-transparent w-full"
              placeholder="Your Name"
            />
          ) : (
            <h1
              onClick={() => setIsEditing((prev) => ({ ...prev, name: true }))}
              className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
            >
              {profileData.name || 'Click to add your name'}
            </h1>
          )}
        </div>

        {/* Headline */}
        <div className="mb-4">
          {isEditing.headline ? (
            <textarea
              value={profileData.headline}
              onChange={(e) => updateField('headline', e.target.value)}
              onBlur={() => setIsEditing((prev) => ({ ...prev, headline: false }))}
              autoFocus
              rows={2}
              className="text-base text-gray-700 dark:text-gray-300 border-b-2 border-blue-500 focus:outline-none bg-transparent w-full resize-none"
              placeholder="Your headline"
            />
          ) : (
            <p
              onClick={() => setIsEditing((prev) => ({ ...prev, headline: true }))}
              className="text-base text-gray-700 dark:text-gray-300 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
            >
              {profileData.headline || 'Click to add your headline'}
            </p>
          )}
          {onSelectHeadline && (
            <button
              onClick={() => onSelectHeadline(profileData.headline)}
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-1"
            >
              Use this headline
            </button>
          )}
        </div>

        {/* About Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            About
          </h2>
          {isEditing.about ? (
            <textarea
              value={profileData.about}
              onChange={(e) => updateField('about', e.target.value)}
              onBlur={() => setIsEditing((prev) => ({ ...prev, about: false }))}
              autoFocus
              rows={6}
              className="text-sm text-gray-700 dark:text-gray-300 border-2 border-blue-500 rounded-md p-2 focus:outline-none bg-transparent w-full resize-none"
              placeholder="Tell your story..."
            />
          ) : (
            <p
              onClick={() => setIsEditing((prev) => ({ ...prev, about: true }))}
              className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-md"
            >
              {profileData.about || 'Click to add your about section'}
            </p>
          )}
          {onSelectAbout && (
            <button
              onClick={() => onSelectAbout(profileData.about)}
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-2"
            >
              Use this about section
            </button>
          )}
        </div>

        {/* Experience Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Experience
            </h2>
            <button
              onClick={addExperience}
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Position
            </button>
          </div>

          {profileData.experience.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              No experience added yet. Click "Add Position" to start.
            </p>
          ) : (
            <div className="space-y-6">
              {profileData.experience.map((exp) => (
                <div key={exp.id} className="relative group">
                  <button
                    onClick={() => deleteExperience(exp.id)}
                    className="absolute -right-2 -top-2 w-6 h-6 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-red-600"
                  >
                    ×
                  </button>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded flex-shrink-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0h-8m8 0v6m-8-6v6m0 0v6m0-6h8m-8 6h8" />
                      </svg>
                    </div>
                    <div className="ml-4 flex-1">
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) => updateExperience(exp.id, 'title', e.target.value)}
                        className="font-semibold text-gray-900 dark:text-white bg-transparent border-b border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none w-full mb-1"
                      />
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                        className="text-sm text-gray-700 dark:text-gray-300 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none w-full mb-2"
                      />
                      <textarea
                        value={exp.description}
                        onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                        rows={3}
                        className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap bg-transparent border border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none w-full rounded p-1 resize-none"
                      />
                      {onSelectExperience && (
                        <button
                          onClick={() => onSelectExperience(exp.description)}
                          className="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-1"
                        >
                          Use this description
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
              💡 How to use this preview
            </h3>
            <ul className="text-xs text-blue-800 dark:text-blue-400 space-y-1">
              <li>• Click on any field to edit it directly</li>
              <li>• Generate content using the tools above, then paste it here</li>
              <li>• Your changes are automatically saved to your browser</li>
              <li>• Add multiple experience positions to see how they look</li>
              <li>• Use "Clear All" to reset the preview</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
