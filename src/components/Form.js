import React, {useState} from 'react'
import uuid from 'react-uuid'

const Form = ({activitys, setActivitys}) => {

    const [activity, setActivity] = useState('')
    const [submitState, setSubmitState] = useState(true)

    const activityHandler = (e) => {
       e.target.value.length > 2 ? setSubmitState(false) : setSubmitState(true)

        setActivity(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setActivitys([...activitys, {activity: activity, inStock: false, id: uuid()}])
        setActivity('')
        setSubmitState(true)
    }


    return (
        <form>
        <div className="mb-3">
            <label className="form-label ps-2">Fill in your Activity</label>
            <textarea onChange={activityHandler} value={activity} className="form-control"  rows="5"></textarea>
        </div>
        <div className="mb-3 d-flex justify-content-md-end">
            <button onClick={ submitHandler }  disabled={submitState} type="submit" className="btn btn-outline-secondary  p-2" >Add Activity</button>
        </div>
        </form>
    )

}

export default Form
