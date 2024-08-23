const url = "https://fakestoreapi.com/products";

// Ejercicio 1
async function recuperarTodos() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error: ", response.status);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Error: ", error);
  }
}

// Ejercicio 2
async function recuperarLimitados(n) {
  try {
    const response = await fetch(`${url}/?limit=${n}`);
    if (!response.ok) {
      throw new Error("Error: ", response.status);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Error: ", error);
  }
}

// Ejercicio 3
async function agregarProducto() {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: "Cartera perrito",
        price: 12.34,
        description: "Una cartera con forma de perrito",
        image: "",
        category: "women's clothing",
      }),
    });
    if (!response.ok) {
      throw new Error("Error: ", response.status);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Error: ", error);
  }
}

// Ejercicio 4
async function retornarProductoPorId(id) {
  try {
    const response = await fetch(`${url}/${id}`);
    if (!response.ok) {
      throw new Error("Error: ", response.status);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Error: ", error);
  }
}
// Ejercicio 5
async function eliminarProducto(id) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error: ", response.status);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Error: ", error);
  }
}

async function mostrarEjercicios() {
  const ejercicio1 = await recuperarTodos();
  console.log(
    `Ejercicio 1: Recuperar todos los productos\n${JSON.stringify(
      ejercicio1,
      null,
      2
    )}`
  );

  const ejercicio2 = await recuperarLimitados(2);
  console.log(
    `Ejercicio 2: Recuperar un numero limitado de productos\n${JSON.stringify(
      ejercicio2,
      null,
      2
    )}`
  );

  const ejercicio3 = await agregarProducto();
  console.log(
    `Ejercicio 3: Agregar un producto\n${JSON.stringify(ejercicio3, null, 2)}`
  );

  const ejercicio4 = await retornarProductoPorId(15);
  console.log(
    `Ejercicio 4: Retornar un producto por id\n${JSON.stringify(
      ejercicio4,
      null,
      2
    )}`
  );

  const ejercicio5 = await eliminarProducto(11);
  console.log(
    `Ejercicio 5: Eliminar un producto\n${JSON.stringify(ejercicio5, null, 2)}`
  );
}

mostrarEjercicios();
