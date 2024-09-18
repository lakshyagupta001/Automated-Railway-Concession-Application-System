"use client"
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentNav from '@/components/own/studentUi';

const Page = () => {
  const Router = useRouter();
  const [destination, setDestination] = useState('');
  const [className, setClassName] = useState('');
  const [duration, setDuration] = useState('');
  const [line, setLine] = useState('');
  const [countdown, setCountdown] = useState(null);
  const centralStations = [
    " Shivaji Terminus",
    "Masjid",
    "Sandhurst Road",
    "Byculla",
    "Chinchpokli",
    "Currey Road",
    "Parel",
    "Dadar",
    "Matunga",
    "Sion",
    "Kurla",
    "Vidyavihar",
    "Ghatkopar",
    "Vikhroli",
    "Kanjurmarg",
    "Bhandup",
    "Nahur",
    "Mulund",
    "Thane",
    "Kalwa",
    "Mumbra",
    "Diva",
    "Kopar",
    "Dombivali",
    "Thakurli",
    "Kalvan"
  ];
  
  const WesternStations = [
    "Churchgate",
    "Marine Lines",
    "Charni Road",
    "Grant Road",
    "Mumbai Central",
    "Mahalaxmi",
    "Lower Parel",
    "Prabhadevi / Elphinston Road",
    "Dadar",
    "Matunga Road",
    "Mahim Junction",
    "Bandra",
    "Khar Road",
    "Santacruz",
    "Vile Parle",
    "Andheri",
    "Jogeshwari",
    "Ram Mandir",
    "Goregaon",
    "Malad",
    "Kandivali",
    "Borivali",
    "Dahisar",
    "Mira Road",
    "Bhayander",
    "Naigaon",
    "Vasai Road",
    "Nallasopara",
    "Virar",
    "Vaitarna",
    "Saphale Road",
    "Kelva Road"
  ];

  const populateDestinationOptions = (selectedLine) => {
    const destinationSelect = document.getElementById('destination');
    destinationSelect.innerHTML = '<option value="" disabled selected>Select Destination</option>';
  
    if (selectedLine === 'Central') {
      centralStations.forEach((station) => {
        const option = document.createElement('option');
        option.value = station;
        option.text = station;
        destinationSelect.add(option);
      });
    } else if (selectedLine === 'Western') {
      WesternStations.forEach((station) => {
        const option = document.createElement('option');
        option.value = station;
        option.text = station;
        destinationSelect.add(option);
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCountdown(null);

    try {
      const submit = await axios.post('http://localhost:5000/student-form', { destination, className, duration, line }, { withCredentials: true });
      console.log(submit.data);
      if (submit.data.success) {
        toast.success('Form submitted successfully!', {
          position: 'bottom-right',
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: 'Bounce',
        });
        setCountdown(3);
      } else {
        toast.error('Your application cannot be processed due to one of the following reasons: \n\n1. Outstanding fees are not paid. Please clear your dues and try again.\n\n2. Your academic status is currently "Dropout". Please contact the administrative office for further assistance.\n\n3. You have already submitted an application that is currently under review. Please wait for the processing of your previous submission.', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: 'Bounce',
        });
      }
    } catch (error) {
      console.log(error.message);
      toast.error('Error submitting the form. Please try again.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: 'Bounce',
      });
    }
  };

  useEffect(() => {
    if (countdown === 0) {
      Router.push('/student/main');
    }

    const timer = countdown !== null && setInterval(() => setCountdown(countdown - 1), 1000);
    return () => clearInterval(timer);
  }, [countdown, Router]);

  return (
    <>
    <>
  <div>
    <StudentNav />
  </div>
  <div className="bg-white">
    <div className="relative px-6 pt-14 lg:px-8">
      <div className="max-w-md mx-auto mt-8 bg-white rounded-lg overflow-hidden shadow-md p-6 bg-opacity-50">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Travel Form</h2>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
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

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="line">
              Line
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
              id="line"
              value={line}
              onChange={(e) => {
                setLine(e.target.value);
                populateDestinationOptions(e.target.value);
              }}
            >
              <option value="" disabled selected className="text-gray-700">
                Select line
              </option>
              <option value="Central" className="text-gray-700">
                Central
              </option>
              <option value="Western" className="text-gray-700">
                Western
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination">
              Source
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="" disabled selected>
                Select Destination
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="className">
              Class Name
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
              id="className"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            >
              <option value="" disabled selected className="text-gray-700">
                Select class
              </option>
              <option value="First" className="text-gray-700">
                First
              </option>
              <option value="Second" className="text-gray-700">
                Second
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
              Duration
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option value="" disabled selected className="text-gray-700">
                Select duration
              </option>
              <option value="Monthly" className="text-gray-700">
                Monthly
              </option>
              <option value="Quarterly" className="text-gray-700">
                Quarterly
              </option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</>
    </>
  );
};

export default Page;

