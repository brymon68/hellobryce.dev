import React from 'react';
import Nav from './nav';
export default function Document() {
  return (
    <div>
      <Nav />
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">
              This page is under construction
            </h1>
            <p className="py-6">
              I decided to start a blog, where half-baked ideas come to die.
              Coming v soon...
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
