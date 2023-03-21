import { useState } from "react";

function Tabs(props) {
  const { tabIds, renderTitle, renderContent } = props;
  const [selectedId, setSelectedId] = useState(tabIds[0]);

  return (
    <div style={styles.container}>
      {tabIds.map((id) => (
        <button
          key={id}
          onClick={() => setSelectedId(id)}
          style={{
            ...styles.button,
            border: "none",
            background: id === selectedId ? "#ff69b4d6" : "transparent",
            color: id === selectedId ? "wheat" : "#f5deb37a",
          }}
        >
          {renderTitle(id)}
        </button>
      ))}
      <div style={styles.content}>{renderContent(selectedId)}</div>
    </div>
  );
}

export default function App() {
  return (
    <Tabs
      tabIds={["a", "b", "c"]}
      renderTitle={(id) => `Tab ${id.toUpperCase()}`}
      renderContent={(id) => `Tab content ${id.toUpperCase()}`}
    />
  );
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
    width: "100%",
    color: "wheat",
    margin: "2rem auto",
    padding: "0 4rem",
    fontSize: "1.6rem",
  },
  content: {
    borderTop: "1px solid #f5deb37a",
    paddingTop: "1.4rem",
  },
};
