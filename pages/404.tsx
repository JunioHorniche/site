import Head from 'next/head'
import Custom404 from '../components/404';

function Page404() {
  return (
      <div className="space-y-14 lg:space-y-24">
        <Head>
          <title>Junio Horniche</title>
          <link rel="icon" href="../public/favicon.ico" />
        </Head>

        <main className="max-w-4xl mx-auto mt-16 antialiased">
          <Custom404 />
        </main>
      </div>
  )
}

export default Page404;