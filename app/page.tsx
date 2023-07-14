import Footer from "@/components/footer";
import About from "@/components/home/About";
import Expertise from "@/components/home/Expertise";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";

export default async function Home() {
  return (
    <main className="min-h-fit ">
      <div className="z-[-1] fixed w-full h-full pointer-events-none top-0 left-0 bg-[#ffffffad] backdrop-blur-3xl"></div>
      <div className="z-[-2] circle1 fixed top-5 right-[-100px] w-[397px] h-[397px] rounded-full bg-[#25D12C]"></div>
      {/* <div className="justify-center items-center relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div> */}
      <Hero />
      <Expertise />
      <Industries />
      <About />
      {/* <Works /> */}
      {/* <Section2 /> */}
      {/* <Footer /> */}
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
