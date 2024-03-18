const api = require('./api');

exports.createIssue = async (issueData) => {
  return await api.post(`/issue`, { ...issueData });
};

exports.getAllIssues = async () => {
  const response = await api.get(`/issue`);
  return response.data;
};

exports.deleteIssue = async (id) => {
  return await api.delete(`/issue/${id}`);
};

exports.updateIssue = async (id, issueData) => {
  return await api.put(`/issue/${id}`, issueData);
};
