'use client';

import { QueryClient, QueryClientProvider, hydrate, DehydratedState } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

interface ReactQueryProviderProps {
  children: ReactNode;
  dehydratedState?: DehydratedState;
}

export default function ReactQueryProvider({ children, dehydratedState }: ReactQueryProviderProps) {
  const [queryClient] = useState(() => new QueryClient());

  if (dehydratedState) {
    hydrate(queryClient, dehydratedState);
  }

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
