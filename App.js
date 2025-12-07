import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const Header =() =>(
    <div className="header">
        <div className="logo-container">
            <img  className="logo" src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"></img>
        </div>
        <div className="nav-list">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);
const RestroCard = (props) =>{
    const {responseObj} =props;
    const {image, resturantName, cuisines, stars, avgDeliveryTime} =responseObj;
    console.log(responseObj);
    return (
        <div className="res-card">
            
            <img className="res-cardimg"  src={image}></img>
            <h3>{resturantName}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{stars} ratings</h4>
            <h4>{avgDeliveryTime} mins</h4>
            </div>
     
    )
};
const resList = [
  {
    resturantName: "KFC",
    image: "https://logos-world.net/wp-content/uploads/2020/04/KFC-Logo.png",
    cuisines: ["American", "Fast Food"],
    stars: "4.5",
    avgDeliveryTime: 29
  },
  {
    resturantName: "McDonald's",
    image: "https://logos-world.net/wp-content/uploads/2020/04/McDonalds-Logo.png",
    cuisines: ["American", "Burgers"],
    stars: "4.2",
    avgDeliveryTime: 25
  },
  {
    resturantName: "Domino's Pizza",
    image: "https://logos-world.net/wp-content/uploads/2020/11/Dominos-Logo.png",
    cuisines: ["Italian", "Pizza"],
    stars: "4.3",
    avgDeliveryTime: 32
  },
  {
    resturantName: "Burger King",
    image: "https://logos-world.net/wp-content/uploads/2020/04/Burger-King-Logo.png",
    cuisines: ["American", "Fast Food", "Burgers"],
    stars: "4.1",
    avgDeliveryTime: 30
  },
  {
    resturantName: "Subway",
    image: "https://logos-world.net/wp-content/uploads/2020/04/Subway-Logo.png",
    cuisines: ["Healthy", "Sandwich", "Salads"],
    stars: "4.0",
    avgDeliveryTime: 22
  },
  {
    resturantName: "Starbucks",
    image: "https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png",
    cuisines: ["Cafe", "Coffee"],
    stars: "4.6",
    avgDeliveryTime: 18
  },
  {
    resturantName: "A2B - Adyar Ananda Bhavan",
    image: "https://i.postimg.cc/43P2yLFP/a2b.png",
    cuisines: ["South Indian", "Veg"],
    stars: "4.4",
    avgDeliveryTime: 20
  },
  {
    resturantName: "Behrouz Biryani",
    image: "https://i.postimg.cc/qBLs1kGy/behrouz.png",
    cuisines: ["Biryani", "Mughlai"],
    stars: "4.5",
    avgDeliveryTime: 34
  }
];



const BodyComponent = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            {resList.map((nx ,idx) => {
               return <RestroCard key= {nx.resturantName} responseObj={nx}/>
            })}

            </div>
        </div>
    )
}
const AppLayout = ()=>(
    <div className="app">
        <Header/>
        <BodyComponent/>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); 