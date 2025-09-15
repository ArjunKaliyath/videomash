import { Suspense } from 'react';
import VideoPlayer from './VideoPlayer';

export default function Watch() {
  return (
    <div>
      <h1>Watch Page</h1>
      <Suspense fallback={<div>Loading video...</div>}>
        <VideoPlayer />
      </Suspense>
    </div>
  );
}