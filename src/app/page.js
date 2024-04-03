import Navbar from "./Components/Navbar/navbar";
import WelcomeText from "./Components/Home/WelcomeText";
import Index from "./Components/Home/HomeListing";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <WelcomeText />
      <Index />
    </>
  );
}
