import React, { useState } from 'react';

function MyComponent() {
  // create use state for every element
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  // write a function for each state
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event){
    setQuantity(event.target.value);
  }

  function handleCommentChange(event){
    setComment(event.target.value);
  }

  function handlePaymentChange(event){
    setPayment(event.target.value);
  }

  function handleShippingChange(event){
    setShipping(event.target.value);
  }

  // return HTML values
  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type='number' />
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handleCommentChange} placeholder='Enter text here'/>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Master">Master</option>
        <option value="GiftCard">Gift Card</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input type="radio" value="Pick Up"
        checked = {shipping === "Pick Up" }
        onChange={handleShippingChange}/>
        Pickup
      </label> <br />

      <label>
        <input type="radio" value="Delivery" 
        checked = {shipping === "Delivery"}
        onChange={handleShippingChange}/>
        Delivery
      </label>
      <p>Shipping: {shipping}</p>

    </div>
  );
}

export default MyComponent;
