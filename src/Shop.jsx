//import {shop, currentRotation} from './mocks/fortnite-shop.json'
import {rarities} from './rarities.js'
import vbuck from './assets/vbuck.png'
import './Shop.css'
import { useState,useEffect } from 'react'


export function Shop(){
    
    const [updateStore, setUpdateStore]=useState({});
    const [updateRotation, setUpdateRotation]=useState();

    useEffect(()=>{
        fetch('https://fortniteapi.io/v2/shop?lang=en',{headers:{'Authorization':'bd754f4c-ffaf2970-866589c7-70abedf7'}}).
        then(res=>res.json()).
        then( response =>{
            setUpdateStore(response.shop);
            setUpdateRotation(response.currentRotation)
        })
        /*setUpdateStore(shop)
        setUpdateRotation(currentRotation)*/
    },[]);

    //const shopSections=updateRotation;

    //shopSections.LimitedTime=shopSections.Daily;

    return (
        <div className='shop'>
            {
                updateRotation && Object.keys(updateRotation).map((sections)=>(
                    <section key={sections} className='shopSection'>
                    <h2>{sections}</h2>
                        <ul className='shopList'>
                        {
                            updateStore.map((items)=>{

                                const itemRarity = items.series===null?items.rarity.id:items.series.id

                               if(items.section.id===sections||items.section===undefined)
                               return (
                                <li className='itemSlot' key={items.mainId} style={{backgroundImage:`url(${rarities[itemRarity]})`}}>
                                    <header className='itemHeader'>
                                        <p className='itemName'>{items.displayName}</p>
                                    </header>
                                    <img src={items.displayAssets[0].url} alt={items.displayName} className='itemImage'/>
                                    <footer className='itemPriceSection'>
                                        <p className='itemPrice'>{items.price.finalPrice}</p><img className='coin' src={vbuck}></img>
                                    </footer>
                                </li>
                               )
                            })
                        }
                        </ul>
                    </section>
                ))
                    }
        </div>
    )
}