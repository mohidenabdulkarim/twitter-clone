import type { NextPage } from 'next'
import Head from 'next/head'
import { Sidebar } from '../components'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto min-h-screen max-w-[#1500] bg-black">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}

        {/* Modal  */}
      </main>
    </div>
  )
}

export default Home
