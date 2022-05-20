import './App.css';
import React, { useState } from 'react'
import TodoList from './components/TodoList';
import Input from './components/Input';

function App() {
  const [inputValue, setInput ] = useState('');
  const [list, setList] = useState([]);
  const [dragElement, setDragElement] = useState();
  const [dropElement, setDropElement] = useState();
  const [selectedElement, setSelectedElement] = useState();

  const handleInput = ({ target: { value } }) => {
    setInput(value);
  }
  
  const handleButton = (e) => {
    e.preventDefault();
    setList(list.concat(inputValue));
    setInput('');
  }
  
  const onDragStart = (e) => {
    setDragElement(e.target);
  }
  const onDragEnd = (e) => {
    e.preventDefault();
    if(dragElement && dropElement) {
    const {dataset: {id: dragElementId} } = dragElement
    const {dataset: {id: dropElementId} } = dropElement
      setList(() => {
        list.splice(parseInt(dragElementId), 1 , dropElement.textContent );
        list.splice(parseInt(dropElementId), 1 , dragElement.textContent );
        return list;
      })
      setDragElement(null);
      setDropElement(null);
    }
  } 
  
  const onDrop = (e) => {
    setDropElement(e.target);
  } 

  const removeSelectedElement = () => {
    if(selectedElement) {
      const {dataset: {id} } = selectedElement;
      list.splice(id, 1);
      setSelectedElement(null);
    }
  }

  return (
    <main className="App">
      <header>Lista de afazeres</header>
      <form>
      <Input type="text" handleInput={ handleInput } value={ inputValue } />
      <button type="submit" onClick={ (e) => handleButton(e) }>Adicionar</button>
      <button type="button"onClick={ removeSelectedElement }>Remover</button>
      </form>
      <TodoList 
        list={ list } 
        onDragStart={onDragStart} 
        onDragEnd={onDragEnd} 
        onDrop={onDrop} 
        setSelectedElement={setSelectedElement} 
      />
    </main>
  );
}

export default App;
