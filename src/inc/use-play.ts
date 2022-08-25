import { useState } from 'react';

const usePlay = (url: string) => {
  const [audio, setAudio] = useState(new Audio(url));

  const play = (newUrl = '') => {
    if (newUrl !== '' && url !== newUrl) {
      const newAudion = new Audio(newUrl);
      newAudion.autoplay = true;
      setAudio(newAudion);
    } else { audio.play(); }
  };

  return [play];
};

export default usePlay;
