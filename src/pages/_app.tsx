import type { AppType } from 'next/app';
import { Suspense, useState, useEffect } from 'react';

import Layout from '@/app/layout'

import { trpc } from '../utils/trpc';

function Loading() {
  return "Loading..."
}

const MyApp: AppType = ({ Component, pageProps }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return isLoaded && <Suspense fallback={<Loading />}><Layout><Component {...pageProps} /></Layout></Suspense>;
};

export default trpc.withTRPC(MyApp);