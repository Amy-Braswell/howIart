function validateForm(event, state) {
    // clear all error messages
    const inputs = document.getElementsByClassName("is-danger");
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].classList.contains("error")) {
        inputs[i].classList.remove("is-danger");
      }
    }

    if (state.hasOwnProperty("nickname") && state.nickname === "") {
      document.getElementById("nickname").classList.add("is-danger");
      return "Name cannot be empty"
    }
    if (state.hasOwnProperty("email") && state.email === "") {
      document.getElementById("email").classList.add("is-danger");
      return "Email cannot be empty"
    }
    if (
      state.hasOwnProperty("verificationcode") && state.verificationcode === "") {
      document.getElementById("verificationcode").classList.add("is-danger");
      return "Verification code cannot be empty"
    }
    if (state.hasOwnProperty("password") && state.password === "") {
      document.getElementById("password").classList.add("is-danger");
      return "Password cannot be empty"
    }
    if (state.hasOwnProperty("oldpassword") && state.oldpassword === "") {
      document.getElementById("oldpassword").classList.add("is-danger");
      return "Old password cannot be empty"
    }
    if (state.hasOwnProperty("newpassword") && state.newpassword === "") {
      document.getElementById("newpassword").classList.add("is-danger");
      return "New password cannot be empty"
    }
    if (state.hasOwnProperty("confirmpassword") && state.confirmpassword === "") {
      document.getElementById("confirmpassword").classList.add("is-danger");
      return "Confirm password cannot be empty"
    }
    if (
      state.hasOwnProperty("password") &&
      state.hasOwnProperty("confirmpassword") &&
      state.password !== state.confirmpassword
    ) {
      document.getElementById("password").classList.add("is-danger");
      document.getElementById("confirmpassword").classList.add("is-danger");
      return "Passwords must match"
    }
    if (
      state.hasOwnProperty("newpassword") &&
      state.hasOwnProperty("confirmpassword") &&
      state.newpassword !== state.confirmpassword
    ) {
      document.getElementById("newpassword").classList.add("is-danger");
      document.getElementById("confirmpassword").classList.add("is-danger");
      return "Passwords must match"
    }
    return;
  }
  
  export default validateForm;