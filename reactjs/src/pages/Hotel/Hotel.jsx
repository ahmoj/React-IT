import { useParams } from "react-router-dom";
import "./Hotel.css";
import hotels from "../../common/hotels.json";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

function Hotel() {
  const { id } = useParams();
  const hotel = hotels.find((hotel) => hotel.id === +id);
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <>
      <div className="hotel">
        <img src={hotel.imageUrl} className="slika" />
        <div className="title">
          <h1>{hotel.title}</h1>
          <div
            width={"50%"}
            style={{
              display: "flex",
              gap: "1em",
              height: "30%",
            }}
          >
           
            <h3>Trade Center, Dubai 117835, United Arab Emirates</h3>
          </div>
          <div className="sadrzaj">
            <h2>
              This hotel represents the essence of life combined with purity
            </h2>
            <ul>
              <li className="li">
               
                Swimming pool
              </li>
              <li className="li">
               
                Wi-Fi
              </li>
              <li className="li">
             
                Locks on Card
              </li>
              <li className="li">
            
                Free Parking
              </li>
              <li className="li">
                
                Spa & Wellness
              </li>
            </ul>
            <div style={{ display: "flex" }}>
              <button>Reserve</button>
              <button className="heart-icon" onClick={() => (
                setIsFavorite(!isFavorite),
                isFavorite ? localStorage.removeItem(`like${id}`) : localStorage.setItem(`like${id}`, `svidja mi se hotel sa idjem ${id}`)
              )}>
                {isFavorite ? (
                  <FaHeart fill="red"/> 
                ) : (
                  <FaHeart fill="gray"/>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hotel;

// Domaci zadatak:

// Obnoviti sledece metode kod nizova:

// forEach()
// map()
// filter()
// reduce()
// find()
// findIndex()