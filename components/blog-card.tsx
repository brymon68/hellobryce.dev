import Link from 'next/link';
import Image from 'next/image';
import CoverImage from './cover-image';

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
        <CoverImage title="virgin" src={props.imageUrl} />
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
