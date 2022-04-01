import React from 'react';
import TableOfContents from '../TableOfContents/TableOfContents';
import './Layout.css';
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
              <div className="card" key={index}>
                <h3>{props.razdel}</h3>
                <h2 id="initial-header">{props.description}</h2>
                <h3 id={props.title}>{props.title}</h3>
                <p>{props.text}</p>
              </div>
            );
          } else {
            return (
              <div className="card" key={index}>
                <h2 id="initial-header">{props.description}</h2>
                <h3 id={props.title}>{props.title}</h3>
                <p>{props.text}</p>
              </div>
            );
          }
        })}
      </main>
      <TableOfContents />
    </div>
  );
};
export default Layout;
