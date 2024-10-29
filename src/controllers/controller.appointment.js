

async function ListarByUser(req, res) {

    const name = req.query.name;
    const doctors = await serviceDoctor.Listar(name);

    res.status(200).json(doctors);
}

export default { ListarByUser };