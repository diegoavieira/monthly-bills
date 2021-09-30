import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useDynamicScript from '../hooks/useDynamicScript';
import loadRemoteApp from '../utils/loadRemoteApp';
import environments from '../environments.json';

const DashboardApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  const [ready, failed] = useDynamicScript(environments[window.location.hostname].dashboard);

  useEffect(() => {
    if (ready) {
      const remoteApp = loadRemoteApp('dashboard', './DashboardApp');

      remoteApp().then((res) => {
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
