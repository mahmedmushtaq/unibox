import Head from "next/head";
import { Box } from "@mui/material";

import FrontLayout from "../src/Layouts/FrontLayout"; 
import Header from "../src/components/Home/Header";
import Features from "../src/components/Home/Features";
import Testimonials from "../src/components/Home/Testimonials";
import SimpleInfoBox from "../src/components/Home/SimpleInfoBox";

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

      <FrontLayout>
        <div>
          <Header />
          <Features />
          <Testimonials />
          <SimpleInfoBox />
        </div>
      </FrontLayout>
    </Box>
  );
}
