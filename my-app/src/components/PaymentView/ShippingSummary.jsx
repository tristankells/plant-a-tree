import React from "react";

function ShippingSummary(props) {
  const address = props.address;
  console.log(address);
  return (
    <div>
      <label>Shipping Address</label>
      <span>
        {address.street},{address.suburbTown},{address.city},{address.postcode}
      </span>
    </div>
  );
}

export default ShippingSummary;
