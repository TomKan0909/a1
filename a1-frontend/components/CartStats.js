import { Grid } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import Image from 'next/image';
import { Container, Row, Col } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Input } from '@nextui-org/react';


const css = {
    wrapper: {
        width: `100%`,
        padding: `40px`,
    },
    seperator: {
        marginTop: `20px`,
        marginBottom: `20px`,
        height: `1px`,
        backgroundColor: `lightgrey`,
    },
    input: {
        cursor: "pointer",
    }
}

function CartStats() {
    return (
        <div style={css.wrapper}>

            <Grid.Container justify="space-between">
                <Grid>
                    Subtotal
                </Grid>
                <Grid>
                    $100.00
                </Grid>
            </Grid.Container>
            <Grid.Container justify="space-between">
                <Grid>
                    Discount
                </Grid>
                <Grid>
                    -$20.00
                </Grid>
            </Grid.Container>
            <Grid.Container justify="space-between">
                <Grid>
                    Tax
                </Grid>
                <Grid>
                    $10.00
                </Grid>
            </Grid.Container>
            <div style={css.seperator}></div>
            <Grid.Container justify="space-between">
                <Grid>
                    Total
                </Grid>
                <Grid>
                    $90.00
                </Grid>
            </Grid.Container>
            <Grid.Container wrap="nowrap">
                <Grid xs={12}>
                    <Input fullWidth="true" placeholder="Promo" />
                </Grid>
                <Grid xs>
                    <Button auto >Apply</Button>
                </Grid>
            </Grid.Container>
            <Button auto style={{width: '100%'}}>Submit Order</Button>
        </div>
    );
}

export default CartStats;