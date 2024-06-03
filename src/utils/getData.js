import data from "./data";


const getData = (name) => 
  data.filter(item => item.id === name)
  .reduce((obj, data) => {return { ...obj, data }}, {}).data;

export default getData;