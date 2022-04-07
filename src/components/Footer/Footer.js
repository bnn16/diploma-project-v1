import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer__content">
        <h3>КТТ book</h3>
        <p>
          KTT Book е сайт направен за учениците на СПГЕ Джон Атанасов за
          подготовка за ДКИ по специалност КТТ.
        </p>
        <ul className="socials">
          <li>
            <a href="https://spge-bg.com/">
              <i className="fa-solid fa-school"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/bnn16">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bogdan-nikolov-0b34b71bb/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy;2022 <a href="https://github.com/bnn16">BNN16</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
