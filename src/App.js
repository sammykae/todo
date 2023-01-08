import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

import Input from "./components/Input";
class App extends Component {
	constructor(props) {
		super(props);
		const dd = JSON.parse(localStorage.getItem("todos"));
		this.state = {
			input: null,
			todos: dd?.length > 0 ? dd : [],
		};
	}
	handleChange = (id) => {
		const todos = this.state.todos;
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		this.setState({
			todos: updatedTodos,
		});
		localStorage.setItem("todos", JSON.stringify(this.state.todos));
	};

	inputChange = (event) => {
		this.setState({
			input: event.target.value,
		});
	};
	handleDelete = (todoId) => {
		const todo = this.state.todos.filter((t) => t.id !== todoId);
		this.setState(
			{
				todos: todo,
			},
			localStorage.setItem("todos", JSON.stringify(todo))
		);
	};
	onSubmit = () => {
		if (this.state.input !== null && this.state.input !== "Add todo") {
			let lastId = 1;
			this.state.todos.forEach((e) => {
				lastId = e.id + 1;
			});
			this.state.todos.push({
				id: lastId,
				text: this.state.input.toLowerCase(),
				completed: false,
			});
		}
		localStorage.setItem("todos", JSON.stringify(this.state.todos));
		this.setState({
			// todos:todosData,
			input: null,
		});
		document.getElementById("input").value = "";
	};

	render() {
		const todoComponent = this?.state?.todos
			?.filter((tt) => !tt?.completed)
			?.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onChange={() => this.handleChange(todo.id)}
					handleDelete={this.handleDelete}
				/>
			));
		const todoDone = this?.state?.todos
			?.filter((tt) => tt?.completed)
			?.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onChange={() => this.handleChange(todo.id)}
					handleDelete={this.handleDelete}
				/>
			));
		return (
			<div>
				<div className="search-container">
					<div className="foo">
						<span className="letter" data-letter="T">
							T
						</span>
						<span className="letter" data-letter="O">
							O
						</span>
						<span className="letter" data-letter="D">
							D
						</span>
						<span className="letter" data-letter="O">
							O
						</span>
					</div>
				</div>

				<Input inputChange={this.inputChange} onSubmit={this.onSubmit} />

				<div className="todo-list">{todoComponent}</div>
				{todoDone?.length > 0 && (
					<>
						<div className="title">
							<h1>Completed Tasks</h1>
						</div>
						<div className="todo-done">{todoDone}</div>
					</>
				)}
			</div>
		);
	}
}

export default App;
