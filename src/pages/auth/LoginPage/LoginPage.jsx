// src/pages/auth/LoginPage/LoginPage.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  // State lar (boshida BO'SH)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Validatsiya funksiyalari
  const validateEmail = (emailValue) => {
    if (!emailValue) {
      setEmailError("Email address is required");
      return false;
    }
    if (!emailValue.includes("@")) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    if (!emailValue.includes(".")) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (passwordValue) => {
    if (!passwordValue) {
      setPasswordError("Password is required");
      return false;
    }
    if (passwordValue.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  // Input o'zgarishlar
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
    setPasswordError("");
  };

  const handleEmailBlur = () => {
    validateEmail(email);
  };

  const handlePasswordBlur = () => {
    validatePassword(password);
  };

  // Submit hodisasi
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validatsiya
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    setIsLoading(true);
    setError("");

    // Backend simulyatsiyasi
    setTimeout(() => {
      // MUVAFFAQIYATLI LOGIN MA'LUMOTLARI:
      // email: "test@fluid.com"
      // password: "123456"

      if (email === "test@fluid.com" && password === "123456") {
        // Muvaffaqiyatli login
        console.log("Login successful!");
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userEmail", email);

        if (rememberMe) {
          localStorage.setItem("savedEmail", email);
          localStorage.setItem("rememberMe", "true");
        } else {
          localStorage.removeItem("savedEmail");
          localStorage.removeItem("rememberMe");
        }

        navigate("/chat");
      } else {
        setError("Invalid email or password. Please try again.");
        setIsLoading(false);
      }
    }, 1500);
  };

  // Social login
  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("Google login clicked");
      setIsLoading(false);
    }, 1000);
  };

  const handleAppleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("Apple login clicked");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="login-logo">
        <img src="/images/svg/fluid-logo.svg" alt="logo fluid" />
        <span>FLUID</span>
      </div>

      <h3>Welcome back to your workspace</h3>
      <p>Enter your credentials to access your curated focus sanctuary.</p>

      <div className="login-card">
        {error && (
          <div className="failed-message">
            <div className="failed-icon">
              <img src="/images/svg/failed-red.svg" alt="failed icon" />
              <div className="failed-title">
                <span>Authentication failed</span>
                <p>{error}</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <h5>Email address</h5>
          <div className={`login-email ${emailError ? "input-error" : ""}`}>
            <img
              src="/images/svg/email-icon.svg"
              alt="email icon"
              width={16}
              height={13}
            />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              placeholder="Enter your email address"
              disabled={isLoading}
            />
          </div>
          {emailError && <div className="error-text">{emailError}</div>}

          <div className="login-forgot-password">
            <h5>Password</h5>
            <Link to={"/auth/forgot-password"}>Forgot password?</Link>
          </div>

          <div
            className={`login-password ${passwordError ? "input-error" : ""}`}
          >
            <img
              src="/images/svg/lock-red.svg"
              alt="lock icon"
              width={13}
              height={17}
            />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              placeholder="Enter your password"
              disabled={isLoading}
            />
            <img
              src="/images/svg/password-eye.svg"
              alt="eye off"
              width={18}
              height={16}
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            />
          </div>
          {passwordError && <div className="error-text">{passwordError}</div>}

          <div className="login-check">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isLoading}
            />
            <p>Keep me logged in for 30 days</p>
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <img
                  src="/images/svg/login-loading.svg"
                  alt="loading"
                  width={20}
                  height={29}
                  className="spinning"
                />
                <span>Authenticating...</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>

        <div className="or-countinue-with">
          <div></div>
          <p>or continue with</p>
          <div></div>
        </div>

        <div className="google-apple">
          <div className="login-google" onClick={handleGoogleLogin}>
            <img
              src="/images/svg/login-google.svg"
              alt="google icon"
              width={16}
              height={16}
            />
            <span>Google</span>
          </div>
          <div className="login-apple" onClick={handleAppleLogin}>
            <img
              src="/images/svg/login-apple.svg"
              alt="apple icon"
              width={16}
              height={16}
            />
            <span>Apple</span>
          </div>
        </div>
      </div>

      <p className="login-create-account">
        Don't have an account yet?{" "}
        <Link to="/auth/register">Create an account</Link>
      </p>

      <div className="three-a">
        <Link to="#">Privacy Policy</Link>
        <Link to="#">Terms of Service</Link>
        <Link to="#">System Status</Link>
      </div>
    </div>
  );
}

export default LoginPage;
