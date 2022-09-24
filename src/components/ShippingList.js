import React, { useState } from 'react'
import ShippingForm from './ShippingForm';
function ShippingList() {
    const [items,setItems]= useState([]);
      const addToList= (item) => {
        console.log(item);
        const itemsCopy = [...items];
        itemsCopy.push(item)
        setItems(itemsCopy);
      }
  return (
    <div className='jl'>
       
        <ShippingForm  addToListCallback = {(value) => addToList(value)} />

        <h1 className='pk'>SHIPPPING  LIST</h1>
        <table>
        
            <th>TITLE</th>
            <th>WEIGHT</th>
            <th>COLOR</th>
            <th>PLACE</th>
            <tbody>
                {
                    items.map(item => {
                        return (
                            <tr key={item.title}>
                                <td>{item.title}</td>
                                <td>{item.weight}</td>
                                <td>
                                    <div style = {{backgroundColor: item.color,width:"60px", height:"30px",}} ></div>
                                </td>
                                <td>{item.place}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ShippingList