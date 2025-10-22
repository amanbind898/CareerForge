'use client';

import { useState } from 'react';
import { useDSAPatterns } from '@/hooks/useDSAPatterns';

export function DSAPatternsViewer() {
  const { patternsData, loading, error } = useDSAPatterns();
  const [selectedPattern, setSelectedPattern] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading coding patterns...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center text-red-600">
          <p>Error loading patterns: {error}</p>
        </div>
      </div>
    );
  }

  if (!patternsData) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center text-gray-500">
          <p>No patterns data available</p>
        </div>
      </div>
    );
  }

  const currentPattern = patternsData.patterns.find(p => p.id === selectedPattern);
  const filteredPatterns = patternsData.patterns.filter(pattern =>
    pattern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pattern.usage.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pattern.sample_problems.some(problem => 
      problem.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const getPatternColor = (id: number) => {
    const colors = [
      'bg-blue-100 text-blue-800 border-blue-200',
      'bg-green-100 text-green-800 border-green-200',
      'bg-purple-100 text-purple-800 border-purple-200',
      'bg-orange-100 text-orange-800 border-orange-200',
      'bg-pink-100 text-pink-800 border-pink-200',
      'bg-indigo-100 text-indigo-800 border-indigo-200',
      'bg-red-100 text-red-800 border-red-200',
      'bg-yellow-100 text-yellow-800 border-yellow-200',
    ];
    return colors[(id - 1) % colors.length];
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
        <h2 className="text-2xl font-bold">{patternsData.document_info.title}</h2>
        <p className="text-purple-100 mt-2">{patternsData.document_info.tagline}</p>
        <div className="mt-4 p-3 bg-purple-700 bg-opacity-50 rounded-lg">
          <p className="text-sm text-purple-100">{patternsData.disclaimer}</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - Patterns List */}
        <div className="lg:w-1/3 bg-gray-50 border-r border-gray-200">
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-4">
              All 20 Coding Patterns
            </h3>
            
            {/* Search */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search patterns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
            </div>

            {/* Patterns Grid */}
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredPatterns.map((pattern) => (
                <button
                  key={pattern.id}
                  onClick={() => setSelectedPattern(pattern.id)}
                  className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-200 ${
                    selectedPattern === pattern.id
                      ? getPatternColor(pattern.id)
                      : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">
                        Pattern {pattern.id}
                      </div>
                      <div className="font-semibold text-gray-800 mt-1">
                        {pattern.name}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {pattern.sample_problems.length} problems
                    </div>
                  </div>
                  
                  {searchTerm && (
                    <div className="mt-2 text-xs text-gray-600 line-clamp-2">
                      {pattern.usage}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-2/3 p-6">
          {currentPattern && (
            <div className="space-y-6">
              {/* Pattern Header */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPatternColor(currentPattern.id)}`}>
                    Pattern {currentPattern.id}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {currentPattern.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {currentPattern.usage}
                </p>
              </div>

              {/* Data Structures */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-3">
                  Data Structures Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentPattern.data_structures.map((ds, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full border border-blue-200"
                    >
                      {ds}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Example */}
              {currentPattern.visual_example && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Visual Example
                  </h4>
                  <div className="text-gray-700">
                    <p className="mb-2">{currentPattern.visual_example.description}</p>
                    
                    {currentPattern.visual_example.array_example && (
                      <div className="bg-white p-3 rounded border font-mono text-sm">
                        Array: {currentPattern.visual_example.array_example}
                      </div>
                    )}
                    
                    {currentPattern.visual_example.cases && (
                      <div className="mt-3">
                        <p className="font-medium mb-2">Overlap Cases:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {currentPattern.visual_example.cases.map((case_item: string, index: number) => (
                            <li key={index}>{case_item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {currentPattern.visual_example.steps && (
                      <div className="mt-3">
                        <p className="font-medium mb-2">Algorithm Steps:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm">
                          {currentPattern.visual_example.steps.map((step: string, index: number) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Sample Problems */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Sample Problems ({currentPattern.sample_problems.length})
                </h4>
                <div className="grid gap-3">
                  {currentPattern.sample_problems.map((problem, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-gray-700 font-medium">{problem}</span>
                      <a
                        href={`https://leetcode.com/problems/${problem.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded transition-colors"
                      >
                        Solve →
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-6 border-t border-gray-200">
                <button
                  onClick={() => setSelectedPattern(Math.max(1, selectedPattern - 1))}
                  disabled={selectedPattern === 1}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white rounded transition-colors"
                >
                  ← Previous Pattern
                </button>
                
                <div className="text-sm text-gray-500 flex items-center">
                  Pattern {selectedPattern} of {patternsData.patterns.length}
                </div>
                
                <button
                  onClick={() => setSelectedPattern(Math.min(20, selectedPattern + 1))}
                  disabled={selectedPattern === 20}
                  className="px-4 py-2 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-300 text-white rounded transition-colors"
                >
                  Next Pattern →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}