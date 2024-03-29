import React, { useMemo, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { cities } from "../../utils/constants";
import ReactSelect from "react-select";
import './product.css'

const Single = ({ data }) => {
  // useState
  const [value, setValue] = useState(cities[0]);
  const [regionValue, setRegionValue] = useState(null);
  const [region, setRegion] = useState(null)
  const [opened, setOpened] = useState(false);
  // useRef=====================================
  const ref = useRef(null)
  // ====
  const { id } = useParams();
  const product = useMemo(
    () => data.find((prod) => +prod.id === +id),
    [id, data]
  );
  let bot = {
    TOKEN: "7135501066:AAE16ML8LpYOm0dWAn4o6RFnYB1O3R24UpE",
    chatID: "6900877326"
  }
  function handleForm(e) {
    e.preventDefault()
    fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${encodeURI(`Buyurtma!\n\nBuyurtmachi ismi:${ref.current.value}\n\nMahsulot: ${product.title}\n\nNarxi: ${product.price},000,000 uzs\n\nYetkazib berish manzili: ${region}`)}&parse_mode=HTML`, {
      method: "GET",
    }).catch(e => console.log('Hato ' + e))
    ref.current.value = ''
  }

  return <div className="product">

    <div className="product_div">
      <div>
        <img src={product.img} alt="" />
      </div>
      <div>
        <strong>salom</strong>
        <h2>title:{product.title}</h2>
        <h3>price:{product.price}$</h3>
        <p><b>description</b>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic explicabo est possimus ad quasi blanditiis beatae perferendis et ullam?</p>
      </div>

    </div>
  
  </div>;
};

export default Single;
