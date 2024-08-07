import React from 'react';
import Slider from '../Ul/slider/slider';
import personIMG from './assets/crew/image-anousheh-ansari.png'


const Crew = () => {

    
    return (
        <div className='crewCompo container-fluid ps-lg-5 mx-auto row'>
            <div className="col-12 col-lg-6 text-white d-flex align-items-center justify-content-center mt-4 mt-lg-0">
                <div className="row d-flex flex-column align-items-center justify-content-around gap-4 gap-lg-0 pt-5 pt-lg-0 w-100 h-100 ">
                    <div className="col-12 h-100 d-flex justify-content-around flex-column">
                        <span className='title text-white w-100 text-center ps-lg-0'>03  MEET YOUR CREW</span>
                        <div className='w-100 gap-3 d-flex flex-column'>
                            <span className='d-block person_category w-100 mt-5 fs-2'>FLIGHT ENGINEER</span>
                            <span className='content_title d-flex w-100 '>ANOUSHEH ANSARI</span>
                            <span className='content_caption w-100'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae exercitationem at eos rem. Sed temporibus sit repellendus deleniti, vero illo nobis impedit ipsam. Aut nisi atque animi pariatur excepturi!
                            </span>
                        </div>
                        <div className=''>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center mt-5 mt-lg-0">
                <div className='person_IMG pt-5 d-flex flex-column align-items-end justify-content-end'>
                    <img src={personIMG} className='mx-auto' />
                </div>
            </div>
        </div>
    );
}

export default Crew;
