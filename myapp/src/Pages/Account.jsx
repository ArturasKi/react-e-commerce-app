import { useState } from "react";
import "./scss/account.scss";

function Account() {
  const [labelEmail, setLabelEmail] = useState("");

  const inputEmail = document.getElementById("email");

  const setLabel = () => {
    if (inputEmail === "") {
      return null
    }
    if (inputEmail !== "") {
      setLabelEmail('Email')
    }
  }

  return (
    <div className="accountWrapper">
      <div className="accountWrapper__formBlock">
        <div className="accountWrapper__form">
          <div className="accountWrapper__formRow">
            <div className="accountWrapper__signUpContent">
              <div className="accountWrapper__title">Welcome back!</div>
              <div className="accountWrapper__inputs">
                <label>{labelEmail}</label>
                <input onChange={setLabel} id="email" placeholder="Email" />
                <label>Password</label>
                <input />
              </div>
              <div className="accountWrapper__bottom">
                <button className="accountWrapper__btn">Login</button>
              </div>
            </div>
          </div>
          <div className="accountWrapper__signInForm">
            <div className="accountWrapper__signInContent">
              <div className="accountWrapper__title">Hello there!</div>
              <div className="accountWrapper__inputs">
                <label>First name</label>
                <input />
                <label>Last name</label>
                <input />
                <label>Email</label>
                <input />
                <label>Password</label>
                <input />
              </div>
              <div className="accountWrapper__bottom">
                <button className="accountWrapper__btn">
                  Create my account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
