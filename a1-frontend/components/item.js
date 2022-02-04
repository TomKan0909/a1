import { Card, Row, Text } from '@nextui-org/react';


function Item ({ data }) {
    console.log(data);
    return (
        <Card hoverable clickable width="100%">
            <Card.Body css={{ p: 0 }}>
            <Card.Image
                objectFit="cover"
                src={data.img}
                width='100%'
                height={120}
                alt={data.title}
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