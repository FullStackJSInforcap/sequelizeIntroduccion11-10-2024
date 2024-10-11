const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'clientes',
    timestamps: false
});

module.exports = Cliente;