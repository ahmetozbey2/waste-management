'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';

import HomepageView from '../packages/homepage/view';

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Analytics />
      <HomepageView />;
    </QueryClientProvider>
  );
}
