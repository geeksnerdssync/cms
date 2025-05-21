const mongoose = require("mongoose");
const Material = require("../models/material.model");

const mongoUri = "mongodb://localhost:27017/yourdbname"; // Replace with your actual MongoDB URI

async function findMaterialsMissingFaculty() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const materials = await Material.find({ faculty: { $exists: false } });
    console.log("Materials missing faculty field:", materials);

    await mongoose.disconnect();
  } catch (error) {
    console.error("Error finding materials missing faculty:", error);
    process.exit(1);
  }
}

findMaterialsMissingFaculty();
