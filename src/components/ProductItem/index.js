import {Link} from 'react-router-dom'
import './index.css'

const ProductItems = props => {
    const {productDetails} = props
    const {id, title, image, category, price} = productDetails
    
    return (
        <Link to={`/products/${id}`} className='link-item'>
            <li className='list-item'>
                <img src={image} alt={title} className='product-image' />
                <h1 className='product-title'>{title}</h1>
                <p className='product-price'>${price}</p>
                <p className='product-category'>Category: {category}</p>
            </li>
        </Link>
    )
}

export default ProductItems