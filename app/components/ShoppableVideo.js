import { useEffect } from "react"
import { Head, Script } from "blitz"
import shoppable from "app/data"
import { Cloudinary } from "cloudinary-core"

import "cloudinary-video-player/dist/cld-video-player.min.js"
import "cloudinary-video-player/dist/cld-video-player.min.css"

const ShoppableVideo = () => {
  const cld = new Cloudinary({ cloud_name: "nefejames" })
  useEffect(() => {
    const videoplayer = cld
      .videoPlayer("video-player", {
        cloud_name: "nefejames",
        controls: true,
      })
      .width(600)
    videoplayer.source(
      "https://res.cloudinary.com/nefejames/video/upload/v1657587018/Hackmamba/house%20videos/production_ID_4301618_gxbqe7.mp4",
      {
        shoppable: shoppable,
      }
    )
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Blitz App</title>
      </Head>
      <Script
        src="https://unpkg.com/cloudinary-video-player@1.9.0/dist/cld-video-player.min.js"
        strategy="beforeInteractive"
      />

      <h1>Blitz.js Shoppable Video</h1>
      <video controls autoPlay id="video-player"></video>
    </div>
  )
}

export default ShoppableVideo
