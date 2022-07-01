import {AppRegistry} from 'react-native';
import {ScriptManager, Script} from '@callstack/repack/client';
import App from './App';
import {name as appName, localChunks} from '../app.json';

// eslint-disable-next-line no-new
new ScriptManager({
  resolve: async scriptId => {
    if (__DEV__) {
      return {
        url: Script.getDevServerURL(scriptId),
        cache: false,
      };
    }

    if (localChunks.includes(scriptId)) {
      return {
        url: Script.getFileSystemURL(scriptId),
      };
    }

    throw new Error(`Resolution for ${scriptId} was not provided`);
  },
});

AppRegistry.registerComponent(appName, () => App);
