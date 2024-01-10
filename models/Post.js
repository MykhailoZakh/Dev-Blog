const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        created_on: {
            type: DataTypes.DATE
        },
        created_by: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        }
        // comment_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'comments',
        //         key: 'id'
        //     }
        // }

    },
    {
        sequelize,
        // timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'posts'
    }
);

module.exports = Post;