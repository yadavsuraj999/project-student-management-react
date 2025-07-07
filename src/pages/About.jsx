const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br pt-40 from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-8 shadow-lg">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              About EmpowerHR
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming organizational excellence through innovative employee
            management solutions that put your people first.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="backdrop-blur-sm bg-gray-800/80 border border-gray-700 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Our Platform</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              EmpowerHR is a comprehensive employee management platform that
              revolutionizes how organizations nurture their workforce. From
              seamless onboarding experiences to advanced performance analytics,
              we centralize every HR touchpoint with intuitive, powerful tools
              designed for the modern workplace.
            </p>
            <div className="flex items-center text-blue-400 font-semibold cursor-pointer">
              <span>Discover our capabilities</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-6">
            <div className="backdrop-blur-sm bg-gradient-to-br from-blue-900/80 to-blue-800/60 border border-blue-700/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-300">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To empower organizations worldwide with innovative HR technology
                that drives productivity, accelerates growth, and creates
                exceptional employee experiences that inspire success.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-gradient-to-br from-indigo-900/80 to-purple-900/60 border border-indigo-700/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-indigo-300">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To become the global standard for employee management solutions,
                pioneering the future of workplace technology through continuous
                innovation and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose EmpowerHR?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Unlock a suite of powerful features tailored to simplify HR workflows,
            boost engagement, and streamline operations.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-blue-400 bg-gray-700 rounded-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                ),
                title: "Intuitive Dashboard",
                desc: "Get a clear overview of your workforce with real-time analytics and insights.",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-indigo-400 bg-gray-700 rounded-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3"
                    />
                  </svg>
                ),
                title: "Automated Workflows",
                desc: "Simplify routine tasks with smart automation to save time and reduce errors.",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-purple-400 bg-gray-700 rounded-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 01-8 0"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14v7"
                    />
                  </svg>
                ),
                title: "Employee Self-Service",
                desc: "Empower employees to manage their profiles, leave requests, and more.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-gray-800/70 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
