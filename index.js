let alertPlaceholder = document.getElementById('liveAlertPlaceholder');
let alertTrigger = document.getElementById('liveAlertBtn');
function muncul() {
let wrapper = document.createElement('div');
wrapper.innerHTML = '<div class="alert alert-success alert-dismissible" role="alert" style=" margin-top:13px">Your Feedback Has Been Sent!<button type="button" class="btn-close" data-bs-dismiss="alert " aria-label="Close" ></button></div>';

alertPlaceholder.append(wrapper);
}

if (alertTrigger) {
alertTrigger.addEventListener('click', function () {
  muncul();
})
}