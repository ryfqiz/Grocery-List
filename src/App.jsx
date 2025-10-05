import { useState } from "react";
import Header from "./components/Header";
import Form from"./components/Form";
import List from "./components/list";
import Item from "./components/Item";
import Footer from "./components/Footer";


const listItems = [
  {
        id: 1,
        name: 'Catnip',
        quantity: 2,
        checked: true,
      },
      {
        id: 2,
        name: 'Babi Guling',
        quantity: 5,
        checked: false,
      },
      {
        id: 3,
        name: 'Kabel AUX',
        quantity: 3,
        checked: false,
      },
];

export default function App() {
  const [items, setItems] = useState(listItems);

  function handleAddItem(item){
    setItems([...items, item])
  }

  function handleDeleteItem(id){
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem (id){
    setItems((items) => items.map((item) => (item.id === id ? {...item, checked: !item.checked} : item)));
  }

  function handleClearItem (){
    setItems([]);
  }

  return (
    <div className="app">
    <Header />
    <Form onAddItem={handleAddItem}/>
    <List items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItem={handleClearItem} />
    <Footer items={items} />
  </div>
  )
}

