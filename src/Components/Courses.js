import React, { useEffect, useState } from 'react';



const Courses = () => {
    const [courses, setCourses]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=> res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div>
            <h1>All courses: {courses.length}</h1>
        <div>
            {
                courses.map(course=>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <img className='h-20 w-20' src={course.picture} alt=""/>
                        <div className="card-body">
                            <h2 className="card-title">{course.name}</h2>
                            <p>{course.details}</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Course Detail</button>
                            </div>
                        </div>
                        </div>
                )
                    
            }
        </div>
        </div>
    );
};

export default Courses;