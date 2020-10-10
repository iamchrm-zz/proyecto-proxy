
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('necesita-validacion');
        // Loop over them and prevent submission
        var validacion = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('validacion-login');
        // Loop over them and prevent submission
        var validacion = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

/* Funcion de Capturar, Almacenar datos y Limpiar campos
$(document).ready(function(){    
    $('#boton-guardar').click(function(){        
    
        var nom = document.getElementById("nameInput").value;
        var email = document.getElementById("emailInput").value;
        var message = document.getElementById("messageInput").value;

        localStorage.setItem("nameInput", nom);
        localStorage.setItem("emailInput", email);
        localStorage.setItem("messageInput", message);
    });   
});


$(document).ready(function(){    
    $('#boton-cargar').click(function(){                       

        var nom = localStorage.getItem("nameInput");
        var email = localStorage.getItem("emailInput");
        var messsage = localStorage.getItem("messageInput");
    
        document.getElementById("nameInput").innerHTML = nom;
        document.getElementById("emailInput").innerHTML = email; 
        document.getElementById("messageInput").innerHTML = messsage;
    });   
});
*/