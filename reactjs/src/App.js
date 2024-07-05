// import { useState } from "react";
import "./App.css";
// import MySentence from "./components/MySentence/MySentence";
// import Greeting from "./components/Greeting/Greeting";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Hotels from "./pages/Hotels/Hotels";
import Hotel from "./pages/Hotel/Hotel";
import Home from "./pages/Home/Home";
import Teams from "./pages/Teams/Teams";
import Quotes from "./pages/Quotes/Quotes";
import Auth from "./pages/Auth/Auth";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { Switch } from "@mui/material";
import NoPage from "./pages/NoPage/NoPage";
import { useState } from "react";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  const { setLoggedInUser } = useContext(AppContext);
  const [isBlankPage, setIsBlankPage] = useState(false)
  const {pathname} = useLocation()
  // const [count, setCount] = useState(0);
  // const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // const arr = []
  // for (let i = 1; i <= 10; i++) {
  //   arr.push(i);
  // }

  // const reverseArr = () => {
  //   const _arr = [...arr];
  //   const reversed = _arr.reverse();
  //   setArr(reversed);
  // };

  // const osoba = {
  //   name: "Jakub",
  //   age: 17,
  // };

  // destructuring objekta
  // const { name } = osoba;
  // console.log(name);
  // CEMU JE JEDNAKO name?
  // name === osoba.name

  // const osobaNiz = ["Kanita", 19];
  // destructuring niza
  // const [ime] = osobaNiz;
  // console.log(ime);

  // const a = 5
  // a++ === a = a + 1
  // a+1
  // setCount((prevValue) => prevValue++) NIJE KOREKTNO
  // setCount((prevValue) => prevValue + 3)
  useEffect(() => {
    if (pathname === '/auth', '/', 'hotels', 'hotels/:id', 'teams', 'quotes') {
      setIsBlankPage(isBlankPage)
    } else {
      setIsBlankPage(!isBlankPage)
    }
  })
  console.log(isBlankPage);

  useEffect(() => {
    const localLoggedInUser = localStorage.getItem("loggedInUser");
    if (localLoggedInUser) {
      setLoggedInUser(JSON.parse(localLoggedInUser));
    } else {
      setLoggedInUser(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    // <React.Fragment>
    <div className="app">
      {/* <Greeting appName="Lyntel" fullName="Dzenan Kosuta" /> */}
      {/* <div className="card">
        <button onClick={() => setCount((prevValue) => prevValue - 1)}>
          decrease count {count}
        </button>
        <button onClick={() => setCount((prevValue) => prevValue + 1)}>
          increase count {count}
        </button>
      </div> */}
      {/* <button onClick={reverseArr}>Change order</button> */}
      {/* Ipravno i sa callback */}
      {/* <button onClick={() => reverseArr()}>Change order</button>
      {arr.map((num, index) => (
        <div
          key={index}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <p>{num}. </p>
          <MySentence number={num} />
        </div>
      ))} */}
  {isBlankPage ? null : <NavBar/>}
      <main className="main">
        <Routes>
          {/* {!localStorage.getItem("loggedInUser") ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            navigate("/")
          )} */}
          <Route
            path="/auth"
            element={
              !localStorage.getItem("loggedInUser") ? <Auth /> : <Home />
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hotels"
            element={
              <ProtectedRoute>
                <Hotels />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hotels/:id"
            element={
              <ProtectedRoute>
                <Hotel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teams"
            element={
              <ProtectedRoute>
                <Teams />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quotes"
            element={
              <ProtectedRoute>
                <Quotes />
              </ProtectedRoute>
            }
          />
          <Route
          path="/about-us"
          element={
            <ProtectedRoute>
              <AboutUs />
            </ProtectedRoute>
          }
          />
          
          <Route path="*" element={<NoPage/>}/>
          
        </Routes>
      </main>
      {isBlankPage ? null : <Footer />}
      
    </div>
    // </React.Fragment>
  );
}

export default App;