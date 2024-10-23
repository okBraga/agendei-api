

async function Listar() {

    const doctors = [
        {id: 1, name: "Filipe", specialty: "Clinico Geral", icon: "M" },
        {id: 2, name: "Dayana", specialty: "Médica de dente", icon: "F" },
        {id: 3, name: "Jesus", specialty: "Milagres", icon: "M" },
    ] 
    return doctors;
}

export default { Listar }