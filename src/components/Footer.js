const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-800 text-white text-center py-4">
      <small>
        © {year} Thumbnail-Downloader |{' '}
        <a
          href="https://github.com/Elhakhamza/thumbnaildownloader"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Erstellt mit ❤️
        </a>{' '}
        von{' '}
        <a
          href="https://www.thumbnaildownloader.de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          ThumbnailDownloader
        </a>
      </small>
    </footer>
  );
};

export default Footer;
