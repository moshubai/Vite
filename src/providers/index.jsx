import { QueryProvider } from './QueryProvider';

// import { ReduxProvider } from './ReduxProvider';

export const Providers = ({ children }) => {
  return (
    // <ReduxProvider>
    <QueryProvider>{children}</QueryProvider>
    // </ReduxProvider>
  );
};
