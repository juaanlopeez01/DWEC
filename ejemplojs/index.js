
const listadoUsuarios = [
    {
    nombre: "Juan Lopez",
    edad: 23,
    signoZodiaco: "Leo"
    },
    {
    nombre: "Andrea Lopez",
    edad: 21,
    signoZodiaco: "Aquario"
    },
];

    const familia = listadoUsuarios.filter((user) => user.nombre.includes("Lopez"))
    const antiguedad = listadoUsuarios.reduce((acumulador, user) => acumulador + user.edad)
    console.log(familia)
    console.log(antiguedad)