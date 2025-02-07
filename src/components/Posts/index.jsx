import { PostCard } from "../PostCard";
import "./styles.css";

export const Post = ({ posts }) => (
  <div className="Posts">
    {posts.map((post) => (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
      />
    ))}
  </div>
);
