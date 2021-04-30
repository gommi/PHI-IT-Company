$(document).ready(function () {
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    "use strict";
    window.addEventListener(
      "load",
      function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName("needs-validation");
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
				$("#loader").hide();
				return false;
              }
              form.classList.add("was-validated");
			  jQuery("#loader").show();
			  var str = $(".needs-validation").serialize();
				jQuery.ajax({
					type: "POST",
					url: "sendmail.php",//url to file
					async: true,
					dataType: 'json',
					data: str,
					success: function(data){
						console.log(data);
						$("#loader").hide();
						$("#msg").show();
						$("#msg").html(data.html);
					}
				});
            },
            false
          );
        });
      },
      false
    );
  })();
});
