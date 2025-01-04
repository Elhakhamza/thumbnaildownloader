import { useEffect } from 'react';
import Link from 'next/link'; // Import the Next.js Link component

const Header = () => {
  useEffect(() => {
    // Toggle mobile menu visibility
    const menuButton = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    if (menuButton && menu) {
      menuButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }

    return () => {
      if (menuButton) {
        menuButton.removeEventListener('click', () => {
          menu.classList.toggle('hidden');
        });
      }
    };
  }, []);

  return (
    <header className="w-full bg-primary text-white px-4 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Site Title linked to Homepage */}
        <Link href="https://www.thumbnaildownloader.de/" className="text-2xl font-bold hover:underline">
          Thumbnail Downloader
        </Link>

        {/* Desktop Navigation */}
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="https://www.thumbnaildownloader.de/about" className="hover:underline">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="https://www.thumbnaildownloader.de/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="https://www.thumbnaildownloader.de/posts/privacypolicy" className="hover:underline">
                Datenschutz
              </Link>
            </li>
          </ul>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-white focus:outline-none"
            >
              ☰
            </button>
            <ul
              id="mobile-menu"
              className="hidden flex-col bg-primary space-y-2 mt-2 p-4 rounded shadow-lg"
            >
              <li>
                <Link href="https://www.thumbnaildownloader.de/about" className="block hover:underline">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="https://www.thumbnaildownloader.de/blog" className="block hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="https://www.thumbnaildownloader.de/posts/privacypolicy" className="block hover:underline">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
