import React, { useEffect, useState } from 'react'
import AppsCard from '../../data/apps.json'
import HomeCards from '../../data/data.json'
import InstalledAppCard from '../../components/InstalledApp';
import { toast } from 'sonner'

const InstalledApps = () => {

    const allApps = [
        ...(AppsCard?.appsCards || []),
        ...(HomeCards?.homeAppCards || [])
    ];


    const [installedApps, setInstalledApps] = useState([])
    const [sortedApps, setSortedApps] = useState([])

    const [sortBy, setSortBy] = useState('high-low')

    const getInstalledApps = () => {
        let downloads = []
        try {
            const raw = localStorage.getItem('downloads')
            downloads = raw ? JSON.parse(raw) : []
        } catch (e) {
            downloads = []
        }
        if (!Array.isArray(downloads)) downloads = []
        const downloadsStr = downloads.map(String)
        return allApps.filter(app => downloadsStr.includes(String(app.id)))
    }

    const applySort = (apps, sort) => {
        const copy = [...apps]
        if (sort === 'high-low') {
            copy.sort((a, b) => (Number(b.size) || 0) - (Number(a.size) || 0))
        } else if (sort === 'low-high') {
            copy.sort((a, b) => (Number(a.size) || 0) - (Number(b.size) || 0))
        }
        return copy
    }

    useEffect(() => {
        const installed = getInstalledApps()
        setInstalledApps(installed)
        setSortedApps(applySort(installed, sortBy))
    }, [])

    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'downloads') {
                const installed = getInstalledApps()
                setInstalledApps(installed)
                setSortedApps(applySort(installed, sortBy))
            }
        }
        window.addEventListener('storage', handler)
        return () => window.removeEventListener('storage', handler)
    }, [sortBy])


    const handleSortChange = (e) => {
        const value = e.target.value
        setSortBy(value)
        setSortedApps(applySort(installedApps, value))
    }

    const handleUninstall = (id) => {
        let downloads = []
        try {
            const raw = localStorage.getItem('downloads')
            downloads = raw ? JSON.parse(raw) : []
        } catch (e) {
            downloads = []
        }
        if (!Array.isArray(downloads)) downloads = []
        const updatedDownloads = downloads.filter(appId => String(appId) !== String(id))
        localStorage.setItem('downloads', JSON.stringify(updatedDownloads))
        const installed = getInstalledApps()
        setInstalledApps(installed)
        setSortedApps(applySort(installed, sortBy))
        toast.success("App uninstalled successfully")
    }

    return (
        <>
            <div>
                <div className='bg-dark' >
                    <h1 className='text-3xl text-dark text-center font-bold pt-10' >Your Installed Apps</h1>
                    <p className='text-highlighted text-center py-3' >Explore All Trending Apps on the Market developed by us</p>

                    <div className='flex justify-between w-[80%] mx-auto py-6' >
                        <h1 className='text-dark text-xl font-bold' >{installedApps.length} apps found</h1>

                        <select onChange={handleSortChange} value={sortBy} className="select w-[20%] bg-light text-dark">
                            <option value="placeholder" disabled >Sort by downloads</option>
                            <option value="high-low">High to low</option>
                            <option value="low-high" >Low to High</option>
                        </select>
                    </div>
                    {
                        installedApps.length == 0
                            ? <div className='text-5xl text-highlighted text-center font-bold py-30' >No apps found</div>
                            : <div className='w-full' >
                                {
                                    sortedApps.map(({ id, image, title, downloads, size, ratingAvg }) => (
                                        <InstalledAppCard key={id} id={id} image={image} title={title} downloads={downloads} size={size} ratingAvg={ratingAvg} handleUninstall={handleUninstall} />
                                    ))
                                }
                            </div>
                    }

                </div>
            </div>
        </>
    )
}



export default InstalledApps
