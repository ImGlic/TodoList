import React from "react";
import { useParams, useNavigate } from "react-router-dom";


import Button from "./Button";

import"./TaskDetails.css";


const TaskDetails = () => {  
  const params = useParams();  
  const history = useNavigate();
  const handleBackButton  = () => {
    history(-1);
  };

  return (
    <>
      <div className="back-button-container">
        <Button
        onClick={handleBackButton}
        >Voltar
        </Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
            <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi autem 
              quasi atque facilis sit, a doloremque explicabo minus
               quo error voluptatibus, deleniti ducimus tenetur accusamus nemo hic voluptate accusantium.
            </p>
      </div>
    </>
  );
};

export default TaskDetails;
