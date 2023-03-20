import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { BsSend } from 'react-icons/bs'
import { BsBookmarkPlus } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'
import { GrUploadOption } from 'react-icons/gr'
import '../css/Post.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const imgUser='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
const JobTitle='Data Engineer'
const JobDescription='A data engineer is responsible for designing, building, and maintaining the infrastructure and tools needed to collect, process, and analyze large volumes of data. They work closely with data scientists, analysts, and other stakeholders to ensure that the data is accurate, reliable, and easily accessible. '
const RequiredSkills='Some common skills and qualifications for a data engineer may include: Strong knowledge of SQL and database management systems such as PostgreSQL or MySQL Experience with programming languages such as Python, Java, or Scala Familiarity with distributed computing systems such as Hadoop or Spark Experience with cloud-based data storage and processing platforms such as AWS, Google Cloud, or Azure Understanding of data modeling and database design principles Knowledge of data warehousing and ETL (extract, transform, load) processes Familiarity with data visualization and reporting tools such as Tableau or Power BI Strong problem-solving and analytical skills Excellent communication and collaboration skills, as data engineers often work closely with other stakeholders such as data scientists, analysts, and business leaders.'
const imgPost='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png'
const Post=()=>{
  return(
    <div className='container'>
        <div className='box flex'>
        <div className='header flex flex-row items-center gap-4' >
          <img src={imgUser} className='profile-pic' />
          <span>Username</span>
          <FiMoreHorizontal 
            className='w-6 h-6'/>
        </div>
        
      <div className='Job flex flex-row justify-between items-center mt-2'>
        {/* Heading */}
        <div>
            <strong>Job Title:</strong>{JobTitle}
            <br></br>
            <strong>Job description:</strong>{JobDescription}
            <br></br>
            <strong>Required Skills:</strong>{RequiredSkills}
            <br></br>
            
        </div>

        
        
        
      </div>
      <div>
        <img src={imgPost} className='post-block'></img>
      </div>
      {/*icons*/}
      <div>
        <div className='bottom flex flex-row gap-4 items-center'>
            <div>
            <AiOutlineLike className='icon like'/>
            <FaRegComment className='icon comment'/>
            <BsSend className='icon send'/>
            <GrUploadOption className='icon apply' />
            </div>
           
            <BsBookmarkPlus className='bookmark'/>

        </div>
        <div className='likes flex flex-row items-center gap-2'>
            <img src={imgUser} className='likespro'></img>
            <p>Liked by <strong>Username</strong> and <strong>other 1200</strong></p>
        </div>
      </div>
    </div>
    </div>
    
    
  )
}

export default Post
