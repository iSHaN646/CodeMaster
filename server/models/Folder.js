const mongoose = require("mongoose");

// Define the Folder schema
const FolderSchema = new mongoose.Schema({
  FolderName: {
    type: String,
  },
  subFolder: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "SubFolder",
    },
  ],
});

// Export the Folder model
module.exports = mongoose.model("Folder", FolderSchema);
