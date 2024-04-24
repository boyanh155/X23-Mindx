import { Schema, model, models } from "mongoose";

export interface IStudent {
  name: string;
  age: number;
  isMale: boolean;
  gpa: number;
}

export const StudentSchema = new Schema<IStudent>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  isMale: { type: Boolean, required: true },
  gpa: { type: Number, required: true },
});
StudentSchema.index({ name: 1, age: 1 });

const _model = models.Student || model<IStudent>("Student", StudentSchema);

export default _model;

// Path: src/app/model/Teacher.ts
