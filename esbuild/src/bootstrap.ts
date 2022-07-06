import {AppRegistry} from 'react-native';
import {ScriptManager, Script} from '@callstack/repack/client';
import App from './App';
import appConfig from '../app.json';

// eslint-disable-next-line no-new
new ScriptManager({
  resolve: async scriptId => {
    if (__DEV__) {
      return {
        url: Script.getDevServerURL(scriptId),
        cache: false,
      };
    }

    throw new Error(`Resolution for ${scriptId} was not provided`);
  },
});

AppRegistry.registerComponent(appConfig.name, () => App);
