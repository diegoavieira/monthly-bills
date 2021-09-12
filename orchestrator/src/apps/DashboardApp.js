import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const mountPromise = import('dashboard/DashboardApp');

const DashboardApp = () => {
  const ref = useRef(null);
  const history = useHistory();
  const [errorLoading, setErrorLoading] = useState('');

  useEffect(() => {
    setErrorLoading('');

    mountPromise
      .then((res) => {
        const mount = res.default;

        const { onParentNavigate } = mount(ref.current, {
          initialPath: history.location.pathname,
          onNavigate: ({ pathname: nextPathname }) => {
            const { pathname } = history.location;

            if (pathname !== nextPathname) {
              history.push(nextPathname);
            }
          }
        });

        history.listen(onParentNavigate);
      })
      .catch(() => {
        setErrorLoading('Error Loading');
      });

    return () => {};
  }, []);

  return <div ref={ref}>{errorLoading}</div>;
};

export default DashboardApp;
