import HeaderBar from "../components/HeaderBar";
import HeaderBarSpace from "../components/HeaderBarSpace";
import { Grid } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from 'next/link'
import { Text } from "@nextui-org/react";
import Image from 'next/image';
import pepe from '../public/0b5.jpeg'

const css = {
    wrapper: {
        height: `100vh`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
    },
    text: {
        // fontFamily: `'Roboto', sans-serif`, // MUST LOAD FONT IN HEAD TAG
        color: `black`,
        padding: `2px`,
        textAlign: `center`,
    },
    textTitle: {
        paddingTop: `20px`,
        fontWeight: `500`,
        fontSize: `32px`,
    },
    textSubtitle: {
        fontWeight: `400`,
        fontSize: `16px`,
        paddingBottom: `18px`,
    },
    textButton: {
        fontWeight: `400`,
        fontSize: `16px`,
        padding: `10px`,
        color: `white`,
    },
}

function OrderComplete () {
    return (
        
        <div>
            {/* <Image src={pepe}></Image> */}
            {/* <HeaderBarSpace/> */}
                <div style={css.wrapper}>
                    <Grid.Container css={css.wrapperCenter} direction="column" justify="center" alignItems="center">
                        
                        {/* <div style={{width: `65%`, margin:"0 auto"}}> */}
                            <Image src={pepe}></Image>
                        {/* </div> */}
                        {/* <img src="/0b5.jpeg"/> */}
                        <Grid><Text css={{...css.text, ...css.textTitle}}>Thank you for your purchase!</Text>
                        </Grid>
                        <Grid><Text css={{...css.text, ...css.textSubtitle}}>Your order ID is #1312312</Text></Grid>
                        <Grid>
                            <Link href="/shop">
                                <a>
                                    <Button auto shadow color="gradient" >
                                        <Text css={{...css.text, ...css.textButton}}>RETURN TO SHOP</Text>
                                    </Button>
                                </a>
                            </Link>
                        </Grid>
                    </Grid.Container>
                </div>
            {/* <HeaderBar active={1}/> */}
        </div>
    );
}

export default OrderComplete;