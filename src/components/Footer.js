const Footer = () => (
  <footer className="w-full bg-gray-800 text-white text-center py-4">
    <p>
      © {new Date().getFullYear()} Thumbnail-Downloader | Erstellt mit ❤️ von Ihrem{' '}
      <a
        href="https://www.thumbnaildownloader.de"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        thumbnaildownloader
      </a>
    </p>
  </footer>
);

export default Footer;
