import Display from "./(home)/Display";
import Footer from "./(home)/Footer";
import Header from "./(home)/Header";
import Hero from "./(home)/Hero";
import Objects from "./(home)/Objects";
import Price from "./(home)/Price";
import Project from "./(home)/Project";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Project />
      <Display />
      <Objects />
      <Price />
    
    </main>
  );
}
