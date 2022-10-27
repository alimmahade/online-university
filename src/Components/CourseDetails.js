import'./CourseDetails.css';
import PDF from './PDF';
const CourseDetails = ({data}) => {
    console.log(data)
    
    return (
        <div className='details-cont'>
            <h1>Course Details: </h1>

            <PDF></PDF>

          <div className='c-container'>
           <div className='layout'>
            <button className='btn-secondary border-2 rounded-lg'>Get Premimum</button>
          </div>
         </div>
            </div>
    );
    
};

export default CourseDetails;