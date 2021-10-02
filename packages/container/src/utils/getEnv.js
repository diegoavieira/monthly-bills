import envs from '../envs';

const getEnv = (key) => envs[window.location.hostname][key];

export default getEnv;
