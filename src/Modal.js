import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";

export const Modal = ({ setShowModal, handleSubmitUser, userValues }) => {
  const [values, setValues] = useState({
    userId: userValues.userId,
    userName: userValues.userName,
    userPhone: userValues.userPhone,
    userEmail: userValues.userEmail,
    userUserName: userValues.userUserName,
    userWebsite: userValues.userWebsite,
  });

  const { userName, userEmail, userPhone, userWebsite } = values;

  const handleChange = (e) => {
    const value = e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userName &&
      userPhone &&
      userEmail &&
      userEmail.includes("@") &&
      userWebsite
    ) {
      handleSubmitUser(values);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal_header">
          <span>Basic Modal</span>
          <button onClick={setShowModal} className="modal-close">
            <CloseOutlined className="close-button" />
          </button>
        </div>

        <div className="modal_form">
          <form>
            <div className="input">
              <label htmlFor="name">Name: </label>
              <div>
                <input
                  type="text"
                  id="name"
                  value={userName}
                  name="userName"
                  onChange={handleChange}
                  style={!userName ? { border: "1px solid red" } : {}}
                />
                {userName === "" && (
                  <span className="warning">This field is required</span>
                )}
              </div>
            </div>

            <div className="input">
              <label htmlFor="email">Email: </label>
              <div>
                <input
                  type="email"
                  id="userEmail"
                  value={userEmail}
                  name="userEmail"
                  onChange={handleChange}
                  style={
                    !userEmail ||
                    !userEmail.includes("@") ||
                    !userEmail.includes(".")
                      ? { border: "1px solid red" }
                      : {}
                  }
                />
                {userEmail === "" && (
                  <span className="warning">This field is required</span>
                )}
                {userEmail &&
                  (!userEmail.includes("@") || !userEmail.includes(".")) && (
                    <span className="warning">Invalid email</span>
                  )}
              </div>
            </div>

            <div className="input">
              <label htmlFor="phone">Phone: </label>
              <div>
                <input
                  type="text"
                  id="phone"
                  value={userPhone}
                  name="userPhone"
                  onChange={handleChange}
                  style={!userPhone ? { border: "1px solid red" } : {}}
                />
                {userPhone === "" && (
                  <span className="warning">This field is required</span>
                )}
              </div>
            </div>

            <div className="input">
              <label htmlFor="website">Website: </label>
              <div>
                <input
                  type="text"
                  id="website"
                  value={userWebsite}
                  name="userWebsite"
                  onChange={handleChange}
                  style={!userWebsite ? { border: "1px solid red" } : {}}
                />
                {userWebsite === "" && (
                  <span className="warning">This field is required</span>
                )}
              </div>
            </div>
          </form>
        </div>

        <div className="modal_footer">
          <div className="float-right">
            <button className="cancel" onClick={setShowModal}>
              Cancel
            </button>
            <button
              type="submit"
              className="ok"
              value="Submit"
              onClick={handleSubmit}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
