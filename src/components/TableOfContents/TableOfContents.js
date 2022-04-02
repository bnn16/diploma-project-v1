import React, { useState } from 'react';
import useIntersectionObserver from './IntersectionObserver.js';
import './TableOfContents.css';
import useHeadingsData from './useHeadingData.js';
import Headings from './Headings.js';

const TableOfContents = () => {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <nav className="navv" aria-label="Table of contents">
      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};
export default TableOfContents;
