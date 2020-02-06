<template>
  <div>
    <div class="row">
      <div class="col-md-12 pb-4">
        <button
          type="button"
          class="btn bg-gradient-secondary btn-sm"
          data-toggle="modal"
          data-target="#modal-add"
        >
          <i class="fas fa-plus"></i> Role Add
        </button>
      </div>
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">List Role</h5>

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
                  <th>Role Name</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Admin</td>
                  <td class="py-0 align-middle">
                    <div class="btn-group btn-group-sm">
                      <a href="#" class="btn btn-info" data-toggle="modal" data-target="#modal-add">
                        <i class="fas fa-edit"></i>
                      </a>
                      <a href="#" class="btn btn-danger">
                        <i class="fas fa-trash"></i>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>User</td>
                  <td class="py-0 align-middle">
                    <div class="btn-group btn-group-sm">
                      <a href="#" class="btn btn-info">
                        <i class="fas fa-edit"></i>
                      </a>
                      <a href="#" class="btn btn-danger">
                        <i class="fas fa-trash"></i>
                      </a>
                    </div>
                  </td>
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
    <div class="modal fade" id="modal-add" aria-hidden="true" style="display: none;">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">
              <i class="fas fa-plus"></i> Role Add
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="ID">ID</label>
                  <input type="text" id="ID" class="form-control ID" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="Name">Name</label>
                  <input type="text" id="Name" class="form-control Name" />
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
    <div class="modal fade" id="modal-edit" aria-hidden="true" style="display: none;">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">
              <i class="fas fa-plus"></i> Role Edit
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="ID">ID</label>
                  <input type="text" id="ID" class="form-control ID" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="Name">Name</label>
                  <input type="text" id="Name" class="form-control Name" />
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
export default {
  name: "admin-role"
};
</script>

<style scoped>
</style>
