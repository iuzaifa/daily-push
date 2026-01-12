import React from 'react'
import JobListings from '../components/JobListings'

const JobsPage = () => {
  return (
    <>
     <section className='bg-slate-100 py-5 px-5 m-5'>

        <JobListings isHone={false}/>
      
     </section>
    </>
  )
}

export default JobsPage