import { Card, Grid } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import Image from 'next/image'
import { Button } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import {React, useState } from 'react';

const css = {
    board: {
        backgroundColor: `#EEFFF4`,
        borderRadius: `25px`,
        border: `2px solid #206C7A`,
        height: `auto`,
        width: `100%`,
        marginLeft: `20px`,
        padding: `10px`
    },
    text: {
        // fontFamily: `'Roboto', sans-serif`, // MUST LOAD FONT IN HEAD TAG
        fontWeight: `300`,
        color: `black`,
    },
    textName: {
        fontWeight: `750`,
        fontSize: `32px`,
    },
    textRemove: {
        cursor: `pointer`,
        color: `gray`,
        textAlign: `right`,
    },
    textPrice: {
        fontWeight: `400`,
        fontSize: `32px`,
        textAlign: `right`,
    },
}

function CartItem() {
    const [quantity, setQuantity] = useState(1);

    function increment () {
        setQuantity(quantity + 1)
    }

    function decrement () {
        if (quantity > 1){
            setQuantity(quantity - 1)
        }else{
            setQuantity(1)
        }
    }



    return (
        <Grid.Container css={css.board}>
            <Grid>
                <Card bordered cover float="left">
                    <Card.Image 
                        src="/punk2890.png"
                        alt="cat"
                        width="auto"
                        height="auto"
                        css={{
                            maxHeight:"180px",
                            maxWidth:"180px"
                        }}
                        // max-height="200px"
                        // max-width="200px"
                    />
                </Card>
            </Grid>
            
            {/* { <Image src="/cat.jpg" alt="cat" width="180px" height="180px" /> } */}
            <Grid xs alignItems='center'>
                <Grid.Container justify="space-between">
                    <Grid >
                        <Text css={{...css.text, ...css.textName, marginLeft:"20px"}}>Product Name</Text>
                        <Grid.Container wrap="nowrap" css={{marginLeft:"20px"}}>
                                <Button shadow auto color="gradient" onClick={decrement}>-</Button>
                                <Button shadow auto ghost clickable="false" color="gradient">{quantity}</Button>
                                <Button shadow auto color="gradient" onClick={increment}>+</Button>
                        </Grid.Container>
                    </Grid>
                    <Grid>
                        <div>
                            <Text css={{...css.text, ...css.textPrice}}>Ξ 4200</Text>
                        </div>
                        <div>
                            <Button auto ghost color="error">Remove</Button>
                            {/* <Text css={{...css.text, ...css.textRemove}}>REMOVE</Text> */}
                        </div>
                    </Grid>
                </Grid.Container>
            </Grid> 
        </Grid.Container>
    );
}

// function Test() {
//     return(
//         <Grid.Container css={css.board}>
//             <Card>
//                 <Card.Image ></>
//             </Card>
//         </>
//     )
// }


export default CartItem;