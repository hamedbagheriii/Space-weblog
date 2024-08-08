import React, { useEffect, useState } from 'react';
import lunchIMG1 from './technology/image-launch-vehicle-portrait.jpg'
import lunchIMG2 from './technology/image-space-capsule-portrait.jpg'
import lunchIMG3 from './technology/image-spaceport-portrait.jpg'



const Technology = () => {
    const allData = [
        {title : 'launch vehicle' , id : 0 , img : lunchIMG1} ,
        {title : 'space capsule' , id : 1 , img : lunchIMG2} ,
        {title : 'space port' , id : 2 , img : lunchIMG3} ,
    ]
    const [ index , setIndex] = useState(0);
    const [ data , setData] = useState({...allData[index]});

    const setIndexSlider = ()=>{
        setTimeout(() => {
            if(index == 2){
                setIndex(0)
            } 
            else(
                setIndex(()=>index + 1) 
            )
        }, 8000); 
    }

    useEffect(() => {
        setIndexSlider()
    }, []);

    useEffect(() => {
        setData({...allData[index]})
        setIndexSlider()
    }, [index]);


    return (
        <div className='TechnologyCompo container-fluid ps-lg-5 mx-auto row mb-5'>
            <span className='title text-white w-100 text-center ps-lg-0 mt-5'>04 SPACE LANCH 101</span>
            <div className="col-12 col-lg-5 d-flex flex-column align-items-center justify-content-start mt-5 mt-lg-0">
                <div className='d-flex flex-column align-items-center justify-content-center Technology_IMG'>
                    {allData.map(i=>(
                        <img key={i.id} src={i.img} className={i.id == index ? 'mx-auto w-75 active' : 'mx-auto w-75 d-none'} />
                    ))}
                </div>
            </div>
            <div className="col-12 col-lg-7 h-100 text-white d-flex align-items-center justify-content-center mt-4 mt-lg-0">
                <div className="w-100 h- row align-items-center">
                    <div className='gap-3 h-100 d-flex flex-column col-12 col-lg-9'>
                        <span className='d-block person_category w-100 mt-5 fs-5'>THE terminalogy</span>
                        <span className='content_title d-block'>{data.title}</span>
                        <span className='content_caption w-100'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae exercitationem at eos rem. Sed temporibus sit repellendus deleniti, vero illo nobis impedit ipsam. Aut nisi atque animi pariatur excepturi!
                        </span>
                    </div>
                    <div className='col-12 col-lg-3 gap-4 pt-lg-5 h-100 mt-5 mt-lg-0 align-items-center justify-content-around d-flex flex-row flex-lg-column'>
                        {allData.map(i=>(
                            <div key={i.id+1} className={i.id == index ? ' bg-white text-dark rounded-circle circle_tech border-1 border-white ' : 'p-2 bg-dark border-white border-1 rounded-circle circle_tech '}>
                                {i.id+1}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technology;
