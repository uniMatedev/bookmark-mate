import type { NextPage } from "next";
import Head from "next/head";
import Hero from "./components/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bookmark Mate</title>
        <meta
          name="description"
          content="Next Tail."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Hero
        title="Bookmark Mate"
        subtitle="Simplicity, redefined. The ultimate starter kit for minimalist web development."
        buttonText="Download Now"
        buttonLink="https://example.com/download"
        imageSrc="/logo.svg"
        imageAlt="Next Tail Logo"
      />
    </div>
  );
};

export default Home;
