import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({data}) => {
    console.log(data)

    return (
        <div>
            <button className='btn-secondary p-2 border-2 rounded-lg'> <Link to={`/coursedetails/1`}>{data.name}</Link> </button>
        </div>
    );
};

export default Sidebar;