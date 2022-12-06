import React, { useEffect, useState } from "react";
import { Slide } from "react-reveal";
import Count from "../Counter/Counter";
import Header from "../Header/Header";

import { CONFIG } from "./../../config";

import { toast, ToastContainer } from "react-toastify";

import Web3 from "web3/dist/web3.min.js";
import { useMoralis } from "react-moralis";
import { ABI } from "./HEROBOXSERUMABI";
import { TRAXABI } from "./TRAXABI";

import Image from "./../images/HeroBox.mp4";

import "./HeroSection.css";
const HeroSection = () => {
  const { Moralis, account } = useMoralis();
  const [load, setload] = useState(true);

  // TOASTIFY REALTED FUNCTIONS

  const notifySuccess = (message) =>
    toast.success(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const notifyInfo = (message) =>
    toast.info(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const notifyError = (message) =>
    toast.error(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  // TOASTIFY REALTED FUNCTIONS

  const withdraw = async (value) => {
    let optionsWithdraw = {
      abi: TRAXABI,
      functionName: "withdrawEthers",
      chain: CONFIG.chainID,
      contractAddress: CONFIG.smart_contract_moosetrax,
    };
    try {
      notifyInfo("Your Transaction has started");
      await Moralis.enableWeb3();
      const mintTransaction = await Moralis.executeFunction(optionsWithdraw);
      console.log(
        "mintTransaction : ",
        mintTransaction,
        "mintTransactionhash : ",
        mintTransaction.hash
      );
      // toastify #1
      notifyInfo("Please wait for confirmation");

      await mintTransaction.wait();

      // toastify #2
      notifySuccess("Ethers Withdrawn Successfully");
    } catch (err) {
      console.log("mintError=>", err);
      if (err?.message?.includes("caller is not the owner")) {
        notifyError("Not Owner!");
      } else {
        notifyError("Something went wrong!");
      }
    }
  };

  return (
    <div>
      <div className="bg">
        <Header></Header>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
          pauseOnHover
        />
        <div>
          <button
            disabled={!load}
            style={{ margin: "100px auto" }}
            className="dashboard uppercase flex items-center gap-x-1 dashboardbtn"
            onClick={withdraw}
          >
            Withdraw Ethers
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
