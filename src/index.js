import { createStore } from "redux";

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const number = document.querySelector("span");

number.innerText = 0;

const INCREASE_COUNT = "INCREASE";
const DECREASE_COUNT = "DECREASE";

const countReducer = (count = 0, action) => {
  // modify data (not inplace) => will return a new state
  //! only reducer can modify app data (redux)
  switch (action.type) {
    case INCREASE_COUNT:
      return count + 1;
    case DECREASE_COUNT:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countReducer);

const onChange = () => {
  number.innerText = countStore.getState();
};

// listen to change in the store
countStore.subscribe(onChange);

// dispatch action -> tell reducer what the button behavior wants
const handleIncrease = () => {
  countStore.dispatch({ type: INCREASE_COUNT });
};

const handleDecrease = () => {
  countStore.dispatch({ type: DECREASE_COUNT });
};

increaseBtn.addEventListener("click", handleIncrease); // click the button invokes handleIncrease
decreaseBtn.addEventListener("click", handleDecrease);
