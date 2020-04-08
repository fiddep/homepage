import { shape, string, oneOf } from "prop-types";

export const bookType = shape({
  label: string.isRequired,
  /** Link to where the book can be found/bought */
  href: string.isRequired,
  status: oneOf(["done", "wait list"]).isRequired,
  dateCreated: string.isRequired
});
