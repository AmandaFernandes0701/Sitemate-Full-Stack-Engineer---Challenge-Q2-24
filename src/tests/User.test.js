const UserController = require('../controllers/UserController');
const UserModel = require('../models/userModel');

jest.mock('../models/UserModel');

describe('UserController', () => {
  describe('create', () => {
    it('should create a new user', async () => {
      const req = { body: { name: 'John', age: 30, profession: 'Developer' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      UserModel.create.mockResolvedValue(req.body);

      await UserController.create(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(req.body);
    });

    it('should handle errors when creating a user', async () => {
      const req = { body: { name: 'John', age: 30, profession: 'Developer' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = 'Error creating user';

      UserModel.create.mockRejectedValue(new Error(errorMessage));

      await UserController.create(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'ERROR',
        error: errorMessage,
      });
    });
  });

  describe('read', () => {
    it('should retrieve all users', async () => {
      const users = [{ name: 'John', age: 30, profession: 'Developer' }];
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      UserModel.find.mockResolvedValue(users);

      await UserController.read(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(users);
    });

    it('should handle errors when retrieving users', async () => {
      const errorMessage = 'Error retrieving users';
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      UserModel.find.mockRejectedValue(new Error(errorMessage));

      await UserController.read(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'ERROR',
        error: errorMessage,
      });
    });
  });

  describe('destroy', () => {
    it('should delete a user', async () => {
      const req = { params: { id: '1234567890abcdef12345678' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      UserModel.findById.mockResolvedValue({ deleteOne: jest.fn() });

      await UserController.destroy(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'User successfully deleted!',
      });
    });

    it('should handle user not found when deleting', async () => {
      const req = { params: { id: '1234567890abcdef12345678' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      UserModel.findById.mockResolvedValue(null);

      await UserController.destroy(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'User not found!' });
    });

    it('should handle errors when deleting a user', async () => {
      const errorMessage = 'Error deleting user';
      const req = { params: { id: '1234567890abcdef12345678' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      UserModel.findById.mockRejectedValue(new Error(errorMessage));

      await UserController.destroy(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'ERROR',
        error: errorMessage,
      });
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const req = {
        params: { id: '1234567890abcdef12345678' },
        body: { name: 'John Doe' },
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const updatedUser = {
        _id: '1234567890abcdef12345678',
        name: 'John Doe',
        age: 30,
        profession: 'Developer',
      };

      UserModel.findById.mockResolvedValue({
        set: jest.fn().mockReturnThis(),
        save: jest.fn().mockResolvedValue(updatedUser),
      });

      await UserController.update(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(updatedUser);
    });

    it('should handle user not found when updating', async () => {
      const req = {
        params: { id: '1234567890abcdef12345678' },
        body: { name: 'John Doe' },
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      UserModel.findById.mockResolvedValue(null);

      await UserController.update(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'User not found!' });
    });

    it('should handle errors when updating a user', async () => {
      const errorMessage = 'Error updating user';
      const req = {
        params: { id: '1234567890abcdef12345678' },
        body: { name: 'John Doe' },
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      UserModel.findById.mockRejectedValue(new Error(errorMessage));

      await UserController.update(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'ERROR',
        error: errorMessage,
      });
    });
  });
});
