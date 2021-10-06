import { useEffect, useState } from 'react';

const useDynamicScript = (url) => {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const hasElement = document.getElementById(url);

    if (!hasElement) {
      const element = document.createElement('script');

      element.src = url;
      element.id = url;
      element.type = 'text/javascript';
      element.async = true;

      setReady(false);
      setFailed(false);

      element.onload = () => {
        setReady(true);
      };

      element.onerror = () => {
        setReady(false);
        setFailed(true);
      };

      document.head.appendChild(element);
    } else {
      setReady(true);
    }
  }, [url]);

  return { ready, failed };
};

export default useDynamicScript;
