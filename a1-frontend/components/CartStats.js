import { Grid, Tooltip } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import Image from 'next/image';
import { Container, Row, Col } from '@nextui-org/react';
import { Button, Card, Divider} from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import {MoreCircle} from 'react-iconly'

const css = {
    wrapper: {
        width: `100%`,
        padding: `40px`,
        backgroundColor: `#CBECFE`,
        borderRadius: `25px`,
        border: `2px solid #206C7A`,
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
                    <Text>
                        Subtotal
                    </Text>
                </Grid>
                <Grid>
                    <Text>
                        Ξ 4200   
                    </Text>
                </Grid>
            </Grid.Container>
            <Grid.Container justify="space-between">
                <Grid>
                    <Grid.Container>
                        <Grid>
                            <Text>
                                Discount
                            </Text>
                        </Grid>
                        <Grid>
                            <Tooltip placement="bottom" content={
                                <Card css={{ w: "200px" }}>
                                <Card.Header>
                                <Text b>Available Discounts</Text>
                                </Card.Header>
                                <Divider/>
                                <Card.Body css={{ py: '$10' }}>
                                <Text h5>
                                    0xl23k4jf34: - 20% 
                                </Text>
                                <Text h5>
                                    0x23l4kjv96: - 30%  
                                </Text>
                                <Text h5>
                                    0xdfglkj54v: - Ξ 50    
                                </Text>
                                </Card.Body>
                            </Card>
                            }>
                                <MoreCircle fill="currentColor" filled/>
                            </Tooltip>
                        </Grid>
                    </Grid.Container>
                </Grid>
                <Grid>
                    <Text>
                        - Ξ 200                       
                    </Text> 
                </Grid>
            </Grid.Container>
            <Grid.Container justify="space-between">
                <Grid>
                    <Text>
                        Tax
                    </Text>
                </Grid>
                <Grid>
                    <Text>
                        Ξ 20                       
                    </Text> 
                </Grid>
            </Grid.Container>
            <div style={css.seperator}></div>
            <Grid.Container justify="space-between">
                <Grid>
                    <Text>
                        Total
                    </Text>
                </Grid>
                <Grid>
                    <Text>
                        Ξ 4020                       
                    </Text>
                </Grid>
            </Grid.Container>
            <Grid.Container wrap="nowrap">
                <Grid xs={12}>
                    <Input fullWidth="true" placeholder="Promo" />
                </Grid>
                <Grid xs>
                    <Button auto color="gradient">Apply</Button>
                </Grid>
            </Grid.Container>
            <Button auto color="gradient" style={{width: '100%'}}>Submit Order</Button>
        </div>
    );
}

export default CartStats;