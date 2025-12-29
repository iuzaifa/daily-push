import React from "react";

const StudentCard = ({ student }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex space-x-6 font-sans w-full max-w-md">
      {/* Photo */}
      <div>
        <img
          src={student.photo || "https://i.pravatar.cc/150?img=3"}
          alt={student.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
        />
      </div>

      {/* Details */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800">{student.name}</h2>
        <p className="text-sm text-gray-500">{student.email}</p>
        <p className="text-sm text-gray-500">{student.phone}</p>

        <div className="mt-2 text-gray-700 text-sm space-y-1">
          <p><span className="font-medium">Father:</span> {student.father}</p>
          <p><span className="font-medium">Mother:</span> {student.mother}</p>
          <p><span className="font-medium">Previous Education:</span> {student.previousEducation}</p>
          <p><span className="font-medium">Current Class/Grade:</span> {student.currentEducation}</p>
          <p><span className="font-medium">Fee Status:</span> {student.feeStatus}</p>
          <p><span className="font-medium">Admission Date:</span> {student.admissionDate}</p>
          <p><span className="font-medium">Status:</span> {student.passout ? "Passout" : "Enrolled"}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
