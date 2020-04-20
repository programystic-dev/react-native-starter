import 'react-native';

declare module 'react-native' {
  interface ViewProps {
    class?: string | object | undefined;
  }
}
