import Head from 'next/head'
import DernierMatch from './dernier_match'

import Navigation from '~/components/nav'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>A.S.C</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation num1={1} num2={3} />
      <div className="grid h-screen grid-cols-8 bg-[#470857]">
        <div className="col-span-1"></div>
        <div className="col-span-6 pt-10">
          <DernierMatch />
        </div>
        <div className="col-span-1" />
      </div>
    </div>
  )
}
