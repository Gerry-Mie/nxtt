import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Provider from "@/components/provider";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Next Technologies Corp",
  description: "Your Vision, Our Code: Building Success Together",
};

export default function RootLayout(props: any) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Next Technologies Corp</title>
        <meta name="title" content="Next Technologies Corp" />
        <meta
          name="description"
          content="Your Vision, Our Code: Building Success Together"
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nxttcorp.com/" />
        <meta property="og:title" content="Next Technologies Corp" />
        <meta
          property="og:description"
          content="Your Vision, Our Code: Building Success Together"
        />
        <meta
          property="og:image"
          content="https://nxttcorp-my.sharepoint.com/personal/gerrymie_lumawag_nxttcorp_com/Documents/projects/software%20development/nexttech/Assets/FEED%20LANDSCAPE.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nxttcorp.com/" />
        <meta property="twitter:title" content="Next Technologies Corp" />
        <meta
          property="twitter:description"
          content="Your Vision, Our Code: Building Success Together"
        />
        <meta
          property="twitter:image"
          content="https://nxttcorp-my.sharepoint.com/personal/gerrymie_lumawag_nxttcorp_com/Documents/projects/software%20development/nexttech/Assets/FEED%20LANDSCAPE.png"
        />
      </head>
      <body className={inter.className}>
        <Provider>
          <div className="w-full">
            {/* <div className="z-10 w-full items-center justify-between p-6 shadow-md font-mono text-sm lg:flex"> */}
            <Navbar />
            {/* </div> */}
            <div className="max-w-screen-2xl m-auto">{props.children}</div>
            {/* <Footer /> */}
          </div>
        </Provider>
      </body>
    </html>
  );
}
