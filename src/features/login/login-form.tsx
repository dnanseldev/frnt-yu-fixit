export default function LoginForm() {
  return (
    <div>
      <h1 className="text-5xl font-semibold">Welcome Back!</h1>
      <p>Please enter your details.</p>

      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Type your email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Type your password" />
        </div>

        <div>
          <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Rembember for 30 days</label>
          </div>
          <button>Forgot password?</button>
        </div>
      </div>
    </div>
  );
}
