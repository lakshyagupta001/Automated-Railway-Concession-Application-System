"use client"
import { FaDownload, FaArchive } from 'react-icons/fa';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AdminNav from "@/components/own/AdminNav";

import { PDFViewer, PDFDownloadLink, pdf, renderToStream } from '@react-pdf/renderer';
import MyDocument from '@/components/own/Pdf';

const Form = () => {
  const Router = useRouter();
  const params = useParams();

  const [formData, setFormData] = useState({});
  const [downloadReady, setDownloadReady] = useState(false);

  const handleDownload = async () => {
    const name = formData.student.Name;
    const pdfBlob = await pdf(<MyDocument detail={formData} />).toBlob();
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = url;

    link.download = `${name.split(' ')[0]}concession.pdf`;
    link.click();

    toast.success('Download successful!', {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: 'Bounce',
    });
  };

  const pushToArchive = async () => {
    try {
      let data = await axios.post('http://localhost:5000/form/archive', { id: params.id }, { withCredentials: true });
      console.log(data.data);
      if (data.data.success) {
        toast.success('Form archived successfully!', {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: 'Bounce',
        });
        setTimeout(() => {
          Router.push('/admin');
        }, 2000);
      }
    } catch (error) {
      console.error("Error pushing to archive:", error);
    }
  }

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/form/${params.id}`, {
          withCredentials: true,
        });
        console.log(response.data.data)
        setFormData(response.data.data);
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchFormData();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <AdminNav />
        <div className="relative px-6 pt-14 lg:px-8">
          <div className="max-w-2xl mx-auto mt-8 p-4 rounded shadow-md dark:bg-gray-700">
            <h1 className="text-2xl font-bold mb-4">Form Details</h1>
           
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="text-gray-600 dark:text-gray-400">Destination</label>
                <p>{formData.destination}</p>
              </div>
              <div className="mb-4">
                <label className="text-gray-600 dark:text-gray-400">Class</label>
                <p>{formData.className}</p>
              </div>
              <div className="mb-4">
                <label className="text-gray-600 dark:text-gray-400">Duration</label>
                <p>{formData.duration}</p>
              </div>
              <div className="mb-4">
                <label className="text-gray-600 dark:text-gray-400">Line</label>
                <p>{formData.line}</p>
              </div>
            </div>
            <div className="mt-5 text-center text-gray-600 dark:text-gray-400">
              Student Information
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 mb-4">
                <label className="text-gray-600 dark:text-gray-400">Name</label>
                <p>{formData.student?.Name}</p>
              </div>
              <div className="mb-4">
                <label className="text-gray-600 dark:text-gray-400">Class</label>
                <p>{formData.student?.class}</p>
              </div>
              <div className="mb-4">
                <label className="text-gray-600 dark:text-gray-400">College Year</label>
                <p>{formData.student?.college_year}</p>
              </div>
              <div className="mb-4">
                <label className="text-gray-600 dark:text-gray-400">Fees Status</label>
                <p>{formData.student?.fees_status}</p>
              </div>
              <div className="mb-4">
                <label className="text-gray-600 dark:text-gray-400">Academic Status</label>
                <p>{formData.student?.academic_status}</p>
              </div>
            </div>
            <div className="flex-col space-x-5">
              <button onClick={handleDownload}>
                <FaDownload className="text-indigo-500" />
                download
              </button>
              <button onClick={pushToArchive}>
                <FaArchive className="text-indigo-500" />
                archive
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={{ enter: 'bounceIn', exit: 'bounceOut' }}
      />
    </>
  );
};

export default Form;

