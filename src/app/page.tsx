import Link from "next/link";
import { FEATURES } from "@/lib/constants";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Build. Polish. Launch your career.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              AI-powered tools to help you create professional resumes, optimize your LinkedIn profile, 
              and generate compelling GitHub profile READMEs that showcase your skills and experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/resume-builder"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="https://github.com/yourusername/CareerForge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                View on GitHub <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to advance your career
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Our AI-powered tools help you create professional content that stands out to recruiters and hiring managers.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <span className="text-2xl">{feature.icon}</span>
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Ready to transform your career?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              Join thousands of professionals who have already elevated their career prospects with CareerForge.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/resume-builder"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Start Building
              </Link>
              <Link
                href="/linkedin"
                className="rounded-md border border-gray-300 dark:border-gray-600 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Optimize LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Trusted by professionals worldwide
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Our tools have helped thousands of professionals land their dream jobs.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-gray-400/5 dark:bg-gray-600/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">Resumes Generated</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">10,000+</dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 dark:bg-gray-600/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">LinkedIn Profiles Optimized</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">5,000+</dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 dark:bg-gray-600/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">GitHub Profile READMEs Created</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">15,000+</dd>
              </div>
              <div className="flex flex-col bg-gray-400/5 dark:bg-gray-600/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">Success Rate</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">95%</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
