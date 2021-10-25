import React, { useState, useEffect } from "react";
import Article from "../../components/Article/Article";
import axios from "axios";
import XMLParser from "react-xml-parser";

import "./Logbook.css";

export const Logbook = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://sweb.ru/export/turbojournal/", {
        "Content-Type": "application/xml; charset=utf-8",
      })
      .then((res) => {
        const jsonDataFromXml = new XMLParser().parseFromString(res.data);
        setData({
          topic: jsonDataFromXml.getElementsByTagName("turbo:topic"),
          // content: jsonDataFromXml.getElementsByTagName('turbo:content')
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ul className="list-group">
        {data &&
          data.topic.map((item, index) => {
            return (
              <li className="list-group-item" key={index}>
                <Article
                  topic={item.value}
                  // content={content}
                  // handleClick={handleClick}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Logbook;
