import React from 'react';
import { kmLectures } from '../constants/kmLectures.js';
import Layout from '../components/LayoutPage/Layout.js';

const Km = () => {
  return (
    <div>
      <Layout lectures={kmLectures} tems="Computer Networks" />
    </div>
  );
};
export default Km;
