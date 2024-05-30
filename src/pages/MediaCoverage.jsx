import React from 'react'
import { Link } from 'react-router-dom'

function MediaCoverage() {
  return (
    <div className='max-w-screen-2xl container mx-auto px-6 md:px-28 mt-[90px]'>
      <h1 className="font-medium text-xl mb-4 text-indigo-700">Research Contributions</h1>
      <ul className='list-disc ml-5 text-gray-600 text-[15px]'>
        <li><span className='underline'>Research article:</span> Behavioral polymorphism of worker and soldier Coptotermes formosanus during panic escape. <a href="https://www.nytimes.com/2015/03/03/science/termites-are-guardians-of-the-soil.html?_r=1." target='_blank' className='underline italic text-indigo-500'>The New York Times, March 2, 2015</a></li>
        <li><span className='underline'>Research article:</span> Horizontal transfer of spinosad in Coptotermes formosanus (Isoptera: Rhinotermitidae). <a href="https://www.lsureveille.com/daily/university-researchers-look-at-termites-for-scientific-discoveries/article_3627474c-b88e-11e4-a7b3-0f5c1156309b.html" target='_blank' className='underline italic text-indigo-500'>The Daily Reveille, Feb. 19, 2015</a></li>
        <li>Experts seeing increase of Formosan subterranean termites in Baton Rouge. <a href="https://www.theadvocate.com/baton_rouge/news/article_3d64d559-d84b-5b80-867c-fc03ac27880b.html" target='_blank' className='underline italic text-indigo-500'>The Advocate, May 4 2015.</a></li>
      </ul>
      <br />
      <hr />
      <br />
      <h1 className="font-medium text-xl mb-4 text-indigo-700">Leadership Role</h1>
      <ul className='list-disc ml-5 text-gray-600 text-[15px] '>
        <li><a href="https://www.theadvocate.com/baton_rouge/news/communities/livingston_tangipahoa/article_d88e2a86-5ea4-11e8-abf1-0fb153940cb9.html" target='_blank' className='underline text-indigo-500'>Louisiana State University Graduate Student of the Year Award 2018.</a></li>
        <li><a href="https://www.lsureveille.com/news/international-graduate-students-speak-out-against-lsu-health-insurance-subsidy-elimination-following-sept-23-student/article_bd4d2972-ec36-11e9-b575-ebb3b47ed393.html" target='_blank' className='underline text-indigo-500'>Health insurance policies for international students.</a></li>
        <li><a href="https://www.lsureveille.com/news/its-not-okay-lsu-international-students-administration-aim-to-counteract-ice-guidelines/article_c5295d96-c2cd-11ea-b081-f31a7e7f48d6.html" target='_blank' className='underline text-indigo-500'>ICE guidelines and their impacts on international students during the COVID-19 pandemic.</a></li>
        <li><a href="https://www.theadvocate.com/baton_rouge/entertainment_life/article_c921bf84-d160-11e8-8c86-afb80e4a2f1b.html" target='_blank' className='underline text-indigo-500'>LSU Homecoming court member 2018.</a></li>
        <li><a href="https://issuu.com/thedailyreveille/docs/binder1_4bb3f0e4fa1962/10" target='_blank' className='underline text-indigo-500'>Leadership LSU 2019.</a></li>
      </ul>
      <br />
      <Link
      to="/"
      className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
      >Go Back
      </Link>
    </div>
  )
}

export default MediaCoverage