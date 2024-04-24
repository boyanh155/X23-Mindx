import mongoose from "mongoose";

import StudentModel from "@/app/model/Student";
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://boyanh155:MindX123987@cluster0.te8onbr.mongodb.net/test"
    );
    console.log("MongoDB Connected...");
  } catch (err: any) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export const getStudents = async () => {
  // "use server";
  await connectDB();
  const students = await StudentModel.find();
  return students;
};
export const createStudent = async (student: any) => {
  // "use server";
  await connectDB();
  const newStudent = new StudentModel(student);
  await newStudent.save();
  return newStudent;
};
