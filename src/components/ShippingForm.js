import React ,{useState} from 'react'

function ShippingForm(props) {
  const [title,setTitle] = useState("");
  const [weight,setWeight] = useState("");
  const [color,setColor] = useState("");
  const [place,setPlace] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        title:title,
        weight:weight,
        color:color,
        place:place
        
    }
    props.addToListCallback(data)
}

  return (
    <div className='pl' ><h1 className='jk'>SHIPPING FORM</h1>
    <form  onSubmit={handleSubmit}>
    <label>ITEM NAME <b>:</b></label>
    <input type="text"  value={title} placeholder="Title" onChange={ (e) => setTitle(e.target.value)} />
    
    <br></br>
    <label >ITEM WEIGHT<b>:</b></label>
    
    <input type="text" value={weight}  placeholder="Item weight" onChange={ (e) => setWeight(e.target.value)} /><br></br>
    <label >ITEM COLOR<b>:</b></label>
    <input type="color" value={color} placeholder="Item color" onChange={ (e) => setColor(e.target.value)} /><br></br>
    <label >PLACE<b>:</b></label>
    <input type="text" value={place}  placeholder="place" onChange={ (e) => setPlace(e.target.value)} /><br></br>
    <button>SUBMIT</button>
    </form>
    </div>
  )
}

export default ShippingForm