import {useEffect, useState} from 'react';


// From https://medium.com/@ttennant/react-inline-styles-and-media-queries-using-a-custom-react-hook-e76fa9ec89f6

const useMediaQuery = (query) => {
  if (typeof window == "undefined") return;

  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  return matches;
};

export default useMediaQuery;