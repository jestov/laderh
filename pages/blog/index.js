import { useRouter } from 'next/router';
import { getPosts } from '../../utils/mdx-utils';
import Link from 'next/link';
import Image from 'next/image';
import Layout, { GradientBackground } from '../../components/Layout';
import ArrowIcon from '../../components/icons/ArrowIcon';
import ChevronIcon from '../../components/icons/ChevronIcon';
import Newsletter from '../../components/Newsletter';
import { getGlobalData } from '../../utils/global-data';
import SEO from '../../components/SEO';


const POSTS_PER_PAGE = 7;
const POSTS_PER_SUBSEQUENT_PAGE = 6;

const Pagination = ({ currentPage, totalPages }) => {
  const router = useRouter();

  const handlePageChange = (page) => {
    router.push(`/blog?page=${page}`);
  };

  const getVisiblePages = (currentPage, totalPages) => {
    const visiblePages = [];
    
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      const startPage = Math.min(Math.max(1, currentPage - 1), totalPages - 3);
      let endPage = Math.min(totalPages, startPage + 3);
  
      for (let i = startPage; i <= endPage; i++) {
        visiblePages.push(i);
      }
      
      // Adjust endPage if there are fewer than 4 pages
      if (endPage - startPage < 3) {
        endPage = Math.min(totalPages, startPage + 5 - (1 - (endPage - startPage)));
      }
    }
    
    return visiblePages;
  };
  
  

  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <div className="flex justify-center gap-2 md:gap-4 lg:mt-4 font-belgro text-white text-[12px] uppercase w-full">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-full ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <ChevronIcon className="transform rotate-90" />
      </button>
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`w-12 h-12 text-white border border-white ${
            currentPage === page ? 'bg-white bg-opacity-30 border-opacity-30' : 'bg-transparent bg-opacity-50 border-opacity-30'
          } rounded-full`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2.5 rounded-full ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <ChevronIcon className="transform -rotate-90" />
      </button>
    </div>
  );
};

export default function Index({ posts, globalData }) {
  const router = useRouter();
  const { query } = router;
  const currentPage = parseInt(query.page) || 1;

  const totalPages = Math.ceil(
    (posts.length - POSTS_PER_PAGE) / POSTS_PER_SUBSEQUENT_PAGE + 1
  );
  
  const paginatedPosts = currentPage === 1
    ? posts.slice(0, POSTS_PER_PAGE)
    : posts.slice(
        POSTS_PER_PAGE + (currentPage - 2) * POSTS_PER_SUBSEQUENT_PAGE,
        POSTS_PER_PAGE + (currentPage - 1) * POSTS_PER_SUBSEQUENT_PAGE
      );

  const renderFirstPost = (post) => (
    <li
      key={post.filePath}
      className="overflow-hidden flex flex-col lg:flex-row justify-between transition py-5 px-1 block justify-start items-center text-white flex flex-col gap-5 md:gap-10 group transition delay-50 duration-250 relative"
    >
      {post.data.time && (
        <span className="absolute z-10 top-9 left-5 px-4 py-2.5 bg-pink rounded-full font-belgro uppercase text-[11px] group-hover:text-white">
          {post.data.time}
        </span>
      )}
      <Link
        as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
        href={`/blog/[slug]`}
        legacyBehavior
      >
        <Image
          src={post.data.img}
          alt={post.data.title}
          width={600}
          height={200}
          className="w-full rounded-[36px] h-56 lg:h-80 object-cover cursor-pointer opacity-85 group-hover:opacity-100 transition delay-50 duration-250 lg:min-w-[500px] xl:min-w-[600px]"
        />
      </Link>
      <Link
        as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
        href={`/blog/[slug]`}
        legacyBehavior
      >
        <a className="block group-hover:text-primary  cursor-pointer  flex flex-col items-start gap-8">
          <h2 className="text-lg md:text-3xl !leading-none tracking-tight transition delay-150 duration-500">
            {post.data.title}
          </h2>
          {post.data.description && (
            <p className="text-base opacity-80 font-clash font-medium text-white">
              {post.data.description}
            </p>
          )}
          <div className="inline-flex items-center gap-10 text-base bg-white bg-opacity-20 px-5 py-3 rounded-full font-belgro !text-[12px] uppercase cursor-pointer group-hover:bg-opacity-30 transition delay-50 duration-250 group-hover:text-white">
            Leer más <ArrowIcon />
          </div>
        </a>
      </Link>
    </li>
  );

  const renderOtherPosts = (post) => (
    <li
      key={post.filePath}
      className="overflow-hidden flex flex-col justify-between transition py-5 px-1 block justify-start items-start text-white flex flex-col gap-5 md:gap-6 group transition delay-50 duration-250"
    >
      <Link
        as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
        href={`/blog/[slug]`}
        legacyBehavior
      >
        <a className="block group-hover:text-primary  cursor-pointer flex flex-col gap-5 md:gap-8 relative">
          {post.data.time && (
            <span className="absolute z-10 top-3 left-3 lg:top-4 lg:left-4 px-4 py-2.5 bg-pink rounded-full font-belgro uppercase text-[11px] group-hover:text-white">
              {post.data.time}
            </span>
          )}
          <Image
            src={post.data.img}
            alt={post.data.title}
            width={400}
            height={200}
            className="w-full rounded-[36px] h-56 object-cover cursor-pointer opacity-85 group-hover:opacity-100 transition delay-50 duration-250"
          />
          <h2 className="text-lg md:text-xl !leading-6 tracking-tight transition delay-150 duration-500">
            {post.data.title}
          </h2>
          {post.data.description && (
            <p className="text-base opacity-80 font-clash font-medium text-white">
              {post.data.description}
            </p>
          )}
        </a>
      </Link>
      <Link
        as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
        href={`/blog/[slug]`}
        legacyBehavior
      >
        <div className="inline-flex items-center gap-10 text-base bg-white bg-opacity-20 px-5 py-3 rounded-full font-belgro !text-[12px] uppercase cursor-pointer group-hover:bg-opacity-30 transition delay-50 duration-250">
          Leer más <ArrowIcon />
        </div>
      </Link>
    </li>
  );

  return (
    <Layout backgroundColor="bg-coral">
      <SEO
        title={globalData.name + ' | Blog'}
        description="Descubre las últimas tendencias en Capital Humano, liderazgo y desarrollo personal en el blog de Dora Valdez. Artículos informativos y consejos prácticos para alcanzar el éxito profesional y personal."
      />
      <GradientBackground
        variant="small"
        className="absolute top-0 -right-50 opacity-100"
      />
      <main className="w-full bg-[url('/img/gradient-bg.svg')] bg-no-repeat bg-contain bg-left bg-bottom">
        <div className="flex flex-col gap-2 md:gap-8 pt-28 lg:pt-48 max-w-7xl mx-auto px-[30px] z-10">
          <div className="flex flex-col gap-4 items-start">
            <h2 className="text-4xl lg:text-5xl text-primary relative uppercase">
              <span className="z-10 relative">Blog</span>
              <Image
                src="/img/title-line-short.svg"
                width={100}
                height={40}
                alt=""
                className="absolute -bottom-4.5 z-0 left-0 right-0 w-full object-contain"
              />
            </h2>
          </div>
          {currentPage === 1 && (
            <ul className="grid grid-cols-1 gap-2 md:gap-10">
              {renderFirstPost(paginatedPosts[0])}
            </ul>
          )}
          <ul
            className={`grid ${
              currentPage === 1 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            } gap-2 md:gap-10`}
          >
            {paginatedPosts.slice(currentPage === 1 ? 1 : 0).map((post) =>
              currentPage === 1 ? renderOtherPosts(post) : renderOtherPosts(post)
            )}
          </ul>
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </main>
      <Newsletter />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
