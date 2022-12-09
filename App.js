
import { Navigation } from './components/Navigation';
import {Fragment} from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1 } },
});

export default function App() {
  
  return (
    <Fragment>
    <QueryClientProvider client={queryClient}>
    <Navigation />
    </QueryClientProvider>
    </Fragment>
  );
}