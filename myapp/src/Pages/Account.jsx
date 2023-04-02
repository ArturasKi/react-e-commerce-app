import { useState } from "react";
import "./scss/account.scss";

function Account() {
  const [labelEmail, setLabelEmail] = useState("");
  const [labelPassword, setLabelPassword] = useState("");

  const setEmailLabel = (e) => {
    if (e.target.value !== "") {
      setLabelEmail("Email");
    } else setLabelEmail("");
  };

  const setPasswordLabel = (e) => {
    if (e.target.value !== "") {
      setLabelPassword("Password");
    } else setLabelPassword("");
  };

  return (
    <div className="accountWrapper">
      <div className="accountWrapper__formBlock">
        <div className="accountWrapper__form">
          <div className="accountWrapper__formColumn">
            <div className="accountWrapper__title">Welcome back!</div>
            <div className="accountWrapper__formRow">
              <label>{labelEmail}</label>
              <input
                type="email"
                onChange={setEmailLabel}
                placeholder="Email"
              />
            </div>
            <div className="accountWrapper__formRow">
              <label>{labelPassword}</label>
              <input
                type="password"
                onChange={setPasswordLabel}
                placeholder="Password"
              />
            </div>
            <div className="accountWrapper__bottom">
              <button className="accountWrapper__btn">Login</button>
            </div>
          </div>
          <div className="accountWrapper__formColumn">
            <div className="accountWrapper__title">Hello there!</div>
            <div className="accountWrapper__formRow">
              <label>First name</label>
              <input />
            </div>
            <div className="accountWrapper__formRow">
              <label>Last name</label>
              <input />
            </div>
            <div className="accountWrapper__formRow">
              <label>Email</label>
              <input />
            </div>
            <div className="accountWrapper__formRow">
              <label>Password</label>
              <input />
            </div>
            <div className="accountWrapper__bottom">
              <button className="accountWrapper__btn">Create my account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
