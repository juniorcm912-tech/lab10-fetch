async function mostrarPublicaciones() {
  const lista = document.querySelector("#posts");
  try {
    // 1. Pedir a la API las publicaciones del usuario 1
    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1",
    );
    if (!respuesta.ok) throw new Error("Error en la petición");

    // 2. Convertir la respuesta a JSON
    const publicaciones = await respuesta.json();

    // 3. Mostrar los títulos en la lista con map, join e innerHTML
    lista.innerHTML = publicaciones
      .map((publicacion) => `<li>${publicacion.title}</li>`)
      .join("");
  } catch (error) {
    // 4. Mostrar el mensaje de error en la página
    lista.innerHTML = "<li>No se pudo cargar la información</li>";
  }
}

mostrarPublicaciones();
