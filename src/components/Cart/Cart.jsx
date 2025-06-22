import { useContext, useEffect, useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosPrivate";
import { AuthContext } from "../../Provider/AuthProvider";

const Cart = () => {
    const { user, localUserInfo } = useContext(AuthContext);
    const [cart, setCart] = useState();
    const [transactions, setTransactions] = useState();
    const [refetch, setRefetch] = useState(prev => !prev);
    // console.log(transactions);

    const axiosSecure = useAxiosSecure();

    const getCartFromStorage = () => {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    };
    const clearCartFromStorage = () => {
        localStorage.removeItem('cart');
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const handlePayment = (name, price, id) => {
        const userId = localUserInfo._id;
        // console.log(id);

        axiosSecure.post(`/payments/${userId}`, { price, name, userId })
            .then(res => {
                if (res.status == '200') {
                    alert('Payment done!');
                    console.log(id);
                    
                    let cart = JSON.parse(localStorage.getItem("cart")) || [];
                    const idToRemove = id;
                    cart = cart.filter(item => item.id !== idToRemove);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    setRefetch(!refetch);
                }

            })

    };


    useEffect(() => {
        if (!user?.email) return; // Ensure email exists before fetching

        setCart(getCartFromStorage);
        // transaction history
        axiosSecure.get(`/payments/${localUserInfo?._id}`)
            .then(res => {
                    setTransactions(res.data);
                // setDatas(res.data)
            })
            .catch(err => console.error("Error fetching data:", err));
    }, [user?.email, refetch]);

    console.log(transactions);

    return (
        <div className="m-4 w-full">
            {/* this is payment section */}
            {/* list of dues */}
            <div className="w-full">
                <p className="font-bold text-3xl">Payment Due</p>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-full mt-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Duration</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total Price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart?.map((cart, idx) => (
                                    <tr key={idx}>
                                        <th>{idx + 1}</th>
                                        <td>{cart?.name}</td>
                                        <td>{cart?.duration}</td>
                                        <td>{cart?.quantity}</td>
                                        <td>{cart?.price}</td>
                                        <td>{cart?.price * cart?.quantity} BDT</td>
                                        <td>
                                            <button
                                                onClick={() => handlePayment(cart?.name, cart?.price * cart?.quantity, cart.id)}
                                                className="btn btn-sm btn-success"
                                            >
                                                Pay
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* list of Transaction */}
            <div className="w-full">
                <p className="font-bold text-3xl">Transaction History</p>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-full mt-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Duration</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total Price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                transactions?.map((transactions, idx) => (
                                    <tr key={idx}>
                                        <th>{idx + 1}</th>
                                        <td>{transactions?.paymentData?.houseName}</td>
                                        <td>{transactions?.from}</td>
                                        <td>{transactions?.to}</td>
                                        <td>{transactions?.data?.payment_date}</td>
                                        <td>{transactions?.data?.tran_id}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;