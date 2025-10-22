'use client';

import { useState } from 'react';

interface Topic {
  id: string;
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  completed: boolean;
  problems: string[];
}

const DSA_TOPICS: Topic[] = [
  {
    id: 'arrays',
    name: 'Arrays',
    difficulty: 'Easy',
    completed: false,
    problems: ['Two Sum', 'Best Time to Buy and Sell Stock', 'Contains Duplicate']
  },
  {
    id: 'linked-lists',
    name: 'Linked Lists',
    difficulty: 'Easy',
    completed: false,
    problems: ['Reverse Linked List', 'Merge Two Sorted Lists', 'Linked List Cycle']
  },
  {
    id: 'stacks-queues',
    name: 'Stacks & Queues',
    difficulty: 'Medium',
    completed: false,
    problems: ['Valid Parentheses', 'Implement Queue using Stacks', 'Min Stack']
  },
  {
    id: 'trees',
    name: 'Binary Trees',
    difficulty: 'Medium',
    completed: false,
    problems: ['Maximum Depth of Binary Tree', 'Same Tree', 'Invert Binary Tree']
  },
  {
    id: 'graphs',
    name: 'Graphs',
    difficulty: 'Hard',
    completed: false,
    problems: ['Number of Islands', 'Clone Graph', 'Course Schedule']
  },
  {
    id: 'dynamic-programming',
    name: 'Dynamic Programming',
    difficulty: 'Hard',
    completed: false,
    problems: ['Climbing Stairs', 'House Robber', 'Longest Common Subsequence']
  }
];

export function DSATopics() {
  const [topics, setTopics] = useState<Topic[]>(DSA_TOPICS);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const toggleTopicCompletion = (topicId: string) => {
    setTopics(prev => 
      prev.map(topic => 
        topic.id === topicId 
          ? { ...topic, completed: !topic.completed }
          : topic
      )
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const completedCount = topics.filter(topic => topic.completed).length;
  const progressPercentage = (completedCount / topics.length) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">DSA Topics Tracker</h2>
        <div className="text-sm text-gray-600">
          {completedCount}/{topics.length} completed
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Overall Progress</span>
          <span className="text-sm font-semibold text-gray-800">{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
              topic.completed 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => setSelectedTopic(topic)}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{topic.name}</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleTopicCompletion(topic.id);
                }}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  topic.completed 
                    ? 'bg-green-500 border-green-500 text-white' 
                    : 'border-gray-300 hover:border-green-500'
                }`}
              >
                {topic.completed && (
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
            <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(topic.difficulty)}`}>
              {topic.difficulty}
            </span>
          </div>
        ))}
      </div>

      {/* Selected Topic Details */}
      {selectedTopic && (
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            {selectedTopic.name} - Key Problems
          </h3>
          <div className="grid gap-2">
            {selectedTopic.problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <span className="text-gray-700">{problem}</span>
                <a
                  href={`https://leetcode.com/problems/${problem.toLowerCase().replace(/\s+/g, '-')}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                >
                  Solve →
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}