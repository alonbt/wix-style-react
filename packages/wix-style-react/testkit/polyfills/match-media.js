import { register } from '../../src/common/match-media-register';

const install = () => {
  register();
};

const uninstall = () => {
  delete global.matchMedia;
};

export default { install, uninstall };
