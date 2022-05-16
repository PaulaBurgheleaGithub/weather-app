export default function View({ value, profile, onChange, onClick, error }) {
  return (
    <>
      <h1 className="app-title">GitHub Profile App</h1>
      <input
        onChange={onChange}
        type="text"
        placeholder="GitHub username"
        className="search-box"
      />
      <button onClick={onClick} className="search-btn">
        Search
      </button>
      {profile && (
        <div className="profile">
          <img src={profile.avatar} alt="avatar" />
          <article className="profile-info">
            <h3 className="name">Name:{profile.name} </h3>
            <p className="location"> Location:{profile.location} </p>
            <p className="company">Company:{profile.company} </p>
          </article>
        </div>
      )}
    </>
  );
}
