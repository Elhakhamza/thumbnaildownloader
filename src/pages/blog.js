import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const articles = [
    {
      title: 'Die Kraft der YouTube-Thumbnails',
      date: 'June 23, 2024',
      description:
        'Als leidenschaftlicher YouTube-Nutzer und Content Creator wurde mir klar, dass die ersten Sekunden der Zuschauerbindung entscheidend sind.',
      image: 'https://blogger.googleusercontent.com/img/a/AVvXsEi_Zxd3wm75j-bqhjuBOD4b8QuR5qKEutwCt8paAMP18lBV-ARtCM39mrxImyhYRp25hF92kz8pVyQOjhOrnc5zjJzCOUd7EkRp2tiAQQktptiZJMDAVd-8pBZNFFHm31-aDyuSiQVVTz0tJ3vne6_QzivicafglEl-WW3Z5U2VALETa49dB0gyB34eAaVV=s16000',
      link: 'https://www.thumbnaildownloader.de/posts/die-kraft-der-youtube-thumbnails',
    },
  ];

  return (
    <>
      <Head>
        <title>Blog - Recent Articles</title>
        <meta
          name="description"
          content="Explore the latest articles on technology, current events, and trends. Stay updated with our recent blog posts."
        />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank" // Ensures the link opens in a new tab
              rel="noopener noreferrer" // Adds security
              className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{article.date}</p>
                <p className="text-gray-700 text-sm">{article.description}</p>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
