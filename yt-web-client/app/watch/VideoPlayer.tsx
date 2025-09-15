'use client';

import { useSearchParams } from 'next/navigation';

export default function VideoPlayer() {
  const videoPrefix = 'https://storage.googleapis.com/agkaliyath-yt-processed-videos/';
  const videoSrc = useSearchParams().get('v');

  return (
    <video controls src={videoPrefix + videoSrc} />
  );
}
