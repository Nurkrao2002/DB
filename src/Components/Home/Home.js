import React from 'react'
import "./Home.css"
import Navbar from "../Navbar/Navbar"
import Sidebar from '../Sidebar/Sidebar'


const Home = () => {
  return (
    <>
    <Navbar />
    <Sidebar />
    <div className="App d-flex">
            <Sidebar />
            <div className="content flex-grow-1">
                <div className="container mt-5">
                    <h1>Welcome to My Website</h1>
                    <p>This is the main content area.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home