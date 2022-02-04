import { Text, Grid, Button } from '@nextui-org/react';
// import { Grid } from '@nextui-org/react';
import Link from 'next/link'

const css = {
    wrapper: {
        top: `0px`,
        left: `0px`,
        width: `100%`,
        position: `fixed`,
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
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
        margin: '15px',
    }
}


function HeaderBar(props) {
    return ( 
        <div style={css.wrapper}>
            <Grid.Container justify="space-between">
                <Grid>
                    <Link href="/">
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
                            <Button auto color ="gradient" rounded bordered ghost css={css.button}>Cart</Button>
                        </a>
                    </Link>
                </Grid>
            </Grid.Container>
        </div> 
    );
}

export default HeaderBar;