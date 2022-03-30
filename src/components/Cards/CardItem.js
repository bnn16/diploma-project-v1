import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = (props) => {
  return (
    <div>
      <li className="cards__item">
        <Link
          style={{ 'text-decoration': 'none' }}
          to={props.path}
          className="cards__item__link"
        >
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              id="hover"
              className="cards__item__img"
              src={props.src}
              alt=""
            ></img>
          </figure>
          <div className="cards__item__info">
            <h5 id="hover" className="cards__item__text">
              {props.title}
            </h5>
            <p className="card_desc">{props.text}</p>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default CardItem;
