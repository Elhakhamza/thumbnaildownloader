import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Datenschutzerklärung - Thumbnail Downloader</title>
        <meta
          name="description"
          content="Erfahren Sie mehr über die Datenschutzerklärung von Thumbnail Downloader. Wir schützen Ihre Privatsphäre und erklären, wie Ihre Daten verarbeitet werden."
        />
        <meta name="keywords" content="Datenschutz, YouTube Thumbnail, Herunterladen, Sicherheit, Datenverarbeitung" />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
        <p className="text-lg text-gray-700 mb-4">
          Der Schutz Ihrer Privatsphäre ist uns wichtig. In dieser Datenschutzerklärung erklären wir, wie wir Ihre persönlichen Daten erfassen, verwenden und schützen, wenn Sie unsere Website Thumbnail Downloader nutzen.
        </p>
        <h2 className="text-2xl font-semibold mb-4">1. Erhobene Daten</h2>
        <p className="text-lg text-gray-700 mb-4">
          Wir erfassen keine personenbezogenen Daten von unseren Nutzern. Bei der Nutzung unserer Dienste werden keine Informationen wie Name, E-Mail-Adresse oder andere persönliche Angaben gespeichert.
        </p>
        <h2 className="text-2xl font-semibold mb-4">2. Automatische Datenerfassung</h2>
        <p className="text-lg text-gray-700 mb-4">
          Wir verwenden möglicherweise Analysedienste, um anonyme Daten zu sammeln, darunter:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li>Browsertyp und -version</li>
          <li>Besuchte Seiten und Nutzungsdauer</li>
          <li>Herkunftsland</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          Diese Daten werden ausschließlich zur Verbesserung unserer Website verwendet und enthalten keine persönlich identifizierbaren Informationen.
        </p>
        <h2 className="text-2xl font-semibold mb-4">3. Cookies</h2>
        <p className="text-lg text-gray-700 mb-4">
          Unsere Website kann Cookies verwenden, um die Benutzererfahrung zu verbessern. Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Sie können Cookies jederzeit in den Einstellungen Ihres Browsers deaktivieren.
        </p>
        <h2 className="text-2xl font-semibold mb-4">4. Datensicherheit</h2>
        <p className="text-lg text-gray-700 mb-4">
          Wir setzen angemessene technische Maßnahmen ein, um sicherzustellen, dass alle Informationen, die Sie auf unserer Website bereitstellen, sicher sind. Beachten Sie jedoch, dass die Übertragung von Daten über das Internet nie vollständig sicher ist.
        </p>
        <h2 className="text-2xl font-semibold mb-4">5. Drittanbieter</h2>
        <p className="text-lg text-gray-700 mb-4">
          Unsere Website enthält keine eingebetteten Inhalte von Drittanbietern, die persönliche Daten sammeln. Allerdings könnten Analyse-Tools wie Google Analytics verwendet werden, die anonyme Nutzungsstatistiken generieren.
        </p>
        <h2 className="text-2xl font-semibold mb-4">6. Links zu anderen Websites</h2>
        <p className="text-lg text-gray-700 mb-4">
          Unsere Website kann Links zu externen Websites enthalten. Bitte beachten Sie, dass wir keine Kontrolle über die Datenschutzpraktiken dieser Drittanbieter haben und für deren Inhalte nicht verantwortlich sind.
        </p>
        <h2 className="text-2xl font-semibold mb-4">7. Änderungen der Datenschutzerklärung</h2>
        <p className="text-lg text-gray-700 mb-4">
          Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu aktualisieren. Änderungen werden auf dieser Seite veröffentlicht. Bitte überprüfen Sie die Datenschutzerklärung regelmäßig, um über Änderungen informiert zu bleiben.
        </p>
        <h2 className="text-2xl font-semibold mb-4">8. Kontakt</h2>
        <p className="text-lg text-gray-700">
          Wenn Sie Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung Ihrer Daten haben, kontaktieren Sie uns bitte unter:{' '}
          <a href="mailto:support@thumbnaildownloader.de" className="text-blue-500 hover:underline">
            support@thumbnaildownloader.de
          </a>.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Datum des Inkrafttretens: {new Date().toLocaleDateString('de-DE')}
        </p>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
