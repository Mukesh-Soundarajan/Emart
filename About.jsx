import React from 'react';
import {NavLink} from 'react-router-dom';
import img from '../images/home.jpeg'

const About = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
            <div className="col-md-6">
                <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut eius voluptatibus consequuntur eligendi eaque cumque necessitatibus tenetur? Praesentium facere, maiores inventore labore reprehenderit ea dolorum. At quos ut maiores voluptatem doloribus quasi architecto. Consectetur accusantium atque animi quasi, ut quidem. Ullam, tempora maxime, itaque reiciendis soluta dicta fuga voluptates, in assumenda temporibus magni quam praesentium accusantium harum facilis nesciunt! Quasi hic doloribus quas esse explicabo impedit assumenda ut incidunt placeat ad consequuntur eum, laudantium praesentium aspernatur magnam amet voluptas veniam?</p>
                <NavLink to='/contact' className='btn btn-outline-primary mt-4 mx-3 px-4'>Contact Us</NavLink>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <img src={img} alt="img" className='my-5' height="400px" width="400px"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
