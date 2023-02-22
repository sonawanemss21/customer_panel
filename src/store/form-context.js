import React, { useState } from "react";

export const FormContext = React.createContext({
  showForm: true,
  setShowForm: () => {},
});

const FormContextProvider = (props) => {
  const [showForm, setShowForm] = useState(true);

  return (
    <FormContext.Provider
      value={{
        showForm: showForm,
        setShowForm: setShowForm,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
