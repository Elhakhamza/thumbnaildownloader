import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Head>
        <title>Über Uns - Thumbnail Downloader</title>
        <meta
          name="description"
          content="Willkommen bei Thumbnail Downloader. Erfahren Sie mehr über unser Tool zum Herunterladen von YouTube-Thumbnails in höchster Qualität."
        />
        <meta name="keywords" content="Über uns, YouTube Thumbnail, Herunterladen, Kostenlos, HD, 4K" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-6">Über Uns</h1>
          <p className="text-lg text-gray-700 mb-4">
            Willkommen bei Thumbnail Downloader – Ihrem zuverlässigen Tool zum Herunterladen von YouTube-Thumbnails in höchster Qualität. Unsere Plattform wurde entwickelt, um Ihnen eine einfache, schnelle und kostenlose Möglichkeit zu bieten, die Thumbnails von YouTube-Videos herunterzuladen, egal ob in HD, 4K oder anderen Auflösungen.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Wir glauben daran, dass Kreativität und Effizienz Hand in Hand gehen. Egal, ob Sie ein Content Creator, ein Designer oder einfach ein Video-Enthusiast sind, unser Tool macht es Ihnen leicht, Thumbnails zu speichern, um diese für Vorschauen, Inspiration oder andere kreative Projekte zu nutzen.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Warum Thumbnail Downloader?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>Einfach zu verwenden: Fügen Sie einfach die URL des YouTube-Videos ein und klicken Sie auf „Thumbnail herunterladen“.</li>
            <li>Qualitätsoptionen: Laden Sie Thumbnails in verschiedenen Auflösungen, einschließlich HD und 4K, herunter.</li>
            <li>100 % kostenlos: Unser Service ist kostenlos und erfordert keine Anmeldung.</li>
            <li>Schnell und sicher: Wir stellen sicher, dass Ihre Daten sicher bleiben und bieten eine schnelle Benutzererfahrung.</li>
          </ul>
          <p className="text-lg text-gray-700 mb-4">
            Unser Ziel ist es, ein benutzerfreundliches und nützliches Tool für Menschen weltweit bereitzustellen. Wir arbeiten kontinuierlich daran, unsere Plattform zu verbessern und Ihre Bedürfnisse zu erfüllen.
          </p>
          <p className="text-lg text-gray-700">
            Vielen Dank, dass Sie Thumbnail Downloader nutzen. Sollten Sie Fragen, Feedback oder Vorschläge haben, zögern Sie nicht, uns zu kontaktieren!
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
