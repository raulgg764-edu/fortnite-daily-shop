import './ItemDetails.css'
import {IconClose} from './Icons.jsx'
import { useState } from 'react';



export function ItemDetails(props){
    
    const [modal,setModal]=useState(props.show);
    

    return(
        <>
        
        { modal && 
            <div className="item-modal">
                <section className="card">
                    <div className='close-section'><button onClick={()=>{setModal(!modal);}} className='close-button'><IconClose className='close-icon'/></button></div>
                    <h1 className='card-title'>titulo</h1>
                    <h2>images</h2>
                </section>
            </div>
        }
        </>
    )
}
