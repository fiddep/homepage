import React from "react";

import { bookType } from "../types";

import books from "../data/books.json";

const Books = props =>
  Object.keys(books).map(key => (
    <List title={key} list={books[key]} key={key} />
  ));

const List = props => {
  return (
    <>
      <h2 className="title">{props.title}</h2>
      <ul className="defaultListStyle">
        {props.list.map((props, i) => (
          <Card book={{ ...props }} key={i} />
        ))}
      </ul>
    </>
  );
};

const Card = ({ book }) => {
  const { href, label, dateCreated, status } = book;
  return (
    <li className="card">
      <h3>
        <a href={href}>{label}</a>
      </h3>
      <small>
        {dateCreated} &bull; {status}
      </small>
    </li>
  );
};

Card.propTypes = {
  book: bookType.isRequired
};

export default Books;
