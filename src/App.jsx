import { TimerStore } from './TimerStore'
import { Shop } from './Shop'
import './App.css'
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
        <h1>Fortnite Daily Item Shop 🛒</h1>
      </header>
      <main>
       
        <TimerStore></TimerStore>
        <Shop></Shop>
      </main>
      <footer className='principal-footer'>Made by <a target='_blank' rel='noreferrer' href='https://github.com/raulgg764-edu'>RaulGG764🚀</a></footer>
    </div>
  )
}

export default App
