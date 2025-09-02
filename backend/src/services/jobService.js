import Job from "../models/jobModel.js";

export const createJobService = async (data) => {
  const job = new Job(data);
  return await job.save();
};

export const getJobsService = async (filters = {}) => {
  return await Job.find(filters).sort({ date: -1 });
};

export const getJobByIdService = async (id) => {
  return await Job.findById(id);
};

export const deleteJobService = async (id) => {
  return await Job.findByIdAndDelete(id);
};
