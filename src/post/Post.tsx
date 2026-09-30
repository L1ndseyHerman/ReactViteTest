import { useEffect, useState } from "react";

type PostType = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

const Post = ({ id }: { id: number }) => {
  const [data, setData] = useState<PostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch.");
        }

        return res.json();
      })
      .then((data: PostType) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Title: {data?.title}</h2>
      <p>Body: {data?.body}</p>
    </div>
  );
};

export default Post;
