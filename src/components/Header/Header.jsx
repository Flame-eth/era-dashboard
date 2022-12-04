import React, { useState } from "react";

import "./Header.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

import Logo from "../../assets/logo.JPG";

import { useSelector, useDispatch } from "react-redux";
import { setMode, setAccount } from "../../redux/modeSlice";
import { ConnectWallet } from "@thirdweb-dev/react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hideMenu, setHideMenu] = useState(false);
  let navLink = document.getElementById("nav-links");
  const showMenuFunc = () => {
    navLink.style.right = "0";
  };

  const hideMenuFunc = () => {
    navLink.style.right = "-200px";
  };

  const dispatch = useDispatch();
  const { mode, account } = useSelector((state) => state.mode);

  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== account) {
      dispatch(setAccount(accounts[0]));
    }
  };

  const handleEthereum = () => {
    const { ethereum } = window;
    if (ethereum && ethereum.isMetaMask) {
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then(handleAccountsChanged)
        .catch((err) => {
          if (err.code === 4001) {
            console.log("Please connect to MetaMask.");
          } else {
            console.error(err);
          }
        });
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      handleEthereum();
    } else {
      window.addEventListener("ethereum#initialized", handleEthereum, {
        once: true,
      });
    }
    // const { ethereum } = window;
    // console.log("connecting...");

    // try {
    //   if (!ethereum) return alert("Please install metamask");

    //   const accounts = await ethereum.request({
    //     method: "eth_requestAccounts",
    //   });

    //   await dispatch(setAccount(accounts[0]));
    //   console.log(account);

    //   // console.log(state);
    // } catch (error) {
    //   console.log(error);

    //   throw new Error("No ethereum object");
    // }
  };

  return (
    <header className="header">
      <div className="header__nav">
        <NavLink to="/" exact>
          <img src={Logo} alt="era-logo" className="header__image" />
        </NavLink>
        <div className="flex">
          <div className="marg-right">
            <ConnectWallet
              accentColor="#63859680"
              className="header__button"
              colorMode="dark"
            />
          </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
