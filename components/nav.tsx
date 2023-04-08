import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useEffect } from 'react'

import Link from 'next/link'
import Slogo from '../public/logos/Slogo3.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import * as Scroll from 'react-scroll'
// import {
//   Link,
//   Button,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
//   scroller,
// } from 'react-scroll'

function Navbar() {
  const [top, setTop] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 14 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])
  return (
    <>
      <nav
        className={` fixed top-0 z-10 flex h-24 w-full  items-center   transition duration-300 ease-in-out md:bg-opacity-90 ${
          !top && ' shadows bg-gray-900  opacity-90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-8xl relative mx-auto flex w-full justify-between">
          <Link href="/">
            <a
              className="animate__animated animate__slideInDown  block pl-8"
              aria-label=""
            >
              <Image src={Slogo} width="96px" height="68px" alt="Logo" />
            </a>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="pr-20 leading-none focus:outline-none "
            aria-label="Navbar Toggle"
          >
            <svg
              className={
                'text-pink-800 ' +
                (open ? ' hidden' : ' animate__animated animate__fadeInLeft ')
              }
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            <svg
              className={
                'text-pink-800    ' +
                (!open
                  ? ' hidden'
                  : ' animate__animated animate__lightSpeedInRight animate__faster ')
              }
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      </nav>
      <div className="">
        <div className={open ? 'overlay  ' : '  hidden'}></div>
        <div
          onClick={() => setOpen(!open)}
          className={
            open
              ? 'max-w-8xl fixed top-40 right-20  z-50 text-5xl text-white blur-none md:left-56 md:text-8xl  '
              : ' hidden'
          }
        >
          <a
            href="/#homepage"
            className=" halal animate__animated animate__backInRight  animate__faster block pb-8  "
          >
            HOME
          </a>
          <a
            href="/#aboutme"
            className="halal animate__animated animate__backInRight  animate__fast  block pb-8 "
          >
            ABOUT
          </a>
          <a
            href="/#projects"
            className=" halal animate__animated animate__backInRight fart block pb-8 "
          >
            PROJECTS
          </a>
          <a
            href="/#contactme"
            className=" halal animate__animated animate__backInRight  farts block pb-8"
          >
            CONTACT{' '}
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
