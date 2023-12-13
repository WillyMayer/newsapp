import React from "react";

const NewsList = (props) => {
  const news = props.news;
  const articles = news.articles;
  console.log(articles);
  return (
    <div className="news-list my-5">
      <div className="news-msg">
        <h1 className="text-6xl font-bold text-center">Last News!</h1>
      </div>
      <div className="news-articles flex flex-wrap place-content-center ">
        {articles.map((article) => (
          <li className="article-item list-none p-4 w-2/5 h-50 mx-10 my-10 shadow-2xl ">
            <img src={article.urlToImage} alt={article.description} className="border-2 border-gray-300"/>
            <h2 className="text-3xl font-bold font my-3">{article.title}</h2>
            <h3 className="italic">{article.source.name}</h3>
            <p>{article.description}</p>
            <a href={article.url} className="text-blue-400 font-bold">More Info</a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
