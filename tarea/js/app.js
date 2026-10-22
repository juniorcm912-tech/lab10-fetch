async function mostrarPublicaciones() {
  const lista = document.querySelector("#posts");
  try {
    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1",
    );
    if (!respuesta.ok) throw new Error("Error en la petición");

    const publicaciones = await respuesta.json();

    lista.innerHTML = publicaciones
      .map((publicacion) => `<li>${publicacion.title}</li>`)
      .join("");
  } catch (error) {
    lista.innerHTML = "<li>No se pudo cargar la información</li>";
  }
}

mostrarPublicaciones();
