import { useState } from 'react';
import classes from './UserInput.module.css';

const initialValue = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  duration: 10,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialValue);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialValue);
  };

  const inputChangeHandler = (inputType, value) => {
    setUserInput((prevValue) => {
      return { ...prevValue, [inputType]: +value };
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(e) =>
              inputChangeHandler('current-savings', e.target.value)
            }
            value={userInput['current-savings']}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(e) =>
              inputChangeHandler('yearly-contribution', e.target.value)
            }
            value={userInput['yearly-contribution']}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(e) =>
              inputChangeHandler('expected-return', e.target.value)
            }
            value={userInput['expected-return']}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(e) => inputChangeHandler('duration', e.target.value)}
            value={userInput['duration']}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p onClick={resetHandler} className={classes.actions}>
        <button type="reset" className={classes.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
