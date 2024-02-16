
import { useState, useEffect } from "react";


  const [todos, setTodos] = useState([]);

  useState(() => {
    GET ("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((todosJson) => {
        console.log(todosJson);
        setTodos(todosJson);
      }); 
  }, []);


        GET ("http://localhost:5050/v1/todos/all")
        .then((response) => response.json())
        .then((json) => console.log(json));
        console.log(todosJson);
        setTodos(todosJson);

