import * as React from 'react';
import { Text } from 'react-native';

// @ts-ignore
import Module1 from 'module1/Root.js'; // eslint-disable-line import/no-unresolved

export default function App() {
  return (
    <>
      <Text>App 1</Text>
      <React.Suspense fallback={<Text>Loading module1...</Text>}>
        <Module1 />
      </React.Suspense>
    </>
  );
}
