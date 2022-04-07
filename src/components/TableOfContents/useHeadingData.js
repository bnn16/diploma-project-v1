import { useState, useEffect } from 'react';
import getNestedHeadings from './getNestedHeadings';

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h1, h2'));
    //we're shifting the array so we don't get the KTT and icon h1 tag
    headingElements.shift();

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

export default useHeadingsData;
