import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ChevronRight, GraduationCap, Shield, Zap, CheckCircle } from "lucide-react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      setError("");
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (email === "demo@smartattend.com" && password === "demo123") {
        alert("Login successful! Redirecting to dashboard...");
        setEmail("");
        setPassword("");
      } else {
        setError("Invalid credentials. Please check your email and password.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Background Elements */}
      <div className="bg-grid"></div>
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>
      <div className="bg-orb bg-orb-3"></div>

      {/* Main Content Container */}
      <div className="login-container">
        {/* Login Card */}
        <div className="login-card">
          
          {/* Logo & Branding */}
          <div className="brand-section">
            <div className="logo-wrapper">
              <div className="logo-icon">
                <GraduationCap size={40} strokeWidth={2} />
                <div className="logo-badge">
                  <CheckCircle size={14} />
                </div>
              </div>
            </div>
            <h1 className="brand-title">SmartAttend</h1>
            <p className="brand-subtitle">Intelligent Attendance System</p>
          </div>

          {/* Welcome Section */}
          <div className="welcome-section">
            <h2 className="welcome-title">Welcome Back</h2>
            <p className="welcome-description">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="alert alert-error">
              <div className="alert-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <span>{error}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="login-form">
            
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <div className="input-group">
                <div className="input-icon">
                  <Mail size={20} />
                </div>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <div className="input-icon">
                  <Lock size={20} />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="form-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="checkbox-input"
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="spinner"></div>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ChevronRight size={20} className="btn-icon" />
                </>
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="demo-section">
            <div className="demo-header">
              <div className="demo-badge">Demo Access</div>
            </div>
            <div className="demo-content">
              <div className="demo-item">
                <span className="demo-label">Email:</span>
                <span className="demo-value">demo@smartattend.com</span>
              </div>
              <div className="demo-item">
                <span className="demo-label">Password:</span>
                <span className="demo-value">demo123</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="features-section">
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={18} />
              </div>
              <span className="feature-text">Lightning Fast</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={18} />
              </div>
              <span className="feature-text">Secure Access</span>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <GraduationCap size={18} />
              </div>
              <span className="feature-text">AI-Powered</span>
            </div>
          </div>

          {/* Footer */}
          <div className="login-footer">
            <div className="security-info">
              <Shield size={16} className="security-icon" />
              <span>Protected by 256-bit SSL encryption</span>
            </div>
            <p className="copyright">
              © 2026 SmartAttend. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}