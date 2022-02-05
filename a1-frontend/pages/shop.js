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
		userSelect: `none`,
		textAlign: `center`,
		textGradient: "45deg, $blue500 -20%, $pink500 50%",
    },
}

function Shop() {
	
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
		<Grid.Container gap={5} justify="center">
			<Grid>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid>
				<ShopItem data={data}></ShopItem>   
			</Grid>
			<Grid>
				<ShopItem data={data}></ShopItem>   
			</Grid>
		</Grid.Container>
		<HeaderBar active={0}/>
	</div>
  );
}

export default Shop;