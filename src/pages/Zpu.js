import React from 'react';
import Layout from '../components/LayoutPage/Layout.js';
import { zpuLectures } from '../constants/zpuLectures.js';

const Zpu = () => {
  return (
    <div>
      <Layout lectures={zpuLectures} tems="Zapomnqshti i periferni u-va" />
    </div>
  );
};
export default Zpu;
