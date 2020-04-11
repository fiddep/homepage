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

const withContentJson = () => (handler) => (req, res) => {
  res.setHeader("Content-Type", "application/json");
  return handler(req, res);
};

const controller = async (req, res) => {
  if (req.method === "GET") {
    const promises = data.map(async (site) => {
      let feed = await parser.parseURL("https://react.statuscode.com/rss");
      return { ...site, pubDate: feed.items[0].pubDate };
    });
    const resolvedData = await Promise.all(promises);
    res.statusCode = 200;
    res.end(JSON.stringify(resolvedData));
  }
};

export default compose(
  withCdnCache(30),
  withHttpCache(30),
  withContentJson()
)(controller);
