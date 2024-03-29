import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";

export default function Cart({ book, setBook }) {
  // inc
  function inc(product) {
    const exsite = book.find((x) => {
      return x.id === product.id;
    });
    setBook(
      book.map((item) => {
        return item.id === product.id
          ? { ...exsite, quantity: exsite.quantity + 1 }
          : item;
      })
    );
  }
  // dec
  function dec(product) {
    const exsite = book.find((x) => {
      return x.id === product.id;
    });
    setBook(
      book.map((item) => {
        return item.id === product.id
          ? { ...exsite, quantity: exsite.quantity - 1 }
          : item;
      })
    );
    if (exsite.quantity > 0) {
      setBook(
        book.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  }
  // remov
  function rem(item) {
    const exsite = book.find((x) => {
      return x.id === item.id;
    });
    if (exsite.quantity > 0) {
      setBook(
        book.filter((x) => {
          return x.id !== item.id;
        })
      );
    }
  }
  // price
  const Price = book.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div>
      {book.length === 0 ? (
        <div className="error">
          <h1>Product yo`q Shopdan savatga soling</h1>
          <Link to="/">
            <button>Shop</button>
          </Link>
        </div>
      ) : (
        <div className="cart_wrapper">
          <div className="cart_wrap">
            {book.map((item) => {
              return (
                <div key={item.id} className="cart">
                  <img src={item.img} alt="" />
                  <div>
                    <h1>{item.title}</h1>
                    <br />
                    <span>Price:{item.price}</span>
                  </div>
                  <div>
                    <button className="btn_dec" onClick={() => dec(item)}>
                      -
                    </button>
                    <input type="number" value={item.quantity} />
                    <button className="btn_inc" onClick={() => inc(item)}>
                      +
                    </button>
                    <div>
                      <button className="btn_delete" onClick={() => rem(item)}>
                        delete
                      </button>
                      <h1>{item.price * item.quantity}$</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="form">
            <h1>Jami:{Price}</h1>
            <Link to='/buy'><button className="btn">Jo`natish</button></Link>
          </div>
        </div>
      )}
    </div>
  );
}
