import { Card, Row, Text, Modal, Button, Grid} from '@nextui-org/react';
import React from 'react';

const css = {
    divider : {
        borderTop: "3px",
    },
    textTitle: {
        height: `100%`,
    },
}

function ShopItem ({ data }) {
    //console.log(data);
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = ()=> setVisible(false);

    return (
        <div style={{width: "100%"}}>
        <Card hoverable clickable cover onClick={handler}>
            <Card.Body css={{ p: 0 }}>
            <Card.Image
                objectFit="scale-down"
                src={data.img}
                width="auto"
                height="auto"
                alt={data.title}
            />
            </Card.Body>
            <Card.Footer justify="flex-start">
            <Row justify="space-between" align="center">
                <Text b>
                    {data.title}
                </Text>
                <Text css={{ color: "$accents4", fontWeight: "$bold" }}>
                    {data.price}
                </Text>
            </Row>        
            </Card.Footer>
        </Card>
        <Modal
            closeButton
            blur
            open={visible}
            onClose={closeHandler}
            width="max(40%, 300px)"
        >  
        <Grid.Container> 
            <Grid css={{paddingTop:"20px", margin:"auto"}}>
                <Card cover>
                    <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        objectFit="scale-down"
                        src={data.img}
                        width="auto"
                        height="auto"
                        alt={data.title}
                    />
                    </Card.Body>
                    <Card.Footer justify="flex-start">
                    <Row justify="space-between" align="center">
                        <Text b>
                            {data.title}
                        </Text>
                        <Text css={{ color: "$accents4", fontWeight: "$bold" }}>
                            {data.price}
                        </Text>
                    </Row>        
                    </Card.Footer>
                </Card>
            </Grid>
            <Grid css={{width:"100%"}}>
                <Card color="#CBECFE">
                    <Text size={20}>
                        Cool and friendly individual!
                    </Text>
                    <ul>
                        <li style={{listStyle: "disc"}}>ID: 9800</li>
                        <li style={{listStyle: "disc"}}>Type: Alien</li>
                        <li style={{listStyle: "disc"}}>Count: 4</li>
                        <li style={{listStyle: "disc"}}>Accessories: Luxurious Beard, Hoodie, Earring, Horned Rim Glasses</li>
                    </ul>  
                </Card>
            </Grid>
        </Grid.Container>
            
            {/* <Modal.Header>
                <Text b size={18}>{data.title}</Text>
            </Modal.Header>
            <Modal.Body>
                <></>
                <Text>Loren Ipsum</Text>
            </Modal.Body> */}
            <Modal.Footer>
                <Button shadow auto color="gradient" onClick={closeHandler}>
                    Add to Cart
                </Button>   
            </Modal.Footer>
        </Modal>
        </div>
    )
}




export default ShopItem;