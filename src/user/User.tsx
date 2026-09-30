import { useEffect, useState } from "react";

type UserType = {
  name: string;
  email: string;
};

const User = ({ id }: { id: number }) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data: UserType) => setUser(data));
  }, [id]);

  if (!user) {
    return <p>loading...</p>;
  }

  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </>
  );
};

export default User;
