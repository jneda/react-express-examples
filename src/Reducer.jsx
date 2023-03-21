import { useReducer } from "react";

const types = {
  PET: "PET",
  COLOR: "COLOR",
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.PET:
      return { ...state, pet: action.value };
    case types.COLOR:
      return { ...state, color: action.value };
  }
};

const initialState = {
  color: "black",
  pet: "cat",
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={styles.container}>
      <label>Choose a color and a pet:</label>
      <br />
      <br />
      <select
        style={styles.select}
        value={state.color}
        onChange={(e) => dispatch({ type: types.COLOR, value: e.target.value })}
      >
        <option value="black">Black</option>
        <option value="pink">Pink</option>
        <option value="blue">Blue</option>
      </select>
      <select
        style={styles.select}
        value={state.pet}
        onChange={(e) => dispatch({ type: types.PET, value: e.target.value })}
      >
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="mouse">Mouse</option>
      </select>
      <br />
      <br />
      You chose a {state.color} {state.pet}.
    </div>
  );
}

const styles = {
  select: {
    font: "inherit",
    color: "#3a3a3a",
    background: "wheat",
    borderColor: "transparent",
    borderRadius: "4px",
    padding: "0.4rem 1.2rem",
    margin: "1rem auto 1rem 1rem",
  },
  container: {
    width: "100%",
    color: "wheat",
    margin: "2rem auto",
    padding: "0 4rem",
    fontSize: "1.6rem"
  },
};
