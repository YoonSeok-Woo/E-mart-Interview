import './List.css';
import React, {useEffect, useState} from 'react';
// import Axios from 'axios';
import Item from './Item.js'
import {useInView} from "react-intersection-observer"
import data from "../data.json"

function List(){
  const [paging,setPaging] = useState(1);
  const [loaded1,setLoaded1] = useState(false);
  const [loaded2,setLoaded2] = useState(false);
  const [items,setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory,setCurrentCategory]= useState('')
  const [ref,inView] = useInView()
  useEffect(()=>{
    if (inView){
      console.log("view?")
      setPaging(paging+1)
    }
  },[inView])
  useEffect(()=> {
    console.log(data)
    if(!loaded1){
      setCategories(data.categories)
      setLoaded1(true)
      // Axios({
      //   method:'get',
      //   url:'http://192.168.1.8:8080/categories'
      // }).then(function(res){
      //   console.log(res)
      //   setCategories(res.data)
      //   setLoaded1(true)
        
        
      // }).catch(function(err){
      //   console.log(err)
      // })
    }
    if(!loaded2){
      setItems(data.items)
      setLoaded2(true)
      setCurrentCategory('')
      // Axios({
      //   method:'get',
      //   url:'http://192.168.1.8:8080/items'
      // }).then(function(res){
      //   console.log(res)
      //   setItems(res.data)
      //   setLoaded2(true)
      //   setCurrentCategory('')
        
        
      // }).catch(function(err){
      //   console.log(err)
      // })
    }
  })
  
  const menu=()=>{
    if(loaded1){
      var res = []
      if(currentCategory===""){
        res =[<span className="selected">전체</span>]
        
        categories.forEach(function(category){
            res.push(<span onClick={()=>{
              setCurrentCategory(category)
              setPaging(1)
            }} className="others">{category}</span>)
        })
        
      }else{
        res =[<span onClick={()=>{
          setCurrentCategory("")
          setPaging(1)
        }} className="others">전체</span>]
        
        categories.forEach(function(category){
          if(category===currentCategory){
            res.push(<span className="selected">{category}</span>)
          }
          else{
            res.push(<span onClick={()=>{
              setCurrentCategory(category)
              setPaging(1)
            }} className="others">{category}</span>)
          }
        })
      }
    }
    return res
  }
  const displays = () => {
    var res = []
    if(loaded2&&loaded1){
      var l = 0
      if(items.length<10*paging){
        l = items.length
      }else{
        l = 10*paging
      }
      console.log(l)
      for(let i = 0; i<l;i++){
        if(currentCategory===''){
          
          res.push(<Item item = {items[i]}></Item>)
        }else{
          if(items[i].categories.includes(currentCategory)){
            res.push(<Item item = {items[i]}></Item>)
          }
        }
        
      }
    }
    return res
  }
  const inViewCheck = () => {
    if(loaded1 && loaded2){
      return [<div ref={ref}></div>]
    }else{
      return []
    }
  }
  return (
    <div>
      <div className="Menu">
        {menu()}
      </div>
      <div>{displays()}</div>
      {inViewCheck()}
    </div>
  )
}export default List;