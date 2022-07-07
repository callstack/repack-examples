import { AppRegistry, Platform } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ScriptManager, Script, Federated } from '@callstack/repack/client';
import { name as appName } from './app.json';
import App from './App';

const resolveURL = Federated.createURLResolver({
  containers: {
    app1: 'http://localhost:9000/[name][ext]',
    app2: 'http://localhost:9001/[name][ext]',
    module1: 'http://localhost:9002/[name][ext]',
  },
});

new ScriptManager({
  resolve: async (scriptId, caller) => {
    let url;
    if (caller === 'main') {
      url = Script.getDevServerURL(scriptId);
    } else {
      url = resolveURL(scriptId, caller);
    }

    if (!url) {
      throw new Error(`No url for ${scriptId} called by ${caller}`);
    }

    return {
      url,
      cache: false, // For development
      query: {
        platform: Platform.OS,
      },
    };
  },
});

AppRegistry.registerComponent(appName, () => App);
