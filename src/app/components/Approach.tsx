"use client";

import React from 'react';
import { ContainerScroll } from './ui/CanvasRevealEffect';
import Image from 'next/image';

function Approach() {
  const title = (
    <div className="flex flex-col items-center justify-center h-[40vh]">
      <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Welcome to <br />
        <span className="text-5xl md:text-8xl font-extrabold mt-4 leading-none bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
          New Era of Industry
        </span>
      </h1>
      <p className="text-neutral-400 text-base md:text-lg mt-4 max-w-2xl text-center mx-auto">
        Transforming ideas into digital reality with cutting-edge technology and innovative solutions
      </p>
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
            <h2 className="text-3xl font-bold mb-2">Future Forward</h2>
            <p className="text-lg text-gray-200">
              Embracing innovation and technological advancement
            </p>
          </div>
        </div>
      </div>
    </ContainerScroll>
  );
}

export default Approach;