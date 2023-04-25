import React from 'react';
import Post from '@/interfaces/post';
import Link from 'next/link';

type Props = {
  allPosts: Post[];
};
export default function Nav({ allPosts }: Props) {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          🛠 hellobryce.dev
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 ">
          {allPosts?.length > 0 ? (
            <li tabIndex={0}>
              <a>
                Blogs
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100  mr-48">
                {allPosts.map((post, idx) => (
                  <li key={idx}>
                    <Link key={idx} href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <></>
          )}
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
