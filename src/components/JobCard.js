import React, { useState } from 'react'

const JobCard = (props) => {
    const [expanded, setExpanded] = useState(false);
    
    const toggleExpanded = () => {
    setExpanded(!expanded);
    }
    const jobData=props.jobData;
    const {jobDetailsFromCompany,location,jobRole}=jobData;
    const Capitalize= (str)=> {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-300 p-4 mb-4 w-80 h-196 ">
    <div className='flex'>
    <img src='https://etimg.etb2bimg.com/thumb/msid-103031053,imgsize-2088,width-1200,height=765,overlay-ethrsea/news/industry/weekday-secures-2-2m-funding-as-it-tackles-critical-trust-gap-in-hiring-tech-teams-with-its-reference-focus.jpg' alt={"company"} className="h-16 w-16 rounded-full flex-shrink-0 mr-4" />
      <div>
      <p className="text-gray-400 text-lg">Week Day</p>
      <h2 className="text-lg">{Capitalize(jobRole)}</h2>
      <p className="text-black-600 mb-2 font-bold">{Capitalize(location)}</p>
      </div>
    </div>
    <div className="flex-grow"> 
      <div  className=''>
       <h3 className='font-semibold mt-4'> About Company </h3>
       <h4 className='font-semibold'> About us</h4>
      <p className=" ltext-sm text-gray-800 leading-snug ${expanded ? '' : 'opacity-100'}"  style={{ fontFamily: 'Arial, sans-serif' }}>{expanded ? jobDetailsFromCompany : `${jobDetailsFromCompany.substring(0, 300)}...`}</p>
      </div>
      {jobDetailsFromCompany.length > 300 && (
        <button
          className="text-blue-500 hover:text-blue-700"
          onClick={toggleExpanded}
        >
          {expanded ? 'Show Less' : 'View Job'}
        </button>
      )}
      <p className="text-gray-600">Experience Required: Not Given</p>
      <div className='mt-4 flex justify-center'>
      <a
        href="/"
        className="bg-teal-500 w-full font-semibold text-black py-2  text-center rounded-md inline-block mt-2 "
      >
        Easy Apply 
      </a>
      </div>
      <div className='mt-4 flex justify-center'>
     
      <a
        href="/"
        className="bg-blue-700 w-full font-semibold text-white py-2  text-center rounded-md inline-block mt-2 "
      >
        
        Unlock Referral asks
      </a>
      </div>
    </div>
  </div>
);
}

export default JobCard