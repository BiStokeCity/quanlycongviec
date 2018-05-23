import React, { Component } from 'react';

class TaskItem extends Component {
  render() {
    var {tasks, index} = this.props;
    //var tasks = this.props.tasks.tasks
    //var index = this.props.tasks.index
    return (
      <tr>
          <td>{index}</td>
          <td>{tasks.name}</td>
          <td class="text-center">
              <span class={tasks.status?'label label-success':'label label-danger'}>
                          {tasks.status?'Kích Hoạt':"Chưa kích hoạt"}
                      </span>
          </td>
          <td class="text-center">
              <button type="button" class="btn btn-warning">
                  <span class="fa fa-pencil mr-5"></span>Sửa
              </button>
              &nbsp;
              <button type="button" class="btn btn-danger">
                  <span class="fa fa-trash mr-5"></span>Xóa
              </button>
          </td>
      </tr>
    );
  }
}

export default TaskItem;
