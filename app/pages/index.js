import { Head, dynamic } from "blitz"

const DynamicShoppableVideo = dynamic(() => import("app/components/ShoppableVideo"), {
  ssr: false,
})

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Blitz App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <DynamicShoppableVideo />
      </main>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
export default Home
