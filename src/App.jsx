import { TimerStore } from './TimerStore'
import { Shop } from './Shop'
import './cosmeticsList.css'
import './app.css'
//import {data} from './mocks/fortnite-data.json'

//const items=data.items;



/*function CosmeticsList(){
  return(
    <ul className='cosmetics-list'>
      {
        items.map((res)=>(
            <li className='itemSlot' key={res.id}>
              <p className='itemName'>{res.name}</p>
              <img src={res.images.icon} alt={res.name} className='itemImage'/>
            </li>
        ))
      }
    </ul>
  )
}*/

function App() {

  return (
    <div className='page'>
      <header className='title'>
        <h1>Fortnite Daily Shop 🛒</h1>
      </header>
      <main>
       
        <TimerStore></TimerStore>
        <Shop></Shop>
      </main>
    </div>
  )
}

export default App
