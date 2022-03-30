import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
  return (
    <div className="cards">
      <h1>Предмети</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://data.1freewallpapers.com/download/system-unit-computer-motherboard-technology-1440x1080.jpg"
              title="Компютърни архитектури"
              text="е предмет, в който се изучава всичко за процесори, дънни платки, захранване и др."
              label="KA"
              path="/ka"
            />
            <CardItem
              src="https://www.popsci.com/uploads/2020/10/08/2SBEMF6ECZE3XL46H36EQ4YM24.jpg?auto=webp&width=1440&height=1080"
              title="Запомнящи и периферни устройства"
              text="е предмет, в който се изучава всичко за запомнящите и периферните у-ва, включително и нови технологии."
              label="ZPU"
              path="/zpu"
            />
            <CardItem
              src="https://www.popsci.com/uploads/2021/08/19/home-router.jpg?auto=webp&width=1440&height=1080"
              title="Компютърни мрежи"
              text="е предмет, в който се изучава всичко за мрежите, ip адресиране и мрежови карти."
              label="KM"
              path="/km"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
