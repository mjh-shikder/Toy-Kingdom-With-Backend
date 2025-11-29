import React, { useEffect } from 'react';
import Card from '../Card';
import { Link } from 'react-router';
import Aos from "aos";
import 'aos/dist/aos.css'

const Popular = ({ popularData }) => {
    

      // Aos fucntion
    useEffect(() => {
        Aos.init();
    }, [])
    
    return (
        <div data-aos="fade-left" className='bg-base-100 py-10 rounded-xl'>
            <h1 className='text-4xl text-center font-semibold text-primary hover:text-secondary '>Popular Toys</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 space-y-10 place-items-center  '>
                
                {
                popularData.map(card=><Card card={card} key={card.toyId}></Card>)
                }   
                
            
            </div>
            <div className='flex justify-center '>
            <Link to={'/all-toys'} className='btn btn-secondary px-13 text-center hover:btn-primary mt-10 '>All Products</Link>
            </div>
        </div>
    );
};

export default Popular;