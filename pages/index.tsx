// import landingImage from "../public/assets//Home.png";
//  import Image from "next/image";

const Home: React.FC = () => {
  return(
    <>
      <main className="bg-[url(/assets/Home.png)] h-[500px] bg-cover bg-origin-border bg-center bg-no-repeat mx-0 px-0">
        <div className="mt-10 flex justify-center items-center h-[500px] flex-col">
          <h1 className="letter" style={{letterSpacing: "5px",color: "#dddddd", fontWeight: "bold"}}>FIND YOUR FAVORITE PLACE HERE!</h1>
          <p style={{letterSpacing: "1px",color: "white", fontWeight: "bold"}}>The best prices for over 2 million properties worldwide,</p>
        </div>
      </main>
    </>
  )
}

export default Home;