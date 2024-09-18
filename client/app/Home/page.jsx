"use client"
import { useState } from 'react'
import Link from 'next/link'

import { TextGenerateEffect } from '@/components/ui/text-generation-effect'
import { SparklesCore } from '@/components/ui/sparkles'

export default function page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const words = " Simplify your student journey with our Automated Railway Concession System. Apply and manage concessions effortlessly, transforming the process into a seamless digital experience. Modernizing travel for students."

  return (
    <div className="min-h-screen flex flex-col relative">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        aria-hidden="true"
        // style={{
        //   background: 'linear-gradient(to right, #ff80b5, #9089fc)',
        //   clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        //   opacity: 0.05,
        // }}
      />
      <div className="flex-grow flex items-center justify-center px-6 pt-14 lg:px-8">
        <div className="max-w-2xl">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full hidden px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              {/* About Us{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a> */}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Automated Railway Concession System
            </h1>
            <TextGenerateEffect className={'text-gray-600 text-sm leading-8 mt-6'} words={words} />
       
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button>
                <Link
                  href="/student/Login"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Student Login
                </Link>
              </button>
              <button className=''>
                <Link href="/admin/login" className="text-sm leading-6 hover:font-bold text-gray-900">
                  Admin Login <span aria-hidden="true">→</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}