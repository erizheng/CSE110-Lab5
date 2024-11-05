import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, setExpenses, budget} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  // Exercise: Create an alert when Remaining is less than 0.
  useEffect (() => {
    if(budget - totalExpenses < 0){
      return alert("You have exceeded your budget.");
    }
  })

  return (
    <div className={`alert ${alertType}`}>
      <span data-testid ='Remainder'>Remaining: ${budget - totalExpenses}</span>

    </div>
  );
};

export default Remaining;