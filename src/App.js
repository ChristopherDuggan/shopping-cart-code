import './App.css';
import { useState } from 'react';
import productsData from './data';

function App() {

    const [products, setProducts] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const handleChange = e => {
        console.log(e)
        if(e.target.id === 'name') setName(e.target.value)
        if(e.target.id === 'price') setPrice(e.target.value)
        if(e.target.id === 'description') setDescription(e.target.value)
    }


    return (
        <div>
            <h1>Big Time Shopping</h1>

            <form>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    id="name"
                    value={name}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="price">Price</label>
                <input onChange={handleChange} type="number" value={price} id="price" />
                <br />
                <label htmlFor="description">Description</label>
                <input onChange={handleChange} type="textarea" value={description} id="description" />
                <br />
                <input type="submit" />

            </form>


            <ul>
                {
                    products.map((product, index) => <li key={index}>{product.name} - {product.price} - {product.description}</li>)
                }
            </ul>
        </div>
    )
}

export default App;
