import { getGlobalData } from '../../utils/global-data';
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  postFilePaths,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ArrowIcon from '../../components/icons/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Layout, { GradientBackground } from '../../components/Layout';
import ButtonArrowReverse from '../../components/ButtonArrowReverse';
import SEO from '../../components/SEO';
import ShareButtons from '../../components/blog/ShareButtons';
import Newsletter from '../../components/Newsletter';



const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
};

const CustomHeading = ({ as: Component, ...props }) => {
  return <Component {...props} style={{ color: 'white', fontFamily: 'Clash Grotesk' }} />;
};

const customComponents = {
  ...components,
  h1: (props) => <CustomHeading as="h1" {...props} />,
  h2: (props) => <CustomHeading as="h2" {...props} />,
  h3: (props) => <CustomHeading as="h3" {...props} />,
  h4: (props) => <CustomHeading as="h4" {...props} />,
  h5: (props) => <CustomHeading as="h5" {...props} />,
  h6: (props) => <CustomHeading as="h6" {...props} />,
  strong: (props) => <strong {...props} style={{ color: 'white' }} />,
  b: (props) => <b {...props} style={{ color: 'white' }} />,
  a: (props) => <a {...props} style={{ color: 'yellow' }} />,
  p: (props) => <p {...props} style={{ margin: '35px 0' }} />,
  blockquote: (props) => (
    <blockquote
      {...props}
      style={{
        color: 'white',
        borderLeft: '8px solid #FFDA03',
        paddingLeft: '2rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        marginLeft: 0,
        marginRight: 0,
        letterSpacing: "1px",
        fontSize: "1.5rem",
        lineHeight: "1.1",
        textAlign: "center",
        fontFamily: "Clash Display, sans-serif",
        backgroundColor: 'rgba(255, 255, 255, 0.20)',
      }}
    />
  )
};


export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
}) {
  return (
    <Layout backgroundColor="bg-coral">
      <SEO
        title={`${globalData.name} | ${frontMatter.title}`}
        description={frontMatter.description}
      />
      
      <GradientBackground
        variant="small"
        className="absolute top-0  opacity-100"
      />
      <main className="relative w-full bg-[url('/img/gradient-bg.svg')] bg-no-repeat bg-30 bg-left bg-bottom">
      <article className="px-[15px] pt-28 lg:pt-48 max-w-5xl text-primary flex gap-8 md:gap-10 flex-col mx-auto">
        <header className='flex flex-col gap-8 items-center w-full'>
          <ButtonArrowReverse href="/blog" className="text-white bg-white bg-opacity-20 hover:bg-opacity-30 !text-[10px] lg:text-[11px]">Volver al Blog</ButtonArrowReverse>
          <h1 className="text-white text-xl md:text-4xl text-center lg:w-2/3 !leading-6 lg:!leading-10">
            {frontMatter.title}
          </h1>
          <div className='text-white py-4 md:py-5 border-y border-white border-opacity-20 w-full flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-between'>
            <div className='flex items-center gap-4'>
              <h3 className="text-xs uppercase text-white font-belgro font-medium tracking-wide">
                {frontMatter.date}
              </h3>  
              {frontMatter.time && (
                <span className='z-10 top-8 left-4 px-5 py-2.5 bg-transparent border border-white border-opacity-35 rounded-full font-belgro uppercase text-[11px]'>{frontMatter.time}</span>
              )}
            </div>
            <ShareButtons />
          </div>
        </header>
        <Image src={frontMatter.img} alt={frontMatter.title} width={800} height={400}  className='w-full h-[450px] md:h-[650px] object-cover rounded-[36px] border border-8 border-opacity-40 border-white'/>
        <main className='w-full'>
          <article className="w-full prose min-w-full !text-white font-medium">
            <MDXRemote {...source} components={customComponents} className="!text-white md:!text-base" />
          </article>
        </main>
        <div className="grid md:grid-cols-2 mt-8 gap-8 w-full">
            {prevPost && (
              <li
                key={prevPost.slug}
                className="overflow-hidden flex flex-col justify-between py-5 px-1 block justify-start items-end text-white flex flex-col gap-4 md:gap-6 group transition duration-500"
              >
                <Link href={`/blog/${prevPost.slug}`} legacyBehavior>
                  <a className="block group-hover:text-primary cursor-pointer flex flex-col gap-6 md:gap-8 relative text-right">
                    <Image src={prevPost.img} alt={prevPost.title} width={400} height={200} className='w-full rounded-[36px] h-64 object-cover cursor-pointer opacity-85 group-hover:opacity-100 transition duration-500'/>
                    <h2 className="text-lg md:text-xl !leading-6 tracking-tight transition duration-500">{prevPost.title}</h2>
                    {prevPost.description && (
                      <p className="text-base opacity-80 font-clash font-medium text-white">
                        {prevPost.description}
                      </p>
                    )}
                    {prevPost.time && (
                      <span className='absolute z-10 top-4 left-4 px-4 py-2 bg-pink rounded-full font-belgro uppercase text-[11px] group-hover:text-white'>{prevPost.time}</span>
                    )}
                  </a>
                </Link>
                <Link href={`/blog/${prevPost.slug}`} legacyBehavior>
                  <div className='inline-flex items-center gap-10 text-base bg-white bg-opacity-20 px-5 py-3 rounded-full font-belgro !text-[12px] uppercase cursor-pointer group-hover:bg-opacity-30 transition duration-250'><div className='rotate-180'><ArrowIcon /></div> Post anterior </div>
                </Link>
              </li>
            )}
            {nextPost && (
              <li
                key={nextPost.slug}
                className="overflow-hidden flex flex-col justify-between py-5 px-1 block justify-start items-start text-white flex flex-col gap-4 md:gap-6 group transition duration-500"
              >
                <Link href={`/blog/${nextPost.slug}`} legacyBehavior>
                  <a className="block group-hover:text-primary cursor-pointer flex flex-col gap-6 md:gap-8 relative">
                    <Image src={nextPost.img} alt={nextPost.title} width={400} height={200} className='w-full rounded-[36px] h-64 object-cover cursor-pointer opacity-85 group-hover:opacity-100 transition duration-500'/>
                    <h2 className="text-lg md:text-xl !leading-6 tracking-tight transition duration-500">{nextPost.title}</h2>
                    {nextPost.description && (
                      <p className="text-base opacity-80 font-clash font-medium text-white">
                        {nextPost.description}
                      </p>
                    )}
                    {nextPost.time && (
                      <span className='absolute z-10 top-4 left-4 px-4 py-2 bg-pink rounded-full font-belgro uppercase text-[11px] group-hover:text-white'>{nextPost.time}</span>
                    )}
                  </a>
                </Link>
                <Link href={`/blog/${nextPost.slug}`} legacyBehavior>
                  <div className='inline-flex items-center gap-10 text-base bg-white bg-opacity-20 px-5 py-3 rounded-full font-belgro !text-[12px] uppercase cursor-pointer group-hover:bg-opacity-30 transition duration-500'>Siguiente post <ArrowIcon /></div>
                </Link>
              </li>
            )}
        </div>
      </article>
      </main>
      <Newsletter />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      prevPost: prevPost ? { ...prevPost, time: prevPost.time || null } : null,
      nextPost: nextPost ? { ...nextPost, time: nextPost.time || null } : null,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
