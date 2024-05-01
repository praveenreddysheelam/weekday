import React, { useEffect, useState } from 'react'
import Select from 'react-select'
const Body = () => {
    const [listOfJobs,setListOfJobs]=useState(null);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");  
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
       };
    const fetchData= async () =>{
        const data =await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const json= await data.json();
        setListOfJobs(json?.jdList);
    }
    useEffect(()=>{
        fetchData();
    },[]);
    const job_options=[{ value: 'frontend', label: 'FrontEnd' },
    { value: 'backend', label: 'BackEnd' },
    { value: 'android', label: 'Android' },
    { value: 'ios', label: 'IOS' },
    { value: 'tech lead', label: 'Tech Lead' }]
    const location_options=[{ value: 'remote', label: 'Remote' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi ncr', label: 'Delhi' }]
  return (
    <div>
    <div className='flex m-4 p-4 '>
        <Select placeholder="Roles" options={job_options} isMulti />
        <Select placeholder="Location" className='mx-2 px-2 ' options={location_options} isMulti />
    </div>
    </div>
  )
}

export default Body