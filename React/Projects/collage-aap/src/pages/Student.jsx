import React from 'react';
import StudentCard from '../components/student/StudentCard';


const Student = () => {
  const studentData = {
    photo: "https://i.pravatar.cc/150?img=10",
    name: "Ali Khan",
    email: "alikhan@example.com",
    phone: "+91 9876543210",
    father: "Ahmed Khan",
    mother: "Sara Khan",
    previousEducation: "High School - Science",
    currentEducation: "Grade 12 - Science",
    feeStatus: "Paid",
    admissionDate: "2024-06-15",
    passout: false,
  };
  return (
    // <div className="bg-white rounded-lg shadow p-6">
    //   <h1 className="text-3xl font-bold text-gray-900 mb-4">Student</h1>
    //   <p className="text-gray-600">Manage student records and information.</p>

       
    // </div>
     <div className="p-6 bg-gray-50 min-h-screen flex justify-center">
        <StudentCard student={studentData} />
      </div>
  );
};

export default Student;