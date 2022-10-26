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
                courses.map(course=><div>
                    <p>{course.Name}</p>
                    <img src={course.picture} alt="" />
                </div>)
                    
            }
        </div>
        </div>
    );
};

export default Courses;