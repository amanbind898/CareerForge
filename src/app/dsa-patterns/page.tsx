'use client';

import { DSAPatternsViewer } from '@/components/DSAPatternsViewer';

export default function DSAPatternsPage() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-100">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            20 DSA Coding Patterns
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master problem-solving with 20 essential coding patterns that cover 90% of interview questions
          </p>
        </div>

        {/* Patterns Overview */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pattern-Based Learning Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">20</div>
              <div className="text-sm text-gray-600">Coding Patterns</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">150+</div>
              <div className="text-sm text-gray-600">Sample Problems</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">90%</div>
              <div className="text-sm text-gray-600">Interview Coverage</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-gray-600">Pattern Mastery</div>
            </div>
          </div>
          
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">🎯 Why Patterns?</h3>
              <p className="text-sm text-purple-700 mb-2">
                Learn to recognize problem patterns and apply proven solutions. This approach helps you solve new problems faster by identifying familiar patterns.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">📈 Faster Learning</h3>
              <p className="text-sm text-blue-700 mb-2">
                Instead of memorizing hundreds of problems, master 20 patterns that can be applied to solve most coding interview questions.
              </p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-gray-800 mb-3">🌟 Featured Patterns</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Sliding Window',
                'Two Pointers',
                'Fast & Slow Pointers',
                'Merge Intervals',
                'Cyclic Sort',
                'In-place Reversal',
                'BFS',
                'DFS',
                'Two Heaps',
                'Subsets',
                'Modified Binary Search',
                'Top K Elements',
                'K-way Merge',
                'Topological Sort',
                'Binary Tree Traversal',
                'Backtracking',
                'Dynamic Programming',
                'Greedy',
                'Union Find',
                'Trie'
              ].map((pattern, index) => (
                <span key={index} className="px-3 py-1 bg-white border border-purple-200 text-purple-800 text-xs rounded-full font-medium hover:bg-purple-100 transition-colors">
                  {pattern}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Coding Patterns Viewer */}
        <DSAPatternsViewer />

        {/* Learning Tips */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Use These Patterns</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border border-purple-200 rounded-lg">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-semibold text-gray-800 mb-2">Learn the Pattern</h3>
              <p className="text-sm text-gray-600">
                Understand the core concept, when to use it, and the typical data structures involved.
              </p>
            </div>
            <div className="p-4 border border-blue-200 rounded-lg">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-semibold text-gray-800 mb-2">Practice Problems</h3>
              <p className="text-sm text-gray-600">
                Solve the sample problems provided for each pattern to reinforce your understanding.
              </p>
            </div>
            <div className="p-4 border border-green-200 rounded-lg">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-semibold text-gray-800 mb-2">Apply & Adapt</h3>
              <p className="text-sm text-gray-600">
                Learn to recognize patterns in new problems and adapt the solution approach accordingly.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Practice Platforms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all duration-300"
            >
              <div className="font-semibold text-gray-800">LeetCode</div>
              <div className="text-sm text-gray-600">Practice Problems</div>
            </a>
            <a
              href="https://www.geeksforgeeks.org"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all duration-300"
            >
              <div className="font-semibold text-gray-800">GeeksforGeeks</div>
              <div className="text-sm text-gray-600">Pattern Tutorials</div>
            </a>
            <a
              href="https://www.hackerrank.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all duration-300"
            >
              <div className="font-semibold text-gray-800">HackerRank</div>
              <div className="text-sm text-gray-600">Interview Prep</div>
            </a>
            <a
              href="https://neetcode.io"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all duration-300"
            >
              <div className="font-semibold text-gray-800">NeetCode</div>
              <div className="text-sm text-gray-600">Pattern Practice</div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
