import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Wellcome to Our Online University</h1>
      <p className="mb-5">Read about the basics of web development, the process of creating a website, and additional resources for those who want to learn more.</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;