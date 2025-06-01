const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MarksSchema = new Schema({
  student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  semester: { type: Number, required: true },
  branch: { type: Schema.Types.ObjectId, ref: "Branch", required: true },
  marks: [
    {
      subject: { type: Schema.Types.ObjectId, ref: "Subject", required: true },
      marksObtained: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Marks", MarksSchema);
