"use client"
import Welcome from '@/components/own/welcome'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import StudentNav from '@/components/own/studentUi'
import StudentDefaultSkeleton from '@/components/skeleton/StudentDefaultSkeleton'
const page = () => {
    const [student, setstudent] = useState({})
    const [isLoading, setisLoading] = useState(false)

    const getDetail=async()=>
    {
       setisLoading(true)
        const res=await axios.get(`http://localhost:5000/student`,{withCredentials:true})
        const data=res.data;
        console.log(data)
       
        setstudent(data)
        setisLoading(false)

    }
    
    useEffect(() => {
     getDetail()
    
     
    }, [])
    const fees='pending'
  return (
   <>
    <div>
            <StudentNav/>
          </div>
        <div className="bg-white">
         
          <div>
      <Welcome username={student?.Name || 'Student'}/>
          </div>
          {isLoading && <StudentDefaultSkeleton />}
          {!isLoading && <div className="relative px-6 pt-14 lg:px-8">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
              <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>
    
            <div className="max-w-2xl mx-auto mt-8 p-4 rounded shadow-md">
              <h1 className="text-2xl font-bold mb-4">Your Details</h1>
    
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 mb-4">
                  <label className="text-gray-600">Name</label>
                  <p>{student.Name}</p>
                </div>
    
                <div className="mb-4">
                  <label className="text-gray-600">Class</label>
                  <p>{student.class}</p>
                </div>
    
                <div className="mb-4">
                  <label className="text-gray-600">College Year</label>
                  <p>{student.college_year}</p>
                </div>
    
                <div className="mb-4">
  <label className="text-gray-600">Fees Status</label>
  <p className={student.fees_status === 'pending' ? 'text-red-500' : 'text-green-500'}>
    {student.fees_status}
  </p>
</div>

<div className="mb-4">
  <label className="text-gray-600">Academic Status</label>
  <p className={student.academic_status === 'Dropout' ? 'text-red-500' : 'text-green-500'}>
    {student.academic_status}
  </p>
</div>

              </div>
              <div className="mt-5 text-center text-gray-600">
                APPLY FOR RAILWAY CONCESSION
              </div>
    
              <div className="text-center mt-2" >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  <Link href={'/student/form'}>Proceed</Link>
                </button>
              </div>
            </div>
          </div>}
          
        </div>
        </>
      );
   
}

export default page