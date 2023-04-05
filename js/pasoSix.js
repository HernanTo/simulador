
let inventario = [{
    id: 0,
        tipoMaterial: document.getElementById(`tipo-material-0`).value,
        material: document.getElementById(`material-0`).value,
        cantidad: document.getElementById(`cantidad-0`).value, 
        cantidadAsignada: document.getElementById(`material-a-0`).innerHTML,
        evento: true
}];
document.getElementById('agregar-in').addEventListener('click', event =>{

    let tr = document.createElement('tr');
    tr.setAttribute("id", `fila-in-${contadorRegistros}`);
    let td = document.createElement('td');
    let select = document.createElement('select');
    select.setAttribute("id", `tipo-material-${contadorRegistros}`);
    let option = document.createElement('option');
    option.value = "NoSerial";
    option.text = "No serializado";
    select.appendChild(option);
    option = document.createElement('option');
    option.value = "c";
    option.text = "c";
    select.appendChild(option);
    td.appendChild(select);
    tr.appendChild(td);
    
    td = document.createElement('td');
    select = document.createElement('select');
    select.setAttribute("id", `material-${contadorRegistros}`);
    option = document.createElement('option');
    option.value = "Cable";
    option.text = "Cable";
    select.appendChild(option);
    option = document.createElement('option');
    option.value = "Cable2";
    option.text = "Cable 2";
    select.appendChild(option);
    td.appendChild(select);
    tr.appendChild(td);

    td = document.createElement('td');
    let input = document.createElement('input')
    input.type = 'number';
    input.setAttribute("id", `cantidad-${contadorRegistros}`);
    td.appendChild(input);
    tr.appendChild(td);
    
    td = document.createElement('td');
    td.innerHTML = '783';
    td.setAttribute("id", `material-a-${contadorRegistros}`);
    tr.appendChild(td);
    
    td = document.createElement('td');
    let itemCross = document.createElement('i');
    itemCross.className = 'fa-solid fa-xmark';
    itemCross.setAttribute("id", `borrar-in-${contadorRegistros}`);
    td.appendChild(itemCross);
    tr.appendChild(td);

    // let tbody = document.getElementById('tbody-material');
    // tbody.appendChild(tr);
    
    document.getElementById('tbody-material').appendChild(tr);

    let nuevoInven = {
        id: contadorRegistros,
        tipoMaterial: document.getElementById(`tipo-material-${contadorRegistros}`).value,
        material: document.getElementById(`material-${contadorRegistros}`).value,
        cantidad: document.getElementById(`cantidad-${contadorRegistros}`).value, 
        cantidadAsignada: document.getElementById(`material-a-${contadorRegistros}`).innerHTML,
        evento: false
    }
    inventario.push(nuevoInven);

    inventario.forEach(element=>{
        if(!element.evento){
            document.getElementById(`tipo-material-${contadorRegistros}`).addEventListener('change', event=>{
                console.log(document.getElementById(`tipo-material-${contadorRegistros-1}`));
                element.tipoMaterial = document.getElementById(`tipo-material-${contadorRegistros-1}`).value;
                estadoGuardado = false;
            })
            document.getElementById(`material-${contadorRegistros}`).addEventListener('change', event=>{
                element.material = document.getElementById(`material-${contadorRegistros-1}`).value;
                estadoGuardado = false;
            })
            document.getElementById(`cantidad-${contadorRegistros}`).addEventListener('change', event=>{
                alert('aaaa')
                element.cantidad = document.getElementById(`cantidad-${contadorRegistros-1}`).value;
                estadoGuardado = false;
            })
            document.getElementById(`material-a-${contadorRegistros}`).addEventListener('change', event=>{
                element.cantidadAsignada = document.getElementById(`material-a-${contadorRegistros-1}`).value;
                estadoGuardado = false;
            })
            document.getElementById(`borrar-in-${contadorRegistros}`).addEventListener('click', event=>{
                let row = document.getElementById(`fila-in-${contadorRegistros-1}`);
                let contadorElim = 0;
                inventario.forEach(element =>{
                    if(element.id == contadorRegistros-1){
                        delete(inventario[contadorElim])
                        console.log(contadorElim);
                    }
                    contadorElim = contadorElim +1;
                })
                row.remove();
                estadoGuardado = false;
            })
            element.evento = true;
        }
    })
    contadorRegistros = contadorRegistros+ 1;


})
inventario.forEach(element=>{
    document.getElementById(`tipo-material-${element.id}`).addEventListener('change', event=>{
        element.tipoMaterial = document.getElementById(`tipo-material-${element.id}`).value;
        estadoGuardado = false;
    })
    document.getElementById(`material-${element.id}`).addEventListener('change', event=>{
        element.material = document.getElementById(`material-${element.id}`).value;
        estadoGuardado = false;
    })
    document.getElementById(`cantidad-${element.id}`).addEventListener('change', event=>{
        element.cantidad = document.getElementById(`cantidad-${element.id}`).value;
        estadoGuardado = false;
    })
    document.getElementById(`material-a-${element.id}`).addEventListener('change', event=>{
        element.cantidadAsignada = document.getElementById(`material-a-${element.id}`).value;
        estadoGuardado = false;
    })
    document.getElementById(`borrar-in-${element.id}`).addEventListener('click', event=>{
        let row = document.getElementById(`fila-in-${contadorRegistros-1}`);
        row.remove();
        estadoGuardado = false;
    })
})

document.getElementById('guardar-in').addEventListener('click', event =>{
    estadoGuardado = true;
})