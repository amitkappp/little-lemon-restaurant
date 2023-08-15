// This is a fake API that simulates a server call to fetch and submit data, as the URL provided in the project is not working.

const results = [
  ["17:30", "18:15", "19:45", "20:15", "21:30", "22:00"],
  ["17:00", "18:30", "19:00", "20:30", "22:00"],
  ["17:15", "18:00", "19:00", "20:00", "21:00", "22:00"],
  ["17:00", "18:00", "19:00", "20:10", "21:00", "22:00"],
  ["17:00", "18:00", "19:00", "21:00", "22:00"],
  ["17:15", "20:00", "21:30", "22:00"],
  ["18:00", "19:30", "20:30", "21:45", "22:00"],
  ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  ["No available times"],
  ["17:15", "18:30", "19:10", "20:15", "21:00", "22:00"],
];

const random = () => {
  return Math.floor(Math.random() * 10);
};

const fetchAPI = (date) => {
  return results[random()];
};

const submitAPI = (reservation) => {
  const response = random() > 5 ? true : false;
  return response;
};

export { fetchAPI, submitAPI };
