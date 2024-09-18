
"use client"
import React, { useEffect, useState } from 'react'
import AdminNav from '@/components/own/AdminNav'
import { NextUIProvider } from '@nextui-org/react';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react";
import axios from 'axios';
import Link from 'next/link';
const app = () => {
  const [students, setstudents] = useState([])
  const getStudent=async()=>
  {
  try {
    const response=await axios.get('http://localhost:5000/all-student',{ withCredentials: true });
  console.log(response.data)
    const result=response.data
  
    setstudents(result.data)
  
  } catch (error) {
    console.log(error)
  }
  }

  useEffect(() => {
    getStudent()
  
   
  }, [])
  
  return (
    <>
      <div>
        <AdminNav />
      </div>
      <div className="bg-indigo-50 p-4 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Student Information</h1>

        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-indigo-500 text-white">
              <th className="border-b border-r border-white py-2 px-4">Student Name</th>
              <th className="border-b border-r border-white py-2 px-4">Class</th>
              <th className="border-b border-r border-white py-2 px-4">College Year</th>
              <th className="border-b border-r border-white py-2 px-4">Gender</th>
              <th className="border-b border-white py-2 px-4">Detail</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student._id} className="">
                <td className="border-b border-r border-white py-2 px-4">{student.Name}</td>
                <td className="border-b border-r border-white py-2 px-4">{student.class}</td>
                <td className="border-b border-r border-white py-2 px-4">{student.college_year}</td>
                <td className="border-b border-r border-white py-2 px-4">{student.gender}</td>
                <td className="border-b border-white py-2 px-4">
                  <Link href={`/admin/studentinfo/${student._id}`} className="text-indigo-500 hover:bg-indigo-200 rounded p-1">view</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default app