import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MetaData from "../layout/MetaData";
import { saveShippingInfo } from "../../actions/cartActions";

const Shipping = ({ history }) => {
  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [country, setCountry] = useState(shippingInfo.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingInfo({ address, city, postalCode, phoneNo, country }));
    history.push("/confirm");
  };
  return <div>Hello</div>;
};
export default Shipping;
