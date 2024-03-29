import React, { useEffect } from "react";
import { Link, Route, Routes, useParams, useNavigate, useLocation } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Single from "../pages/product";
import User from "../pages/user";
import Buy from "../pages/buy";

// const Home = () => {
//   const navigate = useNavigate()

//   return (
//     <div>
//       <div onClick={() => navigate('/')}>Home</div>
//       <div onClick={() => navigate('/cart')}>cart</div>
//       <div onClick={() => navigate(`/product/${Math.random() * 10}`)}>product 20</div>
//     </div>
//   )
// }
// const Cart = () => (
//   <div>
//     <Link to='/'>Home</Link>
//   </div>
// )
// const Product = () => {
//   const id = useParams()
//   return (
//     <div>
//       <h1 style={{ height: "200dvh" }}>Product {id?.id}</h1>
//       <Link to='/'>Home</Link>
//     </div>
//   )
// }
export default function RootRouter({ data, book, setBook, addtocart, buy, setBuy }) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" })
  }, [pathname])
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<Product />} /> */}
      <Route
        path="/"
        element={
          <Home
            data={data}
            setBook={setBook}
            book={book}
            addtocart={addtocart}
            buy={buy}
            setBuy={setBuy}

          />
        }
      />
      <Route path="/cart" element={<Cart book={book} setBook={setBook} />} />
      <Route path="/product/:id" element={<Single book={book} data={data} setBook={setBook} />}
      />
      <Route path="/user" element={<User book={book} setBook={setBook} data={data} />} />
      <Route path="/buy" element={<Buy buy={buy} setBuy={setBuy} data={data} />} />
    </Routes>
  );
}
