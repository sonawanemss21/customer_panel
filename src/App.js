import { Fragment, useState, useContext } from "react";
import "./App.css";
import FormView from "./components/FormView";
import TableView from "./components/TableView";
import { FormContext } from "./store/form-context";

const DUMMY_CUSTOMERS = [
  {
    name: "john",
    address: "mumbai",
    contact: 3423452301,
    email: "john@gmail.com",
  },
  {
    name: "harry",
    address: "pune",
    contact: 7344528976,
    email: "harry@gmail.com",
  },
];

function App() {
  const formCtx = useContext(FormContext);
  const [customerList, updateCustomerList] = useState(DUMMY_CUSTOMERS);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const updateListHandler = (customer) => {
    updateCustomerList((custList) => {
      return [...custList, customer];
    });
  };
  const deleteCustomerHandler = (customer) => {
    console.log(customer);
    if (window.confirm("Do you want to delete customer ?") === true) {
      let updatedCustomerList = customerList.filter((item) => {
        let resultant = !(
          item.contact === customer.contact && item.name === customer.name
        );
        console.log(item);
        console.log(resultant);
        return resultant;
      });

      updateCustomerList(updatedCustomerList);
    }
  };
  const selectHandler = (customer) => {
    formCtx.setShowForm(false);
    setSelectedCustomer(customer);
  };

  return (
    <Fragment>
      <FormView
        onUpdateList={updateListHandler}
        onDeleteItem={deleteCustomerHandler}
        selectedView={selectedCustomer}
      />
      <TableView customerList={customerList} onSelect={selectHandler} />
    </Fragment>
  );
}

export default App;
