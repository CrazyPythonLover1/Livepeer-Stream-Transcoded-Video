import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import * as React from 'react';
import '@components/styles/globals.css'
// import { CreateAndViewAsset } from ''

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
  }),
});

export default function App({ Component, pageProps }) {
  return (
  <LivepeerConfig client={livepeerClient}>
      {/* <CreateAndViewAsset /> */}
    <Component {...pageProps} />
  </LivepeerConfig>
  )
}
