import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ShopItem from '../components/ShopItem'
import { Grid, NextUIProvider } from '@nextui-org/react';
import { Button, Text } from '@nextui-org/react';
import HeaderBarSpace from '../components/HeaderBarSpace';
import HeaderBar from '../components/HeaderBar';
import useMediaQuery from '../hooks/useMediaQuery';


const css = {
    divider : {
        borderTop: "3px",
    },
    textTitle: {
		textAlign: `center`,
		textGradient: "45deg, $blue500 -20%, $pink500 50%",
    },
}

function Shop() {
	let columns = 5;

	const break1 = useMediaQuery('(min-width: 1100px)');
	const break2 = useMediaQuery('(min-width: 1000px)');
	const break3 = useMediaQuery('(min-width: 600px)');	
	const break4 = useMediaQuery('(min-width: 450px)');

	if (break1) columns = 5;
	else if (break2) columns = 4;
	else if (break3) columns = 3;
	else if (break4) columns = 2;
	else columns = 1;

	const data = {
		title: "Monke", 
		price: 'Ξ 4200',
		img: "/punk2890.png"
	}

	return (
	<div>
		<HeaderBarSpace/>
		<Text h1 
			css={css.textTitle} 
			weight="bold" 
			size={128}>
			Punk Shop
		</Text>
		<Grid.Container gap={5} justify="flex-start">
			<Grid xs={12/columns}>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid xs={12/columns}>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid xs={12/columns}>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid xs={12/columns}>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid xs={12/columns}>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid xs={12/columns}>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid xs={12/columns}>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid xs={12/columns}>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid xs={12/columns}>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid xs={12/columns}>
				<ShopItem data={data}></ShopItem>   
			</Grid>
		</Grid.Container>
		<HeaderBar active={0}/>
	</div>
  );
}

export default Shop;