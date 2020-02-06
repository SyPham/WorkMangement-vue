<template>
  <div id="sidebar">
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="#/home" class="brand-link">
        <img
          src="../../../assets/AdminLTELogo.png"
          alt="AdminLTE Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: .8"
        />
        <span class="brand-text font-weight-light">Work Management</span>
      </a>

      <div class="sidebar">
        <!-- Sidebar user (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              src="../../../assets/user2-160x160.jpg"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="info">
            <a href="#" class="d-block">Henry</a>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <!-- Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library-->
            <li class="nav-item has-treeview">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Admin
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="#/admin-oc" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>OC</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#/admin-project" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Project</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#/admin-role" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Role</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#/admin-user" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>User</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#/client-task" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>Task</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/client-history" class="nav-link">
                <i class="nav-icon fas fa-th"></i>
                <p>History</p>
              </a>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "sidebar"
};
</script>

<style scoped></style>
