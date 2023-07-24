import "./LoginSidebar.scss";

export function LoginSidebar() {
  return (
    <aside className="Login" id="sidebar-login">
      <form method="post">
        <div className="Login__container">
          <input
            type="text"
            placeholder="User/email"
            className="Login__input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="Login__input"
            required
          />
        </div>

        <div className="Login__forgot">
          <a href="">Lost your password?</a>
        </div>

        <label className="Login__remember">
          <input type="checkbox" /> Remember me
        </label>

        <input type="submit" className="Login__submit" value="Login" />

        <div className="Login__register">
          <span className="Login__register-text">New to the site?</span>

          <a href="/registration" className="Login__register-link">
            <span className="underline">Register here</span>
          </a>
        </div>
      </form>
    </aside>
  );
}
