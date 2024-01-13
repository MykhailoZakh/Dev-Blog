const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//  Model for Comment data in db
class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        created_by: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'posts',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments'
    }
);

module.exports = Comment;