import { useState } from "react";

export default function App() {
  const [diceRolls, setDiceRolls] = useState([1, 2, 3]);
  console.log(diceRolls);

  return (
    <diV style={styles.container}>
      <button
        style={styles.button}
        onClick={() => setDiceRolls([...diceRolls, randomDiceRoll()])}
      >
        Roll dice
      </button>
      <ul style={styles.list}>
        {diceRolls.map((diceRoll, index) => (
          <li style={styles.listItem} key={index}>
            {diceRoll}
          </li>
        ))}
      </ul>
    </diV>
  );
}

function randomDiceRoll() {
  return Math.floor(Math.random() * 6 + 1);
}

const styles = {
  button: {
    font: "inherit",
    color: "#3a3a3a",
    background: "wheat",
    borderColor: "transparent",
    borderRadius: "4px",
    padding: "0.4rem 1.2rem",
    margin: "1rem auto 1rem 1rem",
  },
  container: {
    color: "wheat",
  },
  list: {
    listStyle: "none",
    padding: "0.8rem 1.2rem 0.8rem 1.2rem",
    margin: "1rem auto",
    backdropFilter: "invert(10%)",
    maxWidth: "80%",
    borderRadius: "8px",
    border: "4px inset #7163498f"
  },
  listItem: {
    display: "inline-block",
    fontSize: "2rem",
    marginLeft: "1rem",
  },
};
