console.log("Laboratorio 10 listo");

// ===== Ejercicio 3: fetch con .then() =====
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => res.json())
  .then((usuario) => console.log("Usuario 1:", usuario.name))
  .catch((error) => console.log("Ocurrió un error:", error));

// ===== Ejercicio 4: async/await =====
async function cargarUsuario() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
  const usuario = await res.json();
  console.log("Usuario 2:", usuario.name);
}

cargarUsuario();

// ===== Ejercicio 5: try/catch =====
async function probarError() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("No se encontró la información");
    const datos = await res.json();
    console.log("Datos recibidos:", datos);
  } catch (error) {
    console.log("Ocurrió un error:", error.message);
  }
}

probarError();
