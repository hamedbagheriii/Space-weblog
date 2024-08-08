import React, { useEffect, useState } from 'react';
import personIMG1 from './crew/image-anousheh-ansari.png'
import personIMG2 from './crew/image-douglas-hurley.png'
import personIMG3 from './crew/image-mark-shuttleworth.png'
import personIMG4 from './crew/image-victor-glover.png'


const Crew = () => {
    const allPerson = [
        {img : personIMG1 , category : 'FLIGHT ENGINEER' , name : 'ANOUSHEH ANSARI' , id : 0} , 
        {img : personIMG2 , category : 'student' , name : 'douglas hurley' , id : 1} ,
        {img : personIMG3 , category : 'FLIGHT ENGINEER' , name : 'mark abdolaii' , id : 2} ,
        {img : personIMG4 , category : 'FLIGHT ENGINEER' , name : 'victor glover' , id : 3} ,
    ];
    const [index , setIndex] = useState(0);
    const [data , setData] = useState({...allPerson[index]});

    
    const setIndexSlider = ()=>{
        setTimeout(() => {
            if(index == 3){
                setIndex(0)
            } 
            else(
                setIndex(()=>index + 1) 
            )
        }, 5000); 
    }

    useEffect(() => {
        setIndexSlider()
    }, []);

    useEffect(() => {
        setData({...allPerson[index]})
        setIndexSlider()
    }, [index]);

    
    return (
        <div className='crewCompo container-fluid ps-lg-5 mx-auto row mb-5'>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center mt-5 mt-lg-0">
                <div className='person_IMG pt-5 px-4 d-flex flex-column align-items-end justify-content-end'>
                    {allPerson.map(i=>(
                        <img key={i.id} src={i.img} className={i.id == index ? 'mx-auto active' : 'mx-auto d-none'} />
                    ))}
                </div>
            </div>
            <div className="col-12 col-lg-6 text-white d-flex align-items-center justify-content-center mt-4 mt-lg-0">
                <div className="row d-flex flex-column align-items-center justify-content-around gap-4 gap-lg-0 pt-5 pt-lg-0 w-100 h-100 ">
                    <div className="col-12 h-100 d-flex justify-content-around flex-column">
                        <span className='title text-white w-100 text-center ps-lg-0'>03  MEET YOUR CREW</span>
                        <div className='w-100 gap-3 d-flex flex-column'>
                            <span className='d-block person_category w-100 mt-5 fs-2'>{data.category}</span>
                            <span className='content_title d-block'>{data.name}</span>
                            <span className='content_caption w-100'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae exercitationem at eos rem. Sed temporibus sit repellendus deleniti, vero illo nobis impedit ipsam. Aut nisi atque animi pariatur excepturi!
                            </span>
                        </div>
                        <div className='d-flex justify-content-center justify-content-lg-start mt-4 gap-3' style={{direction:'ltr'}}>
                            {allPerson.map(i=>(
                                <span key={i.id} className={i.id == index ? 'bg-white p-2 rounded-circle' : 'bg-dark p-2 rounded-circle'}></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Crew;
