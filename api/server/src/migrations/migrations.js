//como o banco de dados vai se comportar no tempo de vida da aplicação

// yarn sequelize migration:create --name-create-order // <- cria um arquivo js com timestamp registrando todas as alterações feitas no banco de dados ->
// module.exports
// up:(queryInterface, Sequelize) => {...}
// down:(queryInterface, Sequelize) => {...}

// module.exports = {
//     up: (queryInterface, Sequelize) => {
//       return queryInterface.createTable('Books', {
//         id: {
//           allowNull: false,
//           autoIncrement: true,
//           primaryKey: true,
//           type: Sequelize.INTEGER
//         },
//         title: {
//           type: Sequelize.STRING,
//           allowNull: false,
//         },
//         price: {
//           type: Sequelize.STRING,
//           allowNull: false,
//         },
//         description: {
//           type: Sequelize.STRING,
//           allowNull: false,
//         },
//         createdAt: {
//           allowNull: false,
//           type: Sequelize.DATE
//         },
//         updatedAt: {
//           allowNull: false,
//           type: Sequelize.DATE
//         }
//       });
//     },
//     down: (queryInterface) => {
//       return queryInterface.dropTable('Books');
//     }
//   };