import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Expense } from "../../types/types";
import { createExpense } from "../../utils/expense-utils";


const AddExpenseForm = () => {
  // Exercise: Consume the AppContext here
  const {expenses, setExpenses, budget} = useContext(AppContext);

  // Exercise: Create name and cost to state variables
  const [name, setN] = useState("");
  const [cost, setC] = useState(0);

  const ExpenseHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setN(name);
    setC(cost);

    //hi
  };


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Exercise: Add add new expense to expenses context array

    const curExp: Expense = {
      id: expenses.length.toString(),
      description: name,
      cost: cost,
    }
    createExpense(curExp);
      setExpenses(prevExpenses => [...prevExpenses, curExp]);

      setN('');
      setC(0);
  };

  

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required
            data-testid="ExpenseN"
            type="text"
            className="form-control"
            id="name"
            value={name}
            // HINT: onChange={}
            onChange={(event) => 
                setN(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required
            data-testid="ExpenseC"
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            // HINT: onChange={}
            onChange={(event) => 
              setC(Number(event.target.value))}
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
