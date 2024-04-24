import { getStudents } from "@/libs/connectDB";
import React from "react";

type Props = {};


// SSR CSR

// FE -> BE

const StudentPage = async (props: Props) => {

  // SSR 
  const students = await getStudents();
  
  return (
    <div>
      {students.map((student) => (
        <div key={student._id.toString()!} className="flex flex-col p-4 border-black ">
          <div>{student.name}</div>
          <div>{student.age}</div>
          <div>{student.gpa}</div>
          <div>{student.isMale}</div>
        </div>
      ))}
    </div>
  );
};

export default StudentPage;
