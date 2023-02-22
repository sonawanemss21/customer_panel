import classes from "./FormView.module.css";
import { Fragment, useRef, useContext } from "react";
import { FormContext } from "../store/form-context";

const FormView = (props) => {
  const formCtx = useContext(FormContext);
  const nameRef = useRef();
  const addressRef = useRef();
  const numberRef = useRef();
  const emailRef = useRef();

  const onInsertForm = (event) => {
    event.preventDefault();
    let customer = {
      name: nameRef.current.value,
      address: addressRef.current.value,
      contact: parseInt(numberRef.current.value),
      email: emailRef.current.value,
    };
    props.onUpdateList(customer);
    nameRef.current.value = "";
    addressRef.current.value = "";
    numberRef.current.value = "";
    emailRef.current.value = "";
  };
  const onDeleteCustomer = (event) => {
    event.preventDefault();
    let customer = {
      name: nameRef.current.value,
      address: addressRef.current.value,
      contact: parseInt(numberRef.current.value),
      email: emailRef.current.value,
    };
    props.onDeleteItem(customer);
    nameRef.current.value = "";
    addressRef.current.value = "";
    numberRef.current.value = "";
    emailRef.current.value = "";
  };
  const formViewHandler = () => {
    formCtx.setShowForm(true);
  };

  return (
    <Fragment>
      <div className={classes.formView}>
        {formCtx.showForm && (
          <form>
            <h2>Form View</h2>
            <input
              className={classes.formInput}
              type="text"
              placeholder="Enter Name"
              ref={nameRef}
            />
            <input
              className={classes.formInput}
              type="number"
              placeholder="Enter Contact Number"
              ref={numberRef}
            />
            <input
              className={classes.formInput}
              type="text"
              placeholder="Enter Address"
              ref={addressRef}
            />
            <input
              className={classes.formInput}
              type="email"
              placeholder="Enter E-Mail"
              ref={emailRef}
            />
            <button className={classes.formButton} onClick={onInsertForm}>
              Insert
            </button>
            <button className={classes.formButton} onClick={onDeleteCustomer}>
              Delete
            </button>
            <p className={classes.note}>* Delete by name and contact details</p>
          </form>
        )}
        {!formCtx.showForm && (
          <div>
            <h2>Customer Details</h2>
            <p className={classes.selectInput}>{props.selectedView.name}</p>
            <p className={classes.selectInput}>{props.selectedView.address}</p>
            <p className={classes.selectInput}>{props.selectedView.contact}</p>
            <p className={classes.selectInput}>{props.selectedView.email}</p>
            <button className={classes.formButton} onClick={formViewHandler}>
              View Form
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default FormView;
