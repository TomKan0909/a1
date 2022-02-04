import HeaderBar from "../components/HeaderBar";
import Head from 'next/head'
import CartItem from "../components/CartItem";
import CartStats from "../components/CartStats";
import HeaderBarSpace from "../components/HeaderBarSpace";
import useMediaQuery from "../hooks/useMediaQuery";

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
    const isMediaAbove600px = true; //useMediaQuery('(min-width: 800px)');

    return (
        <div>
            <HeaderBarSpace/>

            <div style={isMediaAbove600px ? css.wrapperLeft : cssMediaBelow600.wrapperLeft}>
                <CartItem/>
            </div>
            <div style={isMediaAbove600px ? css.wrapperRight : cssMediaBelow600.wrapperRight}>
                <CartStats/>
            </div>

            <HeaderBar active={1}/>
        </div>
    );
}
export default Cart;