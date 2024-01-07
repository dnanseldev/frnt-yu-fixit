function LoginForm() {
  return (
    <div>
      <div>
        <h1>Login</h1>
        <div>
          <input type="email" />
          <label htmlFor="">Your Email</label>
        </div>

        <div>
          <input type="email" />
          <label htmlFor="">Your Email</label>
        </div>

        <div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="Remember Me"></label>
          </div>
          <span>Forgoten Password?</span>
        </div>
        <button type="submit">Login</button>
      </div>
    </div>
  );
}

export default LoginForm;
