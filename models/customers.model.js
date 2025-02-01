import { Schema,model } from "mongoose";


//write the schema
const customerSchema=new Schema({
    title:String,
    desc:String
})

//create model
const Customer=model("Customer",customerSchema)

export default Customer