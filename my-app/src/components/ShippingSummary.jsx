import React from "react";

function ShippingSummary(props) {
  const address = props.address;
  console.log(address);
  return (
    <div>
      <span className="bold-underline">Shipping Address:</span>
      <div>
        {address.street}, {address.suburbTown}, {address.city}, {address.postcode}
      </div>
    </div>
  );
}

export default ShippingSummary;
