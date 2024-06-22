document.querySelector("button").addEventListener("click", function () {
  let form = document.querySelector("#user-form");

  if (form.checkValidity()) {
    form.submit();
  } else {
    form.reportValidity();
  }
});
