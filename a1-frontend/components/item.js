import { Card, Row, Text, Modal, Button, Grid} from '@nextui-org/react';
import React from 'react';

const css = {
    divider : {
        borderTop: "3px"
    }
}


function Item ({ data }) {
    console.log(data);
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = ()=> setVisible(false);

    return (
        <div>
        <Card hoverable clickable cover onClick={handler}>
            <Card.Body css={{ p: 0 }}>
            <Card.Image
                objectFit="scale-down"
                src={data.img}
                width="auto"
                height="auto"
                alt={data.title}
                css={{
                    maxHeight:"150px",
                    maxWidth: "150px"
                }}
            />
            </Card.Body>
            <Card.Footer justify="flex-start">
            <Row justify="space-between">
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
        width="40%"
      >  
        <Grid.Container gap={2}> 
        <Grid>
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
                    maxWidth: "250px"
                }}
            />
            </Card.Body>
            <Card.Footer justify="flex-start">
            <Row justify="space-between">
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
      <Grid>
          <Card color="#CBECFE" css={{height:"250px"}}>
              <Text h4 margin="10px" css={{borderBottom:"1px solid grey"}}>
                  ID: 9800
              </Text>
              <Text h4 margin="10px" css={{borderBottom:"1px solid grey"}}>
                  Type: Alien
              </Text>
              <Text h4 margin="10px" css={{borderBottom:"1px solid grey"}}>
                  Count: 4   
              </Text>
              <Text h4 margin="10px" css={{borderBottom:"1px solid grey"}}>
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
            <Button shadow auto color="gradient" onClick={closeHandler}>
                Add to Cart
            </Button>
          </Modal.Footer>
      </Modal>
      </div>
    )
}




export default Item