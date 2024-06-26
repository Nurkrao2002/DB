import React from 'react'
import "./Services.css"
import Navbar from "../Navbar/Navbar"
import DocumentTitle from '../DocumentTitle/DocumentTitle'

const Services = () => {
  DocumentTitle('DB | Services')
  const services = [
    {
      title: 'Web Development',
      description: 'We offer professional web development services to help you build a strong online presence.',
      icon: '🌐',
    },
    {
      title: 'Graphic Design',
      description: 'Our graphic design services will help you create stunning visuals for your brand.',
      icon: '🎨',
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings with our expert SEO services.',
      icon: '🔍',
    },
    {
      title: 'Digital Marketing',
      description: 'Reach a wider audience with our comprehensive digital marketing strategies.',
      icon: '📈',
    },
  ];

  return (
    <>
    <Navbar />
    {/* <h1>
      This Page is belongs to Services Page
    </h1> */}
    <div className="services-container">
      <header className="services-header">
        <h1>Our Services</h1>
      </header>
      <section className="services-content">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </section>
    </div>


    </>
    
  )
}


export default Services




