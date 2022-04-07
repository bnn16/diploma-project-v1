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
        <ul class="socials">
          <li>
            <a href="https://spge-bg.com/">
              <i class="fa-solid fa-school"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/bnn16">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bogdan-nikolov-0b34b71bb/">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p>
          copyright &copy;2022 <a href="#">BNN16</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
