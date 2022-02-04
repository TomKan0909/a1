import { Text } from '@nextui-org/react';
import { Grid } from '@nextui-org/react';
import Link from 'next/link'


const css = {
    text: {
        fontFamily: `'Roboto', sans-serif`, // MUST LOAD FONT IN HEAD TAG
        fontWeight: `400`,
        fontSize: `16px`,
        color: `gray`,
        transition: '.3s',
        '&:hover': {
            color: `black`,
        },
    },
    textActive: {
        color: `black`,
    },
}


function HeaderBar(props) {
    return ( 
        <div>
            <Grid.Container justify="space-between">
                <Grid>
                    <Link href="/shop">
                        <a>
                            <Text css={ props.active === 0 ? {...css.text, ...css.textActive} : css.text}>SHOP</Text>
                        </a>
                    </Link>
                </Grid>
                <Grid>
                    <Link href="/cart">
                        <a>
                            <Text css={ props.active === 1 ? {...css.text, ...css.textActive} : css.text}>CART</Text>
                        </a>
                    </Link>
                </Grid>
            </Grid.Container>
        </div> 
    );
}

export default HeaderBar;