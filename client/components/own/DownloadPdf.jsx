"use client"
import React, { useState, useEffect } from 'react';
import { pdf } from '@react-pdf/renderer';
import MyDocument from './Pdf';
import axios from 'axios';


const DownloadPdfButton = ({ _id }) => {
  const [userData, setUserData] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/form/${_id}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [_id]);

  const handleDownload = async () => {
    if (userData) {
      const blob = await pdf(<MyDocument userData={userData} />).toBlob();
      const downloadUrl = URL.createObjectURL(blob);
      setDownloadUrl(downloadUrl);

      // Automatically trigger the download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${userData.student.name.split(' ')[0]}ticket.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the URL object after a short delay
      setTimeout(() => {
        URL.revokeObjectURL(downloadUrl);
        setDownloadUrl(null);
      }, 100);
    }
  };

  return (
    <button onClick={handleDownload} disabled={!userData}>
      {userData ? 'Download PDF' : 'Loading...'}
    </button>
  );
};

export default DownloadPdfButton;