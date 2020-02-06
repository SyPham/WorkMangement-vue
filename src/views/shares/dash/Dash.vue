<template>
  <div class="wrapper">
    <!-- Navbar -->
    <app-header />
    <!-- /.navbar -->
    <!-- Sidebar -->
    <app-sidebar />
    <!-- /.sidebar -->

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <app-breadcrumb />

      <!-- Main content -->
      <section class="content">
        <router-view></router-view>
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <app-footer />

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
export default {
  name: "dashboard",
  components: {
    AppSidebar: Sidebar,
    AppFooter: Footer,
    AppBreadcrumb: Breadcrumb,
    AppHeader: Header
  }
};
</script>

<style scoped></style>
