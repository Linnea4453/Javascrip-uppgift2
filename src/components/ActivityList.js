import React from 'react'
import Activity from './Activity'

const ActivityList = ({activitys, setActivitys}) => {

    if(activitys.length === 0) {
        return (
            <div id="activity-list" className="mb-5 mt-4 text-center">
                No activity yet
            </div>
        )
    }

    return (
        <div id="activity-list" className="mb-5 mt-4">
           {
               activitys.map(activity => (
                    <Activity key={activity.id} activity={activity} activitys={activitys} setActivitys={setActivitys}/>
               ))
           }
        </div>
    )
 
}

export default ActivityList
