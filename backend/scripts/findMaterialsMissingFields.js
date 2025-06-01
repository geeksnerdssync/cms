const mongoose = require("mongoose");
const Material = require("../models/material.model");

const mongoUri = "mongodb://localhost:27017/yourdbname"; // Replace with your actual MongoDB URI

async function findMaterialsMissingFields() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const missingSubject = await Material.find({ subject: { $exists: false } });
    const missingBranch = await Material.find({ branch: { $exists: false } });
    const missingFaculty = await Material.find({ faculty: { $exists: false } });

    console.log("Materials missing subject field:", missingSubject);
    console.log("Materials missing branch field:", missingBranch);
    console.log("Materials missing faculty field:", missingFaculty);

    await mongoose.disconnect();
  } catch (error) {
    console.error("Error finding materials missing fields:", error);
    process.exit(1);
  }
}

findMaterialsMissingFields();
