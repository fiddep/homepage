import React from "react";

const NewsLetters = (props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const run = async () => {
      setIsLoading(true);
      const data = await fetch("/api/news-letters").then((res) => res.json());
      setData(data);
      setIsLoading(false);
    };
    run();
  }, []);

  return <List title="News Letters" list={data} />;
};

const List = (props) => {
  return (
    <>
      <h2 className="title">{props.title}</h2>
      <ul className="defaultListStyle">
        {props.list.map((props, i) => (
          <Card item={{ ...props }} key={i} />
        ))}
      </ul>
    </>
  );
};

const Card = ({ item }) => {
  const { href, label, pubDate } = item;

  return (
    <li className="card">
      <h3>
        <a href={href}>{label}</a>
      </h3>

      <small>
        <b>Updated:</b> {new Date(pubDate).toLocaleDateString("sv-se")}
      </small>
    </li>
  );
};

export default NewsLetters;
