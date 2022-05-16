const Card = (props) => {
  const profile = props;
  return (
    <div className="github-profile" style={{ margin: "0.8rem" }}>
      <img
        src={profile.avatar_url}
        alt="github avatar"
        style={{ margin: "0.2rem" }}
      />
      <div className="info" style={{ margin: "1rem" }}>
        <div className="name">{profile.name}</div>
        <div className="company">{profile.company}</div>
      </div>
    </div>
  );
};
export default Card;
