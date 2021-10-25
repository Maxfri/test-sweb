import React, { useState } from "react";
import axios from "axios";
import XMLParser from "react-xml-parser";

import "./Article.css";

const Article = ({ topic }) => {
  const [content, setContent] = useState();

  const handleClick = (value) => {
    axios
      .get("https://sweb.ru/export/turbojournal/", {
        "Content-Type": "application/xml; charset=utf-8",
      })
      .then((res) => {
        const jsonDataFromXml = new XMLParser().parseFromString(res.data);
        const articles = jsonDataFromXml.getElementsByTagName("item");
        articles.map((article) => {
          return article.children.map((item) => {
            return item.name === "turbo:topic" && item.value === value
              ? setContent(article.children[4].value)
              : null;
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const createContent = () => {
    return { __html: content };
  };

  return (
    <details>
      <summary onClick={() => handleClick(topic)}>{topic}</summary>
      <div
        dangerouslySetInnerHTML={createContent()}
        className="article-content"
      />
    </details>
  );
};

export default Article;
