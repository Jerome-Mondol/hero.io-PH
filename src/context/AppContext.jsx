import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [downloads, setDownloads] = useState([]);
    const [selectedApp, setSelectedApp] = useState(null);

    useEffect(() => {
        const storedDownloads = localStorage.getItem('downloads');
        if(storedDownloads) setDownloads(JSON.parse(storedDownloads))
    }, [])

    useEffect(() => {
        localStorage.setItem("downloads", JSON.stringify(downloads))
    }, [downloads])

    const handleDownload = (app) => {
        const exists = downloads.find(a => a.id == app.id);
        if(!exists) setDownloads([...downloads, app])
    }


    return ( <AppContext.Provider value={{ downloads, selectedApp, setSelectedApp, handleDownload, }} > {children} </AppContext.Provider> ); 

};



