const Profile = () => {
  return (
    <div className="profile__wrapper">
      <div className="profile__container">
        <div className="profile__info">
          <h2>시니어 맞춤</h2>
          <span>디지털 교육</span>
        </div>
        <div className="img__contatiner">
          <img
            className="img__contatiner--image"
            src="/assets/main_cover.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
