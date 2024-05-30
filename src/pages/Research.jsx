import { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Research() {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 text-gray-600 md:px-20 mt-[80px]'>
      <div className='flex justify-between'>
      <h1 className="font-medium text-xl mb-4 text-indigo-700">Peer Reviewed Journal Articles</h1>
      <p className='hidden md:block font-medium text-l mb-4 text-white bg-indigo-700 px-3 py-2 rounded-2xl hover:bg-indigo-800 duration-300'><a href="https://scholar.google.com/citations?user=Jva16R8AAAAJ&hl=en&oi=ao" target='_blank'>Google Scholar</a></p>
      </div>
      <p>(* denotes the first author)</p>
      <ul className='list-decimal ml-5 text-[15px] space-y-2'>
        <li><span className='font-bold'>Bhatta, D.</span>, K.P. Paudel, and K. Liu. 2022. Factors influencing water conservation practices adoptions by Nepali farmers. Environment, Development and Sustainability: 1-23. <a href="https://link.springer.com/article/10.1007/s10668-022-02510-4" target='_blank' className='underline text-indigo-500'>https://doi.org/10.1007/s10668-022-02510-4</a></li>
        <li>Acharya, B., <span className='font-bold'>Bhatta, D.</span>, & Dhakal, C. 2022. The risk of eviction and the mental health outcomes among the US adults. Preventive Medicine Reports, 101981. <a href="https://doi.org/10.1016/j.pmedr.2022.101981" target='_blank' className='underline text-indigo-500'>https://doi.org/10.1016/j.pmedr.2022.101981</a></li>
        <li>Sizer, M. A., <span className='font-bold'>D. Bhatta*</span>, B. Acharya, and K. P. Paudel. 2022. Determinants of Telehealth Service Use among Mental Health Patients: A Case of Rural Louisiana. International Journal of Environmental Research and Public Health 19, (11): 6930. <a href="https://doi.org/10.3390/ijerph19116930" target='_blank' className='underline text-indigo-500'>https://doi.org/10.3390/ijerph19116930</a></li>
        <li><span className='font-bold'>Bhatta, D.</span>, K. Paudel., and B. Li. 2021. Potential economic impacts of crop mix and groundwater conservation in the Mississippi River Alluvial Aquifer (MRAA), Louisiana. Natural Resource Modeling. <a href="http://doi.org/10.1111/nrm.12330" target='_blank' className='underline text-indigo-500'>http://doi.org/10.1111/nrm.12330</a></li>
        <li>Aboueshagh. V. H., F. Tsai, <span className='font-bold'>D. Bhatta</span>, and K. Paudel. 2021. Irrigation-Intensive groundwater modeling of complex aquifer systems through integration of big geological data. Frontiers in Water 3: 29. <a href="https://doi.org/10.3389/frwa.2021.623476" target='_blank' className='underline text-indigo-500'>https://doi.org/10.3389/frwa.2021.623476</a></li>
        <li>Paudel, S., P. Kandel, <span className='font-bold'>D. Bhatta</span>, V. Pandit, G. W. Felton, and E. G. Rajotte. 2021. Insect herbivore populations and plant damage increase at higher elevations. Insects 12: 1129. <a href="https://doi.org/10.3390/insects12121129" target='_blank' className='underline text-indigo-500'>https://doi.org/10.3390/insects12121129</a></li>
        <li><span className='font-bold'>Bhatta, D.</span>, G. Henderson, and B. K. Gautam. 2016. Toxicity and nonrepellency of spinosad and spinetoram on Formosan subterranean termites (Isoptera: Rhinotermitidae). Journal of Economic Entomology 109: 1341-1349. <a href="https://doi.org/10.1093/jee/tow079" target='_blank' className='underline text-indigo-500'>https://doi.org/10.1093/jee/tow079</a></li>
        <li><span className='font-bold'>Bhatta, D.</span> and G. Henderson. 2016. Horizontal transfer of spinosad in Coptotermes formosanus (Isoptera: Rhinotermitidae). Journal of Economic Entomology 109: 1813-1818. <a href="https://doi.org/10.1093/jee/tow094" target='_blank' className='underline text-indigo-500'>https://doi.org/10.1093/jee/tow094</a></li>
        <li>Wang, C., G. Henderson, B. K. Gautam, J. Chen, and <span className='font-bold'>D. Bhatta</span>. 2015. Behavioral polymorphism of worker and soldier Coptotermes formosanus during panic escape. Insect Science 23: 305-312. <a href="https://doi.org/10.1111/1744-7917.12206" target='_blank' className='underline text-indigo-500'>https://doi.org/10.1111/1744-7917.12206</a></li>
      </ul>
      <br />
      <hr />
      <br />
      <h1 className="font-medium text-xl mb-4 text-indigo-700">Conference Papers</h1>
      <ul className='list-decimal ml-5 text-[15px] space-y-2'>
        <li><span className='font-bold'>Bhatta, D.</span> and K. Paudel. Impacts of volumetric control and well depth restriction in groundwater management. Southern Economic Association, New Orleans, Louisiana. Nov. 21-23, 2020.</li>
        <li><span className='font-bold'>Bhatta, D.</span> and K. Paudel. Impacts of conservation policy and water saving technology in irrigation energy cost in the Mississippi River Alluvial Aquifer (MRAA). Agricultural and Applied Economics Association, Kansas City, Missouri. July 26-28, 2020.</li>
        <li><span className='font-bold'>Bhatta, D.</span> and K. Paudel. Impacts of groundwater extraction policy instruments under certain and uncertain thresholds. Annual Meeting and Conference, Southern Association of Agricultural Scientists, Louisville, Kentucky. Feb. 1-4, 2020.</li>
        <li><span className='font-bold'>Bhatta, D.</span> and K. Paudel. Factors affecting groundwater use in coastal Louisiana agriculture. 6th National Forum on Socioeconomic Research in Coastal Systems. Center for Natural Resource Economics and Policy, New Orleans, Louisiana. May 19 - 21, 2019.</li>
        <li><span className='font-bold'>Bhatta, D.</span>, K. Paudel, and F. Tsai. Groundwater use in the agricultural sector in Louisiana, 2004-2017. 13th Annual Louisiana Groundwater, Surface Water, and Water Resources Symposium, Baton Rouge, Louisiana. Apr. 15-16, 2019.</li>
        <li><span className='font-bold'>Bhatta, D.</span>, K. Paudel, and F. Tsai. Groundwater extraction and allocation when there are stock externalities. 12th Annual Louisiana Groundwater, Surface Water, and Water Resources Symposium, Baton Rouge, Louisiana. Mar. 27-28, 2018.</li>
        <li><span className='font-bold'>Bhatta, D.</span>, K. Paudel, R. Dhakal, and K. Liu. Intensity of water conservation technology adoptions in Nepal. Annual Meeting and Conference, Southern Association of Agricultural Scientists, Jacksonville, Florida. Feb. 2-6, 2018.</li>
        <li>Aboueshagh, H. V., F. Tsai, <span className='font-bold'>D. Bhatta</span>, and K. Paudel. Toward developing more realistic groundwater models using big data. American Geophysical Union, Fall Meeting 2017.</li>
        <li>Paudel, K., H. Niu, <span className='font-bold'>D. Bhatta</span>, and F. Tsai. Evolution of irrigated crop areas and water use in Louisiana 2004‐2016. 11th Annual Louisiana Groundwater, Surface Water, and Water Resources Symposium, Baton Rouge, Louisiana. Apr. 11-12, 2017.</li>
        <li>Paudel, K., H. Niu, <span className='font-bold'>D. Bhatta</span>, and F. Tsai. Using GIS to calculate crop area and water use in Louisiana 2004-2016. 2017 Southern Central Arc User Group and Louisiana Remote Sensing/GIS Conference. Baton Rouge, Louisiana. Mar. 27-31, 2017.</li>
        <li>Gautam, T. and <span className='font-bold'>D. Bhatta</span>. Determinants of irrigation technology adoption and crop productivity in the Nepalese agriculture sector. Annual Meeting and Conference, Southern Association of Agricultural Scientists, Mobile Alabama. Feb. 5-7, 2017.</li>
      </ul>
      <br />
      <hr />
      <br />
      <h1 className="font-medium text-xl mb-4 text-indigo-700">Posters</h1>
      <ul className='list-decimal ml-5 text-[15px] space-y-2'>
        <li>Kagoya, S., <span className='font-bold'>D. Bhatta</span>, and K. Paudel. Adoption Intensity of Climate Smart Agriculture Technologies in Uganda: a semiparametric analysis. Agricultural and Applied Economics Association, Atlanta, Georgia. July 21-23, 2019.</li>
        <li><span className='font-bold'>Bhatta, D.</span> and K. Paudel. Multidimensional measurement of poverty in Uganda. Annual Meeting and Conference, Southern Association of Agricultural Scientists, Birmingham, Alabama. Feb. 2-6, 2019.</li>
        <li>Karakullukcu, R., <span className='font-bold'>D. Bhatta</span>, F. Tsai, and K. Paudel. The construction of the Mississippi River Alluvial Aquifer, Northeast Louisiana. 11th Annual Louisiana Groundwater, Surface Water, and Water Resources Symposium, Baton Rouge, Louisiana. Apr. 11-12, 2017.</li>
        <li>Karakullukcu, R., <span className='font-bold'>D. Bhatta</span>, F. Tsai, K. Paudel, and S.C. Kao. Development of a Mississippi River Alluvial Aquifer groundwater Model. American Geophysical Union, fall meeting, New Orleans, Louisiana. Dec. 12, 2017.</li>
      </ul>
      <br />
      <hr />
      <br />
      <h1 className="font-medium text-xl mb-4 text-indigo-700">Reports</h1>
      <ul className='list-decimal ml-5 text-[15px] space-y-2'>
        <li><span className='font-bold'>Bhatta, D.</span> 2020. Annual Service Report for the Fiscal Year 2020. Northeast Delta Human Services Authority (NEDHSA). <a href="https://nedeltahsa.org/wp-content/uploads/2021/10/Annual-Service-Report-FY2020_revised-1.pdf" target='_blank' className='underline text-indigo-500'>https://nedeltahsa.org/wp-content/uploads/2021/10/Annual-Service-Report-FY2020_revised-1.pdf</a></li>
        <li><span className='font-bold'>Bhatta, D.</span> 2021. Annual Service Report for the Fiscal Year 2021. Northeast Delta Human Services Authority (NEDHSA). <a href="https://nedeltahsa.org/wp-content/uploads/2021/09/FY20-21-Annual-Report.pdf" target='_blank' className='underline text-indigo-500'>https://nedeltahsa.org/wp-content/uploads/2021/09/FY20-21-Annual-Report.pdf</a></li>
        <li>Sizer. M. A., and <span className='font-bold'>Bhatta, D.</span> 2022. Mental Health and Food Insecurity Concerns in Northeast Louisiana. Northeast Delta Human Services Authority (NEDHSA). <a href="https://nedeltahsa.org/wp-content/uploads/2022/03/NEDHSA-Mental-Health-and-Food-Insecurity-Assessment-2.pdf" target='_blank' className='underline text-indigo-500'>https://nedeltahsa.org/wp-content/uploads/2022/03/NEDHSA-Mental-Health-and-Food-Insecurity-Assessment-2.pdf</a></li>
        <li>Sizer. M. A., and <span className='font-bold'>Bhatta, D.</span> 2022. Health Insurance, Demographics, and Clinic Activities. Northeast Delta Human Services Authority (NEDHSA). <a href="https://nedeltahsa.org/wp-content/uploads/2022/05/Northeast-Delta-HSA-Insurance-Report.pdf" target='_blank' className='underline text-indigo-500'>https://nedeltahsa.org/wp-content/uploads/2022/05/Northeast-Delta-HSA-Insurance-Report.pdf</a></li>
        <li>Sizer. M. A., and <span className='font-bold'>Bhatta, D.</span> 2022. Rise Above Stigma. Northeast Delta Human Services Authority (NEDHSA). <a href="https://nedeltahsa.org/wp-content/uploads/2022/08/FINAL-Rise-Above-Stigma-Report-b-1.pdf" target='_blank' className='underline text-indigo-500'>https://nedeltahsa.org/wp-content/uploads/2022/08/FINAL-Rise-Above-Stigma-Report-b-1.pdf</a></li>
        <li>Sizer. M. A., and <span className='font-bold'>Bhatta, D.</span> 2022. Annual Service Report for Fiscal Year 2022. Northeast Delta Human Services Authority (NEDHSA). <a href="https://nedeltahsa.org/wp-content/uploads/2022/08/FINAL-FY22-Annual-Service-Report-1.pdf" target='_blank' className='underline text-indigo-500'>https://nedeltahsa.org/wp-content/uploads/2022/08/FINAL-FY22-Annual-Service-Report-1.pdf</a></li>
      </ul>
      <br />
      <hr />
      <br />
      <h1 className="font-medium text-xl mb-4 text-indigo-700">Other Publications</h1>
      <p className='mb-1 font-medium'>Dissertation:</p>
      <ul className='list-disc ml-5 text-[15px]'>
        <li><span className='font-bold'>Bhatta, D.</span> 2020. <a href="https://repository.lsu.edu/cgi/viewcontent.cgi?article=6491&context=gradschool_dissertations" target='_blank'className='text-indigo-500 underline'>Sustainable management of groundwater in Louisiana.</a> Ph. D. dissertation, Louisiana State University, Louisiana.</li>
      </ul>
      <br />
      <p className='mb-1 font-medium'>Thesis:</p>
      <ul className='list-disc ml-5 text-[15px]'>
        <li><span className='font-bold'>Bhatta, D.</span> 2015. <a href="https://repository.lsu.edu/cgi/viewcontent.cgi?article=5155&context=gradschool_theses" target='_blank' className='underline text-indigo-500'>Effects of spinosad on Formosan subterranean termite, Coptotermes formosanus Shiraki (Isoptera: Rhinotermitidae).</a> M. S. thesis, Louisiana State University, Louisiana.</li>
      </ul>
      <br />
      <p className='font-medium text-xl mb-6 text-indigo-700 underline'><a href="https://scholar.google.com/citations?user=Jva16R8AAAAJ&hl=en&oi=ao" target='_blank'>Google Scholar</a></p>
      <Link to="/"
      className="text-white bg-indigo-700 hover:bg-indigo-800 rounded-md px-3 py-2 mt-4"
      >Go Back
      </Link>
    </div>
  )
}

export default Research