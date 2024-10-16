import React from "react";
import './App.css';
import Homepage from './Homepage';
import Btn from './Btn';
import ModeToggler from './ModeToggler';
import NumberGuessingGame from './NumberGuessingGame';
import RegisterForm from './RegisterForm';
import Fruits from './Fruits';
import FruitsCounter from './FruitsCounter';
import WhichDayIsIt from "./WhichDayIsIt";
import PlayInvincible from "./PlayInvincible";
import SimpleCalculator from "./SimpleCalculator";
import ListComponent from "./ListComponent";
import ControlledFormComponent from "./ControlledFormComponent";
import TaskFormOutput from "./ToDoForm";
import DataFetchingWithHooks from "./DataFetchingWithHooks";
import {Routes, Route, Link} from 'react-router-dom';

function Nav(){

    const [fruits] = React.useState([
        {fruitName: 'apple', id: 1},
        {fruitName: 'apple', id: 2},
        {fruitName: 'plum', id: 3},
      ]);

    return(
        <div>
            <nav className="navBar">
                <Link to="/">Home</Link>
                <Link to="/alert-box-task">Alert Box Task</Link>
                <Link to="/mode-toggler-task">Mode Toggler Task</Link>
                <Link to="/number-guessing-game-task">Number Guessing Game Task</Link>
                <Link to="/register-form-task">Register Form Task</Link>     
                <Link to="/managing-state-in-react">Managing State in React</Link>
                <Link to="/which-day-is-it">Which Day Is It</Link>
                <Link to="/play-invincible">Play Invincible</Link>
                <Link to="/simple-calculator">Simple Calculator</Link>
                <Link to="/list-component">List Component</Link>
                <Link to="/controlled-form-component">Controlled Form Component</Link>
                <Link to="/addTask">Add Task (Todo form)</Link>
                <Link to="/data-fetching-with-hooks">Data Fetching With Hooks</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/alert-box-task" element={<Btn />} />
                <Route path="/mode-toggler-task" element={<ModeToggler />} />
                <Route path="/number-guessing-game-task" element={<NumberGuessingGame />} />
                <Route path="/register-form-task" element={<RegisterForm />} />
                <Route path="/managing-state-in-react" element={
                <div className="taskBorderContainer">
                    <h3>Task: Managing state in React</h3>
                    <Fruits fruits={fruits}/>
                    <FruitsCounter fruits={fruits}/>
                </div>
                } />
                <Route path="/which-day-is-it" element={<WhichDayIsIt />} />
                <Route path="/play-invincible" element={<PlayInvincible />} />
                <Route path="/simple-calculator" element={<SimpleCalculator />} />
                <Route path="/list-component" element={<ListComponent />} />
                <Route path="/controlled-form-component" element={<ControlledFormComponent />} />
                <Route path="/addTask" element={<TaskFormOutput />} />
                <Route path="/data-fetching-with-hooks" element={<DataFetchingWithHooks />} />
            </Routes>
        </div>
    )
}

export default Nav;