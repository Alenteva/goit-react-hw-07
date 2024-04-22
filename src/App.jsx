import { useState } from "react";
import "./App.css";

import ContactForm from "./components/contactform/contactform";
import SearchBox from "./components/searchbox/searchbox";
import ContactList from "./components/contactlist/contactlist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="Box">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
