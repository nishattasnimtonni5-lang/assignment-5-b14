import Banner from "./Components/Banner";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer"
import Cards from "./Components/Cards/Cards";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

const cardsPromiseFetch=async()=>{
  const res=await fetch("/data.json");
  const data=await res.json();
  return data;
}
function App() {
const cardsPromise=cardsPromiseFetch();

  return (
    <>
    <Nav/>
    <Banner/>
    <ToastContainer />
    <Suspense fallback={<div className="flex justify-center items-center"> <span className="loading loading-spinner text-secondary"></span> </div>}>
    <Cards cardsPromise={cardsPromise}/>
</Suspense>
   <Footer />
     </>
     );
}

export default App
