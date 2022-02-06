import HeaderBar from "../components/HeaderBar";
import Head from 'next/head'
import CartItem from "../components/CartItem";
import CartStats from "../components/CartStats";
import HeaderBarSpace from "../components/HeaderBarSpace";
import useMediaQuery from "../hooks/useMediaQuery";
import { useSelector, useDispatch } from 'react-redux';

const css = {
    wrapperLeft: {
        // backgroundColor: `white`,
        width: `65%`,
        float: `left`,
    },
    wrapperRight: {
        // backgroundColor: `tan`,
        position: `fixed`,
        right: `0px`,
        width: `30%`,
        float: `left`,
        marginRight: `20px`,
    },
}

const cssMediaBelow600 = {
    wrapperLeft: {
        ...css.wrapperLeft,
        ...{
            width: `100%`
        },
    },
    wrapperRight: {
        ...css.wrapperRight,
        ...{
            position: `fixed`,
            bottom: `0px`,
            width: `100%`,
        },
    },
}

function Cart() {
    const isMediaAbove600px = useMediaQuery('(min-width: 800px)');

    const a = isMediaAbove600px ? css.wrapperLeft : cssMediaBelow600.wrapperLeft;
    const b = isMediaAbove600px ? css.wrapperRight : cssMediaBelow600.wrapperRight;

    console.log(a);

    const cartItems = useSelector((state) => state.cart.value)
    console.log(cartItems);
    // const reactCartItems = cartItems.map((cartItem) => <CartItem data={data}></CartItem>)

    return (
        <div>
            <HeaderBarSpace/>

            <div style={a}>
                {/* <CartItem/> */}
                {cartItems.map((cartItem) => <CartItem data={cartItem}></CartItem>)}
            </div>
            <div style={b}>
                <CartStats/>
            </div>

            <HeaderBar active={1}/>
        </div>
    );
}
export default Cart;