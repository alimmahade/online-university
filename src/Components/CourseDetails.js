import { useLoaderData } from 'react-router-dom';


const CourseDetails = () => {
    const course=useLoaderData();
    console.log(course)
    return (
        <div>
            <h1>Course Details: </h1>
            
            <button className='btn-secondary p-2 border-2 rounded-lg'>Pdf Download</button>
          <div className='c-container'>
           <div className='layout'>
            <button className='btn-secondary p-2 border-2 rounded-lg'>Get Premimum</button>
          </div>
         </div>
            </div>
    );
    
};

export default CourseDetails;