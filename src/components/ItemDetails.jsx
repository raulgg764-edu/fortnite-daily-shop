import './ItemDetails.css'
import {IconClose} from './Icons.jsx'
import { useEffect, useState } from 'react';
import { useStore } from '../hooks/useStore';



export function ItemDetails({visible,visibleFunction, clickedItem}){
    
    const [ updateRotation, updateStore,loading] = useStore();
    const [showItem,setShowItem]=useState()

    const [modal,setModal]=useState(visible);
    useEffect(()=>{
        setModal(visible);
        getItem(clickedItem);
    },[visible])

    function getItem(itemID){
        const item = Object.values(updateStore).find((item)=>item.mainId===itemID)
        setShowItem(item)
    }

    const close = ()=>{
        setModal(!modal); 
        visibleFunction(false)
    }
    
    return(
        <>
        
        { modal && 
            <div className="item-modal" >
                <section className="card">
                    <section className="card-principal">
                        <section className='close-section'>
                            <button onClick={close} className='close-button'><IconClose className='close-icon'/></button>
                        </section>
                        
                        <div className='img-container'>
                            <img width={600} height={600} className='card-img' src={showItem.displayAssets[0].background} alt={showItem.name} />
                        </div>
                    </section>
                    <section className='card-details'>
                        <h1 className='card-title'>{showItem.displayName}</h1>
                        <p className='card-description'>{showItem.displayDescription}</p>
                    </section>
                </section>
            </div>
        }
        </>
    )
}
