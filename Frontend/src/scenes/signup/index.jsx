import React, { useEffect } from 'react';

function SignupPage() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach((element, index) => {
      const delay = index * 200;
      setTimeout(() => {
        element.classList.add('fade-in');
      }, delay);
    });
  }, []);

  return (
    <div className="login-pagee">
      <div className="login-containerr fade-in-element">
        <h1 className="login-titlee">Signup</h1>
        <form className="login-formm">
          <div className="form-groupp fade-in-element">
            <label htmlFor="username" className="form-labell">Username</label>
            <input type="text" id="username" className="form-inputt" />
          </div>
          <div className="form-groupp fade-in-element">
            <label htmlFor="email" className="form-labell">Email</label>
            <input type="email" id="email" className="form-inputt" />
          </div>
          <div className="form-groupp fade-in-element">
            <label htmlFor="password" className="form-labell">Password</label>
            <input type="password" id="password" className="form-inputt" />
          </div>
          <div className="form-buttons fade-in-element">
            <button type="submit" className="signup-buttonn">Sign Up</button>
            <button type="reset" className="reset-buttonn">Reset</button>
          </div>
          <div className="already-user">
            <a href="/loginn" className="signin-buttonn">Already a user? Sign in</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
