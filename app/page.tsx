import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>       
    <Navbar />
      <main className="pt-20">  
        <Hero />
      </main>
    </>

  );
}
