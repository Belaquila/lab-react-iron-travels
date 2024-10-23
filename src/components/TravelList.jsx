import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList (){

    return (
        <section>
            <div>
                {travelPlansData.map((travelPlan, index)=>{
                    let isGreatDeal = travelPlan.totalCost <= 350;
                    let isPremium = travelPlan.totalCost >= 1500;
                    return (
                        <div className="travelPlan" key={travelPlan.id}>
                            <img className="image" src={travelPlan.image}/>
                            <div className="info">
                                <p>{travelPlan.destination} ({travelPlan.days} days )</p>
                                <p>{travelPlan.description}</p>
                                <p>Price: {travelPlan.totalCost} €</p>
                                {isGreatDeal && <p className="label">Great Deal</p>}
                                {isPremium && <p className="label">Premium</p>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
        
    )
}

export default TravelList;