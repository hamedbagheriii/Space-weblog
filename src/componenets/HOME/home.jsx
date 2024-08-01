import React from 'react';

const Home = () => {
    return (
        <div className='text-center w-100 row homeCompo mt-4 container-fluid'>
            <div className="col-12 col-lg-5 d-flex align-items-center justify-content-center">
                <div className="home_content d-flex ps-5 gap-4 flex-column text-white">
                    <span className='mini_title d-flex '>SO , YOU WANT TO TRAVEL TO</span>
                    <span className='title d-flex'>SPACE</span>
                    <span className='caption d-flex'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque, quod excepturi inventore veritatis quaerat esse dolorem rerum repellendus numquam? Molestias excepturi optio voluptates, quod vero cumque inventore pariatur ipsum.</span>
                </div>
            </div>
            <div className='col-12 col-lg-4'></div>
            <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center">
                <div className="circle bg-white rounded-circle d-flex align-items-center justify-content-center fs-3">
                    EXPLORE
                </div>
            </div>
        </div>
    );
}

export default Home;
