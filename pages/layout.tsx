import React from 'react';
import Meta from '@/components/meta';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  );
}
