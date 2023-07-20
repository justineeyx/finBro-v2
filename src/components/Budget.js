// import { Button, Stack } from "react-bootstrap"
// import Container from "react-bootstrap/Container"
// import AddBudgetModal from "./Budget/AddBudgetModal"
// import AddExpenseModal from "./Expense/AddExpenseModal"
// import ViewExpensesModal from "./Expense/ViewExpensesModal"
// import BudgetCard from "./Budget/BudgetCard"
// import Header from "./Header"
// import UncategorizedBudgetCard from "./Budget/UncategorizedBudgetCard"
// import TotalBudgetCard from "./Budget/TotalBudgetCard"
// //import { useState } from "react"
// import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../api/budget"

// import { useEffect, useState } from "react";
// import { db, auth } from "../firebase";
// import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore"; 


// function Budget() {
//   const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
//   const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
//   const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
//   const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
//   const { budgets, getBudgetExpenses } = useBudgets()

//   /*function openAddExpenseModal(budgetId) {
//     setShowAddExpenseModal(true)
//     setAddExpenseModalBudgetId(budgetId)
//   }*/ 

//   const [budgetList, setBudgetList] = useState([]); 


//     //new budget states 
//     const [newBudgetName, setNewBudgetName] = useState("")
//     const [newBudgetAmt, setNewBudgetAmt] = useState(0)
//     const [newUserID, setNewUserID] = useState("") 

//     //update budget amount states 
//     const [updatedAmt, setUpdatedAmt] = useState(0); 

//     const budgetCollectionRef = collection(db, "finbrotest"); 
    
//     const onSubmitBudget = async () => {
//         try {
//         await addDoc(budgetCollectionRef, {
//             budgetName : newBudgetName, 
//             budgetAmt : newBudgetAmt, 
//             userID : auth?.currentUser?.uid, 
//         });

//         getBudgetList(); 
//         } catch(err) {
//             console.error(err);
//         }
//     };


//     const deleteBudget = async (id) => {
//         const budgetDoc = doc(db, "budget", id)
//         await deleteDoc(budgetDoc);
//     };

//     const updateBudgetAmt = async(id) => {
//         const budgetDoc = doc(db, "budget", id);
//         await updateDoc(budgetDoc, {amt: updatedAmt});
//     }; 



//     const getBudgetList = async () => {
//         //READ THE DATA 
//         //SET THE BUDGET LIST 
//         try {
//             const data = await getDocs(budgetCollectionRef); 
//             const filteredData = data.docs.map((doc) => ({
//                 ...doc.data(), 
//                 id: doc.id,
//             })); 
//             setBudgetList({filteredData});
//         } catch (err) {
//             console.error(err); 
//         }
//     }; 

//     useEffect(() => {
//         getBudgetList(); 
//     }, []); 



//   return (
//     <>
//       <Container className="my-4">
//         <Header/>
//         <Stack direction="horizontal" gap="2" className="mb-4">
//           <h1 className="me-auto">Budgets</h1>
//           <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
//             Add Budget
//           </Button>
//           <Button variant="outline-primary" onClick={onSubmitBudget}>
//             Add Expense
//           </Button>
//         </Stack>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
//             gap: "1rem",
//             alignItems: "flex-start",
//           }}
//         >
//           {budgets.map(budget => {
//             const amount = getBudgetExpenses(budget.id).reduce(
//               (total, expense) => total + expense.amount,
//               0
//             )
//             return (
//               <BudgetCard
//                 key={budget.id}
//                 name={budget.name}
//                 amount={amount}
//                 max={budget.max}
//                 onAddExpenseClick={() => openAddExpenseModal(budget.id)}
//                 onViewExpensesClick={() =>
//                   setViewExpensesModalBudgetId(budget.id)
//                 }
//               />
//             )
//           })}
//           <UncategorizedBudgetCard
//             onAddExpenseClick={openAddExpenseModal}
//             onViewExpensesClick={() =>
//               setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
//             }
//           />
//           <TotalBudgetCard />
//         </div>
//       </Container>
//       <AddBudgetModal
//         show={showAddBudgetModal}
//         handleClose={() => setShowAddBudgetModal(false)}
//       />
//       <AddExpenseModal
//         show={showAddExpenseModal}
//         defaultBudgetId={addExpenseModalBudgetId}
//         handleClose={() => setShowAddExpenseModal(false)}
//       />
//       <ViewExpensesModal
//         budgetId={viewExpensesModalBudgetId}
//         handleClose={() => setViewExpensesModalBudgetId()}
//       />
//     </>
//   )
// }

// export default Budget;
