const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  },
);

const IssueModel = mongoose.model('Issue', IssueSchema);

module.exports = IssueModel;
