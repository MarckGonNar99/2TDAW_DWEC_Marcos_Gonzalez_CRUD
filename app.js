const meses = {

    1 : '01',
    2 : '02',
				3 : '03',
    4 : '04',
				5 : '05',
    6 : '06',
				7 : '07',
    8 : '08',
				9 : '09',
    10 : '10',
				11 : '11',
    12 : '12',


};


let hoy = new Date();

let año = hoy.getFullYear();
let mes = hoy.getMonth()+1;
let dia = hoy.getDate();


let date = año+'-'+meses[mes]+'-'+dia;


console.log(hoy);



/* FORMULARIOS */
const form_añadir = document.querySelector("#atomo-formu");
const form_buscar = document.querySelector("#atomo-busqueda");
const form_editar = document.querySelector("#atomo-editar");

/* FORMULARIO PARA AÑADIR ELEMENTO NUEVO */
const nombre=document.querySelector("#nombre");
const protones=document.querySelector("#protones");
const imagen=document.querySelector("#imagen");
const descripcion=document.querySelector("#descripcion");
const tipo=document.querySelector("#tipo");
const masa=document.querySelector("#masa");
const enlace=document.querySelector("#enlace");
const toxicidad=document.querySelector("#toxicidad");
const llegada=date;
const b_nuevo=document.querySelector("#nuevo");

/* IMAGENES PARA LA TOXICIDAD */
const verificar={
    true : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkDXZe6Oyv2HEEMOby29IVNeci2sWdxcIhuQ&usqp=CAU",
    false : "data:image/png;base64,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"
}


/* MODAL BOOSTRAP PARA PODER QUITARLO Y PONERLO */
const editar_modal = document.querySelector("#editarModal");

/* DATOS MODFICAR ATOMO */
const editar_nombre=document.querySelector("#editarNombre");
const editar_protones=document.querySelector("#editarProtones");
const editar_imagen=document.querySelector("#editarImagen");
const editar_descripcion=document.querySelector("#editarDescripcion");
const editar_tipo=document.querySelector("#editarTipo");
const editar_masa=document.querySelector("#editarMasa");
const editar_enlace=document.querySelector("#editarEnlace");
const editar_toxicidad=document.querySelector("#editarToxicidad");
const editar_llegada=date;

const editar_clave_atomo=document.querySelector("#claveAtomo")
const b_editar=document.querySelector("#editar");


/*===================INPUTS DEL FORMULARIO DE BUSCAR==================*/
const busqueda = document.querySelector("#busqueda");
const buscar = document.querySelector("#buscar");
const criterio = document.querySelector("#criterio");

/* ===================ORDENACION INPUTS============================= */
const ord_desc_protones = document.querySelector("#ordenar_desc");
const ord_asc_fecha = document.querySelector("#ordenar_asc");

/* =====================TABLA DE LOS ELEMENTOS========================= */
const tabla_atomos = document.querySelector("#atomo-list");

/* ============================BSUCAR========================== */
buscar.addEventListener("click",
	(evento)=>{
		evento.preventDefault();

		const atomos=Object.values(sessionStorage).map(
			(atomo)=>{
				return JSON.parse(atomo);
			}
		);
		const atomos_filtrados=atomos.filter(
			(atomo)=>{
				return atomo['descripcion'].////
				       includes(busqueda.value.trim());
			}
		);
		//VACIAR LA TABLA	
		tabla_atomos.innerHTML="";
		atomos_filtrados.forEach(
			(atomo)=>{
				tabla_atomos.appendChild(nuevoAtomo(atomo));
			}
		)
	});


/* ==================GESTIONAR ORDENACION========================== */

ord_asc_fecha.addEventListener("click",
	(evento) => {
		evento.preventDefault();

		const atomos=Object.values(sessionStorage).map(
			(atomo)=>{
				return JSON.parse(atomo);
			}
		);
		//FILTRADO
		const atomos_filtrados=atomos.filter(
			(atomo)=>{
				return atomo['descripcion'].///////
				       includes(busqueda.value.trim());
			}
		);
		//ORDENACION
		const atomos_ordenados=atomos_filtrados.sort(
			(a,b)=>{
				a = new Date(a["llegada"]);
				b = new Date(b["llegada"]);
				return a - b;
			}
		)
		//VACIAR LA TABLA	
		tabla_atomos.innerHTML="";
		atomos_ordenados.forEach(
			(atomo)=>{
				tabla_atomos.appendChild(nuevoAtomo(atomo));

			}
		)
		console.log(atomos_ordenados);
	});


ord_desc_protones.addEventListener("click",
	(evento) => {
		evento.preventDefault();

		//PASAR EL SESSIONSTORAGE A UN ARRAY DE OBJETOS JSON
		const atomos=Object.values(sessionStorage).map(
			(atomo)=>{
				return JSON.parse(atomo);
			}
		);
		const atomos_filtrados=atomos.filter(
			(atomo)=>{
				return atomo['descripcion'].
				       includes(busqueda.value.trim());
			}
		);
		//ORDENACION
		const atomos_ordenados=atomos_filtrados.sort(
			(a,b)=>{
				return b["protones"]-a["protones"];
			}
		)
		tabla_atomos.innerHTML="";
		atomos_ordenados.forEach(
			(atomo)=>{
				tabla_atomos.appendChild(nuevoAtomo(atomo));
			}
		)
	});

//GESTION DE LA TABLA	
const borraratomo=(clave_atomo) => {
	return ()=>{
		const fila_a_borrar=document.querySelector("#"+clave_atomo)
		fila_a_borrar.remove();
		sessionStorage.removeItem(clave_atomo);
	}
}

const modalEditarAtomo=(clave_atomo)=>{
	return () => {
		const atomo=JSON.parse(sessionStorage.getItem(clave_atomo));
		editar_nombre.value=atomo["nombre"];
		editar_protones.value=atomo["protones"];
		editar_imagen.value=atomo["imagen"];
		editar_descripcion.value=atomo["descripcion"];
		editar_tipo.value=atomo["tipo"];
		editar_masa.value=atomo["masa"];
		editar_enlace.value=atomo["enlace"];
		editar_toxicidad.value=atomo["toxico"];
		editar_llegada.value=atomo["llegada"];
		editar_clave_atomo.value=clave_atomo;		

		$(editar_modal).modal("toggle");
	}
}

const nuevoAtomo=(json) => {
	let nueva_fila=document.createElement("tr");
	nueva_fila.id="ID_" + json["nombre"].toUpperCase().replaceAll(" ", "");

/* NOMBRE */
	let td_nombre=document.createElement("td");
	td_nombre.innerText=json["nombre"];
	td_nombre.classList.add("text-center");
	nueva_fila.appendChild(td_nombre);

/* PROTONES */
	let td_protones = document.createElement("td");
	td_protones.innerText = json["protones"];
	td_protones.classList.add("text-center");
	nueva_fila.appendChild(td_protones);

/* IMAGEN */
	let imagen = document.createElement("img");
	imagen.src = json["imagen"];
	imagen.style.width = "150px";
	imagen.classList.add("w-25");
	let td_imagen = document.createElement("td");
	imagen.classList.add("w-100");
	td_imagen.appendChild(imagen);
	td_imagen.classList.add("text-center");
	nueva_fila.appendChild(td_imagen);

/* DESCRIPCION */
	let td_descripcion = document.createElement("td");
	td_descripcion.innerText = json["descripcion"];
	td_descripcion.classList.add("text-center");
	nueva_fila.appendChild(td_descripcion);

	/* TIPO */
	let td_tipo = document.createElement("td");
	td_tipo.innerText = json["tipo"];
	td_tipo.classList.add("text-center");
	nueva_fila.appendChild(td_tipo);

/* MASA */
	let td_masa= document.createElement("td");
	td_masa.innerText = json["masa"];
	td_masa.classList.add("text-center");
	nueva_fila.appendChild(td_masa);

/* ENLACE */
	let enlace_boton = document.createElement("a");
	enlace_boton.innerText = "enlace";
	enlace_boton.href = json["enlace"];
	enlace_boton.classList.add("btn", "btn-primary");
	let td_enlace = document.createElement("td");
	td_enlace.classList.add("text-center");
	td_enlace.appendChild(enlace_boton);
	nueva_fila.appendChild(td_enlace);

/* TOXICIDAD */
	let imagen_toxicidad = document.createElement("img");
	imagen_toxicidad.src = verificar[json["toxico"]];
	imagen_toxicidad.style.width = "150px";
	imagen_toxicidad.classList.add("w-25");
	let td_toxicidad = document.createElement("td");
	imagen_toxicidad.classList.add("w-100");
	td_toxicidad.appendChild(imagen_toxicidad);
	td_toxicidad.classList.add("text-center");
	nueva_fila.appendChild(td_toxicidad);


/* FECHA DE LLEGADA */
	let td_llegada = document.createElement("td");
	td_llegada.innerText = json["llegada"];
	td_llegada.classList.add("text-center");
	nueva_fila.appendChild(td_llegada);

	/*======================BOTON EDITAR===============================*/
	let editar = document.createElement("a");
	editar.innerText = "Editar";
	editar.href = "#";

	/* CLICK SOBRE EL BOTON */
	console.log(nueva_fila.id);
	editar.addEventListener("click", modalEditarAtomo(nueva_fila.id))
	editar.classList.add("btn", "btn-success");

	let td_editar = document.createElement("td");
	td_editar.appendChild(editar);
	td_editar.classList.add("text-center");
	nueva_fila.appendChild(td_editar);

/* =================================BOTON BORRAR================================== */
	let borrar = document.createElement("a");
	borrar.innerText = "Borrar";
	borrar.href = "#";
	borrar.classList.add("btn", "btn-danger");

/* CLICK SOBRE EL BOTON */
	borrar.addEventListener("click", borraratomo(nueva_fila.id))
	let td_borrar = document.createElement("td");
	td_borrar.appendChild(borrar);
	td_borrar.classList.add("text-center");
	nueva_fila.appendChild(td_borrar);
	return nueva_fila;
}

/* =========COMPROBAR LOS DATOS DE NUEVO ELEMENTO E INSERTAR======================= */
b_nuevo.addEventListener("click",
	(evento) => {
		evento.preventDefault();
		if (nombre.value.trim() === "") {
			mensajeError("Nombre incorrecto");
		} else if (protones.value.trim() === "" || isNaN(protones.value.trim())
		|| parseInt(protones.value.trim()) <= 0) {
			mensajeError("Número de protones incorrecto");
		} else if (imagen.value.trim() === "") {
			mensajeError("Imagen incorrecta");
		} else if (descripcion.value.trim() === "") {
			mensajeError("Descripción incorrecta");
		} else if (tipo.value.trim() === "") {
			mensajeError("Tipo incorrecto");
		} else if (masa.value.trim() === "" || isNaN(masa.value.trim()) ||
		parseInt(masa.value.trim()) <= 0) {
			mensajeError("Error al introducir la masa");
		} else if (enlace.value.trim() === "") {
			mensajeError("Enlace incorrecto");
		} else if (toxicidad.value.trim() === "") {
			mensajeError("Toxicidad incorrecta");
		} else if (sessionStorage.getItem("ID_" + nombre.value.trim().toUpperCase().replaceAll(" ", "")) !== null) {
			mensajeError("Este elemento ya está");
		} else {

			const datos_atomo= {
				"nombre": nombre.value.trim(),
				"puertas": protones.value.trim(),
				"imagen": imagen.value.trim(),
				"descripcion": descripcion.value.trim(),
				"tipo": tipo.value.trim(),
				"masa": masa.value.trim(),
				"enlace": enlace.value.trim(),
				"toxico": toxicidad.value.trim(),
				"llegada" : date,
			};
			const nuevo = nuevoAtomo(datos_atomo);
			tabla_atomos.appendChild(nuevo);
			sessionStorage.setItem("ID_" + nombre.value.trim().toUpperCase().replaceAll(" ", ""), JSON.stringify(datos_atomo));
			form_añadir.reset();
			document.documentElement.scrollTop = document.documentElement.scrollHeight;
			mensajeOk("Añadido correctamente");
		}
	});

/* =====================MODIFICAR DATOS DESDE LA TABLA============================ */

b_editar.addEventListener("click",
	(evento) => {
		evento.preventDefault();
		const nueva_clave_atomo="ID_"+editar_nombre.
									value.trim().toUpperCase().replaceAll(" ","");

		if (editar_nombre.value.trim() === "") {
			mensajeError("Nombre incorrecto");
		} else if (editar_protones.value.trim() === "" || isNaN(protones.value.trim())
		|| parseInt(protones.value.trim()) <= 0) {
			mensajeError("Número de protones incorrecto");
		} else if (editar_imagen.value.trim() === "") {
			mensajeError("Imagen incorrecta");
		} else if (editar_descripcion.value.trim() === "") {
			mensajeError("Descripción incorrecta");
		} else if (editar_tipo.value.trim() === "") {
			mensajeError("Tipo incorrecto");
		} else if (editar_masa.value.trim() === "" || isNaN(masa.value.trim())
		||parseInt(masa.value.trim()) <= 0) {
			mensajeError("Error al introducir la masa");
		} else if (editar_enlace.value.trim() === "") {
			mensajeError("Enlace incorrecto");
		} else if (editar_toxicidad.value.trim() === "") {
			mensajeError("Toxicidad incorrecta");
		} else if (editar_clave_atomo.value!==nueva_clave_atomo
			&& sessionStorage.getItem(nueva_clave_atomo)
										 !== null){
			mensajeError("El elemento ya está en la tabla");
		} else {
			const datos_atomo= {
				"nombre": editar_nombre.value.trim(),
				"protones": editar_protones.value.trim(),
				"imagen": editar_imagen.value.trim(),
				"descripcion": editar_descripcion.value.trim(),
				"tipo": editar_tipo.value.trim(),
				"masa": editar_masa.value.trim(),
				"enlace": editar_enlace.value.trim(),
				"toxico": editar_toxicidad.value.trim(),
				"llegada": date,
			};
			/* NUEVO TR */
			const atomo_editado=nuevoAtomo(datos_atomo);
			/* TR ANTERIOR */
			const fila_a_editar=document.
			                querySelector("#"+editar_clave_atomo.value);
			/* SUSTITUIR LOS TR */
			fila_a_editar.replaceWith(atomo_editado);
			//ACTUALIZAR EL STORAGE
			sessionStorage.setItem(nueva_clave_atomo,
				                   JSON.stringify(datos_atomo));
			if(nueva_clave_atomo!==editar_clave_atomo.value){
			     sessionStorage.removeItem(editar_clave_atomo.value);
			}

			form_editar.reset();
			$(editar_modal).modal("toggle");////
			mensajeOk("Editado correctamente");
		}
	});


if (sessionStorage.length===0) {
	menu.forEach(
		(atomo) => {
			sessionStorage.setItem("ID_" + atomo["nombre"].
				                   toUpperCase()
								   .replaceAll(" ", ""),
				                   JSON.stringify(atomo))
		});
}

//AÑADIR LOS DATOS DEL STORAGE PARA MANEJAR LA APLICACION A TRAVES DE ELLOS Y NO TENER QUE USAR SIEMPRE LA BASE DE DATOS
Object.values(sessionStorage).forEach(
	(atomo) => {
		tabla_atomos.appendChild(nuevoAtomo(JSON.parse(atomo)));
	}
)