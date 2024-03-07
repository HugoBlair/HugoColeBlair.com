import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { useState } from "react";
function App() {
  document.documentElement.setAttribute("data-bs-theme", "dark");

  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["Project 1", "Project 2", "Project 3", "Project 4"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="List of Projects:"
        onSelectItem={handleSelectItem}
      ></ListGroup>

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <h2>Hi!</h2> I am Currently Looking For A Job
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Yes
      </Button>

      <a href="https://github.com/HugoBlair">
        <Button color="secondary" onClick={() => console.log("Clicked")}>
          Github
        </Button>
      </a>
      <a href="https://www.linkedin.com/in/hugoblair/">
        <Button color="secondary" onClick={() => console.log("Clicked")}>
          Linkedin
        </Button>
      </a>
      <Button
        color="primary"
        onClick={() => {
          if (
            document.documentElement.getAttribute("data-bs-theme") == "dark"
          ) {
            document.documentElement.setAttribute("data-bs-theme", "light");
          } else {
            document.documentElement.setAttribute("data-bs-theme", "dark");
          }
        }}
      >
        Toggle Dark Mode
      </Button>
    </div>
  );
}

export default App;
