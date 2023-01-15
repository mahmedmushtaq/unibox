import Head from "next/head";
import { Box } from "@mui/material";

import Footer from "../src/components/Footer";
import HomeLayout from "../src/Layouts/HomeLayout";
import NavBar from "../src/components/NavBar";
import Header from "../src/components/Home/Header";
import Features from "../src/components/Home/Features";
import Testimonials from "../src/components/Home/Testimonials";
import SimpleInfoBox from "../src/components/Home/SimpleInfoBox";
import Subscription from "../src/components/Home/Subscription";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Unibox - All universities info in a single place</title>
        <meta
          property="og:title"
          content="Unibox help you to find your dream universitiy with all of the necessary criteria"
        />
      </Head>
      <NavBar />
      <HomeLayout>
        <div>
          <Header />
          <Features />
          <Testimonials />
          <SimpleInfoBox />
        </div>
      </HomeLayout>
      <Footer />
    </Box>
  );
}
