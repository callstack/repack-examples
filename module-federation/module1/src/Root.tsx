import * as React from 'react';
import { Text as RNText } from 'react-native';

// eslint-disable-next-line import/no-unresolved
const Text = React.lazy(() => import('app1/Text'));

export default function Root() {
  return (
    <React.Suspense fallback={<RNText>Loading module1...</RNText>}>
      <Text>Module 1</Text>
    </React.Suspense>
  );
}
