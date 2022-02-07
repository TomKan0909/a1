import { Card, Grid } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import Image from 'next/image'
import { Button } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import {React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeFromCart, increaseQuantity, decreaseQuantity} from '../features/cart/cartSlice'
import { calculatePrice } from '../utils/util';

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

function CartItem({ data }) {
    // const [quantity, setQuantity] = useState(1);

    // function increment () {
    //     setQuantity(quantity + 1)
    // }

    // function decrement () {
    //     if (quantity > 1){
    //         setQuantity(quantity - 1)
    //     }else{
    //         setQuantity(1)
    //     }
    // }

    const cartData = data[0]
    const quantity = data[1];
    const dispatch = useDispatch();
    

    return (
        <Grid.Container css={css.board} wrap="nowrap">
            <Grid>
                <div style={{display:"flex", alignItems: 'center', height: `100%`}}>
                    <Card bordered cover float="left">
                      <Card.Image 
                          src={cartData.img}
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
                            <Text css={{...css.text, ...css.textName, marginLeft:"40px", marginRight:"40px"}}>{cartData.title}</Text>
                        </Grid>
                        <Grid>
                            <Text css={{...css.text, ...css.textPrice}}>{calculatePrice(quantity, cartData.price)}</Text>
                        </Grid>
                    </Grid.Container>
                    <Grid.Container justify="space-between" alignItems='center' wrap="nowrap">
                        <Grid>
                            <Button.Group css={{marginLeft:"40px"}} size="xs">
                                <Button shadow auto color="gradient" onClick={() => dispatch(decreaseQuantity(cartData))}>-</Button>
                                <Button shadow auto ghost clickable="false" color="gradient">{quantity}</Button>
                                <Button shadow auto color="gradient" onClick={() => dispatch(increaseQuantity(cartData))}>+</Button>
                            </Button.Group>
                        </Grid>
                        <Grid>
                            <Button size="xs" auto ghost color="error" onClick={() => dispatch(removeFromCart(cartData))}>Remove</Button>
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