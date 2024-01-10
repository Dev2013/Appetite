import React from 'react'
import { useEffect ,useState} from 'react'
import { MENU_URL } from './constants';

const useMenu = (resid) => {
    const[resinfo,setresinfo] = useState(null);
    useEffect(()=>{
        fetchData();
        },[]);
const fetchData = async() =>{
    const json = await fetch(MENU_URL+resid);
    const obj = await json.json();
    setresinfo(obj?.data);
}
return resinfo;
}

export default useMenu;