type Props = {
  title: string;
  index: number;
};

const MovieItem = ({ title, index }: Props) => {
  console.log(index);

  return (
    <li>
      {title}
      <button onClick={() => {}}>Delete</button>
    </li>
  );
};

export default MovieItem;
