
import { Card } from 'react-bootstrap';
import {  useLoaderData } from 'react-router-dom';
import './Courses.css';
import Sidebar from './Sidebar';

const Courses = () => {
    
    const loaderData=useLoaderData();
    console.log(loaderData);
    
    
    // const course =useLoaderData();
    return (
        <div>
            <h1>All courses: {loaderData.length}</h1>
          <div className='c-container'>
           <div className='layout'>
            {loaderData.map(loaderData=>
                    <div>
                        <div className='c-card'>
                        <Card.Img variant="top" src={loaderData.picture} className='img-size' />
                            <h2>{loaderData.name}</h2>
                            <p>{loaderData.details}</p>
                            <div>
                            <button className='btn-secondary p-2 border-2 rounded-lg'>Course Detail</button>
                            </div>
                            </div>
                            
                        </div>
                )
            }
           </div>
            <div className='c-link'>
             {
                loaderData.map(data=><Sidebar key={data.id} data={data}></Sidebar>)
             }
            </div>
            
           </div>
        </div>
    );
};

export default Courses;