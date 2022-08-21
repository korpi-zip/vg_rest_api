//** packages */
const mongoose = require("mongoose");

//** using schema */
const schema = require("../schemas/user.schema")

schema.statics = {
    create : function (data,cb){
        let doc = new this(data);
        doc.create(cb);
    },
    getAll : function (query,cb){
        this.find(query,cb);
    },
    getByCode : function (data,cb){
        this.find(cb);
    },
    update : function (query, data,cb){
        this.findOneAndUpdate(query,{$set:data},{new:true},cb)
    },
    delete : function (query, cb){
        this.findOneAndDelete(query)
    }
};

const dto = mongoose.model("coll_user",schema);
module.exports = dto;