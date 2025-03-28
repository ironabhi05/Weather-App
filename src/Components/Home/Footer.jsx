import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 pt-6 pb-2 sm:px-6 lg:px-8">
          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-100 pt-16 md:grid-cols-4 lg:grid-cols-6 dark:border-gray-800">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                About Us
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Company History
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Employee Handbook
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                Our Services
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Web Development
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Web Design
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Marketing
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Google Ads
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                Resources
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Online Guides
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Conference Notes
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Forum
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Downloads
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Upcoming Events
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                Helpful Links
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Support
                  </a>
                </li>

                <li>
                  <a
                    className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <span className="text-gray-700 transition group-hover:text-gray-700/75 dark:text-white dark:group-hover:text-white/75">
                      Live Chat
                    </span>

                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                Stay in Touch
              </p>

              <div className="mx-auto mt-8 max-w-md sm:ms-0">
                <p className="text-center leading-relaxed text-gray-500 ltr:sm:text-left rtl:sm:text-right dark:text-gray-400">
                It was great connecting with you at the event. Let’s stay in touch and explore potential collaborations in the future!
                </p>

                <form className="mt-4">
                  <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>

                    <input
                      className="w-full rounded-full border-gray-200 bg-white px-6 py-3 shadow-xs dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      type="email"
                      placeholder="Enter your email"
                    />

                    <button
                      className="block rounded-full bg-indigo-500 px-8 py-3 font-medium text-white transition hover:bg-indigo-600"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between dark:border-gray-800">
            <p className="text-center text-sm text-gray-500 sm:text-left dark:text-gray-400">
              Copyright &copy; 2025 <span className="text-red-400">EgaleCoders</span>. All rights reserved.
            </p>
            <p className="text-center text-sm text-gray-500 sm:text-left dark:text-gray-400">
              Developed By :- <span className="text-blue-600">Abhinav Mishra</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
