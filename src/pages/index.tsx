import { useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';

// Dynamically import Header and Footer
const Header = dynamic(() => import('../components/Header'), { ssr: false });
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });

// Define a type for the thumbnails
type Thumbnail = {
  quality: string;
  url: string;
};

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnails, setThumbnails] = useState<Thumbnail[]>([]); // Explicitly define the type for thumbnails

  const handleGenerateThumbnail = () => {
    try {
      let videoId: string | null = ''; // Allow videoId to be null

      if (videoUrl.includes('youtu.be')) {
        videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0] || null;
      } else if (videoUrl.includes('youtube.com/watch')) {
        videoId = new URL(videoUrl).searchParams.get('v');
      } else {
        throw new Error('Ungültige YouTube-URL');
      }

      if (!videoId) {
        throw new Error('Ungültige YouTube-URL');
      }

      setThumbnails([
        { quality: 'Hohe Qualität Thumbnail', url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` },
        { quality: 'Mittlere Qualität Thumbnail', url: `https://img.youtube.com/vi/${videoId}/sddefault.jpg` },
        { quality: 'Standardqualität Thumbnail', url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` },
        { quality: 'Niedrige Qualität Thumbnail', url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` },
      ]);
    } catch (error) {
      alert('Bitte geben Sie eine gültige YouTube-URL ein');
    }
  };

  const handleDownload = async (url: string, filename: string) => {
    try {
      const proxyUrl = `/api/proxy?url=${encodeURIComponent(url)}`;
      const link = document.createElement('a');
      link.href = proxyUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      alert('Fehler beim Herunterladen des Thumbnails');
    }
  };

  return (
    <>
      <Head>
        <title>Thumbnail Downloader – YouTube-Thumbnails kostenlos herunterladen</title>
        <meta
          name="description"
          content="Kostenloser YouTube Thumbnail Downloader – Lade YouTube Thumbnails in HD, 4K & mehr schnell und einfach herunter. Jetzt URL eingeben & downloaden!"
        />
        <link rel="canonical" href="https://www.thumbnaildownloader.de/" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center bg-gray-100 px-4">
          <div className="text-center max-w-2xl mb-6 mt-6">
            <p className="text-gray-700 text-lg">
              Mit unserem Thumbnail Downloader kannst du YouTube-Thumbnails in HD, 4K oder jeder gewünschten Auflösung kostenlos herunterladen. Einfach die Video-URL einfügen, auf 'Thumbnail herunterladen' klicken und dein Bild sofort erhalten
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
            <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              YouTube Thumbnail Downloader
            </h1>
            <input
              type="text"
              className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="YouTube-Video-URL eingeben"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
            <button
              className="w-full bg-primary text-white py-2 rounded hover:bg-blue-600 transition-all"
              onClick={handleGenerateThumbnail}
            >
              Thumbnail Downloader
            </button>
          </div>
          {thumbnails.length > 0 && (
            <div className="mt-8 text-center">
              <h3 className="text-lg font-medium mb-4">Verfügbare Thumbnails:</h3>
              <div className="grid grid-cols-1 gap-4">
                {thumbnails.map((thumb, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="text-gray-700">{thumb.quality}</h4>
                    <Image
                      src={thumb.url}
                      alt={`${thumb.quality} Thumbnail`}
                      width={500}
                      height={300}
                      className="border rounded"
                      priority={index === 0}
                    />
                    <button
                      onClick={() => handleDownload(thumb.url, `thumbnail-${index + 1}.jpg`)}
                      className="mt-2 inline-block bg-secondary text-white py-2 px-4 rounded hover:bg-green-600 hover:text-white transition-all"
                    >
                      {thumb.quality} Downloader
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
