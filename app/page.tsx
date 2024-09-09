import Image from "next/image";
import Register from "./(auth)/register/page";
import Head from "next/head";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Home() {
  
  return (<>
<main className="flex m-2">

<div className="flex">
<SideNav/>
<TopNav/>

</div>

</main>
  </>);
}
