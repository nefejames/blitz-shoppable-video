import Cart from "app/components/Cart"
import shoppable from "app/data"
import { useState } from "react"

const Product = () => {
  const [cartItem, setCartItem] = useState(null)

  const addToCart = () => {
    setCartItem({
      imgUrl: shoppable.products[0].publicId,
      name: shoppable.products[0].productName,
    })
  }
  return (
    <div className="product-container ">
      <div className="product">
        <img src={shoppable.products[0].publicId} alt="a product" />
        <span>$20:00</span>
        <span>{shoppable.products[0].productName}</span>
        <button onClick={addToCart}>Buy</button>
      </div>

      <Cart cartItem={cartItem} />
    </div>
  )
}

export default Product
