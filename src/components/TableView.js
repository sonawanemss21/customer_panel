import classes from "./TableView.module.css";
import { Fragment } from "react";

const TableView = (props) => {
  const onSelectHandler = (item) => {
    props.onSelect(item);
  };
  return (
    <Fragment>
      {props.customerList.length === 0 && (
        <div className={classes.message}>No content to display !!</div>
      )}
      {props.customerList.length !== 0 && (
        <table>
          <thead>
            <tr>
              <th>Cust. Id</th>
              <th>Name</th>
              <th>Address</th>
              <th>Contact</th>
              <th>E-Mail</th>
            </tr>
          </thead>
          <tbody>
            {props.customerList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.contact}</td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      className={classes.tableButton}
                      onClick={() => {
                        onSelectHandler(item);
                      }}
                    >
                      Select
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </Fragment>
  );
};

export default TableView;
