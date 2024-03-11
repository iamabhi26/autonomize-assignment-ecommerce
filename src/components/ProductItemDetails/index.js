import { Component } from "react";
import './index.css'

class ProductItemDetails extends Component {
  state = {productDetails: {}}

  componentDidMount() {
    this.getProductDetails()
  }

  getProductDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    console.log(data)

    const newData = {
      title: data.title,
      id: data.id,
      image: data.image,
      description: data.description,
      price: data.price,
      category: data.category,
      rating: data.rating.rate,
      count: data.rating.count,
    }
    this.setState({productDetails: newData})
  }

  render() {
    const {productDetails} = this.state
    const {title, image, description, price, rating, count} = productDetails

    return (
        <div className="product-item-container">
          <img src ={image} alt={title} className="product-item-image" />
          <h1 className="product-item-title">{title}</h1>
          <p className="product-item-description">{description}</p>
          <div className="price-container">
            <p className="product-item-price">${price}</p>
            <p className="product-item-rating">Rating: {rating}</p>
            <p className="product-item-count">Items left: {count}</p>
          </div>
        </div>
    )
  }
}

export default ProductItemDetails