import React, { useEffect, useState } from 'react'
import "./DBList.css"
import Navbar from "../Navbar/Navbar"
import DocumentTitle from '../DocumentTitle/DocumentTitle'
// import Axios from 'axios'
import axios from 'axios'
// import { response } from 'express'



const DBList = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    collectionsfunction()
  })
  const collectionsfunction = async () => {
    try {
      await axios.get("http://localhost:1000/dev/v1/collections").then (response=>{
        const collections = response.data
        setData(collections.data)
      }).catch(error=>{
        console.error("Errror",error)
      })
    } catch (error) {
      console.log("error",error)
    }
  }
  const getColorClass = (index) => {
    const colorClasses = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];
    return colorClasses[index % colorClasses.length];
  };
  
    DocumentTitle('DB | Lists | Offline')
  return (
    <>
    <Navbar />
    {/* <div>
        {data.length > 0 ? data.map((item, index) => <div key={index}>{item}</div>) : <div>No Collections Available</div>}
      </div> */}
    {/* <div>
      {data[0]}
    </div> */}
     {/* <div className="containerr">
        {data.length > 0 ? data.map((item, index) => (
          <div key={index} className="collection-item">{item}</div>
        )) : <div className="no-collections">No Collections Available</div>}
      </div> */}
      <div className="containerr">
        {data.length > 0 ? data.map((item, index) => (
          <div key={index} className={`collection-item ${getColorClass(index)}`}>{item}</div>
        )) : <div className="no-collections">No Collections Available</div>}
       
      </div>
    </>
  )
}


export default DBList

// import React, { useState } from 'react';
// import axios from 'axios';

// const DBList = () => {
//     DocumentTitle('DB | Lists | Offline')
//     const [form, setForm] = useState({
//         user: '',
//         host: '',
//         password: '',
//         port: '',
//         database: ''
//     });
//     const [databases, setDatabases] = useState([]);
//     const [connected, setConnected] = useState(false);
//     const [error, setError] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm({
//             ...form,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');

//         try {
//             const response = await axios.post('http://localhost:5000/connect', form);
//             setDatabases(response.data);
//             setConnected(true);
//         } catch (error) {
//             setError('Error connecting to the database');
//             console.error('Error connecting to the database:', error);
//         }
//     };

//     if (connected) {
//         return (
//             <div className="DBList">
//                 <header className="DBList-header">
//                     <h1>Connected Databases</h1>
//                     <ul>
//                         {databases.map((db, index) => (
//                             <li key={index}>{db.datname}</li>
//                         ))}
//                     </ul>
//                 </header>
//             </div>
//         );
//     }

//     return (
//         <>
      
//         <div className="DBList">
//             <header className="DBList-header">
//                 <h1>Enter Database Details</h1>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="user"
//                         placeholder="User"
//                         value={form.user}
//                         onChange={handleChange}
//                         required
//                     />
//                     <input
//                         type="text"
//                         name="host"
//                         placeholder="Host"
//                         value={form.host}
//                         onChange={handleChange}
//                         required
//                     />
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         value={form.password}
//                         onChange={handleChange}
//                         required
//                     />
//                     <input
//                         type="text"
//                         name="port"
//                         placeholder="Port"
//                         value={form.port}
//                         onChange={handleChange}
//                         required
//                     />
//                     <input
//                         type="text"
//                         name="database"
//                         placeholder="Database"
//                         value={form.database}
//                         onChange={handleChange}
//                         required
//                     />
//                     <button type="submit">Connect</button>
//                 </form>
//                 {error && <p className="error">{error}</p>}
//             </header>
//         </div>
//         </>
//     );
// };

// export default DBList;
