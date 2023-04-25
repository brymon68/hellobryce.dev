import Link from 'next/link';
import React from 'react';

interface BlogCardProps {
  imageUrl: string;
  imageAltText: string;
  title: string;
  href: string;
  description: string;
}

export default function BlogCard(props: BlogCardProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={props.imageUrl} alt={props.imageAltText} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" href={props.href}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
