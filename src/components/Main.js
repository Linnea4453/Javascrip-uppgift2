import React, {useState} from 'react'
import Form from './Form'
import ActivityList from './ActivityList'

const Main = () => {

    const [activitys, setActivitys] = useState([])
    return (
        <main className="container mt-4" >
            <div className="row">
            <div className="col-5 ">
                <Form activitys={activitys} setActivitys={setActivitys} />
                </div>
            <div className="col-7 ps-3 ">
                <ActivityList activitys={activitys} setActivitys={setActivitys} />
            </div>
            </div>
        </main>
    )
}

export default Main
