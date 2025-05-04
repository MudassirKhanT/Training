import { useEffect, useState } from "react";
const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => setError(err.message));
    }, 2000);
  }, [url]);
  return [data, setData, error];
};
export default UseFetch;
