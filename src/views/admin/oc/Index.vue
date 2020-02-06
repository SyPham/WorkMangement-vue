<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">List OC</h5>

            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse">
                <i class="fas fa-minus"></i>
              </button>

              <button type="button" class="btn btn-tool" data-card-widget="remove">
                <i class="fas fa-times"></i>
              </button>
            </div>
            <div class="card-tools pr-5">
              <div class="input-group input-group-sm" style="width: 150px;">
                <input
                  type="text"
                  name="table_search"
                  class="form-control float-right"
                  placeholder="Search"
                />

                <div class="input-group-append">
                  <button type="submit" class="btn btn-default">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body table-responsive p-0">
            <ejs-treegrid :dataSource="data" childMapping="subtasks" :treeColumnIndex="1"></ejs-treegrid>
          </div>
          <!-- ./card-body -->
          <div class="card-footer clearfix">
            <ul class="pagination pagination-sm m-0 float-right">
              <li class="page-item">
                <a class="page-link" href="#">First</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>

              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Previous</a>
              </li>

              <li class="page-item">
                <a class="page-link" href="#">Last</a>
              </li>
            </ul>
          </div>
          <!-- /.card-footer -->
        </div>
        <!-- /.card -->
      </div>
      <!-- /.col -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";

Vue.use(TreeGridPlugin);
let dataSource = [
  {
    taskID: 1,
    taskName: "Planning",
    startDate: new Date("02/03/2017"),
    endDate: new Date("02/07/2017"),
    progress: 100,
    duration: 5,
    priority: "Normal",
    approved: false,
    subtasks: [
      {
        taskID: 2,
        taskName: "Plan timeline",
        startDate: new Date("02/03/2017"),
        endDate: new Date("02/07/2017"),
        duration: 5,
        progress: 100,
        priority: "Normal",
        approved: false
      },
      {
        taskID: 3,
        taskName: "Plan budget",
        startDate: new Date("02/03/2017"),
        endDate: new Date("02/07/2017"),
        duration: 5,
        progress: 100,
        approved: true
      },
      {
        taskID: 4,
        taskName: "Allocate resources",
        startDate: new Date("02/03/2017"),
        endDate: new Date("02/07/2017"),
        duration: 5,
        progress: 100,
        priority: "Critical",
        approved: false
      },
      {
        taskID: 5,
        taskName: "Planning complete",
        startDate: new Date("02/07/2017"),
        endDate: new Date("02/07/2017"),
        duration: 0,
        progress: 0,
        priority: "Low",
        approved: true
      }
    ]
  },
  {
    taskID: 6,
    taskName: "Design",
    startDate: new Date("02/10/2017"),
    endDate: new Date("02/14/2017"),
    duration: 3,
    progress: 86,
    priority: "High",
    approved: false,
    subtasks: [
      {
        taskID: 7,
        taskName: "Software Specification",
        startDate: new Date("02/10/2017"),
        endDate: new Date("02/12/2017"),
        duration: 3,
        progress: 60,
        priority: "Normal",
        approved: false
      },
      {
        taskID: 8,
        taskName: "Develop prototype",
        startDate: new Date("02/10/2017"),
        endDate: new Date("02/12/2017"),
        duration: 3,
        progress: 100,
        priority: "Critical",
        approved: false
      },
      {
        taskID: 9,
        taskName: "Get approval from customer",
        startDate: new Date("02/13/2017"),
        endDate: new Date("02/14/2017"),
        duration: 2,
        progress: 100,
        approved: true
      },
      {
        taskID: 10,
        taskName: "Design Documentation",
        startDate: new Date("02/13/2017"),
        endDate: new Date("02/14/2017"),
        duration: 2,
        progress: 100,
        approved: true
      },
      {
        taskID: 11,
        taskName: "Design complete",
        startDate: new Date("02/14/2017"),
        endDate: new Date("02/14/2017"),
        duration: 0,
        progress: 0,
        priority: "Normal",
        approved: true
      }
    ]
  }
];
export default {
  name: "admin-role",
  data () {
    return {
      data: dataSource
    }
  }
};
</script>

<style>
</style>
