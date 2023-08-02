import React,{useEffect,useState} from "react";
import basestyle from "../Base.module.css";
import DataTable from '../react-table';
import axios from "axios";
import Cookies from 'js-cookie';
import UsersStyle from './Users.module.css'
import { useNavigate } from "react-router-dom"



const UserDetails = () => {
  let token = Cookies.get('token')
  const headers = {
    // Set your custom headers here
    Authorization: `Bearer ${token}`,
  };

  const navigate = useNavigate()

  const[userList,setUserList]=useState([])
  const columns = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Name', accessor: 'name' },
  { Header: 'Username', accessor: 'username' },
];

let logout = ()=>{
  Cookies.remove('token')
  navigate('/')
}


useEffect(()=>{
axios.get("http://localhost:5000/get-details",{headers}).then((res)=>{
  console.log("resss::",res?.data?.data);
  setUserList(res?.data?.data)
}).catch((error)=>{})
},[])
  return (
    <div className={UsersStyle.main}>
    <div className={UsersStyle.Logout}>
      <button className={UsersStyle.logoutButton} onClick={()=>{logout()}}>LOGOUT</button>
    </div>
    <div className={UsersStyle.users}>
      <h1>User Table</h1>
      <DataTable columns={columns} data={userList} />
    </div>
    </div>
  );
};
export default UserDetails;
