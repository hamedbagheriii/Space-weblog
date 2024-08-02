import React from 'react';
import moonIMG from './destination/image-moon.png';


const Destiantion = () => {
    return (
        <div className='mt-4 destinationCompo container-fluid row'>
            <div className="col-12 col-lg-6 ps-5 d-flex flex-column align-items-center justify-content-around  gap-4">
                <span className='title text-white w-100 text-center '>01  PICK YOUR DESTINATION</span>
                <div className="content w-100  d-flex justify-content-center align-items-center">
                    <img src={moonIMG} className='moonIMG mx-auto' />
                </div>
            </div>
            <div className="col-12 col-lg-6">sss</div>
        </div>
    );
}

export default Destiantion;
