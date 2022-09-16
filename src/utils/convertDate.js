const convertDate = (date) => {
  const date1 = new Date(date);
  const day = date1.getDate();
  const month = date1.getMonth() + 1;
  const year = date1.getFullYear();
  return `${day}/${month}/${year}`;
};

export default convertDate;
