import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from './Modal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div id="home" className="banner-layout">
        <div className="banner-overlay"></div>
        <div className="main-banner">
          <div className="banner-content relative flex flex-col justify-center items-center" style={{ height: "100vh" }}>
            <h1 className='text-6xl font-bold text-orange-400' data-aos="zoom-in"><span className='text-6xl font-normal text-white'>Hello, I'm</span> Ritik Kumar</h1>
            <h2 className="type-line typing text-white text-3xl mt-5">
              I'm Professional
              <span className="type-wrap text-orange-400 ps-2">
                <span className="is-active">Ui/Ux Designer</span>
                <span>Web Developer</span>
                <span>Creative Director</span>
              </span>
            </h2>
            <div className='flex gap-5 mt-5'>
              <button onClick={openModal} data-aos="fade-right" type="button" className="group cursor-pointer relative flex py-2 items-center justify-center overflow-hidden rounded-md bg-orange-400 px-4 font-medium text-neutral-200">
                <span className='flex justify-center items-center'><i className="fa-solid fa-plus mr-1"></i><span className="hidden md:flex">New Blog</span></span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20"></div>
                </div>
              </button>
              <button data-aos="fade-left" type="button" className="group cursor-pointer relative inline-flex py-2 items-center justify-center overflow-hidden rounded-md px-4 bg-black font-medium text-neutral-200">
                <span className='flex justify-center items-center'><i className="fa-solid fa-square-rss mr-2"></i><span className="hidden md:flex">All Blogs</span></span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div className="relative h-full w-8 bg-white/20"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App
