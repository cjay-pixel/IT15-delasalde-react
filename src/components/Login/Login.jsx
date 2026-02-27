import { useState } from "react";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        {/* LEFT PANEL */}
        <div className="auth-left">
          <div className="overlay">
            <h3>Capturing Moments,</h3>
            <p>Creating Memories</p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="auth-right">
          <h2>Create an account</h2>
          <p className="sub">Already have an account? Log in</p>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <input placeholder="First name" />
              <input placeholder="Last name" />
            </div>

            <input type="email" placeholder="Email" />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>

            <label className="terms">
              <input type="checkbox" />
              <span>
                I agree to <a href="#">Terms & Conditions</a>
              </span>
            </label>

            <button className="primary-btn">Create account</button>
          </form>

          <div className="divider">Or register with</div>

          <div className="socials">
            <button>Google</button>
            <button>Apple</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;