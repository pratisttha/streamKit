import React from 'react';
import { useState } from 'react'
import Form from './Form';
import Modal from './Modal';
const Section = () => {
  const [isVisible, setIsVisible, showModal, setShowModal] = useState(false)
  return (
    <div className='pt-40 flex pl-60 fixed '>
      <div class="overflow-hidden shadow-lg rounded-lg h-60 w-80  cursor-pointer">
        <a href="#" class="w-full block h-full">
          <img src="/images/cat.jpeg" alt="Image Text" />
          <div class="backdrop-blur-lg rounded drop-shadow-lg border-white border-2 p-2">
            <p class="text-indigo-500 text-md font-medium">
            </p>
            <p class="text-black  text-xl text-center font-medium mb-2">
              GAME
            </p>
            <p class="text-black font-light text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c
            </p>
          </div>
        </a>
      </div>
      <div>
        <Modal/>
      </div>
      <div >
      
      </div>
    </div>
  );
};

export default Section;