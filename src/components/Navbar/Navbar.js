import React, { useEffect, useState } from "react";
import { MenuItems } from '../../constants/MenuItems.js';
import './Navbar.css';

//UMS
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../constants/firebaseConfig";
import { query, collection, getDocs, where } from "firebase/firestore";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      //console.log(doc.docs)
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      //alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    fetchUserName();
  }, [user, loading]);
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(!clicked);
  };
  let umsButtons = <a href='/login'>Login</a>;
  if(user){
    umsButtons = <><div className="userName">{user.displayName}</div><button className="dashboard__btn" onClick={logout}>Logout</button></>;
  }
  return (
    <nav className="NavbarItem">
      <h1 className="navbar-logo">
        <a className="navbar-logo" href="/">
          KTT Book
          <i id="comp" className="fa-solid fa-computer"></i>
        </a>
      </h1>
      <div className="menu-icon" onClick={clickHandler}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
        {umsButtons}
      
    </nav>
  );
};

export default Navbar;
