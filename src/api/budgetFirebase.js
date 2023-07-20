import React, { useEffect, useState,useContext } from "react";
import { db, auth } from "../firebase";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore"; 

const BudgetsContext = React.createContext()

export const UNCATEGORIZED_BUDGET_ID = "Uncategorized"

export function useBudgets() {
  return useContext(BudgetsContext)
}

export function BudgetFirebase() {
    const [budgetList, setBudgetList] = useState([]); 


    //new budget states 
    const [newBudgetName, setNewBudgetName] = useState("")
    const [newBudgetAmt, setNewBudgetAmt] = useState(0)
    // const [newUserID, setNewUserID] = useState("") 

    //update budget amount states 
    const [updatedAmt, setUpdatedAmt] = useState(0); 

    const budgetCollectionRef = collection(db, "finbrotest"); 
    
    const onSubmitBudget = async () => {
        try {
        await addDoc(budgetCollectionRef, {
            budgetName : newBudgetName, 
            budgetAmt : newBudgetAmt, 
            userId : auth?.currentUser?.uid, 
        });

        getBudgetList(); 
        } catch(err) {
            console.error(err);
        }
    };


    const deleteBudget = async (id) => {
        const budgetDoc = doc(db, "budget", id)
        await deleteDoc(budgetDoc);
    };

    const updateBudgetAmt = async(id) => {
        const budgetDoc = doc(db, "budget", id);
        await updateDoc(budgetDoc, {amt: updatedAmt});
    }; 



    const getBudgetList = async () => {
        //READ THE DATA 
        //SET THE BUDGET LIST 
        try {
            const data = await getDocs(budgetCollectionRef); 
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(), 
                userID: doc.id,
            })); 
            setBudgetList({filteredData});
        } catch (err) {
            console.error(err); 
        }
    }; 



    useEffect(() => {
        getBudgetList(); 
    }, []); 


    return (
        <div>
          <div>
            <input
              placeholder="Budget Name..."
              onChange={(e) => setNewBudgetName(e.target.value)}
            />
            <input
              placeholder="Budget Amt..."
              type="number"
              onChange={(e) => setNewBudgetAmt(Number(e.target.value))}
            />
            <button onClick={onSubmitBudget}>Submit Budget</button>
          </div>
      
          {budgetList.map((finbrotest) => (
            <div key={finbrotest.id}>
              <h1>{finbrotest.budgetName}</h1>
              <p>user: {finbrotest.userID}</p>
              <button onClick={() => deleteBudget(finbrotest.id)}>Delete Budget</button>
              <input
                placeholder="new amount..."
                onChange={(e) => setUpdatedAmt(Number(e.target.value))}
              />
              <button onClick={() => updateBudgetAmt(finbrotest.id)}>
                Update Amount
              </button>
            </div>
          ))}
        </div>
      );
      
}


export default BudgetFirebase; 