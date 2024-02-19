"use client"
import React, {useEffect, useState } from 'react'
import RE from './RE'

const REList = () => {
    const RE_API_BASE_URL = "http://localhost:8080/api/re/res"
    const [res, setRes] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try{
            const response = await fetch(RE_API_BASE_URL, {
                method: "GET",
                headers:{
                    "Content_Type": "application/json",
                },
            });
            const res = await response.json();
            setRes(res);
        }catch(error){
            console.log(error);
        }
        setLoading(false);
      };
      fetchData();
    },[]);
    
  return (
    
    <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="sr-only">REs</h2>

    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {!loading && res?.map((re) => (
        <RE key = {re.id} re={re}/>
    ))}
      
    </div>
  </div>
</div>
  )
}

export default REList