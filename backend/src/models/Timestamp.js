import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Timestamp = sequelize.define('timestamps', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    timestamp: {
        type: Sequelize.TEXT
    },
  
}, {
    timestamps: false
});



export default Timestamp;