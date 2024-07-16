const AuthLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-[500px] mx-auto">{children}</div>
    </div>
  )
}

export default AuthLayout
