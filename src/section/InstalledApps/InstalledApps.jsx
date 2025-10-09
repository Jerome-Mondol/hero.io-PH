import React, { useEffect, useState } from 'react'
import AppsCard from '../../data/apps.json'
import HomeCards from '../../data/data.json'
import InstalledAppCard from '../../components/InstalledApp';

const InstalledApps = () => {

    const allApps = [
        ...(AppsCard?.appsCards || []),
        ...(HomeCards?.homeAppCards || [])
    ];

    const [installedApps, setInstalledApps] = useState([]);
    const [sortedApps, setSortedApps] = useState([]);
    
    const [sortBy, setSortBy] = useState('high-low');

    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem('downloads')) || [];
        const installed = allApps.filter(app => apps.includes(app.id));
        setInstalledApps(installed);
        console.log(installed)
        setSortedApps(installed);
    }, []);


    const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);

    const appsCopy = [...installedApps]; // copy installed apps
    if(value === "high-low") {
        appsCopy.sort((a, b) => b.size - a.size); // descending
    } else if(value === "low-high") {
        appsCopy.sort((a, b) => a.size - b.size); // ascending
    }

    setSortedApps(appsCopy);
}


    

    return (
        <>
            <div>
                <div className='bg-dark' >
                    <h1 className='text-3xl text-dark text-center font-bold pt-10' >Your Installed Apps</h1>
                    <p className='text-highlighted text-center py-3' >Explore All Trending Apps on the Market developed by us</p>

                    <div className='flex justify-between w-[80%] mx-auto py-6' >
                        <h1 className='text-dark text-xl font-bold' >{installedApps.length} apps found</h1>

                        <select onChange={handleSortChange} defaultValue="sort-by-downloads" className="select w-[20%] bg-light text-dark">
                            <option disabled={true}>Sort by downloads</option>
                            <option value="high-low">High to low</option>
                            <option value="low-high" >Low to High</option>
                        </select>
                    </div>
                    <div className='w-full' >
                        {
                            sortedApps.map(({ id, image, title, downloads, size, ratingAvg }) => (
                                <InstalledAppCard key={id} image={image} title={title} downloads={downloads} size={size} ratingAvg={ratingAvg} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstalledApps
