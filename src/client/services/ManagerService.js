const issueService = require('./IssueService');

const useCreateIssue = async (issueData) => {
  const create = await issueService.createIssue(issueData).then((res) => {
    return res;
  });
  return create;
};

const useGetAllIssues = async () => {
  let issues = [];
  await issueService.getAllIssues().then((res) => {
    issues = res.data;
  });
  return issues;
};

const useDeleteIssue = async (id) => {
  try {
    const response = await issueService.deleteIssue(id);
    return response.data;
  } catch (error) {
    console.error('Error deleting issue', error);
    throw error;
  }
};

const useUpdateIssue = async (id, issueData) => {
  try {
    const response = await issueService.updateIssue(id, issueData);
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
