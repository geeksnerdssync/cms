const mongoose = require("mongoose");
const Material = require("../models/material.model");

const mongoUri = "mongodb://localhost:27017/yourdbname"; // Replace with your actual MongoDB URI

async function cleanupOrphanedMaterials() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Find materials with missing or null faculty references
    const orphanedMaterials = await Material.find({
      $or: [
        { faculty: { $exists: false } },
        { faculty: null }
      ]
    });

    console.log("Orphaned materials found:", orphanedMaterials);

    if (orphanedMaterials.length === 0) {
      console.log("No orphaned materials to clean up.");
      await mongoose.disconnect();
      return;
    }

    // Optionally delete orphaned materials
    // Uncomment the following lines to delete them
    /*
    const deleteResult = await Material.deleteMany({
      _id: { $in: orphanedMaterials.map(m => m._id) }
    });
    console.log(`Deleted ${deleteResult.deletedCount} orphaned materials.`);
    */

    await mongoose.disconnect();
  } catch (error) {
    console.error("Error cleaning up orphaned materials:", error);
    process.exit(1);
  }
}

cleanupOrphanedMaterials();
