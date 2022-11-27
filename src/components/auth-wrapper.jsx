export const AuthWrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="mt-14 max-w-full sm:w-540">
          <div className="mb-8">
            <p className="pl-4 text-2xl font-semibold tracking-tight">
              amplify
            </p>
          </div>
          <div className="rounded bg-white py-14 px-16 shadow-form">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
