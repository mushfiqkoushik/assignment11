
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Feedback from "../components/Feedback";
import Feature from "../components/Feature";


function Home() {
  return (
    <div>
      <div>
        <h1 className="mt-10 text-5xl text-center">
          Banner Section
          <div>
            <Banner />
          </div>
        </h1>
      </div>

      <div>
        <h1 className="mt-10 text-5xl text-center mb-10">
          Gallery Section
          <div>
            <Gallery />
          </div>
        </h1>
      </div>
      <div>
        <h1 className="mt-10 text-5xl text-center mb-10">
          Feedback Section
          <div>
            <Feedback />
          </div>
        </h1>
      </div>

      <div>
        <h1 className="mt-10 text-5xl text-center mb-10">
          Feature Section
          <div>
            <Feature />
          </div>
        </h1>
      </div>
{/* 
      <div>
        <h1 className="mt-10 text-5xl text-center mb-10">
          ALL TOY Section
          <div>
            <Alltoy />
          </div>
        </h1>
      </div> */}
    </div>
  );
}

export default Home;
