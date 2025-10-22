'use client';

import { useState } from 'react';
import { DSA_CONTENT_DATA } from '@/data/dsaContent';

interface DSAViewerProps {
  selectedPDF: string;
}

export function DSAViewer({ selectedPDF }: DSAViewerProps) {
  const [selectedSection, setSelectedSection] = useState<number>(0);
  const [selectedTopic, setSelectedTopic] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const content = DSA_CONTENT_DATA[selectedPDF as keyof typeof DSA_CONTENT_DATA];

  if (!content) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center text-gray-500">
          <p>Content not available for this resource.</p>
        </div>
      </div>
    );
  }

  const currentSection = content.sections[selectedSection];
  const currentTopic = currentSection?.content[selectedTopic];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
        <h2 className="text-2xl font-bold">{content.title}</h2>
        <p className="text-blue-100 mt-2">Interactive learning content</p>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - Table of Contents */}
        <div className="lg:w-1/3 bg-gray-50 border-r border-gray-200">
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-4">Table of Contents</h3>
            
            {/* Search */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
            <div className="space-y-2">
              {content.sections.map((section, sectionIndex) => {
                const filteredTopics = section.content.filter(topic =>
                  topic.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  topic.description.toLowerCase().includes(searchTerm.toLowerCase())
                );
                
                if (searchTerm && filteredTopics.length === 0) return null;
                
                return (
                  <div key={sectionIndex}>
                    <button
                      onClick={() => {
                        setSelectedSection(sectionIndex);
                        setSelectedTopic(0);
                      }}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedSection === sectionIndex
                          ? 'bg-blue-100 text-blue-800 font-medium'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {section.title}
                      {searchTerm && filteredTopics.length > 0 && (
                        <span className="ml-2 px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                          {filteredTopics.length}
                        </span>
                      )}
                    </button>
                    
                    {(selectedSection === sectionIndex || searchTerm) && (
                      <div className="ml-4 mt-2 space-y-1">
                        {(searchTerm ? filteredTopics : section.content).map((topic, topicIndex) => {
                          const actualIndex = searchTerm ? section.content.indexOf(topic) : topicIndex;
                          return (
                            <button
                              key={actualIndex}
                              onClick={() => {
                                setSelectedSection(sectionIndex);
                                setSelectedTopic(actualIndex);
                              }}
                              className={`w-full text-left p-2 text-sm rounded transition-colors ${
                                selectedSection === sectionIndex && selectedTopic === actualIndex
                                  ? 'bg-blue-50 text-blue-700'
                                  : 'hover:bg-gray-50 text-gray-600'
                              }`}
                            >
                              {topic.topic}
                              {searchTerm && (
                                <div className="text-xs text-gray-500 mt-1 truncate">
                                  {topic.description}
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-2/3 p-6">
          {currentTopic && (
            <div className="space-y-6">
              {/* Topic Header */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {currentTopic.topic}
                </h3>
                <p className="text-gray-600 text-lg">{currentTopic.description}</p>
              </div>

              {/* Complexity Analysis */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Time Complexity</h4>
                  <p className="text-green-700 font-mono">{currentTopic.timeComplexity}</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Space Complexity</h4>
                  <p className="text-blue-700 font-mono">{currentTopic.spaceComplexity}</p>
                </div>
              </div>

              {/* Key Points */}
              {currentTopic.keyPoints && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-3">Key Points</h4>
                  <ul className="space-y-2">
                    {currentTopic.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-yellow-700">
                        <span className="text-yellow-500 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Code Implementation */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Implementation</h4>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    <code>{currentTopic.code}</code>
                  </pre>
                </div>
              </div>

              {/* Related Problems */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Practice Problems</h4>
                <div className="grid gap-3">
                  {currentTopic.problems.map((problem, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                    >
                      <span className="text-gray-700 font-medium">{problem}</span>
                      <a
                        href={`https://leetcode.com/problems/${problem.toLowerCase().replace(/\s+/g, '-')}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-colors"
                      >
                        Solve on LeetCode →
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    if (selectedTopic > 0) {
                      setSelectedTopic(selectedTopic - 1);
                    } else if (selectedSection > 0) {
                      setSelectedSection(selectedSection - 1);
                      setSelectedTopic(content.sections[selectedSection - 1].content.length - 1);
                    }
                  }}
                  disabled={selectedSection === 0 && selectedTopic === 0}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white rounded transition-colors"
                >
                  ← Previous
                </button>
                
                <button
                  onClick={() => {
                    if (selectedTopic < currentSection.content.length - 1) {
                      setSelectedTopic(selectedTopic + 1);
                    } else if (selectedSection < content.sections.length - 1) {
                      setSelectedSection(selectedSection + 1);
                      setSelectedTopic(0);
                    }
                  }}
                  disabled={
                    selectedSection === content.sections.length - 1 &&
                    selectedTopic === currentSection.content.length - 1
                  }
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}