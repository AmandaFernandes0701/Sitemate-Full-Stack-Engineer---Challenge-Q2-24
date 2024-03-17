const UserModel = require('../models/userModel');

class UserController {
  async create(req, res) {
    try {
      const user = await UserModel.create(req.body);
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'ERROR', error: error.message });
    }
  }

  async read(req, res) {
    try {
      const users = await UserModel.find();
      return res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'ERROR', error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const foundUser = await UserModel.findById(id);
      if (!foundUser) {
        return res.status(404).json({ message: 'User not found!' });
      }
      await foundUser.deleteOne();
      res.status(200).json({
        message: 'User successfully deleted!',
      });
    } catch (error) {
      res.status(500).json({ message: 'ERROR', error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const foundUser = await UserModel.findById(id);
      if (!foundUser)
        return res.status(404).json({ message: 'User not found!' });
      const user = await foundUser.set(req.body).save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'ERROR', error: error.message });
    }
  }
}

module.exports = new UserController();
