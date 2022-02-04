import HeaderBar from "../components/HeaderBar";
import HeaderBarSpace from "../components/HeaderBarSpace";
import { Grid } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from 'next/link'
import { Text } from "@nextui-org/react";

const css = {
    wrapper: {
        height: `calc(100vh - 60px)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
    },
    wrapperCenter: {
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
            {/* <HeaderBarSpace/> */}
                <div style={css.wrapper}>
                    <Grid.Container css={css.wrapperCenter} direction="column" justify="center" alignItems="center">
                        <img src="/0b5.jpeg" style={{width: '50%'}} alt="cat"/>
                        <Grid><Text css={{...css.text, ...css.textTitle}}>Thank you for your purchase!</Text>
                        </Grid>
                        <Grid><Text css={{...css.text, ...css.textSubtitle}}>Your order ID is #1312312</Text></Grid>
                        <Grid>
                            <Link href="/">
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