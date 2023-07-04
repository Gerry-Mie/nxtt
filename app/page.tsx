import Stack from "@/components/Stack";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Section2 from "@/components/home/Section2";
import Works from "@/components/home/Works";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <div className="justify-center items-center mt-40 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        {/* <h1 className='text-4xl'>Page is under development</h1> */}
        <Hero />
      </div>
      <About />
      <Stack />
      <Works />
      {/* <Section2 /> */}
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
