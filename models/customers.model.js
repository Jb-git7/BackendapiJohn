import { Schema,model } from "mongoose";


//write the schema
const customerSchema=new Schema({
    title:{type:String,
    required:true,
    unique:true},

    desc:{type:String,
    required:true,
    unique:true},
})

//create model
const Customer=model("Customer",customerSchema)

export default Customer