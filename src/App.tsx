import LoginForm from "./features/login/login-form";

function App() {
  return (
    <>
      <div className="flex w-full h-screen">
        <h1 className="text-slate-300 hover:text-slate-500 text-5xl bg-cover">
          Das ist eine test!
        </h1>

        <div className="w-full flex items-center justify-center lg:w-1/2">
          <LoginForm />
        </div>

        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
          <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"></div>
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
        </div>
      </div>
    </>
  );
}

export default App;
