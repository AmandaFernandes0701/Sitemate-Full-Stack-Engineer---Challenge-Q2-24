const api = require('./api');

exports.createIssue = async (issueData) => {
  await api.post(`/issue`, { ...issueData });
};

exports.getAllIssues = async () => {
  const response = await api.get(`/issue`);
  return response.data;
};

exports.deleteIssue = async (id) => {
  await api.delete(`/issue/${id}`);
};

exports.updateIssue = async (id, issueData) => {
  await api.put(`/issue/${id}`, issueData);
};