import Hero from "@/components/organisms/Hero";
import Features from "@/components/organisms/Features";
//import BlogCard from "@/components/molecules/BlogCard";

export default function Home() {
  return (
    <section>
      <div className="flex flex-col items-center  w-full ">
        <Hero />
      </div>
      <Features />
      <div className="flex flex-col items-center justify-center h-screen w-full bg-light-gray">
        {/*<BlogCard />*/}
      </div>
      <div>Hola</div>
    </section>
  );
}
