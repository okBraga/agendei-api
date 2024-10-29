import repositoryDoctor from "../repositories/repository.doctor.js";

async function Listar() {

    const doctors = await repositoryDoctor.Listar();

    return doctors;
}

async function Inserir(name, specialty, icon) {

    const doctor = await repositoryDoctor.Inserir(name, specialty, icon);

    return doctor;
}

async function Editar(id_doctor, name, specialty, icon) {

    return await repositoryDoctor.Editar(id_doctor, name, specialty, icon);
}

async function Excluir(id_doctor) {

    return await repositoryDoctor.Excluir(id_doctor);
}

async function ListarServicos(id_doctor) {

    const services = await repositoryDoctor.ListarServicos(id_doctor);

    return services;
}
export default { Listar, Inserir, Editar, Excluir, ListarServicos }