const paso_4 = document.getElementById('paso-4');
const paso_4_after = document.getElementById('paso-4-after');
const paso_5 = document.getElementById('paso-5');
const paso_7 = document.getElementById('paso-7');
const paso_8 = document.getElementById('paso-8');
const btn_visita = document.getElementById('btn-visita');
const modal_visit = document.getElementById('modal-visit');
const modal_confirm = document.getElementById('modal-confirm');

document.getElementById('btn-paso-2').addEventListener('click', ()=>{
    //Mostrar la sección 2 y ocultar la sección 1
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-1').style.display = 'none';
            document.getElementById('paso-2').style.display = 'grid';
            document.getElementById('con-venta-SVA').style.display = 'block';
            document.getElementById('pasoli-1').classList.remove("active");
            document.getElementById('pasoli-1').className = "done";
            document.getElementById('pasoli-2').className = "active";
        });
      }, "4000");
    
});
document.getElementById('btn-paso-3').addEventListener('click', ()=>{
    //Mostrar la sección 3 y ocultar la sección 2
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-2').style.display = 'none';
            document.getElementById('paso-3').style.display = 'grid';
            document.getElementById('con-venta-SVA').style.display = 'none';
            document.getElementById('pasoli-2').classList.remove("active");
            document.getElementById('pasoli-2').className = "done";
            document.getElementById('pasoli-3').className = "active";
        });
      }, "3000");
    
});

document.getElementById('btn-paso-v-1').addEventListener('click', ()=>{
    //Mostrar la sección 2 y ocultar la sección 1
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-2').style.display = 'none';
            document.getElementById('paso-1').style.display = 'grid';
            document.getElementById('con-venta-SVA').style.display = 'none';
            document.getElementById('pasoli-2').classList.remove("active");
            // document.getElementById('pasoli-1').className = "done";
            document.getElementById('pasoli-1').className = "active";
        });
      }, "3000");
    
});

document.getElementById('btn-paso-4').addEventListener('click', ()=>{
    //Mostrar la sección 4 y ocultar la sección 3
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-3').style.display = 'none';
            document.getElementById('paso-4').style.display = 'grid';
            // document.getElementById('con-venta-SVA').style.display = 'grid';
            document.getElementById('pasoli-3').classList.remove("active");
            document.getElementById('pasoli-3').className = "done";
            document.getElementById('pasoli-4').className = "active";
            document.getElementById('paso-4-after').style.display = 'none';
        });
      }, "3000");
    
});
document.getElementById('btn-paso-v-2').addEventListener('click', ()=>{
    //Mostrar la sección 3 y ocultar la sección 2
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-3').style.display = 'none';
            document.getElementById('paso-1').style.display = 'none !important';
            document.getElementById('paso-2').style.display = 'grid';
            document.getElementById('con-venta-SVA').style.display = 'grid';
            document.getElementById('pasoli-3').classList.remove("active");
            document.getElementById('pasoli-2').className = "done";
            document.getElementById('pasoli-2').className = "active";
        });
      }, "3000");
    
});
document.getElementById('btn-paso-v-3').addEventListener('click', ()=>{
    //Mostrar la sección 3 y ocultar la sección 4
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-4').style.display = 'none';
            // document.getElementById('paso-1').style.display = 'none !important';
            document.getElementById('paso-3').style.display = 'grid';
            // document.getElementById('con-venta-SVA').style.display = 'grid';
            document.getElementById('pasoli-4').classList.remove("active");
            document.getElementById('pasoli-3').className = "done";
            document.getElementById('pasoli-3').className = "active";
        });
      }, "3000");
    
});
document.getElementById('btn-paso-v-3-b').addEventListener('click', ()=>{
    //Mostrar la sección 3 y ocultar la sección 4
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-4').style.display = 'none';
            // document.getElementById('paso-1').style.display = 'none !important';
            document.getElementById('paso-3').style.display = 'grid';
            // document.getElementById('con-venta-SVA').style.display = 'grid';
            document.getElementById('pasoli-4').classList.remove("active");
            document.getElementById('pasoli-3').className = "done";
            document.getElementById('pasoli-3').className = "active";
        });
      }, "3000");
    
});


// boton paso 6
document.getElementById('btn-paso-prev-7').addEventListener('click', event=>{
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            $( document ).ready(function() {
                $('#modal-punto-no-r-6').modal('toggle')
            });
        });
      }, "3000");
})

document.getElementById('btn-paso-7').addEventListener('click', ()=>{
    //Mostrar la sección 7 y ocultar la sección 6
    $( document ).ready(function() {
        $('#modal-punto-no-r-6').modal('hide')
    });
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-6').style.display = 'none';
            document.getElementById('paso-7').style.display = 'grid';
            document.getElementById('pasoli-6').classList.remove("active");
            document.getElementById('pasoli-6').className = "done";
            document.getElementById('pasoli-7').className = "active";
        });
      }, "3000");
    
});

/////////////////////////////////////////////////////////////////////////////////////////////////
const activar = document.querySelectorAll('.activar');
activar.forEach(btn =>{
    btn.addEventListener('click', event =>{
        btn.style.backgroundColor = '#dd694c';
        btn.textContent = 'Inactivar';
        document.getElementById(`${btn.value}`).innerHTML = "50 - Activación Completa";
    });
});

// function activar_btn(event, value){
//     const id = event.target;
//     id.style.backgroundColor = '#dd694c';
//     id.textContent = 'Inactivar';
//     cambiar_estado(value);
// }
// function cambiar_estado(id){
//     document.getElementById(id).innerHTML = "50 - Activación Completa";
// }

btn_visita.addEventListener('click', () =>{
    
    modal_visit.style.display = 'block';
    paso_4.style.display = 'none';
});

// Enviar SMS

let codigo = document.getElementById('codigo');
let btn_confirm = document.getElementById('btn-confirm');
let btn_sms = document.getElementById('btn-sms');
btn_sms.addEventListener("click", ()=>{
    let timerInterval;
    Swal.fire({
        title: 'INFORMACIÓN',
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()  
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then(() => {
        btn_sms.disabled = true;
        codigo.style.display = 'block';
        btn_confirm.style.display = 'block';
        btn_confirm.addEventListener("click", ()=>{
            let btn_actualizar = document.getElementById('btn-actualizar');
            Swal.fire({
                title: 'INFORMACIÓN',
                text: 'El código es correcto',
            }).then(() =>{
                btn_sms.style.display = 'none';
                btn_confirm.style.display = 'none';
                btn_actualizar.style.display = 'block'

                btn_actualizar.addEventListener("click", ()=>{
                    btn_paso_5 = document.getElementById('btn-paso-5');
                    Swal.fire({
                        title: 'INFORMACIÓN',
                        text: 'Proceso ejecutado exitosamente',
                    }).then(() =>{
                        paso_4_after.style.display = 'block';
                        modal_visit.style.display = 'none';
                        btn_paso_5.addEventListener("click", ()=>{

                            $( document ).ready(function() {
                                $('#modal-loading').modal('toggle')
                            });
                            setTimeout(() => {
                                $( document ).ready(function() {
                                    $('#modal-loading').modal('hide')
                                    paso_5.style.display = 'block';
                                    paso_4_after.style.display = 'none';
                                    
                                    document.getElementById('pasoli-4').classList.remove("active");
                                    document.getElementById('pasoli-4').className = "done";
                                    document.getElementById('pasoli-5').className = "active";
                                });
                              }, "3000");

                        })
                    })
                })
            })
        });
    });
    
    
});

document.getElementById('btn-con-acep').addEventListener('click', ()=>{
    //Mostrar la sección 6 y ocultar la sección 5
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    document.getElementById('modal-confirm-after').style.display = "none";
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-5').style.display = 'none';
            document.getElementById('paso-6').style.display = 'grid';
            document.getElementById('pasoli-5').classList.remove("active");
            document.getElementById('pasoli-5').className = "done";
            document.getElementById('pasoli-6').className = "active";
        });
      }, "3000");
    
});
let btn_paso_6 = document.getElementById('btn-paso-6');
btn_paso_6.addEventListener('click', () =>{
    paso_5.style.display = 'none';
    modal_confirm.style.display = 'block';
})

document.getElementById('btn-paso-7').addEventListener('click', ()=>{
    //Mostrar la sección 7 y ocultar la sección 6
    $( document ).ready(function() {
        $('#modal-loading').modal('toggle')
    });
    setTimeout(() => {
        $( document ).ready(function() {
            $('#modal-loading').modal('hide')
            document.getElementById('paso-6').style.display = 'none';
            document.getElementById('paso-7').style.display = 'grid';
            document.getElementById('pasoli-6').classList.remove("active");
            document.getElementById('pasoli-6').className = "done";
            document.getElementById('pasoli-7').className = "active";
        });
      }, "3000");
    
});

// No retorno
let btn_con_s = document.getElementById('btn-con-s');
btn_con_s.addEventListener("click", ()=>{
    modal_confirm_after = document.getElementById('modal-confirm-after');
    let timerInterval;
    Swal.fire({
        title: 'INFORMACIÓN',
        color:'#1285B6',
        html: 
            '<p>Se encuentra realizando una validación del servicio con el cliente, por favor espere 1 minuto. La encuesta se envió al Correo: PRUEBA@ETB.COM.CO. Número Celular: 3108576458</p><br>' +
            '0 Dia, 0 hora, 0 minuto, <strong></strong> segundos<br>',
        timer: 5000,
        didOpen: () =>{
            const content = Swal.getHtmlContainer()
            const $ = content.querySelector.bind(content)

            Swal.showLoading()

            timerInterval = setInterval(() => {
                Swal.getHtmlContainer().querySelector('strong')
                  .textContent = (Swal.getTimerLeft() / 1000)
                    .toFixed(0)
            }, 100)
        },willClose: () => {
            clearInterval(timerInterval)
        }
    }).then(() => {
        modal_confirm_after.style.display = 'block';
        modal_confirm.style.display = 'none';
    })
});

const boleta = document.querySelectorAll('.boleta');

// Paso 7

let btn_anterior;

boleta.forEach(btn => {
    btn.addEventListener('click', event =>{
        if (btn_anterior){
            btn_anterior.style.backgroundColor = '';
            formato_boleta.style.display = 'none';
        }
        
        const id = event.target;
        id.style.backgroundColor = '#009DC3';   
        btn.style.backgroundColor = '#009DC3';
    
        btn_anterior = btn;
    })
});

let cliente = document.getElementById('cliente');
const formato_boleta = document.getElementById('formato-boleta');
cliente.addEventListener('click', () =>{
    formato_boleta.style.display = 'block';

})

let btn_check = document.getElementById('btn-check');
 
btn_check.addEventListener('click', () =>{
    const punto_cableado = document.getElementById('confirm-punto-cableado');
    if(btn_check.checked == true){
        punto_cableado.style.display = 'block';
    }else{
        punto_cableado.style.display = 'none';
    }
})

function modalRed(){
    $( document ).ready(function() {
        $('#modal-red').modal('toggle')
    });
}