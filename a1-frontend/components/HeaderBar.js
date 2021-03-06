import { Text, Grid, Button } from '@nextui-org/react';
// import { Grid } from '@nextui-org/react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const css = {
    wrapper: {
        top: `0px`,
        left: `0px`,
        width: `100%`,
        position: `fixed`,
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    },
    text: {
        padding: `0px 40px`,
        // fontFamily: `'Roboto', sans-serif`, // MUST LOAD FONT IN HEAD TAG
        fontWeight: `400`,
        fontSize: `16px`,
        // color: `gray`,
        transition: '.3s',
        // '&:hover': {
        //     color: `black`,
        // },
    },
    textActive: {
        color: `black`,
    },

    button: {
        margin: '20px',
    }
}


function HeaderBar(props) {
    const cartLength = useSelector((state) => state.cart.value.length)
    
    return ( 
        <div style={css.wrapper}>
            <Grid.Container justify="space-between">
                <Grid>
                    <Link href="/shop">
                        <a>
                            {/* <Text css={ props.active === 0 ? {...css.text, ...css.textActive} : css.text}>SHOP</Text> */}
                            <Button auto color="gradient" rounded bordered ghost css={css.button}>Shop</Button>
                        </a>
                    </Link>
                </Grid>
                <Grid>
                    <Link href="/cart">
                        <a>
                            {/* <Text css={ props.active === 1 ? {...css.text, ...css.textActive} : css.text}>CART</Text> */}
                            <Button auto color ="gradient" rounded bordered ghost css={css.button}>Cart ({cartLength})</Button>
                        </a>
                    </Link>
                </Grid>
            </Grid.Container>
        </div> 
    );
}

export default HeaderBar;