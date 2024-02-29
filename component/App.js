import html from "../assets/lib/core.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import ToDoList from "./ToDoList.js";
import { connect } from "../assets/js/store.js";

function App({ todos }) {
  return html`
    <section class="todoapp">
      ${Header()} ${todos.length > 0 && ToDoList()}
      ${todos.length > 0 && Footer()}
    </section>
  `;
}

export default connect()(App);
