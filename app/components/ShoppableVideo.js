import { useEffect } from "react"
import shoppable from "app/data"
import { Cloudinary } from "cloudinary-core"
import "cloudinary-video-player/dist/cld-video-player.min.js"
import "cloudinary-video-player/dist/cld-video-player.min.css"

const ShoppableVideo = () => {
  const cld = new Cloudinary({ cloud_name: "nefejames" })
  useEffect(() => {
    const videoplayer = cld
      .videoPlayer("video-player", {
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
      <h1>Blitz.js Shoppable Video</h1>
      <video controls autoPlay id="video-player"></video>
    </div>
  )
}

export default ShoppableVideo
