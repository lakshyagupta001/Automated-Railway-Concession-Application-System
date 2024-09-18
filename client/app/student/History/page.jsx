"use client"
import HistoryPage from "@/components/own/studentHistory";
import { useState,useEffect } from "react";
import StudentNav from "@/components/own/studentUi";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState([]);
const getHistory = async () => {
    try {
      const response = await axios.get("http://localhost:5000/student-history",{withCredentials:true});
      console.log(response.data.data)
      setFormData(response.data.data);
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  }
  useEffect(() => {
    getHistory();
  }, []);
  return (
    <div>
      <StudentNav />
      <HistoryPage formData={formData} />
    </div>
  );
};

export default App;