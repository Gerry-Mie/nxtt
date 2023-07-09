import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Provider from "@/components/provider";
import Navbar from "@/components/home/Navbar";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Next Technologies Corp",
  description: "Your Vision, Our Code: Building Success Together",
};

export default function RootLayout(props: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="w-full">
            {/* <div className="z-10 w-full items-center justify-between p-6 shadow-md font-mono text-sm lg:flex"> */}
            <Navbar />
            {/* </div> */}
            <div className="max-w-screen-2xl m-auto">{props.children}</div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
