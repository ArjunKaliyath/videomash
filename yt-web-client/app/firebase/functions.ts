import { httpsCallable } from 'firebase/functions';
import { functions } from './firebase';

type GenerateUploadUrlResponse = {
  url: string;
};

const generateUploadUrlFunction = httpsCallable(functions, 'generateUploadUrl');

export async function uploadVideo(file: File) {
  const response = await generateUploadUrlFunction({
    fileExtension: file.name.split('.').pop()
  });

  const { url } = response.data as GenerateUploadUrlResponse;

  //response?.data?.url
  // Upload the file to the signed URL
  const uploadResult = await fetch(url, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type,
    },
  });

  return uploadResult;
}

const getVideosFunction = httpsCallable(functions, 'getVideos');

export interface Video {
  id?: string,
  uid?: string,
  filename?: string,
  status?: 'processing' | 'processed',
  title?: string,
  description?: string  
}

export async function getVideos() {
  const response = await getVideosFunction();
  return response.data as Video[];
}