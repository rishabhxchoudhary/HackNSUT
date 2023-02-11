import React from 'react'
import { Link } from 'react-router-dom'
import {  useEffect } from "react";
import { ethers } from "ethers";
import { useState } from 'react';


function NewEntry() {


    const [Aadhar,setAadhar] = useState("");
    const [HeartRate,setHeartRate] = useState("");
    const [BloodPressure,setBloodPressure] = useState("");
    const [Id,setId] = useState("");
    
    const handleSubmit = async (e) =>{ 
      e.preventDefault();
      console.log(Aadhar,HeartRate,BloodPressure,Id);

      var abi =[
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "id",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_addhar",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "time",
                    "type": "string"
                }
            ],
            "name": "pushRecord",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "doctorAddress",
                    "type": "address"
                }
            ],
            "name": "removeAccess",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "addressToAdmin",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "addressToPatient",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "aadhar",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "publicAddress",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "phoneNumber",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "addressToRecord",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "id",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "aadhar",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "timestamp",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "userAddress",
                    "type": "address"
                }
            ],
            "name": "getDetailsAdmin",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "id",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "aadhar",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "timestamp",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct Storage.Record[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "userAddress",
                    "type": "address"
                }
            ],
            "name": "getDetailsUser",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "id",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "aadhar",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "timestamp",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct Storage.Record[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    var address = "0xfe39E9C62ba2de4730dB65aB67b10DcE40f96cF1";
    const { ethereum } = window;
    // console.log(window.ethereum);
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);
    contract.pushRecord(Id,BloodPressure,Aadhar);

    }

      useEffect(()=>{
        async function initWeb3() {
            if (window.ethereum && window.ethereum.isMetaMask) {
                window.ethereum
                  .request({ method: "eth_requestAccounts" })
                  .then((result) => {
                    console.log("Wallet Connected");
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              } else {
                console.log("Need to install MetaMask");
            }
            
            var abi =[
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "Temp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "_addhar",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "time",
                            "type": "uint256"
                        }
                    ],
                    "name": "pushRecord",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "doctorAddress",
                            "type": "address"
                        }
                    ],
                    "name": "removeAccess",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "name": "addressToAdmin",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "name": "addressToPatient",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "aadhar",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "publicAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "phoneNumber",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "addressToRecord",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "aadhar",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "timestamp",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "userAddress",
                            "type": "address"
                        }
                    ],
                    "name": "getDetailsAdmin",
                    "outputs": [
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "id",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "string",
                                    "name": "aadhar",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timestamp",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Storage.Record[]",
                            "name": "",
                            "type": "tuple[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "userAddress",
                            "type": "address"
                        }
                    ],
                    "name": "getDetailsUser",
                    "outputs": [
                        {
                            "components": [
                                {
                                    "internalType": "uint256",
                                    "name": "id",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "string",
                                    "name": "aadhar",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "timestamp",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct Storage.Record[]",
                            "name": "",
                            "type": "tuple[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            ];
            var address = "0x40626603CBE99e98Ef7D64B0960A30d3966fCA8a";
            const { ethereum } = window;
            // console.log(window.ethereum);
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(address, abi, signer);
            // console.log(contract);
            // console.log(signer);
            await contract.getDetailsUser(await signer.getAddress()).then(function(value){
              console.log(value);

            })
          }
        initWeb3();
      },[])
  return (
    <div>

         <div className="grid grid-cols-4 h-screen">
      <aside className="col-span-1 bg-gray-800">
        <nav className="flex flex-col h-full text-gray-600 body-font">
          <Link to="/dashboard/admin/newentry" className="p-4 text-white hover:bg-gray-700">
            Make Entry
          </Link>
          <Link to="/dashboard/admin/searchentry" className="p-4 text-white hover:bg-gray-700">
            View Entries
          </Link>
          <Link to="/contact" className="p-4 text-white hover:bg-gray-700">
            Search Entry
          </Link>
        </nav>
      </aside>
      <main className="col-span-3 bg-gray-300">
        
        <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
   
    <div class="w-1/3 mx-auto">
    {/* <p class="lg:w-1/2 mx-auto leading-relaxed text-base">Contact</p> */}
      <div class="flex flex-wrap -m-2">


        
    <form action="" onSubmit={handleSubmit}>
        <div class="p-2">
          <div class="relative">
            <label for="Aadhar" class="leading-7 text-sm text-gray-600">Aadhar Number</label>
            <input type="text" id="aadhar" name="aadhar" value={Aadhar} onChange={(e)=>{setAadhar(e.target.value);}} placeholder=""class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>

        <div class="p-2">
          <div class="relative">
            <label for="HeartRate" class="leading-7 text-sm text-gray-600">Heart Rate</label>
            <input type="text" id="HeartRate" name="HeartRate" value={HeartRate} onChange={(e)=>{setHeartRate(e.target.value);}} class="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>


        <div class="p-2">
          <div class="relative">
            <label for="BloodPressure" class="leading-7 text-sm text-gray-600">Blood Pres</label>
            <input type="BloodPressure" id="Blodd" name="insurance"  value={BloodPressure} onChange={(e)=>{setBloodPressure(e.target.value);}}class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>

        <div class="p-2">
          <div class="relative">
            <label for="Insurance" class="leading-7 text-sm text-gray-600">Insurance Id</label>
            <input type="Insurance" id="insurance" name="insurance" value={Id} onChange={(e)=>{setId(e.target.value);}} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>



        
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
        </div>

        </form>

        


        
          
        
      </div>
    </div>
  </div>
</section>

            

      </main>
    </div>


       
    </div>
  )
}

export default NewEntry