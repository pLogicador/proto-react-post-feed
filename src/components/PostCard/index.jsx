import "./styles.css";

export const PostCard = ({ title, body, cover, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>
        {id} {title}
      </h2>
      <p>{body}</p>
    </div>
  </div>
);
