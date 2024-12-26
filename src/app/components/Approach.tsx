"use client";

import React from 'react';
import { ContainerScroll } from './ui/CanvasRevealEffect';
import Image from 'next/image';

function Approach() {
  const title = (
    <div className="flex flex-col items-center justify-center h-[40vh]">
      <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        we are building copilot for interacting with large customers<br />
        <span className="text-5xl md:text-8xl font-extrabold mt-4 leading-none bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
         Bladex AI 
        </span>
      </h1>
    </div>
  );

  return (
    <ContainerScroll
      titleComponent={title}
    >
      <div className="relative flex items-center justify-center w-full h-full bg-dot-pattern">
        <div className="relative w-full h-full max-w-4xl mx-auto">
          <Image
            src="/wbdemo.png" // Make sure to add this image to your public folder
            alt="Modern Industry"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl opacity-90 transition-opacity hover:opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Deploying on whatsapp</h2>
            <p className="text-lg text-gray-200">
            a new way to interact with customer at large scale
            </p>
          </div>
        </div>
      </div>
    </ContainerScroll>
  );
}

export default Approach;