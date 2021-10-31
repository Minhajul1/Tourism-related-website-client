import React, { useEffect, useState } from 'react';
import PackageData from '../PackageData/PackageData';
import './Package.css'

const Package = () => {
    const [packages, setPackage] = useState([])
    useEffect( () => {
        fetch('https://ghostly-monster-61498.herokuapp.com/packages')
        .then(response => response.json())
        .then(data => setPackage(data))
    }, [])
    return (
        <div>
            <h1>Our Packages for you!!!</h1>
            <div className="service-container">
                {
                    packages.map(packageData => <PackageData key={packageData.id}packageData={packageData}></PackageData>)
                }
            </div>
        </div>
    );
};

export default Package;