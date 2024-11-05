import React from 'react'
import BagSummery from '../components/BagSummery'
import BagItem from '../components/BagItem'
import {useSelector} from "react-redux"
function Bag() {
 
const bagItems=  useSelector(store=>store.bag)
const items=  useSelector(store=>store.items)

 const finalitems=items.filter(item=>{
  const itemIndex=bagItems.indexOf(item.id);
  return itemIndex>=0;
 })

  return (
    <>
      
    <main>
      <div classNameName="bag-page">
        <div classNameName="bag-items-container">
         
         {finalitems.map((item)=>(<BagItem item={item}/>))}
        </div>
        <BagSummery/>

      </div>
    </main>
    
    </>
  )
}

export default Bag
