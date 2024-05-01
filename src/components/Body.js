import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import JobCard from './JobCard';
const Body = () => {
    const [listOfJobs,setListOfJobs]=useState(null);
    const [filteredJobs,setFilteredJobs]=useState([]);
    const [filters, setFilters] = useState({
        location: [],
        role: []
      });
      const applyFilters = () => {
        // Apply filtering logic based on the filters state
        return listOfJobs?.filter(job => {
          return (
            (filters?.location.length === 0 || filters?.location.includes(job.location)) &&
            (filters?.role.length === 0 || filters?.role.includes(job.jobRole))
          );
        });
      };
      const handleChange = (selectedOptions, actionMeta) => {
        // Update the filters state based on the selected options
        if (actionMeta.name === 'location') {
          setFilters(prevFilters => ({
            ...prevFilters,
            location: selectedOptions.map(option => option.value)
          }));
        } else if (actionMeta.name === 'role') {
          setFilters(prevFilters => ({
            ...prevFilters,
            role: selectedOptions.map(option => option.value)
          }));
        }
       
      };
    useEffect(() => {
        // Update filtered job data whenever filters change
        setFilteredJobs(applyFilters());
      }, [filters]);
      console.log(filteredJobs);
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
        setFilteredJobs(json?.jdList);
        console.log(listOfJobs);
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
    if(!listOfJobs){
       return;
    }
  return (
    <div>
    <div className='flex m-4 p-4 '>
         
        <Select name='role' placeholder="Roles" onChange={handleChange} options={job_options} isMulti />
        <Select name='location' placeholder="Location" onChange={handleChange} className='mx-2 px-2 ' options={location_options} isMulti />
    </div>
    <div className='flex flex-wrap '>{ filteredJobs && 
        filteredJobs.map((job)=> <div key={job.jdUid} className="max-w-md mx-2 mb-4">
        <JobCard  jobData={job}></JobCard>
        </div>
    )
    }
    </div>
    </div>
  )
}

export default Body