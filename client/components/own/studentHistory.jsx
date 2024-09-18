import React, { useEffect, useState } from 'react';

const HistoryPage = ({ formData }) => {
  const [formattedDates, setFormattedDates] = useState([]);

  // Function to format date
  function formatDate(inputDate) {
    const date = new Date(inputDate);

    // Format as "YYYY-MM-DD HH:MM:SS"
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
  }

  // Format dates on component mount
  useEffect(() => {
    const formattedDatesArray = formData.map(form => formatDate(form.approvalDate));
    setFormattedDates(formattedDatesArray);
  }, [formData]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Application History</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left font-semibold">Duration</th>
              <th className="py-3 px-6 text-left font-semibold">Source</th>
              <th className="py-3 px-6 text-left font-semibold">Class</th>
              <th className="py-3 px-6 text-left font-semibold">Approval Date</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((form, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-6">{form.duration}</td>
                <td className="py-3 px-6">{form.destination}</td>
                <td className="py-3 px-6">{form.className}</td>
                <td className="py-3 px-6">{formattedDates[index]}</td> {/* Display formatted date */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryPage;
