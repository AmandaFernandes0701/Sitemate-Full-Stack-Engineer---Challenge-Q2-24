const requesterService = require('./RequesterService');

const useCreateIssue = async (issueData) => {
  const create = await requesterService.createIssue(issueData).then((res) => {
    return res;
  });
  return create;
};

const useGetAllIssues = async () => {
  try {
    const issues = await requesterService.getAllIssues();
    return issues;
  } catch (error) {
    console.error('Error fetching issues:', error.message);
    throw error;
  }
};

const useDeleteIssue = async (id) => {
  try {
    const response = await requesterService.deleteIssue(id);
    return response.data;
  } catch (error) {
    console.error('Error deleting issue', error);
    throw error;
  }
};

const useUpdateIssue = async (id, issueData) => {
  try {
    const response = await requesterService.updateIssue(id, issueData);
    return response.data;
  } catch (error) {
    console.error('Error updating issue', error);
    throw error;
  }
};

module.exports = {
  useCreateIssue,
  useGetAllIssues,
  useDeleteIssue,
  useUpdateIssue,
};
