<template>
  <div>
    <div class="row">
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
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Job Type</th>
                  <th>Job Name/ Project Name</th>
                  <th>Be Assigned</th>
                  <th>Description</th>
                  <th>Deadline</th>
                  <th>Remark</th>
                  <th>Status</th>
                  <th>Created Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Project</td>
                  <td>KPI System</td>
                  <td>
                    <span class="badge bg-secondary">Henry</span>
                    <span class="badge bg-secondary">Leo</span>
                    <span class="badge bg-secondary">Peter</span>
                  </td>
                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  <td>12/30/2019</td>
                  <td>Completed multi language.</td>
                  <td>
                    <span class="badge bg-success">Done</span>
                  </td>
                  <td>3/4/2019</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Project</td>
                  <td>Mixing Machine</td>
                  <td>
                    <span class="badge bg-secondary">Henry</span>
                    <span class="badge bg-secondary">Leo</span>
                    <span class="badge bg-secondary">Peter</span>
                  </td>
                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  <td>12/30/2019</td>
                  <td>Completed multi language.</td>
                  <td>
                    <span class="badge bg-success">Done</span>
                  </td>
                  <td>3/4/2019</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Project</td>
                  <td>Tracking Document System</td>
                  <td>
                    <span class="badge bg-secondary">Henry</span>
                    <span class="badge bg-secondary">Leo</span>
                    <span class="badge bg-secondary">Peter</span>
                  </td>
                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  <td>12/30/2019</td>
                  <td>Completed multi language.</td>
                  <td>
                    <span class="badge bg-success">Done</span>
                  </td>
                  <td>3/4/2019</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Project</td>
                  <td>Work Management System</td>
                  <td>
                    <span class="badge bg-secondary">Henry</span>
                    <span class="badge bg-secondary">Leo</span>
                    <span class="badge bg-secondary">Peter</span>
                  </td>
                  <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  <td>3/1/2020</td>
                  <td>Completed multi language.</td>
                  <td>
                    <span class="badge bg-success">Done</span>
                  </td>
                  <td>12/4/2019</td>
                </tr>
              </tbody>
            </table>
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
export default {
  name: "client-history"
};
</script>

<style scoped>
</style>
