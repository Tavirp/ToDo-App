import Checkbox from "../../buttons/checkbox";
import styles from "./ToDoItem.module.css";

function ToDoItem({ todo }) {
  return (
    <div className={styles.mainContainer}>
      <h1>ToDo-Item</h1>
      <div className={styles.horizontalLine}></div>
      <p>Aufgabe: {todo.task}</p>
      <p>DueDate: {new Date(Date.now()).toDateString()}</p>
      <label>
        Geschafft: <input type="checkbox" defaultChecked="false"></input>
      </label>
    </div>
  );
}

export default ToDoItem;


// Ich hab keinen Durchblick :/ 
// Diese Aufgabe z.B.:
// "Ergänze die src/components/common/templates/todo-item/ToDoItem.js so, dass auch "DueDate" aus der todo-Prob gezogen wird."
// Ich weiß nicht, was mit "gezogen wird" gemeint ist. Ich wollte es mir abgucken, weil ja scheinbar etwas anderes als "DueDate"
// gezogen wird, aber finde nichts zum Abgucken. >.<
// Ich muss mir am Wochenende nochmal ordentlich Theorie zu dem Thema reinziehen, diese Woche ist offenbar einiges an mir vorbei gegangen.