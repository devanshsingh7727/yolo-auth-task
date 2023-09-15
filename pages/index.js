import Head from 'next/head';

import Main from '../components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yolo Task</title>
        <meta name='description' content=' ask' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icon-256x256.png' />
      </Head>

      <Main />
    </>
  );
}
