import React, { useRef, useState } from 'react';
import moonIMG from './destination/image-moon.png';
import marsIMG from './destination/image-mars.png';
import eurupaIMG from './destination/image-europa.png';
import titanIMG from './destination/image-titan.png';


const Destiantion = () => {
    const [title , setTitle] = useState({name:'MOON' , km:225 , time:'9 MONTHS' , img : moonIMG})

    const moonActive = useRef()
    const marsActive = useRef()
    const eurupaActive = useRef()
    const titanActive = useRef()

    const setActive = (e)=>{
        moonActive.current.className ='destination_Category'
        marsActive.current.className ='destination_Category'
        eurupaActive.current.className ='destination_Category'
        titanActive.current.className ='destination_Category'

        const categroy_Class = 'border-bottom border-3 pb-2 border-white destination_Category';
        switch (e.target.innerHTML) {
            case 'MOON':
                moonActive.current.className = categroy_Class;
                setTitle({name : e.target.innerHTML , km : 225 , time : '9 MONTHS' , img : moonIMG});
            break;

            case 'MARS':
                marsActive.current.className = categroy_Class
                setTitle({name : e.target.innerHTML , km : 600 , time : '1.5 year' , img : marsIMG});
            break;

            case 'EURUPA':
                eurupaActive.current.className = categroy_Class
                setTitle({name : e.target.innerHTML , km : 2000 , time : '2 year' , img : eurupaIMG});
            break;

            case 'TITAN':
                titanActive.current.className = categroy_Class
                setTitle({name : e.target.innerHTML , km : 8000 , time : '4 year' , img : titanIMG});
            break;

            default:
                break;
        }
    }

    
    return (
        <div className='mt-4 destinationCompo container-fluid p-0 mx-auto row'>
            <div className="col-12 col-lg-6  d-flex flex-column align-items-center justify-content-around  gap-4">
                <span className='title text-white w-100 text-center ps-lg-5'>01  PICK YOUR DESTINATION</span>
                <div className="content w-100  d-flex justify-content-center align-items-center">
                    <img src={title.img} className='moonIMG mx-auto' />
                </div>
            </div>
            <div className="col-12 col-lg-6 text-white d-flex align-items-center justify-content-center mt-4 mt-lg-0">
                <div className="row d-flex flex-column align-items-center justify-content-around gap-4 gap-lg-0 mb-5 pt-5 w-100 h-100 ">
                    <div className="col-12 d-flex fs-5 gap-3 justify-content-center align-items-center justify-content-lg-start ">
                        <span ref={moonActive} className='border-bottom border-3 pb-2 border-white destination_Category ' onClick={(e)=>setActive(e)}>MOON</span>
                        <span ref={marsActive} className='destination_Category'  onClick={(e)=>setActive(e)}>MARS</span>
                        <span ref={eurupaActive} className='destination_Category' onClick={(e)=>setActive(e)}>EURUPA</span>
                        <span ref={titanActive} className='destination_Category' onClick={(e)=>setActive(e)}>TITAN</span>
                    </div>
                    <div className="col-12">
                        <span className='content_title d-block'>{title.name}</span>
                        <span className='content_caption w-100'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae exercitationem at eos rem. Sed temporibus sit repellendus deleniti, vero illo nobis impedit ipsam. Aut nisi atque animi pariatur excepturi!
                        </span>
                    </div>
                    <div className="col-12 mt-4 mt-lg-0">
                        <div className="w-100 bg-white" style={{padding:.7}}></div>
                        <div className="row ps-2 pt-4">
                            <div className='col-6'>
                                <span className='d-block'>AVG DISTANCE :</span>
                                <span className='d-block fs-3'>{title.km} MIL. KL</span>
                            </div>
                            <div className='col-6'>
                                <span className='d-block '>EST TRAVEL TIME :</span>
                                <span className='d-block fs-3'>{title.time}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destiantion;
