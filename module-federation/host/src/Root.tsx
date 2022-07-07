import * as React from 'react';
import { Text } from 'react-native';

const App = React.lazy(() => import('./App'));

export function Root() {
  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <App />
    </React.Suspense>
  );
}
