export default function GitHubReadme() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            GitHub Profile README Generator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Create compelling profile README files that showcase your projects and skills on your GitHub profile page with AI-powered content generation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Generator Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Profile Information
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  About You
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Brief description about yourself and what you do..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Skills & Technologies
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="JavaScript, React, Node.js, Python, MongoDB..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Profile Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                  <option value="">Select profile type</option>
                  <option value="developer">Software Developer</option>
                  <option value="designer">UI/UX Designer</option>
                  <option value="data-scientist">Data Scientist</option>
                  <option value="devops">DevOps Engineer</option>
                  <option value="student">Student</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sections to Include
                </label>
                <div className="space-y-2">
                  {[
                    'About Me',
                    'Skills & Technologies',
                    'GitHub Stats',
                    'Recent Projects',
                    'Contact Information',
                    'Badges/Shields',
                    'Social Links',
                    'Current Learning'
                  ].map((feature) => (
                    <label key={feature} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        defaultChecked={['About Me', 'Skills & Technologies', 'GitHub Stats'].includes(feature)}
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Generate Profile README
              </button>
            </div>
          </div>

          {/* Templates & Examples */}
          <div className="space-y-8">
            {/* Template Selection */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Choose a Template
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Minimal', description: 'Clean and simple' },
                  { name: 'Detailed', description: 'Comprehensive sections' },
                  { name: 'Creative', description: 'Visual and engaging' },
                  { name: 'Professional', description: 'Business-focused' }
                ].map((template) => (
                  <div
                    key={template.name}
                    className="border-2 border-gray-200 dark:border-gray-600 rounded-lg p-4 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                  >
                    <h3 className="font-medium text-gray-900 dark:text-white">{template.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{template.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* README Sections */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Common Profile README Sections
              </h2>
              <div className="space-y-3">
                {[
                  { section: 'Header & Introduction', icon: '👋' },
                  { section: 'About Me', icon: '📝' },
                  { section: 'Skills & Tech Stack', icon: '⚡' },
                  { section: 'GitHub Statistics', icon: '📊' },
                  { section: 'Projects Showcase', icon: '🚀' },
                  { section: 'Contact & Social Links', icon: '📫' }
                ].map((item) => (
                  <div key={item.section} className="flex items-center space-x-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-gray-700 dark:text-gray-300">{item.section}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                💡 Pro Tips
              </h3>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li>• Use a welcoming header with your name</li>
                <li>• Include your current role and interests</li>
                <li>• Add GitHub stats and language badges</li>
                <li>• Showcase your best projects with links</li>
                <li>• Keep it updated with your latest work</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Profile README Preview
            </h2>
            <div className="flex space-x-2">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                Copy Markdown
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                Download
              </button>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 font-mono text-sm">
            <div className="text-gray-500 dark:text-gray-400">
              # Your Generated README will appear here...
              <br /><br />
              Fill out the form above and click {"Generate Profile README"} to see your custom profile README file.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
