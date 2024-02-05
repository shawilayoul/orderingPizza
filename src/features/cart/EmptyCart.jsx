import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className='py-5'>
      <Link to="/menu">&larr; Back to menu</Link>

      <p className='py-5 font-semibold'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
