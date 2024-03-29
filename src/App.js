import Navbar from "./pages/navbar/navbar";
import RootRouter from "./routes/index";
import PhoneXsMax from "./assets/images/phone10.jfif";
import Pc from './assets/images/notebook.png'
import Planshet from './assets/images/Planshet.png'
import "./App.css";
import { useState } from "react";
import * as i from './assets/svgs/index'

function App() {
  const [book, setBook] = useState([]);
  const [buy, setBuy] = useState([])
  const addtocart = (product) => {

    setBook([...book, { ...product, quantity: 1 }]);
    setBuy([...buy, { ...product, quantity: 1 }]);
  };

  const data = [
    {
      id: 1,
      title: "I phone 15",
      price: 1300,
      img: PhoneXsMax,
      category: "Phone",
      point: 1,
      url: "https://target.scene7.com/is/image/Target/GUEST_edb5eb6a-1a4f-4475-921b-8f5d8b2ff298?qlt=65&fmt=pjpeg&hei=350&wid=350"
    },
    {
      id: 2,
      title: "I phone 14 Pro Max",
      price: 1100,
      img: PhoneXsMax,
      category: "Phone",
      url: "https://target.scene7.com/is/image/Target/GUEST_edb5eb6a-1a4f-4475-921b-8f5d8b2ff298?qlt=65&fmt=pjpeg&hei=350&wid=350"

    },
    {
      id: 3,
      title: "I phone 13 Pro Max",
      price: 800,
      img: PhoneXsMax,
      category: "Phone",
      url: "https://target.scene7.com/is/image/Target/GUEST_edb5eb6a-1a4f-4475-921b-8f5d8b2ff298?qlt=65&fmt=pjpeg&hei=350&wid=350"

    },
    {
      id: 4,
      title: "I phone 12 Pro Max",
      price: 600,
      img: PhoneXsMax,
      category: "Phone",
      url: "https://target.scene7.com/is/image/Target/GUEST_edb5eb6a-1a4f-4475-921b-8f5d8b2ff298?qlt=65&fmt=pjpeg&hei=350&wid=350"

    },
    {
      id: 5,
      title: "I phone 11 Pro Max",
      price: 400,
      img: PhoneXsMax,
      category: "Phone",
      url: "https://target.scene7.com/is/image/Target/GUEST_edb5eb6a-1a4f-4475-921b-8f5d8b2ff298?qlt=65&fmt=pjpeg&hei=350&wid=350"
    },
    {
      id: 6,
      title: "I phone Xs Max",
      price: 300,
      img: PhoneXsMax,
      category: "Phone",
      url: "https://target.scene7.com/is/image/Target/GUEST_edb5eb6a-1a4f-4475-921b-8f5d8b2ff298?qlt=65&fmt=pjpeg&hei=350&wid=350"
    },
    {
      id: 7,
      title: "I phone 8 Plus",
      price: 180,
      img: PhoneXsMax,
      category: "Phone",
      url: "https://target.scene7.com/is/image/Target/GUEST_edb5eb6a-1a4f-4475-921b-8f5d8b2ff298?qlt=65&fmt=pjpeg&hei=350&wid=350"

    },
    {
      id: 8,
      title: "Phone 25",
      price: 350,
      img: PhoneXsMax,
      category: "Phone",
      url: "https://target.scene7.com/is/image/Target/GUEST_edb5eb6a-1a4f-4475-921b-8f5d8b2ff298?qlt=65&fmt=pjpeg&hei=350&wid=350"
    },
    {
      id: 9,
      title: "Pc 2",
      price: 1305,
      img: Pc,
      category: "pc",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPw1HQxLvzdyZpJTS-s28XN0UX--LNS3E_ug&usqp=CAU"
    },
    {
      id: 10,
      title: "PC 3",
      price: 1500,
      img: Pc,
      category: "pc",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPw1HQxLvzdyZpJTS-s28XN0UX--LNS3E_ug&usqp=CAU"
    },
    {
      id: 11,
      title: "PC 4",
      price: 2800,
      img: Pc,
      category: "pc",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPw1HQxLvzdyZpJTS-s28XN0UX--LNS3E_ug&usqp=CAU"
    },
    {
      id: 12,
      title: "PC 5",
      price: 60,
      img: Pc,
      category: "pc",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPw1HQxLvzdyZpJTS-s28XN0UX--LNS3E_ug&usqp=CAU"
    },
    {
      id: 13,
      title: "PC 6",
      price: 450,
      img: Pc,
      category: "pc",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPw1HQxLvzdyZpJTS-s28XN0UX--LNS3E_ug&usqp=CAU"
    },
    {
      id: 14,
      title: "PC 7",
      price: 600,
      img: Pc,
      category: "pc",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPw1HQxLvzdyZpJTS-s28XN0UX--LNS3E_ug&usqp=CAU"
    },
    {
      id: 15,
      title: "PC 8",
      price: 180,
      img: Pc,
      category: "pc",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPw1HQxLvzdyZpJTS-s28XN0UX--LNS3E_ug&usqp=CAU"
    },
    {
      id: 16,
      title: "PC 1",
      price: 140,
      img: Pc,
      category: "pc",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPw1HQxLvzdyZpJTS-s28XN0UX--LNS3E_ug&usqp=CAU"
    },
    {
      id: 17,
      title: "Planshet 1",
      price: 500,
      img: Planshet,
      category: "planshet",
      url: "https://www.creditasia.uz/upload/iblock/313/dwg7jlf57xnmlw1l8jav8qjuckvhrey2/planshet-samsung-galaxy-tab-a8-sm-x205-32gb-dark-gray.png"
    },
    {
      id: 18,
      title: "Planshet 6",
      price: 700,
      img: Planshet,
      category: "planshet",
      url: "https://www.creditasia.uz/upload/iblock/313/dwg7jlf57xnmlw1l8jav8qjuckvhrey2/planshet-samsung-galaxy-tab-a8-sm-x205-32gb-dark-gray.png"
    },
    {
      id: 19,
      title: "Planshet 9",
      price: 400,
      img: Planshet,
      category: "planshet",
      url: "https://www.creditasia.uz/upload/iblock/313/dwg7jlf57xnmlw1l8jav8qjuckvhrey2/planshet-samsung-galaxy-tab-a8-sm-x205-32gb-dark-gray.png"
    },
    {
      id: 20,
      title: "Planshet 10",
      price: 1030,
      img: Planshet,
      category: "planshet",
      url: "https://www.creditasia.uz/upload/iblock/313/dwg7jlf57xnmlw1l8jav8qjuckvhrey2/planshet-samsung-galaxy-tab-a8-sm-x205-32gb-dark-gray.png"
    },
    {
      id: 21,
      title: "Planshet 18",
      price: 1930,
      img: Planshet,
      category: "planshet",
      url: "https://www.creditasia.uz/upload/iblock/313/dwg7jlf57xnmlw1l8jav8qjuckvhrey2/planshet-samsung-galaxy-tab-a8-sm-x205-32gb-dark-gray.png"
    },
    {
      id: 22,
      title: "Planshet 02",
      price: 7400,
      img: Planshet,
      category: "planshet",
      url: "https://www.creditasia.uz/upload/iblock/313/dwg7jlf57xnmlw1l8jav8qjuckvhrey2/planshet-samsung-galaxy-tab-a8-sm-x205-32gb-dark-gray.png"
    },
    {
      id: 23,
      title: "Planshet 9",
      price: 1900,
      img: Planshet,
      category: "planshet",
      url: "https://www.creditasia.uz/upload/iblock/313/dwg7jlf57xnmlw1l8jav8qjuckvhrey2/planshet-samsung-galaxy-tab-a8-sm-x205-32gb-dark-gray.png"
    },
    {
      id: 24,
      title: "Planshet 70",
      price: 1030,
      img: Planshet,
      category: "planshet",
      url: "https://www.creditasia.uz/upload/iblock/313/dwg7jlf57xnmlw1l8jav8qjuckvhrey2/planshet-samsung-galaxy-tab-a8-sm-x205-32gb-dark-gray.png"
    },

  ];
  return (
    <>
      <div className="container">
        <Navbar book={book} setBook={setBook} setBuy={setBuy} buy={buy} />
        <RootRouter
          data={data}
          setBook={setBook}
          book={book}
          addtocart={addtocart}
          buy={buy}
          setBuy={setBuy}
        />
      </div>
      {/* <form onSubmit={(e) => e.preventDefault()}>
        <i.Check values="salom" />
        <i.Check />
        <i.Check />
      </form> */}
    </>
  );
}

export default App;


