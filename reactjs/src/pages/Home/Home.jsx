import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-page">
      <h1>Find your next stay</h1>
      {/* <h2>Search lowest prices on <a href="/hotels">hotels</a>, motels and so much more...</h2> */}
      <h2>
        Search lowest prices on <Link to="/hotels">hotels</Link>, motels and so
        much more...
      </h2>
    </div>
  );
}
export default Home;  