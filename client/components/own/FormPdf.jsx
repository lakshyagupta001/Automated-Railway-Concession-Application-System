import React from 'react';

const PdfTicketForm = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg w-[600px] h-[800px]">
      <h1 className="text-xl font-bold mb-4 text-center text-black">Lokmanya Tilak College of Engineering</h1>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <h2 className="text-sm font-bold mb-1 text-slate-900">Student Information</h2>
          <div className="mb-2">
            <label className="text-slate-900 block font-bold text-xs mb-1">Name:</label>
            <input type="text" value="APOORVA BASANT RAJPUT" readOnly className="text-slate-800 w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" />
          </div>
          <div className="mb-2">
            <label className="text-slate-900 block font-bold text-xs mb-1">ERP No.:</label>
            <input type="text" value={220600289} readOnly className="text-slate-800 w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" />
          </div>
          <div className="mb-2">
            <label className="text-slate-900 block font-bold text-xs mb-1">Date of Birth:</label>
            <input type="text" value={formatDate("1997-11-10T00:00:00.000Z")} readOnly className="text-slate-800 w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" />
          </div>
          <div className="mb-2">
            <label className="text-slate-900 block font-bold text-xs mb-1">Gender:</label>
            <input type="text" value="Female" readOnly className="text-slate-800 w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" />
          </div>
          <div className="mb-2">
            <label className="text-slate-900 block font-bold text-xs mb-1">Fees Status:</label>
            <input type="text" value="paid" readOnly className="text-slate-800 w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" />
          </div>
          <div className="mb-2">
            <label className="text-slate-900 block font-bold text-xs mb-1">Academic Status:</label>
            <input type="text" value="Eligible" readOnly className="text-slate-800 w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" />
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold mb-1">Contact Information</h2>
          <div className="mb-2">
            <label className="text-slate-900 block font-bold text-xs mb-1">Phone No.:</label>
            <input type="text" value="7890123456" readOnly className="text-slate-800 w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" />
          </div>
          <div className="mb-2">
            <label className="text-slate-900 block font-bold text-xs mb-1">Email:</label>
            <input type="text" value="apoorva@example.com" readOnly className="text-slate-800 w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" />
          </div>
          <div className="mb-2">
            <label className="text-slate-900 block font-bold text-xs mb-1">Address:</label>
            <textarea value="789 Pine St" readOnly className="text-slate-800 w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" rows="2"></textarea>
          </div>
          <h2 className="text-sm font-bold mb-1">Academic Information</h2>
          <div className="mb-2">
            <label className="text-slate-900 block font-bold text-xs mb-1">College Year:</label>
            <input type="text" value="TE" readOnly className="text-slate-800 w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" />
          </div>
          <div className="mb-2">
            <label className="text-slate-900 block font-bold text-xs mb-1">Class:</label>
            <input type="text" value="C" readOnly className="text-slate-800 w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" />
          </div>
          <div className="mb-2">
            <label className="text-slate-900 block font-bold text-xs mb-1">Roll No.:</label>
            <input type="text" value="3" readOnly className="text-slate-800 w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" />
          </div>
          <div className="mb-2">
            <label className="text-slate-900 block font-bold text-xs mb-1">Aadhar Card No.:</label>
            <input type="text" value="345678901234" readOnly className="text-slate-800 w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-sm font-bold mb-1">Travel Information</h2>
        <div className="mb-2">
          <label className="text-slate-900 block font-bold text-xs mb-1">Destination:</label>
          <input type="text" value="vashi" readOnly className="text-slate-800 w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" />
        </div>
        <div className="mb-2">
          <label className="text-slate-900 block font-bold text-xs mb-1">Class:</label>
          <input type="text" value="First" readOnly className="text-slate-800 w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" />
        </div>
        <div className="mb-2">
          <label className="text-slate-900 block font-bold text-xs mb-1">Duration:</label>
          <input type="text" value="Monthly" readOnly className="text-slate-800 w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" />
        </div>
        <div className="mb-2">
          <label className="text-slate-900 block font-bold text-xs mb-1">Line:</label>
          <input type="text" value="Harbour" readOnly className="text-slate-800 w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs" />
        </div>
      </div>
      <div className="mt-4 relative">
        <div className="absolute bottom-2 right-2 border-2 border-gray-400 p-2">
          <p className="text-xs font-bold mb-1">Stamp Section</p>
          <div className="w-12 h-12 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default PdfTicketForm;