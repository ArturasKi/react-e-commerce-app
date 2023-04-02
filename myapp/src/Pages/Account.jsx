import { useState } from "react";
import "./scss/account.scss";

function Account() {
  const [labelEmail, setLabelEmail] = useState("");
  const [labelPassword, setLabelPassword] = useState("");
  const [labelFirstName, setLabelFirstName] = useState("");
  const [labelLastName, setLabelLastName] = useState("");
  const [labelEmailReg, setLabelEmailReg] = useState("");
  const [labelPasswordReg, setLabelPasswordReg] = useState("");

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

  const changeFirstNameLabel = (e) => {
    if (e.target.value !== "") {
      setLabelFirstName("First name");
    } else setLabelFirstName("");
  };

  const changeLastNameLabel = (e) => {
    if (e.target.value !== "") {
      setLabelLastName("Last name");
    } else setLabelLastName("");
  };

  const changeEmailRegLabel = (e) => {
    if (e.target.value !== "") {
      setLabelEmailReg("Email");
    } else setLabelEmailReg("");
  };

  const changePasswordRegLabel = (e) => {
    if (e.target.value !== "") {
      setLabelPasswordReg("Password");
    } else setLabelPasswordReg("");
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
              <label>{labelFirstName}</label>
              <input onChange={changeFirstNameLabel} placeholder="First name" />
            </div>
            <div className="accountWrapper__formRow">
              <label>{labelLastName}</label>
              <input onChange={changeLastNameLabel} placeholder="Last name" />
            </div>
            <div className="accountWrapper__formRow">
              <label>{labelEmailReg}</label>
              <input onChange={changeEmailRegLabel} placeholder="Email" />
            </div>
            <div className="accountWrapper__formRow">
              <label>{labelPasswordReg}</label>
              <input onChange={changePasswordRegLabel} placeholder="Password" />
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
