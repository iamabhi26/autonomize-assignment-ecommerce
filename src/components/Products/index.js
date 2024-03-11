import {Component} from 'react'
import ProductItem from '../ProductItem'
import './index.css'

class Products extends Component {
    state = {productsList: []}

    componentDidMount() {
        this.getProducts()
    }

    getProducts = async() => {
        const productsUrl = 'https://fakestoreapi.com/products'
        const options = {
            method: 'GET',
        }
        const response = await fetch(productsUrl, options)
        const data = await response.json()
        console.log(data)
        const updatedData = data.map(eachProduct => ({
            category: eachProduct.category,
            description: eachProduct.description,
            id: eachProduct.id,
            image: eachProduct.image,
            price: eachProduct.price,
            title: eachProduct.title
        }))
        this.setState({productsList: updatedData})
    }

    render() {
        const {productsList} = this.state

        return (
            <div className='container'>
                <h1 className='main-heading'>E-Commerce App</h1>
                <ul className='products-list-container'>
                    {productsList.map(eachItem => (
                        <ProductItem productDetails={eachItem} key={eachItem.id} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Products