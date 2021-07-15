import React,{useState} from "react";
import { Button, Paper, Divider } from "@material-ui/core";
import Form from '../forms/form'
const Cart = ({ cartElements, removeButton,checkoutFormToMain }) => {
  const [isProceed,setProceed]=useState(false)

  const checkoutForm = (forms) =>{
    console.log(forms,"in cart")
    checkoutFormToMain(forms)
  }
  const proceedTotalAmount = ()=>{
    setProceed((prev) =>!prev)
  }
  return (
    <div style= {{padding:"1rem"}}>
      {cartElements.length} cart is available
      <div>
        {cartElements.map((item) => (
          <div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <img
              style={{ width: "100px", height: "5rem" }}
              src={item.image}
              alt={item.title}
            />
            <div>{item.title}</div>
            <div>
              {item.price} x {item.count}
            </div>
            <div>
              <Button
                onClick={() => removeButton(item)}
                variant="outlined"
                color="secondary"
              >
                Remove
              </Button>
            </div>
          </div>
          <Divider/>
          </div>
        ))}
      </div>
      <div>
        {cartElements.length != 0 && (
          <>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center" ,marginTop:".25rem"}}>
              Total : ${" "}
              {cartElements.reduce((a, c) => a + c.price * c.count, 0)}
              <Button
                onClick={proceedTotalAmount}
                color="primary"
                variant="outlined"
              >
                Proceed
              </Button>
            </div>
            <div>
              {isProceed &&(
                <div style={{marginTop:"0.75rem"}}>
                  <Form checkoutForm ={checkoutForm}/>
                  </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Cart;
