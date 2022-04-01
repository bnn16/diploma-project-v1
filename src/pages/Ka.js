import React from 'react';
import Layout from '../components/LayoutPage/Layout';
import { kaLecturesPart1 } from '../constants/kaLecturesPart1.js';

const Ka = () => {
  return (
    <div>
      <Layout lectures={kaLecturesPart1} tems="Komp architecture" />
    </div>
  );
};
export default Ka;
