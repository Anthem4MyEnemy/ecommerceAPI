const mongoos = require("mongoose");

const ProductSchema = new mongoos.Schema(
    {
        title:{type:String, required:true, unique:true},
        desc:{type:String, required:true},
        img:{type:String, required:true},
        categories:{type:Array},
        size:{type:Array},
        color:{type:Array},
        price:{type:Number, required:true},
        inStock:{type:Boolean, default:true},
        
    },
    {timestamps: true }
);

module.exports = mongoos.model("Product",ProductSchema);