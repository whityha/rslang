import { useState } from 'react';

type StateType = HTMLAudioElement | false

const usePlay = (url: string = '') => {
  const [audio, setAudio] = useState<StateType>(url === '' ? false : new Audio(url));

  const play = (newUrl = '') => {
    if (newUrl !== '' && url !== newUrl) {
      const newAudion = new Audio(newUrl);
      newAudion.autoplay = true;
      setAudio(newAudion);
    } else if (audio !== false) audio.play();
  };

  return [play];
};

export default usePlay;
