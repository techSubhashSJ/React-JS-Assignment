import React, { useState } from "react";
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartOutlined,
  EditOutlined,
  DeleteFilled,
  HeartFilled,
} from "@ant-design/icons";
import { Modal } from "./Modal";

const Card = ({ user, handleDeleteUser }) => {
  const { id, name, phone, email, username, website } = user;

  const [userValues, setUserValues] = useState({
    userId: id,
    userName: name,
    userPhone: phone,
    userEmail: email,
    userUserName: username,
    userWebsite: website,
  });

  const { userId, userEmail, userName, userPhone, userUserName, userWebsite } =
    userValues;

  const [isLiked, setIsLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((show) => !show);
    document.body.style.overflow = "auto"
  };

  const handleSubmit = (values) => {
    setUserValues(values);
    setShowModal((show) => !show);
    document.body.style.overflow = "auto"
  };

  const handleOpenModel = () =>{
    document.body.style.overflow = "hidden"
    setShowModal(true)
  }

  return (
    <>
      <div className="card">
        <div className="card_header">
          <img
            src={`https://avatars.dicebear.com/v2/avataaars/${userUserName}.svg?options[mood][]=happy`}
            alt="Avatar"
            className="img"
          ></img>
        </div>

        <div className="card_middle">
          <h4>{userName}</h4>
          <span>
            <MailOutlined className="margin-right-10" /> {userEmail}
          </span>
          <span>
            <PhoneOutlined className="margin-right-10" /> {userPhone}
          </span>
          <span>
            <GlobalOutlined className="margin-right-10" /> {userWebsite}
          </span>
        </div>

        <div className="card_footer">
          <button className="side-bar buttonIcon">
            {!isLiked ? (
              <HeartOutlined
                className="heart"
                onClick={() => setIsLiked((like) => !like)}
              />
            ) : (
              <HeartFilled
                className="heart"
                onClick={() => setIsLiked((like) => !like)}
              />
            )}
          </button>
          <button className="side-bar buttonIcon">
            <EditOutlined
              className="card-action"
              onClick={handleOpenModel}
            />
          </button>
          <button className="buttonIcon">
            <DeleteFilled
              className="card-action"
              onClick={() => handleDeleteUser(userId)}
            />
          </button>
        </div>
      </div>
      {showModal && (
        <Modal
          setShowModal={handleShowModal}
          userValues={userValues}
          handleSubmitUser={handleSubmit}
        />
      )}
    </>
  );
};

export default Card;
