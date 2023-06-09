import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 z-0">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          🛠 hellobryce.dev
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link href="/blog">Blogs</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
