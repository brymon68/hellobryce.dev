import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import PostType from '@/interfaces/post';
import { getAllPosts } from '@/lib/api';
import Nav from './nav';

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Nav allPosts={allPosts} />
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Welcome!</h1>
            <p className="py-6">
              I decided to start a blog, where half-baked ideas come to die.
            </p>
            <Link className="btn btn-primary" href="/blog/">
              View my latest blogs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

type Props = {
  allPosts: PostType[];
};
export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { allPosts }
  };
};
