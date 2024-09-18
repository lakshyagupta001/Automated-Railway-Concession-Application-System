"use client";
import React, { useEffect, useState } from 'react';
import AdminNav from '@/components/own/AdminNav';
import { FaEye } from 'react-icons/fa';
import Link from 'next/link';
import axios from 'axios';

const HistoryPage = () => {
  const [historyData, setHistoryData] = useState([]);
  const [formattedDates, setFormattedDates] = useState([]);

  function formatDate(inputDate) {
    const date = new Date(inputDate);

  
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
  }

  
  useEffect(() => {
    const formattedDatesArray = historyData.map(form => formatDate(form.approvalDate));
    setFormattedDates(formattedDatesArray);
  }, [historyData]);

  const fetchHistory = async () => {
    try {
      const response = await axios.get("http://localhost:5000/archive", { withCredentials: true });
      console.log(response.data);
      setHistoryData(response.data);
    } catch (error) {
      console.error("Error fetching history data:", error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AdminNav className="shadow-md" />
      <div className="flex-grow overflow-y-auto">
        <div>
          <h1 className='text-3xl px-6 pb-4 bg-indigo-200 font-bold text-center'>Student History</h1>
        </div>
        <div>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="text-white bg-indigo-500">
                <th className="border-b text-black font-semibold border-r border-white py-2 px-4">Name</th>
                <th className="border-b text-black font-semibold border-r border-white py-2 px-4">Destination</th>
                <th className="border-b text-black font-semibold border-r border-white py-2 px-4">Class</th>
                <th className="border-b text-black font-semibold border-r border-white py-2 px-4">Year</th>
                <th className="border-b text-black font-semibold border-r border-white py-2 px-4">Date</th>
               
              </tr>
            </thead>
            <tbody>
              {historyData.map((history,index) => (
                <tr key={history._id}>
                  <td className="border-b border-r border-gray-300 py-2 px-4">{history.student.Name}</td>
                  <td className="border-b border-r border-gray-300 py-2 px-4">{history.destination}</td>
                  <td className="border-b border-r border-gray-300 py-2 px-4">{history.student.class}</td>
                  <td className="border-b border-r border-gray-300 py-2 px-4">{history.student.college_year}</td>
                  <td className="border-b border-r border-gray-300 py-2 px-4">{formattedDates[index]}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;