$(document).ready(function () {
  
  onload = document.onkeyup = function () {
    document
      .getElementById("preview")
      .contentWindow.document.write(
        html.value +
          "<style>" +
          css.value +
          "</style><script>" +
          js.value +
          "</script>"
      );
    document.getElementById("preview").contentWindow.document.close();
  };

  
  $("textarea").keydown(function (event) {
    if (event.keyCode === 9) {
      var start = this.selectionStart;
      var end = this.selectionEnd;
      var $this = $(this);
      var value = $this.val();
      $this.val(value.substring(0, start) + "  " + value.substring(end));
      this.selectionStart = this.selectionEnd = start + 1;
      event.preventDefault();
    }
  });

  
  $("textarea").keydown(function () {
    sessionStorage[$(this).attr("id")] = $(this).val();
  });
  $("#html").html(sessionStorage["html"]);
  $("#css").html(sessionStorage["css"]);
  $("#js").html(sessionStorage["js"]);
  function init() {
    if (sessionStorage["html"]) {
      $("#html").val(sessionStorage["html"]);
    }
    if (sessionStorage["css"]) {
      $("#css").val(sessionStorage["css"]);
    }
    if (sessionStorage["js"]) {
      $("#js").val(sessionStorage["js"]);
    }
  }

  // Clear textareas with button
  $(".clearLink").click(clearAll);

  function clearAll() {
    document.getElementById("html").value = "";
    document.getElementById("css").value = "";
    document.getElementById("js").value = "";
    sessionStorage.clear();
  }
});

// If You are reading this you have so much time go and do something productive
// look at code why are you reading this useless comments
// Just Writing this one so github think that their is more javascript 
// In this code so let's write anything
// My name is Pratik Thombare

