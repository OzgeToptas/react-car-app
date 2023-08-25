import '@/styles/globals.scss'
import * as GlobalTypes from '../types/global';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}