<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="#/home">
        <b>Work Management</b>
      </a>
    </div>
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Sign in to start your session</p>

        <div>
          <div class="input-group mb-3">
            <input
              @keyup.enter="login"
              v-model="user.username"
              class="form-control"
              type="text"
              name="email"
              placeholder="Username"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input
              class="form-control"
              @keyup.enter="login"
              v-model="user.password"
              type="password"
              name="pass"
              placeholder="Password"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="icheck-primary">
                <input type="checkbox" id="remember" />
                <label for="remember">Remember Me</label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-4">
              <button class="btn btn-primary btn-block" @click="login" @keyup.enter="login">Sign In</button>
            </div>
            <!-- /.col -->
          </div>
        </div>
      </div>
      <!-- /.login-card-body -->
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      loggedIn: this.$auth.loggedIn()
    };
  },

  methods: {
    login() {
      let self = this;
      console.log(self.user);
      self.$api
        .post("api/Auth/login", self.user)
        .then(function(res) {
          console.log(res);
          //self.menuSidebar = res.data.user.Menus
          self.$auth.setToken(
            res.data.token,
            Date.now() + 14400000,
            res.data.user.User.Username
          ); // + 4 hours
          console.log("res.data.user.User");
          console.log(res.data.user.User);

          var uri = self.$route.query.redirect || "";
          console.log("self.$route.query.redirect");
          console.log(self.$route.query.redirect);
          if (self.$route.query.redirect.length != 0) {
            self.$router.push(uri);
          } else {
            self.$router.push("/home");
          }
          self.$swal("success!");
        })
        .catch(res => {
          console.log(res);
          self.$swal("Username and password are incorrect, please try again!");
        });
    }
  }
};
</script>

<style scoped>
</style>
