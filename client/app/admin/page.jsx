"use client";
import React, { useEffect, useState } from 'react';
import AdminNav from '@/components/own/AdminNav';
import { FaDownload, FaArchive, FaEye } from 'react-icons/fa';
import Link from 'next/link';
import axios from 'axios';

const page = () => {
  const [formData, setFormData] = useState([]);

  const fetchForms = async () => {
    try {
      const response = await axios.get("http://localhost:5000/form/forms", { withCredentials: true });
      console.log(response.data.data);
      setFormData(response.data.data);
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AdminNav className="shadow-md" />
      <div className="flex-grow overflow-y-auto">
        <div>
          <h1 className='text-3xl px-6 pb-4 bg-indigo-200 font-bold text-center'>Students Form</h1>
        </div>
        <div>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="text-white bg-indigo-500">
                <th className="border-b text-black font-semibold border-r border-white py-2 px-4">Student Name</th>
                <th className="border-b text-black font-semibold border-r border-white py-2 px-4">Class</th>
                <th className="border-b text-black font-semibold border-r border-white py-2 px-4">College Year</th>
                <th className="border-b text-black font-semibold border-r border-white py-2 px-4">Destination</th>
                <th className="border-b text-black font-semibold border-r border-white py-2 px-4">Detail</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((form) => (
                <tr key={form._id}>
                  <td className="border-b border-r border-gray-300 py-2 px-4">{form.student.Name}</td>
                  <td className="border-b border-r border-gray-300 py-2 px-4">{form.student.class}</td>
                  <td className="border-b border-r border-gray-300 py-2 px-4">{form.student.college_year}</td>
                  <td className="border-b border-r border-gray-300 py-2 px-4">{form.destination}</td>
                  <td className="border-b border-r border-gray-300 py-2 px-4">
                    <Link className='flex items-center space-x-2' href={`/admin/forms/${form._id}`}>
                      <span className="text-blue-500 hover:text-blue-700">
                        view
                      </span>
                      <span className="text-blue-500 hover:text-blue-700">
                        <FaEye />
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;