import HeaderBar from "../components/HeaderBar";
import Head from 'next/head'
import CartItem from "../components/CartItem";
import CartStats from "../components/CartStats";
import HeaderBarSpace from "../components/HeaderBarSpace";

const css = {
    wrapperLeft: {
        backgroundColor: `pink`,
        width: `70%`,
        float: `left`,
    },
    wrapperRight: {
        backgroundColor: `tan`,
        position: `fixed`,
        right: `0px`,
        width: `30%`,
        float: `left`,
    },
}

function Cart() {
    return (
        <div>
            <HeaderBarSpace/>
            
            <div style={css.wrapperLeft}>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
            <div style={css.wrapperRight}>
                <CartStats/>
            </div>

            <HeaderBar active={1}/>
        </div>
    );
}
export default Cart;