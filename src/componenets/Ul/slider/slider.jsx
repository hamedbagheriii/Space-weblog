import React, { useState } from 'react';
import img1 from './destination/image-europa.png';
import img2 from './destination/image-mars.png';
import img3 from './destination/image-moon.png';
import img4 from './destination/image-titan.png';

const Slider = () => {
    const imgs = [{img : img1 , id : 1} , {img : img2 , id : 2} , {img : img3 , id : 3} , {img : img4 , id : 4}]
    const [index , setIndex] = useState(1);
    const [isTrue , setIsTrue] = useState(false)

    const handleSetSlider = (dir)=>{
        if(!isTrue){
            setIsTrue(true)
            switch (dir) {
                case 'next' :
                    if(index == 4){
                        setIndex(1)
                    } 
                    else(
                        setIndex(()=>index + 1) 
                    )                
                break;
    
                case 'prev' :
                    if(index == 1){
                        setIndex(4)
                    } 
                    else(
                        setIndex(()=>index - 1) 
                    )  
                break;
    
                default:
                    break;
            }
            setTimeout(() => {
                setIsTrue(false)
            }, 700);
        }
    }


    return (
        <>
            <div className='text-white dadada'>
                {imgs.map(i=>(
                    <img src={i.img} className={i.id == index ? 'imgActive w-50' : 'w-50'} />
                ))}
            </div>   
            <div className='w-100 bg-dark p-3'>
                <button className='btn btn-primary w-50' onClick={()=>handleSetSlider('next')}>next</button>    
                <button className='btn btn-danger w-50' onClick={()=>handleSetSlider('prev')}>prev</button>    
            </div>     
        </>
    );
}

export default Slider;
