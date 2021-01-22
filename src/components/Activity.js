import React from 'react'

const Activity = ( {activity, activitys, setActivitys} ) => {

    const inStockHandler = () => {
        setActivitys(activitys.map(item => {
            if(item.id === activity.id) {
                return {
                    ...item, inStock: !item.inStock
                }
            }

            return item
        }))
    }

    const deleteHandler = () => {
        setActivitys(activitys.filter(item => item.id !== activity.id))
    }


    return (
        <div className="border mb-3 p-2">
            <div className="d-flex justify-content-between align-items-center">
                <div className="name"> {activity.activity} </div>
                <div>
                    <i onClick={inStockHandler} className={ `fas fa-check cursor-pointer ${ activity.inStock ? 'in-stock' : 'out-of-stock' }` } ></i>
                    <i onClick={deleteHandler} className="fas fa-trash cursor-pointer " ></i>
                </div>
            </div>
        </div>
    )
}

export default Activity
