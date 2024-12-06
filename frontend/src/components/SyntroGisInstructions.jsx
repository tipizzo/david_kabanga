import React from 'react';

const SyntroGisInstructions = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-900 text-white rounded-lg shadow-md w-11/12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-medium my-10">Introducing <span className='font-bold text-yellow-300'>SyntroGIS</span></h1>
      <p className="text-lg text-gray-300 text-center">
      Syntro is a lightweight React library designed to streamline the creation of GIS applications. It focuses on integrating map functionalities, spatial data handling, and visualizations into React apps with minimal boilerplate.
        Follow the instructions below to get started:
      </p>
      
      <div className="text-left w-full">
        <h2 className="text-2xl font-semibold text-yellow-300">Installation</h2>
        <pre className="bg-gray-800 p-4 rounded-lg text-sm overflow-auto">
          <code>npm install syntrogis</code>
        </pre>
      </div>

      <div className="text-left w-full">
        <h2 className="text-2xl font-semibold text-yellow-300">Basic Usage</h2>
        <pre className="bg-gray-800 p-4 rounded-lg text-sm overflow-auto">
          <code>
{`import SyntroGis from 'syntrogis';

const gis = new SyntroGis({
  apiKey: 'YOUR_API_KEY',
  region: 'us-east-1'
});

// Perform operations
gis.getMap('coordinates')
  .then(map => console.log(map))
  .catch(err => console.error(err));`}
          </code>
        </pre>
      </div>

      <div className="text-left w-full">
        <h2 className="text-2xl font-semibold text-yellow-300">Features</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Easy GIS integration with any project</li>
          <li>Real-time map rendering</li>
          <li>Supports multiple regions and datasets</li>
          <li>Efficient and scalable</li>
        </ul>
      </div>

      <div className="text-left w-full">
        <h2 className="text-2xl font-semibold text-yellow-300">Documentation</h2>
        <p className="text-gray-300">
          For full documentation, visit our official site: 
          <a
            href="https://syntrogis.docs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline ml-1"
          >
            syntrogis.docs.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default SyntroGisInstructions;
