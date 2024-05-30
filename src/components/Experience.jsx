import React from 'react'

function Experience() {
  return (
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
     <h1 className="font-bold text-3xl mb-4">Experience</h1>
     <h1 className='font-semibold text-cyan-900 text-xl'>Northeast Delta Human Services Authority</h1>
     <ul className='list-disc ml-8 py-2'>
     <li>Director of Behavioral and Primary Health Analytics. <span className='text-gray-500'>Jun 2021 - Present</span></li>
     <li>Business Analytics Specialist. <span className='text-gray-500'>Sep 2020 - Jun 2021</span></li>
     </ul>
     <br />
     <h1 className='font-semibold text-cyan-900 text-xl'>Louisiana State University</h1>
      <ul className='list-disc ml-8 py-2'>
        <li>Graduate Research Assistant. Department of Agricultural Economics. <span className='text-gray-500'>Baton Rouge, LA. Jan 2016 - Dec 2020</span></li>
        <li>Statistical Consultant. <span className='text-gray-500'>Baton Rouge, LA. Aug 2018 - Aug 2019</span></li>
        <li>Graduate Research Assistant. Department of Entomology.  <span className='text-gray-500'>Baton Rouge, LA. Aug 2013 - Dec 2015</span></li>
      </ul>
      <br />
      <hr />
    </div>
  )
}

export default Experience