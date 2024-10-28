import repositoryUser from "../repositories/repository.user.js";

async function Inserir(name, email , password) {

    //return await repositoryUser.Inserir(name, email , password);
    const user =  await repositoryUser.Inserir(name, email , password);

    return user;
}

export default { Inserir };