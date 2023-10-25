module.exports = (sequelize, DataTypes) => {
    const Hospital = sequelize.define('Hospital', {
        name: DataTypes.STRING,
        price: DataTypes.STRING,
        room_size: DataTypes.STRING,
        bed_size: DataTypes.STRING,
        type: DataTypes.STRING
    })

    return Hospital
}