const fs = require("fs");

// 1. Realizar una función que permita recuperar la información del personaje “Ned Stark”.
// 2. Realizar una función que permita recuperar todos los personajes disponibles.
// 3. Persistir el resultado de la segunda consulta localmente en un archivo JSON.
// 4. Leer el archivo local de personajes
// a) Mostrar por consola los personajes de la familia Stark. Es decir: “family” = “House
// Stark”.
// b) Agregar un nuevo personaje y sobrescribir el archivo original.
// c) Eliminar los personajes cuyo ID sean mayores a 25 y sobrescribir el archivo original.

//1)
const findNedStark = () => {
  return fetch(`https://thronesapi.com/api/v2/Characters/6`)
    .then((res) => res.json())
    .then((data) => {
      console.log(`1) ${data.fullName} encontrado`);
      return data;
    })
    .catch((err) => console.error("Error: ", err));
};

//2)
const getAllChars = () => {
  return fetch("https://thronesapi.com/api/v2/Characters")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => {
      console.error("Error fetching characters:", err);
    });
};

//3)
const saveAllChars = async () => {
  try {
    const res = await getAllChars();
    const jsonData = JSON.stringify(res, null, 2);
    fs.writeFileSync("data.json", jsonData, "UTF-8");
    return "2) y 3) Se han guardado todos los personajes";
  } catch (err) {
    console.error("Error al crear archivo: ", err);
  }
};

//4)
// hago una funcion ya que leer el archivo puede ser util para probar cosas sin repetir
const readJsonData = () => {
  try {
    const data = fs.readFileSync("./data.json", "UTF-8");
    const jsonData = JSON.parse(data);
    console.log("4) Archivo leido");
    return jsonData;
  } catch (err) {
    console.error("Error al leer archivo: ", err);
  }
};

//4a)
const getStarksFamily = () => {
  const jsonData = readJsonData();
  const starksFamily = jsonData.filter((char) => char.family === "House Stark");
  console.log("4a) Filtro: House Stark ");
  return starksFamily;
};

//4b)
const addChar = () => {
  const newChar = {
    id: 53,
    firstName: "Lisa",
    lastName: "Simpson",
    fullName: "Lisa Simpson",
    title: "Lady Lisa",
    family: "The Simpsons",
    image: "lisa-simpson.webp",
    imageUrl: "https://i.ibb.co/pR1WhZ1/lisa-simpson.webp",
  };
  const jsonData = readJsonData();
  jsonData.push(newChar);
  const toSave = JSON.stringify(jsonData, null, 2);

  fs.writeFileSync("./data.json", toSave);
  return `4b) Se ha agregado el personaje: ${newChar.fullName}`;
};

//4c)
const deleteCharsGreaterThan = (limit) => {
  const jsonData = readJsonData();
  const filteredList = jsonData.filter((char) => char.id <= limit);
  const toSave = JSON.stringify(filteredList, null, 2);

  fs.writeFileSync("./data.json", toSave);
  return `4c) Se han eliminado los personajes con id mayor a ${limit}`;
};

(async () => {
  console.log(await findNedStark());
  console.log(await saveAllChars());
  console.log(getStarksFamily());
  console.log(addChar());
  console.log(deleteCharsGreaterThan(25));
})();
