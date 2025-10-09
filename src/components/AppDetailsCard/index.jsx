import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";
import Download from '../../assets/icon-downloads.png'
import Ratings from '../../assets/icon-ratings.png'
import Review from '../../assets/icon-review.png'
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { toast } from 'sonner';



import appsData from '../../data/apps.json'
import homeAppData from '../../data/data.json'
import RatingsChart from '../Chart';

const AppDetailsCard = () => {

    const params = useParams();
    const { id } = params;
    const { handleDownload, setSelectedApp, downloads: downloadedApps  } = useContext(AppContext)
    const allApps = [
        ...(appsData?.appsCards || []),
        ...(homeAppData?.homeAppCards || []),
    ];

    const app = allApps.find(a => a.id == parseInt(id))
    const { title, companyName, downloads, ratings, ratingAvg, size, reviews, description, image } = app;

    const [installed, setInstalled] = useState(false);



    useEffect(() => {
        setInstalled(downloadedApps.includes(app.id));
    }, [downloadedApps, app.id]);

    const handleInstall = () => {
        handleDownload(app.id);
        setSelectedApp(app);
        toast.success(`${title} installed successfully`);
        setInstalled(true);
    };


    return (
        <>
            <div className='bg-dark text-dark w-full' >
                <div className='w-[95%] mx-auto' >
                    <div className='flex pt-10 gap-5 sm:flex-row flex-col' >
                        <img src={image} alt="none" className='w-60 h-60 object-cover bg-light p-3' />
                        <div>
                            <h1 className='text-2xl font-bold' >{title}</h1>

                            <p className='text-highlighted' >Developed by <span className='text-violet-500 font-bold' >{companyName}</span></p>

                            <div className='flex mt-10 gap-5' >
                                <div  >
                                    <img src={Download} alt="" />
                                    <h1 className='text-highlighted text-sm' >Downloads</h1>
                                    <h1 className='text-3xl font-bold' >{downloads}</h1>
                                </div>
                                <div>
                                    <img src={Ratings} alt="" />
                                    <h1 className='text-highlighted text-sm'  >Average Ratings</h1>
                                    <h1 className='text-3xl font-bold' >{ratingAvg}</h1>
                                </div>
                                <div>
                                    <img src={Review} alt="" />
                                    <h1 className='text-highlighted text-sm'  >Total reviews</h1>
                                    <h1 className='text-3xl font-bold'   >{reviews}</h1>
                                </div>
                            </div>
                            <button
                                onClick={handleInstall}
                                disabled={installed}
                                className={`px-5 py-2 rounded-md my-3 ${installed
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-[#00d390] text-light'
                                    }`}
                            >
                                {installed ? 'Installed' : `Install Now (${size} MB)`}
                            </button>

                        </div>
                    </div>
                    <hr className='text-highlighted' />

                    <div>
                        <h1 className='text-lg font-bold my-2' >Ratings</h1>
                        <div>
                            <RatingsChart appId={id} />
                        </div>
                    </div>
                    <hr />

                    <div>
                        <h1 className='text-lg font-bold my-3' >Description</h1>
                        <p className='w-[90%] pb-10' >This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest. <br />

                            A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere. <br />

                            For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AppDetailsCard
