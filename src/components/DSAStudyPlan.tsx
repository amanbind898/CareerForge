'use client';

import { useState } from 'react';

interface StudyPlanItem {
  week: number;
  topic: string;
  description: string;
  resources: string[];
  completed: boolean;
}

const STUDY_PLAN: StudyPlanItem[] = [
  {
    week: 1,
    topic: 'Arrays & Strings',
    description: 'Master basic array operations, two-pointer technique, and string manipulation',
    resources: ['Two Sum', 'Valid Anagram', 'Group Anagrams'],
    completed: false
  },
  {
    week: 2,
    topic: 'Linked Lists',
    description: 'Understand pointer manipulation and linked list operations',
    resources: ['Reverse Linked List', 'Merge Two Sorted Lists', 'Remove Nth Node'],
    completed: false
  },
  {
    week: 3,
    topic: 'Stacks & Queues',
    description: 'Learn LIFO and FIFO data structures and their applications',
    resources: ['Valid Parentheses', 'Min Stack', 'Sliding Window Maximum'],
    completed: false
  },
  {
    week: 4,
    topic: 'Binary Trees',
    description: 'Tree traversal algorithms and basic tree operations',
    resources: ['Inorder Traversal', 'Maximum Depth', 'Path Sum'],
    completed: false
  },
  {
    week: 5,
    topic: 'Binary Search',
    description: 'Master the binary search algorithm and its variations',
    resources: ['Binary Search', 'Search in Rotated Array', 'Find Peak Element'],
    completed: false
  },
  {
    week: 6,
    topic: 'Graphs',
    description: 'Graph representation, BFS, DFS, and basic graph algorithms',
    resources: ['Number of Islands', 'Clone Graph', 'Course Schedule'],
    completed: false
  },
  {
    week: 7,
    topic: 'Dynamic Programming',
    description: 'Learn memoization and tabulation techniques',
    resources: ['Climbing Stairs', 'House Robber', 'Coin Change'],
    completed: false
  },
  {
    week: 8,
    topic: 'Advanced Topics',
    description: 'Trie, Union Find, and advanced algorithms',
    resources: ['Implement Trie', 'Number of Connected Components', 'Word Search II'],
    completed: false
  }
];

export function DSAStudyPlan() {
  const [studyPlan, setStudyPlan] = useState<StudyPlanItem[]>(STUDY_PLAN);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  const toggleWeekCompletion = (week: number) => {
    setStudyPlan(prev => 
      prev.map(item => 
        item.week === week 
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const toggleExpanded = (week: number) => {
    setExpandedWeek(expandedWeek === week ? null : week);
  };

  const completedWeeks = studyPlan.filter(item => item.completed).length;
  const progressPercentage = (completedWeeks / studyPlan.length) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">8-Week DSA Study Plan</h2>
        <div className="text-sm text-gray-600">
          Week {completedWeeks + 1} of {studyPlan.length}
        </div>
      </div>

      {/* Progress Overview */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-800">Study Progress</span>
          <span className="text-sm font-semibold text-blue-800">{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-blue-200 rounded-full h-3">
          <div 
            className="bg-blue-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-sm text-blue-700 mt-2">
          {completedWeeks === 0 
            ? "Start your DSA journey today!" 
            : `${completedWeeks} weeks completed. Keep going!`
          }
        </p>
      </div>

      {/* Study Plan Items */}
      <div className="space-y-4">
        {studyPlan.map((item) => (
          <div
            key={item.week}
            className={`border-2 rounded-lg transition-all duration-300 ${
              item.completed 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div 
              className="p-4 cursor-pointer"
              onClick={() => toggleExpanded(item.week)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWeekCompletion(item.week);
                    }}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      item.completed 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                  >
                    {item.completed && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Week {item.week}: {item.topic}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    expandedWeek === item.week ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedWeek === item.week && (
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <h4 className="font-medium text-gray-800 mb-3">Key Problems to Practice:</h4>
                <div className="grid gap-2">
                  {item.resources.map((resource, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-white rounded border"
                    >
                      <span className="text-gray-700">{resource}</span>
                      <a
                        href={`https://leetcode.com/problems/${resource.toLowerCase().replace(/\s+/g, '-')}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                      >
                        Practice →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Completion Message */}
      {completedWeeks === studyPlan.length && (
        <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg text-center">
          <div className="text-green-600 text-4xl mb-2">🎉</div>
          <h3 className="text-lg font-semibold text-green-800">Congratulations!</h3>
          <p className="text-green-700">You've completed the 8-week DSA study plan. You're ready for technical interviews!</p>
        </div>
      )}
    </div>
  );
}