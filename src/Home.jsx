import React from "react";
import Location from './assets/Location.png'
import delivery from './assets/iconoir_delivery-truck.png'
import Discount from './assets/Discount.png'
import menu from './assets/menu.png'
import search from './assets/search.png'
import list from './assets/list.png'
import user1 from './assets/user1.png'
import buy from './assets/Buy.png'
import XIAOMI from './assets/XIAOMI.png'
import watch from './assets/watch.png'
import narzo from './assets/narzo.png'
import phone1 from './assets/phone1.png'
import apple from './assets/apple.png'
import phone2 from './assets/phone2.png'
import phone3 from './assets/phone3.png'
import phone11 from './assets/phone11.png'
import phone4 from './assets/phone4.png'
import phone5 from './assets/phone5.png'
import discountcard from './assets/discountcard.png'
import phonesm from './assets/phonesm.png'
import sample2 from './assets/sample2.png'
import sample3 from './assets/sample3.png'
import sample4 from './assets/sample4.png'
import sample5 from './assets/sample5.png'
import sample6 from './assets/sample6.png'
import sample7 from './assets/sample7.png'
import realme from './assets/realme.png'
import Vegitables from './assets/Vegitables.png'
import Fruits from './assets/Fruits.png'
import Strowberry from './assets/Strowberry.png'
import Mango from './assets/Mango.png'
import Cherry from './assets/Cherry.png'
import mi from './assets/mi.png'
import groceries from './assets/groceries.png'
import Rectangle from './assets/Rectangle.png'
import arrow from './assets/Arrow - Right.png'
import arrow1 from './assets/Arrow - Right1.png'
import MegaMart from './assets/MegaMart.png'
import whatsapp from './assets/whatsapp.png'
import Call from './assets/Call.png'
import down from './assets/down.png'
import marked from './assets/Mask group.png'
import line from './assets/Line 31.png'
import './Home.css'


function Home() {
  return (
    <nav  >
      
      <div className="navbar">
        <h3>Welcome to worldwide Megamart!</h3>
         
        <div className="nav-item"><img src={Location} alt="Location" className="Location"></img>
        <h3 >Deliver to 423651</h3></div>

        <div className="nav-item ">
        <img src={delivery} alt="delivery" className="Delivery"></img>
        <h3>Track your order</h3></div>

        <div className="nav-item">
        <img  src={Discount} alt="Discount" className="Discount"></img>
        <h3>All Offers</h3></div>

        </div>
        
      <div className="navbar2">
    <img src={menu} alt="menu" className="menu" />
    <h2 className="meg">MegaMart</h2>
  
    <div className="searchbar">
    <img src={search} alt="search" className="search" />
    <input type="text" placeholder="...............Search essentials, groceries and more..." className="input1"></input>
    <img src={list} alt="list" className="list" />
   </div>
    
  <div className="right">
    <img src={user1} alt="user" className="user1"  />
    <h4   >Sign Up/Sign In</h4>
    <img src={buy} alt="buy" className="buy" />
    <h4>Cart</h4></div>

    </div> 

    
     <div className="buttons">
      <button type="list">Groceries</button>
      <button>Premium Fruits</button>
      <button>Home & Kitchen</button>
      <button>Fashion</button>
      <button>Electronics</button>
      <button>Beauty</button>
      <button>Home Improvement</button>
      <button>Sports, Toys & Luggage</button>
     </div>
      <br />
      


      <div className="productbox">
        <h3 className="h33">Best Deal Online on smart watches</h3>
        <h1 className="h22">SMART WEARABLE.</h1>
        <h3 className="OFF">UP to 80% OFF</h3>
        <img src={watch} alt="watch"  className="watch"/>
        <button  className="arrow"><img src={arrow}  className="arrows" /></button>
        <button  className="arrow1"><img src={arrow1}  className="arrows1" /></button>
      </div>
      <br />
     <h2 className="deal">   Grab the best deal on <pre></pre> <p className="p"> Smartphones</p></h2>
    <div className="dividertop"></div>

    <br />
     <div className="card">
      <img src={phone1} alt="phone1"  className="phone1"/>
       <h4 className="Galaxy">Galaxy S22 Ultra <br /> ₹32999</h4>
      <h4 className="save"> Save - ₹32999</h4>
      <div className="divider"></div>
      <img src={discountcard} alt="discountcard"  className="discountcard"/>
      <p className="of"> 56% <br />OFF</p>
     </div>



<div className="cardd">
      <img src={phone2} alt="phone2"  className="phone2"/>
       <h4 className="GalaxyM">Galaxy M13 (4GB | 64 GB ) <br /> ₹10499</h4>
      <h4 className="save"> Save - ₹4500</h4>
      <div className="divider"></div>
      <img src={discountcard} alt="discountcard"  className="discountcard"/>
      <p className="of"> 56% <br />OFF</p>

     </div>


     <div className="card3">
      <img src={phone3} alt="phone2"  className="phone3"/>
       <h4 className="GalaxyM">Galaxy M33 (4GB | 64 GB ) <br /> ₹16999</h4>
      <h4 className="save"> Save - ₹8000</h4>
      <div className="divider"></div>
      <img src={discountcard} alt="discountcard"  className="discountcard"/>
      <p className="of"> 56% <br />OFF</p>
      

     </div>
  
    <div className="card4">
      <img src={phone4} alt="phone2"  className="phone4"/>
       <h4 className="GalaxyM">Galaxy M53 (4GB | 64 GB )<br /> ₹31999</h4>
      <h4 className="save">Save - ₹9000</h4>
      <div className="divider"></div>
      <img src={discountcard} alt="discountcard"  className="discountcard"/>
      <p className="of"> 56% <br />OFF</p>

     </div>


    <div className="card5">
      <img src={phone5} alt="phone2"  className="phone5"/>
       <h4 className="GalaxyM">Galaxy S22 Ultra<br /> ₹67999</h4>
      <h4 className="save">Save - ₹18000</h4>
      <div className="divider"></div>
      <img src={discountcard} alt="discountcard"  className="discountcard"/>
      <p className="of"> 56% <br />OFF</p>
    
     </div>
     

    <h2 className="Categories">Shop From Top Categories <br /></h2>
    <div className="dividerto"></div>
    
    

     <div className="sample">
      <div  className="one">
        <img src={phonesm} className="phonesm"/>
        <h3 className="mobile">Mobile</h3>
      </div>
     </div>
     

    <div className="sample2">
      <div  className="one2">
        <img src={sample2} className="phonesm2"/>
        <h3 className="Cosmetics">Cosmetics</h3>
      </div>
     </div>

    <div className="sample3">
      <div  className="one3">
        <img src={sample3} className="phonesm3"/>
      <h3 className="Electronics">Electronics</h3>

        
      </div>
     </div>
    
    <div className="sample4">
      <div  className="one4">
        <img src={sample4} className="phonesm4"/>
      <h3 className="Furniture">Furniture</h3>
        
      </div>
     </div>
     
     <div className="sample5">
      <div  className="one5">
        <img src={sample5} className="phonesm5"/>
      <h3 className="Watches">Watches</h3>
      </div>
     </div>

    <div className="sample6">
      <div  className="one6">
        <img src={sample6} className="phonesm6"/>
        <h3 className="Decor">Decor</h3>

      </div>
     </div>

     <div className="sample7">
      <div  className="one7">
        <img src={sample7} className="phonesm7"/>
        <h3 className="Accessories">Accessories</h3>
      </div>
     </div>

     
      <h2 className="Categoriess">Top Electronics Brands</h2>
    <div className="dividerto2"></div>


    <div className="box1">
    <img src={phone11} className="phone11" />
    <div className="iphone">
      <h2>iphone</h2>
    </div>
    <img src={apple} className="apple" />
    <h2 className="up">UP to 80% OFF</h2>
    </div>
     
<div className="box2">
    <img src={narzo} className="narzo" />
    <div className="narzo1">
      <h1>narzo</h1>
    </div>
    <img src={realme} className="apple" />
    <h2 className="upp">UP to 80% OFF</h2>
    </div>


    <div className="box3">
    <img src={XIAOMI} className="XIAOMI" />
    <div className="XIAOMI1">
      <h2>XIAOMI</h2>
    </div>
    <img src={mi} className="apple" />
    <h2 className="up">UP to 80% OFF</h2>
    </div>
    
   <h2 className="Essentials">Daily Essentials</h2>
    <div className="dividerto3"></div>

   <div className="card11">
    <img src={groceries} className="groceries" />
    <h3>Daily Essentials</h3>
     <h2>UP to 50% OFF</h2>
   </div>


   <div className="card12">
    <img src={Vegitables} className="Vegitables" />
     <h3>Vegitables</h3>
      <h2>UP to 50% OFF</h2>
   </div>


   <div className="card13">
    <img src={Fruits} className="Fruits" />
     <h3>Fruits</h3>
      <h2>UP to 50% OFF</h2>
   </div>


   <div className="card14">
    <img src={Strowberry} className="Strowberry" />
     <h3>Strowberry</h3>
      <h2>UP to 50% OFF</h2>
   </div>


   <div className="card15">
    <img src={Mango} className="Mango" />
    <h3>Mango</h3>
 <h2>UP to 50% OFF</h2>
   </div>




    <div className="card16">
    <img src={Cherry} className="Cherry" />
    <h3>Cherry</h3>
    <h2>UP to 50% OFF</h2>
   </div>


    
<footer className="footer">
  <img src={marked} className="marked" />
   <img src={MegaMart} className="MegaMart" />
   <h2 className="Contactus" >Contact us: </h2>
      <img src={whatsapp} className="whatsapp"/>
      <h3 className="WhatsAppnum">Whats App <br /> +1 202-918-2132</h3>
      
      <img src={Call} className="call"/>
      <h3 className="call1">Call Us <br />+1 202-918-2132</h3>
      <h2 className="DownloadApp">Download App</h2>
      <img src={down} className="down" />
      <div className="dividerto4"></div>
      <h4 className="bottomla">© 2022 All rights reserved. Reliance Retail Ltd.</h4>
    
    
    
    <h2 className="most">Most Popular Categories</h2>
    <div className="footer-section">
    
    <div className="footer-list">
      <p>• Staples</p>
      <p>• Beverages</p>
      <p>• Personal Care</p>
      <p>• Home Care</p>
      <p>• Baby Care</p>
      <p>• Vegetables & Fruits</p>
      <p>• Snacks & Foods</p>
      <p>• Dairy & Bakery</p>
    </div>
  </div>

  <div className="footer-section1">
    <h2 className="ser">Customer Services</h2>
    <div className="footer-list">
      <p>• About Us</p>
      <p>• Terms & Conditions</p>
      <p>• FAQ</p>
      <p>• Privacy Policy</p>
      <p>• E-waste Policy</p>
      <p>• Cancellation & Return Policy</p>
    </div>
  </div>

</footer>

    </nav>
  );
}

export default Home;





    
  