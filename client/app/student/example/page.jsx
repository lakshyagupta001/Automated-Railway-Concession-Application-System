"use client"
import React, { useState } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from '@/components/own/Pdf';

const MainPage = () => {
  const [downloadReady, setDownloadReady] = useState(false);

  const handleDownload = () => {
    setDownloadReady(true);
    setTimeout(() => {
      setDownloadReady(false);
    }, 3000); // Reset after 3 seconds
  };

const detail={
  className
: 
"First",
destination
: 
"Turbhe",
duration
: 
"Quarterly",
line
: 
"Western",
student
: 
{Name
: 
"APOORVA BASANT RAJPUT",
Password
: 
238420,
aadhar_card_no
: 
"345678901234",
academic_status
: 
"Eligible",
address
: 
"789 Pine St",
archiveForms
: 
['6613d8652e0b0b4e48556d33'],
class
: 
"C",
college_year
: 
"TE",
dob
: 
"1997-11-10T00:00:00.000Z",
email
: 
"apoorva@example.com",
erp_no
: 
220600289,
fees_status
: 
"paid",
form
: 
"65eee0f75930c32d7ca5ec54",
gender
: 
"Female",
phone_no
: 
"7890123456",
rollNo
: 
"3",}
}


  return (
    <div>
      <h1>Main Page</h1>
      <PDFViewer className='w-full h-full'>
        <MyDocument detail={detail} />
      </PDFViewer>
      <button onClick={handleDownload} disabled={downloadReady}>
        {downloadReady ? 'Download Link Available' : 'Download PDF'}
      </button>
      {downloadReady && (
        <PDFDownloadLink
          document={<MyDocument />}
          fileName="ticket.pdf"
          style={{
            textDecoration: 'none',
            padding: '10px 20px',
            color: '#ffffff',
            backgroundColor: '#1a202c',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Download Ticket
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default MainPage;


