import React from "react";

const NewsList = (props) => {
  const news = props.news;
  const articles = news.articles;
  console.log(articles);
  return (
    <div className="news-list my-5">
      <div className="news-msg py-3">
        <h1 className="text-6xl font-bold text-center font-playfair-display uppercase underline">Last News!</h1>
      </div>
      <div className="news-articles flex flex-wrap place-content-center ">
        <ul className="flex flex-wrap justify-center">
          {articles.map((article) => (
            <li className="article-item list-none md:w-4/5 lg:w-6/12">
              <div className="div-article-item border-2 border-gray-200 p-4 h-auto mx-8 my-8 shadow-2xl">
                <img
                  src={article.urlToImage}
                  alt={article.description}
                  className="border-2 border-gray-300"
                />
                <h2 className="text-3xl font-bold font my-3">
                  {article.title}
                </h2>
                <h3 className="italic">{article.source.name}</h3>
                <p>{article.description}</p>
                <a href={article.url} className="text-blue-400 font-bold">
                  More Info
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsList;
