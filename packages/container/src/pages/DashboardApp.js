import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useDynamicScript from '../hooks/useDynamicScript';
import getEnv from '../utils/getEnv';
import getRemoteApp from '../utils/getRemoteApp';

const DashboardApp = () => {
  const ref = useRef(null);
  const history = useHistory();
  const dashboard = getEnv('dashboard');
  const { ready, failed } = useDynamicScript(dashboard);

  useEffect(() => {
    if (ready) {
      const remoteApp = getRemoteApp('dashboard', './DashboardApp');

      remoteApp()
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
          window.location.reload();
        });
    }
  }, [ready]);

  if (!ready && !failed) {
    return <div>Loading...</div>;
  }

  if (failed && !ready) {
    return <div>Error</div>;
  }

  return <div ref={ref} />;
};

export default DashboardApp;
