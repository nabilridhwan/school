const db = require("./databaseConfig")

const CategoryDB = {

    getAllCategories: (callback) => {
        const connection = db.getConnection();
        connection.connect((err) => {
            if(err) return callback(err, null);
            else{
                const sql = "SELECT * FROM category";
                connection.query(sql, (err, result) => {
                    connection.end()
                    if(err) return callback(err, null);
                    else{
                        return callback(null, result);
                    }
                })
            }
        });
    },

    getFurnituresFromCategory: (categoryId, callback) => {
        const connection = db.getConnection();
        connection.connect((err) => {
            if(err) return callback(err, null);
            else{
                const sql = "SELECT f.itemid, f.item_name, f.description, f.price, f.quantity, f.cat_id, f.images, f.item_code, f.dimension, c.name FROM furniture f, category c where f.cat_id = c.categoryid and c.categoryid = ?;";
                connection.query(sql, [categoryId], (err, result) => {
                    connection.end()
                    if(err) return callback(err, null);
                    else{
                        return callback(null, result);
                    }
                })
            }
        });
    }
    
}

module.exports = CategoryDB;