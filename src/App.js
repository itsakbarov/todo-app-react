import { Component } from "react";
import TodoItem from "./components/TodoItem";
import { Card, Form, Heading, Wrapper,Footer,Delete } from "./styled";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
      render: true,
      todos: [ ],
    };
    this.handleChange = (changedTitle,id) => {
        const indexOfChangedTodo = (this.state.todos.findIndex(el => el.id === id));
        this.state.todos[indexOfChangedTodo].title = changedTitle
        window.localStorage.setItem("todos", JSON.stringify(this.state.todos));

    }
    this.handleDeleteAll = () => {
      if (this.state.todos.length > 0) {
        if (window.confirm("Are you sure man?")) {
          window.localStorage.removeItem("todos");
          this.setState({ todos: [] });
          console.log("All tasks have been successfully deleted!!!");
        }
      } else {
        alert("You have nothing to delete!");
      }
    }
    this.handleEdit =(id) => {

    }
    this.handleDelete = (id) => {
      let deletedItemIndex = this.state.todos.findIndex(
        (todo) => todo.id === id
      );
      this.state.todos.splice(deletedItemIndex, 1);
      window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
      this.setState({
        todos: JSON.parse(window.localStorage.getItem("todos")),
      });
    };
    this.handleSubmit = (e) => {
      if (this.state.todoText.length > 0) {
        this.state.todos.push({
          title: this.state.todoText,
          id:
            this.state.todos.length > 0
              ? this.state.todos[this.state.todos.length - 1].id + 1
              : 0,
          check: false,
        });
        window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }

      e.preventDefault();
      this.setState({ todoText: "" });
    };
  }
  componentDidMount() {
    if (window.localStorage.getItem("todos")) {
      this.setState({
        todos: JSON.parse(window.localStorage.getItem("todos")),
      });
    }
  }
  render() {
    return (
      <Wrapper>
        <Card>
          <Heading>
            {this.state.todos.length === 0
              ? "You've any task. Relax."
              : `You have ${this.state.todos.length} tasks.`}
          </Heading>
          <Form onSubmit={this.handleSubmit}>
            <input
              onChange={(e) => this.setState({ todoText: e.target.value })}
              type="text"
              required
              value={this.state.todoText}
            />
            <button>Add</button>
          </Form>
          <TodoItem.Group>
            {this.state.todos.map((el, i) => (
              <TodoItem.Option
                key={el.id}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                handleChange={this.handleChange}
                title={el.title}
                id={el.id}
              />
            ))}
          </TodoItem.Group>
          <Footer>
            <Delete onClick={this.handleDeleteAll}>Delete All</Delete>
          </Footer>
        </Card>
      </Wrapper>
    );
  }
}
export default App;
