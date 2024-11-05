import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {bagActions} from "../store/BagSlice"
import { MdAddPhotoAlternate } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";


function HomeItem({item}) {
  
   const bagItems=useSelector(store=>store.bag);
   const elementFound=bagItems.indexOf(item.id)>=0;
     

const dispatch= useDispatch()
  const handacardclik=()=>{
    dispatch(bagActions.addToBag(item.id))
  };
  const handlremove=()=>{
    dispatch(bagActions.removeBag(item.id))
    
  };

  return (
    <div>
       <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {/* <button className="btn-add-bag" onClick={handacardclik}>Add to Bag</button> */}

        {elementFound?<button type="button" class="btn btn-add-bag btn-danger" 
        onClick={handlremove}
        >
      <RiDeleteBin5Fill />
        Remove
        </button>:
         <button type="button" class="btn btn-add-bag btn-success"
         onClick={handacardclik}
         >
           <MdAddPhotoAlternate />
           Add to Bag</button>
        }

     
      
    </div>
    </div>
  )
}

export default HomeItem
