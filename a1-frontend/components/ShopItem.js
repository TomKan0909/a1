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
                        css={{
                            maxHeight:"250px",
                            maxWidth: "250px",
                        }}
                    />
                    </Card.Body>
                </Card>
            </Grid>
            <Grid css={{width:"100%"}}>
                <Card color="#CBECFE">
                    <Text h2 b>
                        {data.title}
                    </Text>
                    <Text size={20} css={{paddingBottom:"20px"}}>
                        Cool and friendly individual!
                    </Text>
                    <Text>
                        ID: 9800
                    </Text>
                    <Text>
                        Type: Alien
                    </Text>
                    <Text>
                        Count: 4
                    </Text>
                    <Text>
                        Accessories: Luxurious Beard, Hoodie, Earring, Horned Rim Glasses
                    </Text>
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
                <Row justify="space-between"  align="center">
                    <Text css={{ color: "$accents4", fontWeight: "$bold" }}>
                        {data.price}
                    </Text>
                    <Button shadow auto color="gradient" onClick={closeHandler}>
                        Add to Cart
                    </Button>
                </Row>      
            </Modal.Footer>
        </Modal>
        </div>
    )
}




export default ShopItem;