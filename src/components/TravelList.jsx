import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [displayedPlans, setPlansToDisplay] = useState(travelPlansData);

  const removeTravel = (id) => {
    const newArr = displayedPlans.filter((travelPlan) => {
      return travelPlan.id !== id;
    });

    setPlansToDisplay(newArr);
  };

  return (
    <section>
      <div>
        {displayedPlans.map((travelPlan, index) => {
          let isGreatDeal = travelPlan.totalCost <= 350;
          let isPremium = travelPlan.totalCost >= 1500;
          return (
            <div className="travelPlan" key={travelPlan.id}>
              <img className="image" src={travelPlan.image} />
              <div className="info">
                <p>
                  {travelPlan.destination} ({travelPlan.days} days )
                </p>
                <p>{travelPlan.description}</p>
                <p>Price: {travelPlan.totalCost} €</p>
                {isGreatDeal && <p className="labelGD">Great Deal</p>}
                {isPremium && <p className="labelPremium">Premium</p>}
                <button onClick={() => removeTravel(travelPlan.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TravelList;
