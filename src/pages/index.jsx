import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Next Auth</title>
        <meta name="description" content="Next Auth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mb-14 mt-32 px-4 sm:mb-20 sm:px-4 md:px-4 xl:mb-8">
          <h1 className="mt-10 mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:mt-14 sm:mb-10 sm:text-6xl lg:text-7xl">
            Next.js Tailwind Authentication
          </h1>
          <p className="mb-10 max-w-screen-lg text-lg font-medium sm:mb-11 sm:text-2xl sm:leading-10">
            A utility-first CSS framework packed with classes like{' '}
            <code className="font-mono font-bold text-gray-900 ">flex</code>,{' '}
            <code className="font-mono font-bold text-gray-900 ">pt-4</code>,{' '}
            <code className="font-mono font-bold text-gray-900 ">
              text-center
            </code>{' '}
            and{' '}
            <code className="font-mono font-bold text-gray-900">rotate-90</code>{' '}
            that can be composed to build any design, directly in your markup.
          </p>
          <div className="flex flex-wrap space-y-4 text-center sm:space-y-0 sm:space-x-4">
            <a
              className="w-full flex-none rounded-xl border border-transparent bg-gray-900 py-3 px-6 text-lg font-semibold leading-6 text-white transition-colors duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-white sm:w-auto"
              href="https://github.com/ibqn/next-auth"
            >
              Get started
            </a>
            <button
              type="button"
              className="flex w-full flex-none items-center justify-center space-x-2 rounded-xl border border-gray-200 bg-gray-50 py-3 font-mono leading-6 text-gray-400 transition-colors duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white sm:w-auto sm:space-x-4 sm:px-6"
            >
              <span className="text-gray-900">
                <span
                  className="hidden text-gray-500 sm:inline"
                  aria-hidden="true"
                >
                  ${' '}
                </span>
                git clone git@github.com:ibqn/next-auth.git
              </span>
              <span className="sr-only">(click to copy to clipboard)</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
