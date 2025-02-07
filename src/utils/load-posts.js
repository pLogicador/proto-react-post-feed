export const loadPosts = async () => {
  const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");

  const [posts] = await Promise.all([postsResponse]);
  const postsJson = await posts.json();

  const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: `https://picsum.photos/600/400?random=${index}` };
  });

  return postsAndPhotos;
};
