import React from 'react';
import Link from 'next/link';
import Nav from './nav';

export default function Index() {
  return (
    <>
      <Nav />
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Welcome!</h1>
            <p className="py-6">
              I decided to start a blog, where half-baked ideas come to die.
            </p>
            <Link className="btn btn-secondary" href="/blog/">
              View my latest blogs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
