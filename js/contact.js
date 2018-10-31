'use strict';
document.addEventListener("DOMContentLoaded", function() {
		var buttons = document.querySelectorAll('#contact button');
		var checkboxs = document.querySelectorAll('#form__2 .sites input[type="checkbox"]');
		var typeDeSite = ['vitrine'];

		checkboxs.forEach(function (checkbox) {
				checkbox.onchange = function (event) {
						var target = event.currentTarget;
						if (target.checked) {
								typeDeSite.push(target.value);
						} else {
								typeDeSite.splice(typeDeSite.indexOf(target.value), 1);
						}

						document.querySelector("#form__2 #projet").value = typeDeSite.join(", ");
				};
		});

		buttons.forEach(function (btn) {
				if (btn.value == "suivant") {
						btn.addEventListener("click", function (event) {
								var target = event.currentTarget;

								var current_form = document.querySelector(target.dataset.current);
								var next_form = document.querySelector(target.dataset.next);
								var inputs = current_form.querySelectorAll("input[required]");

								var dataIsValid = true;

								inputs.forEach(function (input) {
										if (!input.checkValidity()) {
												input.focus();
												input.style.borderColor = 'rgb(245, 154, 154)';
												input.style.backgroundColor = 'rgb(255, 221, 221)';
												dataIsValid = false;
										} else if (input.id == "prenom") {
												// console.log(input.value, document.querySelector("#client"));
												document.querySelector("#client").textContent = input.value;
										}
								});

								if (dataIsValid) {
										current_form.classList.toggle('masquer');
										next_form.classList.toggle('masquer');
								}
						});
				} else {
						btn.addEventListener("submit", function (event) {
								event.preventDefault;
						});
				}
		});
});