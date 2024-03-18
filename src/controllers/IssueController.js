const IssueModel = require('../models/IssueModel');

class IssueController {
  async create(req, res) {
    try {
      const issue = await IssueModel.create(req.body);
      return res.status(200).json(issue);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'ERROR', error: error.message });
    }
  }

  async read(req, res) {
    try {
      const issues = await IssueModel.find();
      return res.status(200).json(issues);
    } catch (error) {
      res.status(500).json({ message: 'ERROR', error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const foundIssue = await IssueModel.findById(id);
      if (!foundIssue) {
        return res.status(404).json({ message: 'Issue not found!' });
      }
      await foundIssue.deleteOne();
      res.status(200).json({
        message: 'Issue successfully deleted!',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'ERROR', error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const foundIssue = await IssueModel.findById(id);
      if (!foundIssue)
        return res.status(404).json({ message: 'Issue not found!' });
      const issue = await foundIssue.set(req.body).save();
      res.status(200).json(issue);
    } catch (error) {
      res.status(500).json({ message: 'ERROR', error: error.message });
    }
  }
}

module.exports = new IssueController();
