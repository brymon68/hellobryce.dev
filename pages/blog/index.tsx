import Intro from '@/components/intro';
import { getAllPosts } from '@/lib/api';
import Head from 'next/head';
import Post from '@/interfaces/post';
import BlogCard from '@/components/blog-card';
import Container from '@/components/container';
import Nav from '../nav';

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Nav />
      <Head>
        <title>{`Blogs`}</title>
      </Head>
      <Container>
        <Intro title="Blog." />
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 lg:gap-2">
          {allPosts?.map((post, idx) => (
            <BlogCard
              key={idx}
              href={`/blog/${post.slug}`}
              imageUrl={post.coverImage}
              description={post.excerpt}
              title={post.title}
              imageAltText="lol"
            />
          ))}
        </div>
      </Container>
    </>
  );
}

type Props = {
  allPosts: Post[];
};
export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { allPosts }
  };
};
