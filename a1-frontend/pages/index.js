import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Item from '../components/item'
import { Grid, NextUIProvider } from '@nextui-org/react';
import { Button, Text } from '@nextui-org/react';
import HeaderBarSpace from '../components/HeaderBarSpace';
import HeaderBar from '../components/HeaderBar';


function Home({data}) {
  console.log(data);
  return (
    <NextUIProvider>
      <div className={styles.container}>
        <Head>
          <title>Punk Shop</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
  		    <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet"/>
        </Head>

        
        <main className={styles.main}>
          <HeaderBarSpace/>
          {/* <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1> */}
          <Text h1 css={{
      textGradient: "45deg, $blue500 -20%, $pink500 50%"
      }} weight="bold" size={128}>Punk Shop</Text>
          


          <div className={styles.grid}>
            {/* <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a> */}
            <Grid.Container gap={5} justify="flex-start">
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>
              <Grid >
                <Item data={data}></Item>   
              </Grid>

            </Grid.Container>
          </div>
        </main>
        <HeaderBar active={1}/>
      </div>
    </NextUIProvider>
  )
}

export async function getStaticProps() {
  // const name = "Monke"
  // const price = 34.99
  // const img = "../public/monke.jpeg";
  console.log("ran here");
  const data = {
      title: "Monke", 
      price: 'Ξ 4200',
      img: "/punk2890.png"
  }
  return {
      props: {
          data,
      }
  }
}

export default Home