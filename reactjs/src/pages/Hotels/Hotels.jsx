import HotelCard from "../../components/Cards/HotelCards/HotelCard";
import hotels from "../../common/hotels.json";
import "./Hotels.css";
import Pagination from "../../components/Pagination/Pagination";
  import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Hotels() {
  const navigate = useNavigate()
  const [page, setPage] = useState(1);
  const numOfHotelsPerPage = 8;
  const numOfHotels = hotels.length;
  const numOfPages = Math.ceil(numOfHotels / numOfHotelsPerPage);
  const [favoriteHotels, setFavoriteHotels] = useState([])

  useEffect(() => {
    const favoriteHotelsString = localStorage.getItem('favoriteHotels')
    if (favoriteHotelsString) {
      setFavoriteHotels(JSON.parse(favoriteHotelsString))
    } else {
      setFavoriteHotels([])
    }
  })

  return (
    <>
      <div className="hotels">
        {hotels
          .map((hotel) => (
            <HotelCard
              key={hotel.id}
              imageUrl={hotel.imageUrl}
              title={hotel.title}
              content={hotel.content}
              total={hotel.total}
              onClick={() => (window.location.href = `/hotels/${hotel.id}`)}
              
            />
          ))
          // .slice(0, 8) // prikazivanje prvih 8 hotela  111111
          //.slice(8, 16) // prikazivanje drugih 8 hotela 222222
          // .slice(16, 24) // prikazivanje trecih 8 hotela  333333
          // get the formula for slicing  ghj
          .slice(numOfHotelsPerPage * (page - 1), numOfHotelsPerPage * page)}
      </div>
      <Pagination numOfPages={numOfPages} page={page} setPage={setPage} />
    </>
  );
}

export default Hotels;