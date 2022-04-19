import React from 'react';
import TableOfContents from '../TableOfContents/TableOfContents';
import './Layout.css';

// TODO
// based on user access show or hide edit and delete buttons

const Layout = (items) => {
  //https://www.w3schools.com/howto/howto_css_blog_layout.asp
  let razdel = null;

  return (
    <div className="container">
      <main>
        {items.lectures.map((props, index) => {
          if (props.razdel !== razdel) {
            razdel = props.razdel;
            return (
              <div key={index}>
                <h1 className="aaa" id={props.razdel}>
                  {props.razdel}
                </h1>
                <a href={props.id}>
                  <div className="card">
                    <h2 id={props.id}>{props.heading}</h2>
                    <h3 id={props.header}>{props.subheading}</h3>
                    <p>{props.abstract}</p>
                  </div>
                </a>
              </div>
            );
          } else {
            return (
              <a key={index} href={props.url}>
                <div className="card">
                  <h2 id={props.id}>{props.title}</h2>
                  <h3 id={props.header}>{props.description}</h3>
                  <p>{props.text}</p>
                </div>
              </a>
            );
          }
        })}
      </main>
      <TableOfContents />
    </div>
  );
};
export default Layout;
