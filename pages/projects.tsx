import Head from 'next/head'
import Projects from '../components/Projects';

const PageProjects = () => {
  return (
      <div className="space-y-14 lg:space-y-24">
        <Head>
          <title>Junio Horniche</title>
          <link rel="icon" href="../public/favicon.ico" />
        </Head>

        <main className="max-w-4xl mx-auto mt-16 antialiased">
          <Projects />
        </main>
      </div>
  )
}

export default PageProjects;