import { Schema } from "mongoose";

const personSchema = Schema({
  name: {
    type: String,
    required: [true, "Name of the person is required"],
  },
  number: {
    type: String,
    required: [true, "number of the person is required"],
  },

  age: {
    type: Number,
    required: [true, "Age of the person is required"],
  },
  isWorking: {
    type: Boolean,
    required: [false, "working state of person should be mentioned"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Date of birth of person is required"],
  },
});

export default personSchema;
