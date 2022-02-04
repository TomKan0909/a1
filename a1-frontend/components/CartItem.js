import { Grid } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import Image from 'next/image'
import { Button } from '@nextui-org/react';
import { Input } from '@nextui-org/react';

const css = {
    board: {
        backgroundColor: `red`,
        height: `200px`,
        width: `100%`,
    },
    text: {
        fontFamily: `'Roboto', sans-serif`, // MUST LOAD FONT IN HEAD TAG
        fontWeight: `300`,
        color: `black`,
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
    return (
        <div>
            <Grid.Container css={css.board}>
                <Image src="/cat.jpg" alt="cat" width={css.board.height} height={css.board.height} />
                <Grid xs>
                    <Grid.Container justify="space-between">
                        <Grid>
                            <Text css={{...css.text, ...css.textName}}>Product Name</Text>
                            <Grid.Container wrap="nowrap">
                                    <Button auto >-</Button>
                                    <Input initialValue={1} width="50px"/>
                                    <Button auto >+</Button>
                            </Grid.Container>
                        </Grid>
                        <Grid>
                            <div>
                                <Text css={{...css.text, ...css.textPrice}}>$10000.00</Text>
                            </div>
                            <div>
                                <Text css={{...css.text, ...css.textRemove}}>REMOVE</Text>
                            </div>
                        </Grid>
                    </Grid.Container>
                </Grid>
            </Grid.Container>
        </div>
    );
}

export default CartItem;