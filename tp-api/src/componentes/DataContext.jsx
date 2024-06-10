import React from 'react'
import {useState,createContext,useEffect} from 'react'


export const DataContext = createContext()



export const  DataProvider = (props) =>{

  const [porver, setPorver] = useState(localStorage.getItem('porver')? JSON.parse(localStorage.getItem('porver')) : [])
  const [porVerPoster, setPorVerPoster] = useState(() => {
    const storedPorVerPoster = localStorage.getItem('porVerPoster');
    return storedPorVerPoster ? JSON.parse(storedPorVerPoster) : [];
});
 

//preferidas

useEffect(()=>{
  localStorage.setItem("porver",JSON.stringify(porver))
} ,[porver] )

useEffect(()=>{
    localStorage.setItem('porVerPoster', JSON.stringify(porVerPoster));
  } ,[porVerPoster] )





  return (
    <div>
    <DataContext.Provider value={{porver,setPorver, porVerPoster, setPorVerPoster}}>
    {props.children}
    </DataContext.Provider>

    </div>
  )
}