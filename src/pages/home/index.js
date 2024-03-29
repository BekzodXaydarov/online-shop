import React, { useMemo, useState } from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import * as i from '../../assets/svgs/index'

export default function Home({ data, addtocart, book, setBook, buy, setBuy }) {
  const [value, setValue] = useState("");
  const record = useMemo(
    () =>
      value?.length > 0
        ? data.filter((f) => value === "all" ? data : f.category.toLowerCase().includes(value))
        : data,
    [value, data]
  );

  const isSelectedProduct = (item) => book.find((prod) => prod.id === item.id);
  // inc
  function inc(product) {
    const exsite = book.find((x) => {
      return x.id === product.id;
    });
    const ex = buy.find((x) => {
      return x.id === product.id
    })
    setBook(
      book.map((item) => {
        return item.id === product.id
          ? { ...exsite, quantity: exsite.quantity + 1 }

          : item;
      })
    );
    setBuy(
      buy.map((item) => {
        return item.id === product.id
          ? { ...ex, quantity: ex.quantity + 1 }
          : item;
      })
    );

  }
  // dec
  function dec(product) {
    const exsite = book.find((x) => {
      return x.id === product.id;
    });
    const ex = buy.find((x) => {
      return x.id === product.id
    })
    setBook(
      book.map((item) => {
        return item.id === product.id
          ? { ...exsite, quantity: exsite.quantity - 1 }
          : item;
      })
    );
    setBuy(
      buy.map((item) => {
        return item.id === product.id
          ? { ...ex, quantity: ex.quantity - 1 }
          : item;
      })
    );
    if (exsite.quantity > 0) {
      setBook(
        book.filter((x) => {
          return x.id !== product.id;
        })
      );
      setBuy(
        buy.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  }

  return (
    <div className="home">
      {/* <h1 className="home_h1">Online Shop's products</h1> */}
      <form onSubmit={(e) => e.preventDefault()}>
        <button value="all" onClick={(e) => setValue(e.target.value)}>All</button>
        <button value="phone" onClick={(e) => setValue(e.target.value)}> Phone</button>
        <button value="pc" onClick={(e) => setValue(e.target.value)}>Pc</button>
        <button value="planshet" onClick={(e) => setValue(e.target.value)}>Planshet</button>
      </form>

      <div className="home_wrapper">
        {record.map((item) => {
          return (
            <div className="home_card" key={item.id}>
              <NavLink to={`product/${item.id}`} >
                <img src={item.img} alt="" />
                <h2>{item.title}</h2>
              </NavLink>
              <div className="home_body">
                <h3>{item.price}$</h3>
                {isSelectedProduct(item)
                  ? <div className="btn_wr">
                    <button className="btn_dec" onClick={() => dec(item)}>
                      -
                    </button>
                    <input type="number" />
                    <button className="btn_inc" onClick={() => inc(item)}>
                      +
                    </button>
                  </div>
                  : <button onClick={() => addtocart(item)}><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ color: "white" }}
                  >
                    <path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path>
                    <circle cx="10.5" cy="19.5" r="1.5"></circle>
                    <circle cx="16.5" cy="19.5" r="1.5"></circle>
                  </svg></button>}

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
