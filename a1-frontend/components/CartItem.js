import { Grid } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import Image from 'next/image'

const css = {
    board: {
        backgroundColor: `red`,
        height: `200px`,
    },
    boardInner: {
        width: `auto`,
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
            <Grid.Container css={css.board} justify="space-between">
                <Grid.Container css={css.boardInner}>
                    <Image src="/cat.jpg" alt="cat" width={css.board.height} height={css.board.height} />
                    <Grid>
                        <Text css={{...css.text, ...css.textName}}>Product Name</Text>
                    </Grid>
                </Grid.Container>
                <Grid>
                    <div>
                        <Text css={{...css.text, ...css.textPrice}}>$10000.00</Text>
                    </div>
                    <div>
                        <Text css={{...css.text, ...css.textRemove}}>REMOVE</Text>
                    </div>
                </Grid>
            </Grid.Container>
        </div>
    );
}

export default CartItem;