const Cart = ({ cartItem }) => {
  return (
    <div className="cart-box">
      <div className="cart">
        <h2>Cart</h2>

        {cartItem ? (
          <div>
            <img src={cartItem.imgUrl} alt="a product" />
            <span>{cartItem.name}</span>
          </div>
        ) : (
          <span>Cart is empty</span>
        )}
      </div>
    </div>
  )
}

export default Cart
