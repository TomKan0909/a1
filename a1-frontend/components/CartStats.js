import { Grid, Tooltip } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import Image from 'next/image';
import { Container, Row, Col } from '@nextui-org/react';
import { Button, Card, Divider} from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import {MoreCircle} from 'react-iconly'

const css = {
    wrapper: {
        minWidth: "300px",
        width: `100%`,
        padding: `20px`,
        //backgroundColor: `#CBECFE`,
        backgroundColor: `white`,
        borderRadius: `10px`,
        boxShadow: `rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px`,
    },
    seperator: {
        marginTop: `20px`,
        marginBottom: `20px`,
        height: `1px`,
        backgroundColor: `lightgrey`,
    },
    input: {
        cursor: "pointer",
    },
    textTotal: {

    },
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
                    <Grid.Container align="center">
                        <Grid>
                            <Text>
                                Discount 
                            </Text>
                        </Grid>
                        <Grid>
                            <div style={{marginLeft: '6px', display:"flex"}}>
                                <Tooltip placement="bottom" content={
                                    <Card css={{ w: "200px" }}>
                                            <Card.Header>
                                                <Text b h5>Available Discounts</Text>
                                            </Card.Header>
                                            <Divider/>
                                            <Card.Body css={{ py: '$10' }}>
                                                <Grid.Container justify="space-between">
                                                    <Grid>
                                                        <Text>
                                                        0xl23k4jf34:
                                                        </Text>
                                                    </Grid>
                                                    <Grid>
                                                        <Text>
                                                        - 20%  
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                                <Grid.Container justify="space-between">
                                                    <Grid>
                                                        <Text>
                                                        0xl23k4jf34:
                                                        </Text>
                                                    </Grid>
                                                    <Grid>
                                                        <Text>
                                                        - 20%  
                                                        </Text>
                                                    </Grid>
                                                </Grid.Container>
                                            </Card.Body>
                                    </Card>
                                }>
                                    <MoreCircle display="block" fill="currentColor" filled/>
                                </Tooltip>
                            </div>
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
                    <Text size={20}>
                        Total
                    </Text>
                </Grid>
                <Grid>
                    <Text size={20}>
                        Ξ 4020                       
                    </Text>
                </Grid>
            </Grid.Container>

            <div style={css.seperator}></div>

            <Grid.Container wrap="nowrap">
                <Grid xs={12}>
                    <Input bordered fullWidth="true" placeholder="Promo" />
                </Grid>
                <Grid xs>
                    <Button auto color="gradient">Apply</Button>
                </Grid>
            </Grid.Container>

            <div style={css.seperator}></div>

            <Button auto color="gradient" style={{width: '100%'}}>Submit Order</Button>
        </div>
    );
}

export default CartStats;