import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import JobCard from './JobCard';
import { experience, job_options, location_options, minBaseSalary, numberOfEmployees } from '../utils/constants';
const Body = () => {
    const [listOfJobs,setListOfJobs]=useState(null);
    const [filteredJobs,setFilteredJobs]=useState([]);
    const [filters, setFilters] = useState({
        location: [],
        role: [],
        experience:null,
        salary:null
      });
      const applyFilters = () => {
        // Apply filtering logic based on the filters state
        return listOfJobs?.filter(job => {
            const minExperience = job.minExp || 0; // Treat null as zero for minimum experience
            const maxExperience = job.maxExp ||10000; // Treat null as infinity for maximum experience
            const minSalary = job.minJdSalary || 0;
            const passSalaryFilter = !filters.salary || minSalary >= filters.salary;
            const passExperienceFilter = !filters.experience || (minExperience  <= filters.experience && maxExperience >= filters.experience);
          return (
            (filters?.location.length === 0 || filters?.location.includes(job.location)) &&
            (filters?.role.length === 0 || filters?.role.includes(job.jobRole)) && passExperienceFilter && passSalaryFilter
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
        else if(actionMeta.name === 'experience'){
            if (!selectedOptions) { // Handle null value when option is cleared
                setFilters(prevFilters => ({
                  ...prevFilters,
                  experience: null
                }));
              }
              else {
            setFilters(prevFilters => ({
                ...prevFilters,
                experience: selectedOptions.value // Use selected value directly for experience filter
              }));
            }
        }
        else if(actionMeta.name === 'basesalary'){
            if (!selectedOptions) { // Handle null value when option is cleared
                setFilters(prevFilters => ({
                  ...prevFilters,
                  salary: null
                }));
              }
              else {
            setFilters(prevFilters => ({
                ...prevFilters,
                salary: selectedOptions.value // Use selected value directly for experience filter
              }));
            }
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
    
    if(!listOfJobs){
       return;
    }
  return (
    <div>
    <div className='flex m-4 p-4 '>
         
        <Select name='role' placeholder="Roles" onChange={handleChange} options={job_options} isMulti />
        <Select name='location' placeholder="Location" onChange={handleChange} className='mx-2 px-2 ' options={location_options} isMulti />
        <Select name='employeecount' placeholder="Number of Employees" className='mx-2 px-2 ' options={numberOfEmployees}   />
        <Select name='experience' placeholder="Experience" className='mx-2 px-2 ' options={experience} onChange={handleChange}   isClearable={true}/>
        <Select name='basesalary' placeholder="Min Base Salary" className='mx-2 px-2 ' onChange={handleChange} options={minBaseSalary}   isClearable={true}/>
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