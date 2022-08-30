import React, {useEffect, useState} from 'react';
// import Axios from 'axios';
import Item from './Item.js'
import {useInView} from "react-intersection-observer"
import data from "../data.json"
import styled from 'styled-components';
function List(){
  const Menu = styled.div`
    white-space:nowrap;
    -ms-overflow-style: none;
    width:420px;
    margin-bottom:10px;
    overflow-x:scroll;
  `;
  const Selected = styled.div`
    margin:0 5px;
    font-weight: bold;
    font-size:15px;
    margin:0 10px;
    display:inline-block;
    border-style:solid;
    border-width: 0px 0px 3px 0px;
  `;
  const Others = styled.div`
    color:gray;
    display:inline-block;
    font-size:15px;
    margin:0 10px;
  `;
  const [paging,setPaging] = useState(1);
  const [loaded1,setLoaded1] = useState(false);
  const [loaded2,setLoaded2] = useState(false);
  const [items,setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory,setCurrentCategory]= useState('')
  const [ref,inView] = useInView()
  useEffect(()=>{
    if (inView){
      
      setPaging(paging+1)
    }
  },[inView])
  useEffect(()=> {
    
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
        res =[<Selected>전체</Selected>]
        
        categories.forEach(function(category){
            res.push(<Others onClick={()=>{
              setCurrentCategory(category)
              setPaging(1)
            }}>{category}</Others>)
        })
        
      }else{
        res =[<Others onClick={()=>{
          setCurrentCategory("")
          setPaging(1)
        }}>전체</Others>]
        
        categories.forEach(function(category){
          if(category===currentCategory){
            res.push(<Selected>{category}</Selected>)
          }
          else{
            res.push(<Others onClick={()=>{
              setCurrentCategory(category)
              setPaging(1)
            }}>{category}</Others>)
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
      <Menu>
        {menu()}
      </Menu>
      <div>{displays()}</div>
      {inViewCheck()}
    </div>
  )
}export default List;