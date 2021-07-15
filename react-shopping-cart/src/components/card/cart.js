import React from "react";
import { Button } from "@material-ui/core";
const cart = ({ cartElements, removeButton, proceedTotalAmount }) => {
  return (
    <div>
      {cartElements.length} cart is available
      <div>
        {cartElements.map(item => (
          <div>
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
        ))}
      </div>
      <div>
        {cartElements.length != 0 && (
          <div>
            Total : $ {cartElements.reduce((a, c) => a + c.price * c.count, 0)}
            <Button
              onClick={proceedTotalAmount}
              color="primary"
              variant="outlined"
            >
              Proceed
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default cart;
