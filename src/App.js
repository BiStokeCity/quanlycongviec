import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [],    // id : unique, name, status
      isDisplayForm:false
    },
    this.onToggleForm = this.onToggleForm.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillMount(){
    var tasks = JSON.parse(localStorage.getItem('tasks'));
    this.setState({
      tasks:tasks
    });


  }

  onToggleForm (){
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  }

  onGenerateData = () => {
    var tasks = [
      {
        id: 1,
        name: 'Học lập trình',
        status: true
      },
      {
        id: 2,
        name: 'Ngủ',
        status: false
      },
      {
        id: 3,
        name: 'Muay Thái',
        status: true
      }
    ]

      console.log(tasks);

      this.setState({
        tasks:tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onSubmit(data){
    var {tasks} = this.state;
    tasks.push(data);
    console.log(JSON.parse(localStorage.getItem("tasks")).length);
    this.setState({
      tasks:tasks
    });
    localStorage.setItem('tasks',JSON.stringify(this.state.tasks));
  }
  render() {
    var {tasks, isDisplayForm} = this.state; // var tasks = this.state.tasks
    var elmTaskForm = isDisplayForm?<TaskForm onSubmit={this.onSubmit}/>:'';
    return (
      <div className="container">
          <div className="text-center">
              <h1>Quản Lý Công Việc</h1>
              <hr/>
          </div>
          <div className="row">
              <div className={isDisplayForm?"col-xs-4 col-sm-4 col-md-4 col-lg-4":""}>
                  {elmTaskForm}
              </div>
              <div className={isDisplayForm?'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.onToggleForm}>
                      <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                  </button>

                  <button onClick={this.onGenerateData} type="button" className="btn btn-danger">
                    Generate Data
                  </button>
                  <Control></Control>

                  <TaskList tasks={this.state.tasks}></TaskList>

              </div>
          </div>
      </div>
    );
  }
}

export default App;
