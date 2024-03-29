import React, { useState } from 'react'
import './user.css'

export default function User({ book, setBook, data }) {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [box, setBox] = useState([])
    const [image, setImage] = useState('')
    function handleForm(e) {
        e.preventDefault()
        if (title === '' && price === '' && image === "") {
            alert('inputlarni to`ldiring')
        } else {
            setBox([...box, { id: box.length + 1, title: title, price: price, image: URL.createObjectURL(image) }])
            setTitle("")
            setPrice("")
            setImage(" ")
        }
    }
    function handleImage(event) {
        const file = event.target.files[0]
        setImage(file)
    }
    function rem(item) {
        setBox(
            box.filter((x) => {
                return x.id !== item.id;
            })
        );
    }

    return (
        <div>
            <form className='cont_user' onSubmit={(e) => handleForm(e)}>
                <input type="file" onChange={handleImage} />
                <input type="text" placeholder='Title...' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="number" placeholder='price...' value={price} onChange={(e) => setPrice(e.target.value)} />
                <button>Create</button>
            </form>
            <div className="crud_wrap">
                {
                    box.map((item) => {
                        return <div className='crud_card' key={item.id}>
                            <img src={item.image} alt="" />
                            <h1>{item.title}</h1>
                            <h2>{item.price}</h2>
                            <button onClick={() => rem(item)} className='btn_delete'>delete</button>
                        </div>
                    })
                }
            </div>

        </div>
    )
}
