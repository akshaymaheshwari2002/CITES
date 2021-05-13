import Config from '@config';

const BASE_URL = Config.BACKEND_BASE_URL;

export const getMasterDatasConfig = () => ({
  url: `${BASE_URL}/v1/master-datas`,
  method: 'GET',
  headers: {'Content-Type': 'application/json'},
});

export const createFeedbackConfig = () => ({
  url: `${BASE_URL}/v1/feedbacks`,
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
});

export const updateFeedbackConfig = ({feedbackId} = {}) => ({
  url: `${BASE_URL}/v1/feedbacks/${feedbackId}`,
  method: 'PATCH',
  headers: {'Content-Type': 'application/json'},
});

export const getFeedbackConfig = ({feedbackId} = {}) => ({
  url: `${BASE_URL}/v1/feedbacks/${feedbackId}`,
  method: 'GET',
  headers: {'Content-Type': 'application/json'},
});
