import { useLayoutEffect, useRef } from "react";

export default function VideoMSE() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    const video = videoRef.current!;
    const mediaSource = new MediaSource();
    video.src = URL.createObjectURL(mediaSource);
  }, []);

  return (
    <video ref={videoRef} controls autoPlay muted style={{ width: "100%" }} />
  );
}
