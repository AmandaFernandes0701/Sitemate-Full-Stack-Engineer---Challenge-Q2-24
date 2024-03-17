const IssueController = require('../controllers/IssueController');
const IssueModel = require('../models/IssueModel');

jest.mock('../models/IssueModel');

describe('IssueController', () => {
  describe('create', () => {
    it('should create a new issue', async () => {
      const req = {
        body: {
          title: 'New Issue',
          description: 'Description of the new issue',
        },
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      IssueModel.create.mockResolvedValue(req.body);

      await IssueController.create(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(req.body);
    });

    it('should handle errors when creating an issue', async () => {
      const req = {
        body: {
          title: 'New Issue',
          description: 'Description of the new issue',
        },
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const errorMessage = 'Error creating issue';

      IssueModel.create.mockRejectedValue(new Error(errorMessage));

      await IssueController.create(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'ERROR',
        error: errorMessage,
      });
    });
  });

  describe('destroy', () => {
    it('should delete an issue', async () => {
      const req = { params: { id: '1234567890abcdef12345678' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      IssueModel.findById.mockResolvedValue({ deleteOne: jest.fn() });

      await IssueController.destroy(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Issue successfully deleted!',
      });
    });

    it('should handle issue not found when deleting', async () => {
      const req = { params: { id: '1234567890abcdef12345678' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      IssueModel.findById.mockResolvedValue(null);

      await IssueController.destroy(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Issue not found!' });
    });

    it('should handle errors when deleting an issue', async () => {
      const errorMessage = 'Error deleting issue';
      const req = { params: { id: '1234567890abcdef12345678' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      IssueModel.findById.mockRejectedValue(new Error(errorMessage));

      await IssueController.destroy(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'ERROR',
        error: errorMessage,
      });
    });
  });

  describe('update', () => {
    it('should update an issue', async () => {
      const req = {
        params: { id: '1234567890abcdef12345678' },
        body: {
          title: 'Updated Issue',
          description: 'Updated description of the issue',
        },
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const updatedIssue = {
        _id: '1234567890abcdef12345678',
        title: 'Updated Issue',
        description: 'Updated description of the issue',
      };

      IssueModel.findById.mockResolvedValue({
        set: jest.fn().mockReturnThis(),
        save: jest.fn().mockResolvedValue(updatedIssue),
      });

      await IssueController.update(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(updatedIssue);
    });

    it('should handle issue not found when updating', async () => {
      const req = {
        params: { id: '1234567890abcdef12345678' },
        body: {
          title: 'Updated Issue',
          description: 'Updated description of the issue',
        },
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      IssueModel.findById.mockResolvedValue(null);

      await IssueController.update(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Issue not found!' });
    });

    it('should handle errors when updating an issue', async () => {
      const errorMessage = 'Error updating issue';
      const req = {
        params: { id: '1234567890abcdef12345678' },
        body: {
          title: 'Updated Issue',
          description: 'Updated description of the issue',
        },
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      IssueModel.findById.mockRejectedValue(new Error(errorMessage));

      await IssueController.update(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'ERROR',
        error: errorMessage,
      });
    });
  });
});
