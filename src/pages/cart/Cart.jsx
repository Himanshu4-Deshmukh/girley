import React, { useContext, useEffect, useState } from 'react'
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Modal from '../../components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { fireDB } from '../../fireabase/FirebaseConfig';
import Cod from '../cod/Cod'

function Cart() {

  const context = useContext(myContext)
  const { mode } = context;

  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems)

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart")
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])

  const [totalAmout, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price)
    })
    setTotalAmount(temp);
    console.log(temp)
  }, [cartItems])

  const shipping = parseInt(100);

  const grandTotal = shipping + totalAmout;
  // console.log(grandTotal)

  /**========================================================================
   *!                           Payment Intigration
   *========================================================================**/ 

  const [name, setName] = useState("")
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const buyNow = async () => {
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
  
    // Ensure PhonePe SDK is loaded
    if (window.PhonePe && typeof window.PhonePe.init === 'function') {
      const pe = window.PhonePe.init({
        clientId: "M22M08OT3MZCI", // PhonePe merchant key
        order_id: 'order_id_' + name, // Replace with your order ID logic
        amount: parseInt(grandTotal * 100), // Amount in smallest currency unit (paise)
        currency: "INR",
        merchantAppName: "Krishicare",
        merchantLogoUrl: "", // Optional, merchant logo URL
        merchantVpa: "", // Optional, merchant UPI VPA
        merchantOrderId: 'order_id_' + name, // Replace with your order ID logic
        transactionDesc: "for testing purpose",
        paymentType: "UPI",
        transactionAmount: parseInt(grandTotal * 100), // Amount in smallest currency unit (paise)
        returnUrl: "", // Optional, URL to return to after payment completion
        successCallback: function(response) {
          console.log(response);
          toast.success('Payment Successful');
          
          // Handle payment success, similar to Razorpay handler
        },
        failureCallback: function(error) {
          console.error(error);
          toast.error('Payment Failed');
          
          // Handle payment failure
        },
        theme: {
          color: "#3399cc" // Customize the theme if needed
        }
      });
  
      pe.open();
    } else {
      toast.error("PhonePe SDK not initialized properly");
    }
  }
  
  return (
    <Layout >
      <div className="h-screen bg-gray-100 pt-5 mb-[60%] " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          <div className="rounded-lg md:w-2/3 ">
            {cartItems.map((item, index) => {
              const { title, price, description, imageUrl } = item;
              return (
                <div className="justify-between mb-6 rounded-lg border  drop-shadow-xl bg-white p-6  sm:flex  sm:justify-start" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '', }}>
                  <img src={imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h2>
                      <h2 className="text-sm  text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{description}</h2>
                      <p className="mt-1 text-xs font-semibold text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{price}</p>
                    </div>
                    <div onClick={() => deleteCart(item)} className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>

                    </div>
                  </div>
                </div>
              )
            })}

          </div>

          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '', }}>
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Subtotal</p>
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{totalAmout}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Shipping</p>
              <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{shipping}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3">
              <p className="text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{grandTotal}</p>
              </div>
            </div>
            {/* <Modal  /> */}
            <Modal
              name={name}
              address={address}
              pincode={pincode}
              phoneNumber={phoneNumber}
              setName={setName}
              setAddress={setAddress}
              setPincode={setPincode}
              setPhoneNumber={setPhoneNumber}
              buyNow={buyNow}
            />
            
          </div>
          
          <Cod/>

        </div>
      </div>
    </Layout>
  )
}

export default Cart



// import React, { useContext, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import myContext from '../../context/data/myContext';
// import Layout from '../../components/layout/Layout';
// import Modal from '../../components/modal/Modal';
// import { deleteFromCart } from '../../redux/cartSlice';
// import Cod from '../cod/Cod';

// function Cart() {
//   const context = useContext(myContext);
//   const { mode } = context;

//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart);

//   const [totalAmount, setTotalAmount] = useState(0);
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const shipping = 100;
//   const grandTotal = totalAmount + shipping;

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//     let tempTotal = 0;
//     cartItems.forEach(item => {
//       tempTotal += parseInt(item.price, 10);
//     });
//     setTotalAmount(tempTotal);
//   }, [cartItems]);

//   const deleteCart = (item) => {
//     dispatch(deleteFromCart(item));
//     toast.success("Deleted item from cart");
//   };

//   const buyNow = async () => {
//     if (!name || !address || !pincode || !phoneNumber) {
//       return toast.error("All fields are required", {
//         position: "top-center",
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//       });
//     }

//     // Ensure PhonePe SDK is loaded
//     if (window.PhonePe && typeof window.PhonePe.init === 'function') {
//       const pe = window.PhonePe.init({
//         clientId: "M22M08OT3MZCI",
//         order_id: `order_id_${name}`,
//         amount: grandTotal * 100,
//         currency: "INR",
//         merchantAppName: "Krishicare",
//         merchantOrderId: `order_id_${name}`,
//         transactionDesc: "Order Payment",
//         paymentType: "UPI",
//         transactionAmount: grandTotal * 100,
//         successCallback: function(response) {
//           console.log(response);
//           toast.success('Payment Successful');
//           // Handle payment success
//         },
//         failureCallback: function(error) {
//           console.error(error);
//           toast.error('Payment Failed');
//           // Handle payment failure
//         },
//         theme: {
//           color: "#3399cc"
//         }
//       });

//       pe.open();
//     } else {
//       toast.error("PhonePe SDK not initialized properly");
//     }
//   };

//   return (
//     <Layout>
//       <div className={`h-screen pt-5 mb-[60%] ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
//         <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
//         <div className="mx-auto max-w-5xl px-6 md:flex md:space-x-6 xl:px-0">
//           <div className="rounded-lg md:w-2/3">
//             {cartItems.map((item, index) => (
//               <div key={index} className={`mb-6 rounded-lg border p-6 sm:flex sm:justify-start ${mode === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
//                 <img src={item.imageUrl} alt="product" className="w-full rounded-lg sm:w-40" />
//                 <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//                   <div className="mt-5 sm:mt-0">
//                     <h2 className="text-lg font-bold">{item.title}</h2>
//                     <p className="text-sm">{item.description}</p>
//                     <p className="mt-1 text-xs font-semibold">₹{item.price}</p>
//                   </div>
//                   <div onClick={() => deleteCart(item)} className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className={`mt-6 rounded-lg border p-6 shadow-md md:mt-0 md:w-1/3 ${mode === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
//             <div className="mb-2 flex justify-between">
//               <p>Subtotal</p>
//               <p>₹{totalAmount}</p>
//             </div>
//             <div className="flex justify-between">
//               <p>Shipping</p>
//               <p>₹{shipping}</p>
//             </div>
//             <hr className="my-4" />
//             <div className="flex justify-between mb-3">
//               <p className="text-lg font-bold">Total</p>
//               <p className="text-lg font-bold">₹{grandTotal}</p>
//             </div>
//             <Modal
//               name={name}
//               address={address}
//               pincode={pincode}
//               phoneNumber={phoneNumber}
//               setName={setName}
//               setAddress={setAddress}
//               setPincode={setPincode}
//               setPhoneNumber={setPhoneNumber}
//               buyNow={buyNow}
//             />
//           </div>
//           <Cod />
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default Cart;
