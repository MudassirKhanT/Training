// import { useState } from "react";

// function FetchData() {
//   const [aipData, setApiData] = useState([]);
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((respose) => respose.json())
//     .then((data) => setApiData(data))
//     .catch((err) => console.log(err));

//   return (
//     <>
//       <h1>Api Data Fetched</h1>
//       <ul>
//         {aipData.map((api, index) => (
//           <li key={index}>
//             {api.title}-{api.userID}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default FetchData;
