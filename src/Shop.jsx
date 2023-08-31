import {rarities} from './rarities.js'
import vbuck from './assets/vbuck.png'
import './Shop.css'
import { useStore } from './hooks/useStore'

export function Shop(){
    
    const [updateRotation, updateStore, loading] = useStore();

    return (
        <div className='shop'>
            {  loading ? <div className='loading'>Loading...</div> 
            //not loading
            :updateRotation && Object.keys(updateRotation).map((sections)=>(
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
                                        <p className='itemPrice'>{items.price.finalPrice}</p><img className='coin' src={vbuck} alt='vbuck image'></img>
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