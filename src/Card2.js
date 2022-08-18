import React from "react";

const Card2 = ({ user }) => {
  const { name, phone, company, email, username, website, address } = user;

  return (
    <>
      <div className="card2">
        <div>
          <img
            src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
            alt="Avatar"
            className="img"
          ></img>
        </div>

        <div className="card2_content">
          <h2>{name}</h2>
          <p>
            <strong>Email: </strong> {email}
          </p>
          <p>
            <strong>Phone: </strong> {phone}
          </p>
          <p>
            <strong>Company: </strong> {company}
          </p>
          <p>
            <strong>Website: </strong> {website}
          </p>
          <p>
            <strong>Address: </strong> {address}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card2;
