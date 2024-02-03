import { useState } from "react";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="flex flex-col gap-5 bg-slate-200 p-2 h-lvh">
      <h2>Ready to order? Let's go!</h2>
      <form className="flex flex-col gap-4">
        <div>
          <label>First Name</label>
          <div className="">
            <input type="text" name="customer" required className="rounded-lg p-1" />
          </div>
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required className="rounded-lg p-1"/>
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required className="rounded-lg p-1"/>
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="rounded-lg p-1"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <button className="bg-yellow-500 p-1 rounded-lg">Order now</button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
