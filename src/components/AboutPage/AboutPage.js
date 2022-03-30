import React from 'react';
import './AboutPage.css';

//https://www.youtube.com/watch?v=tlTdbc5byAs

const AboutPage = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://www.pngall.com/wp-content/uploads/2016/03/Book-PNG-2.png"
          alt=""
        />
        <h1 className="singlePostTitle"> About</h1>
      </div>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Изготвил : <b>Богдан Николов</b>
        </span>
      </div>
      <p>
        Информация, тук <br />
        Dummy text: Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default AboutPage;
