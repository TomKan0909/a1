import { Card, Grid } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import Image from 'next/image'
import { Button } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import {React, useState } from 'react';

const css = {
    board: {
        minWidth: `300px`,
        backgroundColor: `#EEFFF4`,
        //borderRadius: `25px`,
        //border: `2px solid #206C7A`,
        height: `auto`,
        width: `100%`,
        padding: `20px`
    },
    text: {
        // fontFamily: `'Roboto', sans-serif`, // MUST LOAD FONT IN HEAD TAG
        fontWeight: `300`,
        color: `black`,
        whiteSpace: 'nowrap',
    },
    textName: {
        fontWeight: `600`,
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
        <Grid.Container css={css.board} wrap="nowrap">
            <Grid>
                <div style={{display:"flex", alignItems: 'center', height: `100%`}}>
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
                </div>
            </Grid>
            
            {/* { <Image src="/cat.jpg" alt="cat" width="180px" height="180px" /> } */}
            <Grid xs direction="column" justify='center' alignItems='center'>
                    <Grid.Container justify="space-between" alignItems='center' wrap="nowrap">
                        <Grid>
                            <Text css={{...css.text, ...css.textName, marginLeft:"40px", marginRight:"40px"}}>Product Name</Text>
                        </Grid>
                        <Grid>
                            <Text css={{...css.text, ...css.textPrice}}>Ξ 4200</Text>
                        </Grid>
                    </Grid.Container>
                    <Grid.Container justify="space-between" alignItems='center' wrap="nowrap">
                        <Grid>
                            <Button.Group css={{marginLeft:"40px"}} size="xs">
                                <Button shadow color="gradient" onClick={decrement}><div style={{width:"20px"}}>-</div></Button>
                                <Button size="sm" shadow auto ghost clickable="false" color="gradient"><div style={{width:"20px"}}>{quantity}</div></Button>
                                <Button shadow color="gradient" onClick={increment}><div style={{width:"20px"}}>+</div></Button>
                            </Button.Group>
                        </Grid>
                        <Grid>
                            <Button size="xs" auto ghost color="error">Remove</Button>
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