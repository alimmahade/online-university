import React from 'react';

const Blog = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold">Questions And Answer?</h1>
                <p className="py-6">Question:-1. What is cors?  Answer: CORS is a part of HTTP that lets servers specify any other hosts 
                                    from which a browser should permit loading of content.</p>
                <p className="py-6">Question:-2. Why are you using firebase? Answer: Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.  </p>
                <p className="py-6">Question:-3. How does the private route work ? Answer: The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). </p>
                <p className="py-6">Question:-4. What is node ? Answer: Node.js is an open-source, cross-platform, 
                                    back-end JavaScript runtime environment 
                                    that runs on the V8 engine and executes
                                    JavaScript code outside a web browser.
                </p>
            
            </div>
        </div>
        </div>
    );
};

export default Blog;