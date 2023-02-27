import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function CartContainer() {
  const {cartItems, total, amount} = useSelector((store) => store.cart)

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>
            Your bag
          </h2>
          <h4  className='empty-cart'>
            is Currently empty
          </h4>
        </header>
      </section>
    )
  }
  return (
    <CartItem />
  )
}

export default CartContainer