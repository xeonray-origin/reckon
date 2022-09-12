import type { NextPage } from 'next';
import Head from 'next/head';
import config from '@config';
import { LogoColored } from '@static/svg';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{config.appName}</title>
        <meta
          name="description"
          content="Employee recognition and feed back system."
        />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;
