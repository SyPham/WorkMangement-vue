<template>
  <div>
    <div class="row">
      <div class="col-md-12 pb-4">
        <button
          type="button"
          class="btn bg-gradient-secondary btn-sm"
          data-toggle="modal"
          data-target="#modal-task"
        >
          <i class="fas fa-plus"></i> Task Add
        </button>
      </div>
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">List Task</h5>

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
            <ejs-grid
              :dataSource="data"
              :allowPaging="true"
              :pageSettings="pageSettings"
              :editSettings="editSettings"
              :toolbar="toolbar"
            >
              <e-columns>
                <e-column
                  field="ID"
                  headerText="ID"
                  :disableHtmlEncode="false"
                  width="80"
                  textAlign="Center"
                ></e-column>
                <e-column
                  field="From"
                  headerText="<span> From </span>"
                  :disableHtmlEncode="false"
                  width="180"
                ></e-column>
                <e-column field="PIC" headerText="PIC" width="180" format="yMd" textAlign="Right"></e-column>
                <e-column
                  field="Description"
                  headerText="Description"
                  width="180"
                  textAlign="Center"
                ></e-column>
                <e-column field="DueDate" headerText="DueDate" width="250" textAlign="Center"></e-column>
                <e-column field="Remark" headerText="Remark" width="180" textAlign="Center"></e-column>
                <e-column
                  field="state"
                  :disableHtmlEncode="false"
                  headerText="Status"
                  width="100"
                  textAlign="Center"
                ></e-column>
                <e-column field="Level" headerText="Level" width="80" textAlign="Center"></e-column>
                <e-column
                  field="CreatedDate"
                  headerText="CreatedDate"
                  width="250"
                  textAlign="Center"
                ></e-column>
                <e-column
                  field="Option"
                  defaultValue="subTask"
                  headerText="Option"
                  width="80"
                  textAlign="Center"
                ></e-column>
              </e-columns>
            </ejs-grid>
            <!-- <table class="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>From</th>
                  <th>Job Name/ Project Name</th>
                  <th>Be Assigned</th>
                  <th>Description</th>
                  <th>Deadline</th>
                  <th>Remark</th>
                  <th>Status</th>
                  <th>Created Time</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody style="overflow-y:hidden">
                <tr v-for="(task,key,index) in tasks" :key="index">
                  <td>{{key + 1}}</td>
                  <td>{{task.From}}</td>
                  <td>{{task.ProjectName}}</td>
                  <td>
                    <span
                      v-for="(pic,key,index) in task.PIC"
                      :key="index"
                      class="badge bg-secondary"
                    >{{pic}}</span>
                  </td>
                  <td>{{task.Description}}</td>
                  <td>{{task.DueDate}}</td>
                  <td>{{task.Remark}}</td>
                  <td>
                    <span class="badge bg-danger">{{task.Status== true ? "done": "undone"}}</span>
                  </td>
                  <td>{{task.CreatedDate}}</td>
                  <td class="py-0 align-middle">
                    <button
                      type="button"
                      class="btn btn-block btn-info btn-xs"
                      data-toggle="modal"
                      data-target="#modal-sub-task"
                    >
                      <i class="fas fa-plus"></i> Sub
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>-->
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
    <div class="modal fade" id="modal-task" aria-hidden="true" style="display: none;">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">
              <i class="fas fa-plus"></i> Task Add
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="card card-primary card-outline card-outline-tabs">
                  <div class="card-header p-0 border-bottom-0">
                    <ul class="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          id="custom-tabs-three-home-tab"
                          data-toggle="pill"
                          href="#custom-tabs-three-home"
                          role="tab"
                          aria-controls="custom-tabs-three-home"
                          aria-selected="true"
                        >Routine</a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="custom-tabs-three-profile-tab"
                          data-toggle="pill"
                          href="#custom-tabs-three-profile"
                          role="tab"
                          aria-controls="custom-tabs-three-profile"
                          aria-selected="false"
                        >Project</a>
                      </li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <div class="tab-content" id="custom-tabs-three-tabContent">
                      <div
                        class="tab-pane fade active show"
                        id="custom-tabs-three-home"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-three-home-tab"
                      >
                        <div class="form-group">
                          <label for="JobType">Routine</label>
                          <input
                            type="text"
                            id="JobType"
                            v-model="task.jobName"
                            class="form-control JobType"
                          />
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="custom-tabs-three-profile"
                        role="tabpanel"
                        aria-labelledby="custom-tabs-three-profile-tab"
                      >
                        <div class="form-group">
                          <label class="typo__label">Project</label>
                          <multiselect
                            v-model="projectSelected"
                            deselect-label="Can't remove this value"
                            track-by="ID"
                            label="Name"
                            placeholder="Select one"
                            :options="projectOptions"
                            :searchable="false"
                            :allow-empty="false"
                            @tag="addTagProject"
                            @select="onSelectProject"
                          ></multiselect>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /.card -->
                </div>
              </div>
              <div class="col-md-12">
                <div class="card card-primary card-outline card-outline-tabs">
                  <div class="card-header p-0 border-bottom-0">
                    <ul class="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          id="tabs-who-tab"
                          data-toggle="pill"
                          href="#tabs-who"
                          role="tab"
                          aria-controls="tabs-who"
                          aria-selected="true"
                        >From Who?</a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="tabs-where-tab"
                          data-toggle="pill"
                          href="#tabs-where"
                          role="tab"
                          aria-controls="tabs-where"
                          aria-selected="false"
                        >From Where?</a>
                      </li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <div class="tab-content" id="custom-tabs-three-tabContent">
                      <div
                        class="tab-pane fade active show"
                        id="tabs-who"
                        role="tabpanel"
                        aria-labelledby="tabs-who"
                      >
                        <div class="form-group">
                          <label for="JobType">Who?</label>
                          <input
                            type="text"
                            id="JobType"
                            v-model="who"
                            class="form-control JobType"
                          />
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="tabs-where"
                        role="tabpanel"
                        aria-labelledby="tabs-where"
                      >
                        <div class="form-group">
                          <label class="typo__label">Where?</label>
                          <multiselect
                            v-model="ocSelected"
                            deselect-label="Can't remove this value"
                            track-by="ID"
                            label="Name"
                            placeholder="Select one"
                            :options="ocOptions"
                            :searchable="false"
                            :allow-empty="false"
                          ></multiselect>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /.card -->
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="Assigned">Be Assigned</label>
                  <multiselect
                    v-model="selected"
                    tag-placeholder="Add this as new tag"
                    placeholder="Search or add a tag"
                    label="Username"
                    track-by="ID"
                    :options="options"
                    :multiple="true"
                    :taggable="true"
                    @tag="addTag"
                    @select="onSelectTask"
                  ></multiselect>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="Description">Description</label>
                  <input
                    type="text"
                    id="Description"
                    v-model="task.description"
                    class="form-control Description"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="Description">Deadline</label>
                  <datetime
                    v-model="date"
                    input-class="form-control"
                    placeholder="Select date"
                    type="date"
                  ></datetime>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="Description">Remark</label>
                  <input
                    type="text"
                    id="Description"
                    v-model="task.remark"
                    class="form-control Description"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="createTask">Save changes</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <div class="modal fade" id="modal-sub-task" aria-hidden="true" style="display: none;">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">
              <i class="fas fa-plus"></i> Sub-Task Add
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="JobType">Job Type</label>
                  <input type="text" id="JobType" class="form-control JobType" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="TypeName">Project Name / Job Name</label>
                  <input type="text" id="TypeName" class="form-control TypeName" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="Assigned">Be Assigned</label>
                  <multiselect
                    v-model="selected"
                    tag-placeholder="Add this as new tag"
                    placeholder="Search or add a tag"
                    label="ID"
                    track-by="Username"
                    :options="options"
                    :multiple="true"
                    :taggable="true"
                    @tag="addTag"
                  ></multiselect>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="Description">Description</label>
                  <input type="text" id="Description" class="form-control Description" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="Description">Deadline</label>
                  <datetime
                    v-model="date"
                    input-class="form-control"
                    placeholder="Select date"
                    type="datetime"
                  ></datetime>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="Remark">Remark</label>
                  <input type="text" id="Remark" class="form-control Remark" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Multiselect from "vue-multiselect";
import { Datetime } from "vue-datetime";
import { GridPlugin, Edit, Toolbar, Page } from "@syncfusion/ej2-vue-grids";
Vue.use(GridPlugin);
// register globally
Vue.component("multiselect", Multiselect);
export default {
  name: "client-task",
  components: {
    Multiselect,
    Datetime
  },
  data() {
    return {
      editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: "Dialog"
      },
      toolbar: ["Add", "Edit", "Delete"],
      orderidrules: { required: true, number: true },
      customeridrules: { required: true },
      freightrules: { required: true },
      editparams: { params: { popupHeight: "300px" } },
      pageSettings: { pageCount: 5 },
      PIC: [],
      expanded: {},
      selected: [],
      options: [],
      date: "",
      data: [],
      ocSelected: [],
      ocOptions: [],
      userSelected: [],
      userOptions: [],
      who: "",
      tasks: [],
      task: {
        id: 0,
        description: "",
        from: "",
        jobName: "",
        createdBy: 0,
        projectID: 0,
        parentID: 0,
        remark: "",
        deadline: "",
        status: false,
        pic: []
      },
      projectOptions: [],
      projectSelected: []
    };
  },
  created() {
    this.getUser();
    this.getProjects();
    this.getFrom();
    console.log(this.task);
    this.getTasks();
    this.who = localStorage.getItem("User");
  },
  methods: {
    customiseCell: function(args) {
      console.log("customiseCell");
      console.log(args);

      if (args.column.field === "State") {
        args.cell.setAttribute("style", "background-color:red;color:white;");
      }
    },
    addTagProject(newTag) {
      const tag = {
        ID: newTag,
        Name: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.projectOptions.push(tag);
      this.projectSelected.push(tag);
      this.selected.map(item => {
        this.task.projectID = item.ID;
      });
      console.log(this.task.projectID);
    },
    addTag(newTag) {
      const tag = {
        ID: newTag,
        Username: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.options.push(tag);
      this.selected.push(tag);
      this.selected.map(item => {
        this.task.pic.push(item.ID);
      });
    },
    getUser() {
      var self = this;
      self.$api.get("api/Tasks/GetListUser").then(res => {
        self.options = res.data;
        console.log(res);
      });
    },
    getTasks() {
      var self = this;
      self.$api.get("api/Tasks/GetListTreeTask").then(res => {
        self.tasks = res.data;
        self.data = res.data;
        console.log(self.data);
      });
    },
    onSelectTask(option) {
      this.task.pic.push(option.ID);
      console.log(this.task.pic);
    },
    onSelectProject(option) {
      this.task.projectID = option.ID;
      console.log(this.task.projectID);
    },
    getProjects() {
      var self = this;
      self.$api.get("api/Tasks/GetListProject").then(res => {
        self.projectOptions = res.data;
        console.log(res);
      });
    },
    getFrom() {
      var self = this;
      self.$api.get("api/Tasks/From").then(res => {
        self.ocOptions = res.data.ocs;
        self.userOptions = res.data.users;

        console.log(res);
      });
    },
    createTask() {
      var self = this;
      console.log("createTask");

      console.log(self.task);
      self.$api.post("api/Tasks/CreateTask", self.task).then(res => {
        self.options = res.data;

        console.log(res);
      });
    },
    dateFormat(date) {
      var d = new Date(date);
      var m, day, month;
      m = d.getMonth() + 1;
      if (m < 10) month = "0" + m;
      if (d.getDate() < 10) day = "0" + d.getDate();
      else day = d.getDate();

      var year = d.getFullYear();
      var formattedDate = day + "/" + month + "/" + year;
      return formattedDate;
    }
  },
  watch: {
    task: function(newVal, oldVal) {
      console.log(newVal);
    },
    date: function(newVal, oldVal) {
      this.task.deadline = this.dateFormat(newVal);
    }
  },
  provide: {
    grid: [Edit, Toolbar, Page]
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
</style>
