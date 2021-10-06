import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useDynamicScript from '../hooks/useDynamicScript';
import getEnv from '../utils/getEnv';
import getRemoteApp from '../utils/getRemoteApp';

const AccountApp = () => {
  const ref = useRef(null);
  const history = useHistory();
  const account = getEnv('account');
  const { ready, failed } = useDynamicScript(account);

  useEffect(() => {
    if (ready) {
      const remoteApp = getRemoteApp('account', './AccountApp');

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

export default AccountApp;
