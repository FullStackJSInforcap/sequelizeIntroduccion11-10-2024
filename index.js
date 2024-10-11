const { Op } = require("sequelize");
const Cliente = require("./models/cliente");

/* const cliente = Cliente.build({
    id: 1, 
    nombre: 'nombre sequelize',
    apellido: 'apellido sequelize',
    correo: 'correoSequelize@mail.com'
});

cliente.save(); */

/* const cliente = Cliente.create({
    id: 2, 
    nombre: 'nombre dos',
    apellido: 'apellido dos',
    correo: 'correodos@mail.com'
}); */
const jugandoSequelize = async () => {
   /*  const clientes = await Cliente.findAll({
        attributes: ['nombre', 'apellido'],
        where: {
            id: {
                [Op.gte]: 1
            }
        }
    }); 
    
    clientes.forEach((cliente) => {
        console.log(cliente.dataValues);
        
    });
    */
    const cliente = await Cliente.findByPk(1);
    console.log(cliente);
    
}

jugandoSequelize();