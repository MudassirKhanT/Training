import { useEffect, useState } from "react";
const UseFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }, 2000);
  }, [url]);
  return [data, setData];
};
export default UseFetch;
