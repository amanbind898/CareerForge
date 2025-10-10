import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                CareerForge
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Build. Polish. Launch your career with AI-powered tools for resumes, LinkedIn profiles, and GitHub READMEs.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/github"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Tools
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/resume-builder"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link
                  href="/linkedin"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  LinkedIn Optimizer
                </Link>
              </li>
              <li>
                <Link
                  href="/github-readme"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  GitHub README
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/docs"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/contributing"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Contributing
                </Link>
              </li>
              <li>
                <Link
                  href="/github/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Report Issues
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} CareerForge. Built with ❤️ for the open-source community.
          </p>
        </div>
      </div>
    </footer>
  );
}
