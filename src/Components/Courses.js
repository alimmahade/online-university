import { data } from 'autoprefixer';
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
                courses.map(course=><p key={course.id}>
                    <p>{course.name}</p>
                </p>)
            }
        </div>
        </div>
    );
};

export default Courses;