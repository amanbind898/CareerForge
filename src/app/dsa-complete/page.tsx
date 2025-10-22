'use client';

import { useState } from 'react';
import { DSAViewer } from '@/components/DSAViewer';
import { DSATopics } from '@/components/DSATopics';
import { DSAStudyPlan } from '@/components/DSAStudyPlan';

export default function DSACompletePage() {
  const [selectedPDF, setSelectedPDF] = useState<string>('DSA sheet.pdf');

  const dsaResources = [
    {
      id: 'dsa-sheet',
      title: 'Complete DSA Reference Sheet',
      filename: 'DSA sheet.pdf',
      description: 'Structured, comprehensive, results-driven guide with 200+ problems covering all major DSA topics',
      topics: ['Arrays', 'Binary Search', 'Sorting', 'Hashing', 'Linked Lists', 'Stacks & Queues', 'Heaps', 'Recursion', 'Trees', 'Graphs', 'Dynamic Programming', 'Math']
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Complete DSA Learning
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master Data Structures and Algorithms with comprehensive topic-wise learning, study plans, and 200+ practice problems
          </p>
        </div>

        {/* DSA Sheet Overview */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Complete DSA Reference Sheet
            </h3>
            <p className="text-gray-600 mb-4">
              Structured, comprehensive, results-driven guide with 200+ problems covering all major DSA topics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {dsaResources[0].topics.map((topic, index) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-blue-800 font-medium text-sm">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Overview */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Complete DSA Learning System</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">200+</div>
              <div className="text-sm text-gray-600">Practice Problems</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">12</div>
              <div className="text-sm text-gray-600">Core Topics</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">8</div>
              <div className="text-sm text-gray-600">Week Study Plan</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-gray-600">Interview Ready</div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">📚 What You'll Learn</h3>
            <p className="text-sm text-blue-700 mb-3">Comprehensive topic-wise learning with detailed explanations, code examples, and practice problems</p>
            <div className="flex flex-wrap gap-2">
              {['Arrays', 'Binary Search', 'Sorting', 'Hashing', 'Linked Lists', 'Stacks & Queues', 'Heaps', 'Recursion', 'Trees', 'Graphs', 'Dynamic Programming', 'Math'].map((topic, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* DSA Study Plan */}
        <DSAStudyPlan />

        {/* DSA Topics Tracker */}
        <div className="mt-8">
          <DSATopics />
        </div>

        {/* Content Viewer */}
        <div className="mt-8">
          <DSAViewer selectedPDF={selectedPDF} />
        </div>

        {/* Quick Links */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Practice Platforms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              <div className="font-semibold text-gray-800">LeetCode</div>
              <div className="text-sm text-gray-600">Practice Problems</div>
            </a>
            <a
              href="https://www.geeksforgeeks.org"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              <div className="font-semibold text-gray-800">GeeksforGeeks</div>
              <div className="text-sm text-gray-600">Tutorials & Articles</div>
            </a>
            <a
              href="https://www.hackerrank.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              <div className="font-semibold text-gray-800">HackerRank</div>
              <div className="text-sm text-gray-600">Coding Challenges</div>
            </a>
            <a
              href="https://codeforces.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              <div className="font-semibold text-gray-800">Codeforces</div>
              <div className="text-sm text-gray-600">Competitive Programming</div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
