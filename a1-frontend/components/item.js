import { Card, Row, Text } from '@nextui-org/react';


function Item ({ data }) {
    console.log(data);
    return (
        <Card hoverable clickable cover>
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
                <Text css={{ color: "$accents4", fontWeight: "$semibold" }}>
                {data.price}
                </Text>
            </Row>        
            </Card.Footer>
      </Card>
    )
}




export default Item