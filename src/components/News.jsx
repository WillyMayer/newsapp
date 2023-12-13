import React from "react";
import { useState, useEffect } from "react";
import NewsList from "./NewsList";

//API Key = ede83083587041e086318882d4c217e0
const News = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=ede83083587041e086318882d4c217e0"
    )
      .then((res) => {
        return res.json(); //Transfor json data into javascript object
      })
      .then((data) => {
        setNews(data);
      });
  }, []);

  return (
    <div className="news">
      {news && <NewsList news={news} />}
    </div>
  );
};

export default News;
