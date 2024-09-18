"use client"
import { Fragment, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon,} from '@heroicons/react/24/outline'



export default function StudentNav() {
  const Router=useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const logOutCookies=async()=>
  {
   try {
     const res=await axios.get('http://localhost:5000/logout',{withCredentials:true})
     console.log(res.data)
     const logout=res.data
     if(logout.success)
     {
       Router.push('/Home')
     }
   } catch (error) {
    console.log(error.message)
   }

  }

  return (
    <header className="bg-white ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-1 lg:px-8" aria-label="Global">
        <div className="p-1/3">
         
           
           <Link href={'/'}>
            <img className='w-[30%]' src="/Logo.jpg" alt="logo" />
            </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
      
          <Link href={'/student/Profile'} className="text-sm font-semibold leading-6 text-gray-900">
            Profile
          </Link>
          <Link href={'/student/main'} className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </Link>
          <Link href={"/student/History"} className="text-sm font-semibold leading-6 text-gray-900">
          History
          </Link>
         
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button onClick={logOutCookies} className="text-sm font-semibold leading-6 text-gray-900">
            Log Out <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href={'/'} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
             
              <img
                className="h-8 w-auto"
               
               src='/Logo.jpg'
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
               
                <Link
                  href={'/student/Profile'}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Profile
                </Link>
                <Link
                  href={'/student/main'}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href={'/student/History'}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  History
                </Link>
              </div>
              <div className="py-6">
                <button
                  onClick={logOutCookies}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}