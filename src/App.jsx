import React,{useState, useEffect} from "react";
import Msg from "./components/Msg";
import db from "../firebase/firebase";
import {collection, addDoc, query, onSnapshot} from "firebase/firestore";
function App(){

  const [names, setNames] = useState([]);
  
      useEffect(() =>{
        const q = query(collection(db,"users"));
        const messages = onSnapshot(q,(snapshot)=>{
          setNames(snapshot.docs.map((doc) => doc.data()));
        })
        console.log(names);
      },[]);

      const setDoc = async() =>{
        const user = prompt("Enter Your Name");
        const docRef = await addDoc(collection(db,"users"),{
          name:user
        })
      }
      
  return(
    <div className="">
        <h1 className="uppercase text-3xl text-center mt-10">say hello application</h1>
        <div className="w-full flex justify-center mt-10">
          <button onClick={setDoc} className="uppercase bg-blue-700 text-white w-[calc(200px)] py-4 rounded-lg">say hello</button>
        </div>
        <div className="w-full mt-10">
         {
          names.map((name) =>(
            <Msg name={name.name} />
          ))
         }
        </div>
        
    </div>
  )
};


export default App;