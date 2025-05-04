import { useEffect, useState } from "react";
const UseFetch = (url) => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setBook(data))
        .catch((err) => console.log(err));
    }, 2000);
  }, [book]);
  return [book, setBook];
};
export default UseFetch;
