import React from "react";


import"./TaskDetails.css";

import Button from "./Button";

const TaskDetails = () => { 

  return (
    <>
      <div className="back-button-container">
        <Button>Voltar</Button>
      </div>
      <div className="task-details container">
        <p></p>
            <p>                Lorem ipsum dolor sit amet consectetur,
                 adipisicing elit. Voluptatum, 
                 fugiat eius harum culpa quas incidunt ratione nemo quia doloremque a 
                 voluptates natus nesciunt eos. Ea vitae neque sit? Recusandae, hic.
            </p>
      </div>
    </>
  );
};

export default TaskDetails;
