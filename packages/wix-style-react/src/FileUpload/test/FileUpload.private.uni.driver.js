import { fileUploadDriverFactory as publicDriverFactory } from '../FileUpload.uni.driver';
import { dataHooks } from '../constants';
import { Simulate } from 'react-dom/test-utils';

export const fileUploadPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Can only be tested with react-dom/test-utils
    simulateUpload: async files => {
      const input = await base.$(`[data-hook="${dataHooks.input}"]`);

      Simulate.change(await input.getNative(), {
        target: { files },
      });
    },
  };
};
