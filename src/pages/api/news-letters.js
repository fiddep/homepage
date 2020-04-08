import "isomorphic-unfetch";
import data from "../../data/news-letters.json";

let Parser = require("rss-parser");
let parser = new Parser();

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const withCdnCache = (ttl = 1) => (handler) => (req, res) => {
  const previous = res.getHeader("Cache-Control");
  const header = `s-maxage=${ttl}, stale-while-revalidate`;
  const value = previous ? `${previous}, ${header}` : header;

  res.setHeader("Cache-Control", value);

  return handler(req, res);
};

const withHttpCache = (ttl = 60) => (handler) => (req, res) => {
  const previous = res.getHeader("Cache-Control");
  const header = `max-age=${ttl}`;
  const value = previous ? `${previous}, ${header}` : header;

  res.setHeader("Cache-Control", value);

  return handler(req, res);
};

const withContentJson = (handler) => (req, res) => {
  res.setHeader("Content-Type", "application/json");
  return handler(req, res);
};

const controller = async (req, res) => {
  if (req.method === "GET") {
    console.log("hej");
    let feed = await parser.parseURL("https://react.statuscode.com/rss");
    console.log(feed.items[0].pubDate);
    res.statusCode = 200;
    res.end(JSON.stringify(data));
  }
};

export default compose(
  withCdnCache(),
  withHttpCache(),
  withContentJson
)(controller);
