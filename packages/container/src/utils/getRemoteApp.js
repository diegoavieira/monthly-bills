/* eslint-disable no-undef */

const getRemoteApp = (scope, module) => async () => {
  await __webpack_init_sharing__('default');

  const container = window[scope];

  await container.init(__webpack_share_scopes__.default);

  const factory = await window[scope].get(module);
  const Module = factory();

  return Module;
};

export default getRemoteApp;
