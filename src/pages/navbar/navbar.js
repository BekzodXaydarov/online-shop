import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as i from '../../assets/svgs/index'
import "./navbar.css";

export default function Navbar({ book, setBook, setBuy, buy }) {
  const [open, setOpen] = useState(false);
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
    const ex2 = buy.find((x) => {
      return x.id === product.id;
    });
    setBuy(
      buy.map((item) => {
        return item.id === product.id
          ? { ...ex2, quantity: ex2.quantity + 1 }
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
    if (exsite.quantity === 0) {
      setBook(
        book.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  }
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
  function Open() {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }
  const Price = book.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <>
      <nav>
        <div className="Logo">
          <Link to="/">
            <h1>Logo</h1>
          </Link>
        </div>
        <div>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li><Link to='/buy'>Buy</Link></li>

        </div>
        <div>
          <button onClick={() => Open()}>
            <i.Cart />
            <p>{book.length}</p>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="cart_nav">
          {book.length === 0 ? (
            <div className="nav_error">
              <h1 className="nav_error_h1">Bayda Product yo`q</h1>
            </div>
          ) : (
            <div className="nav_cart_wrapper">
              <div className="cart_wrap">
                {book.map((item) => {
                  return (
                    <div key={item.id} className="nav_cart">
                      <img src={item.img} alt="" />
                      <div>
                        <h1>
                          <span>Title</span>:{item.title}
                          <br />
                          <span>Price</span>:{item.price}$
                        </h1>
                        <br />
                      </div>
                      <div>
                        <button className="btn_dec" onClick={() => dec(item)}>
                          -
                        </button>
                        <input type="number" value={item.quantity} />
                        <button className="btn_inc" onClick={() => inc(item)}>
                          +
                        </button>
                        <button
                          className="btn_delete"
                          onClick={() => rem(item)}
                        >
                          delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="form">
                <h1>Jami:{Price}</h1>
                <Link to='/buy'><button className="btn">Jo`natish</button></Link>
                <button className="btn_close" onClick={() => setOpen(false)}>
                  X
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
