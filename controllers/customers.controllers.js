import Customer from "../models/customers.model.js"

export const CustomerIndex = (req, res) => {
  res.send("Get all customers");
};

export const CustomerCreate = async(req, res) => {
  
  //id,title,desc
  console.log(req.body)

  //validate your data
  const newCustomer=new Customer({
    title:req.body.title,
    desc:req.body.desc,
  })

  try{
    const customer= await newCustomer.save()
    return res.status(201).json(customer)
  }catch(error){
    return res.status(400).json({message :error.message})
  }
  

  return res.json(req.body)

};

export const CustomerUpdate = (req, res) => {
  res.send("Update a customer");
};

export const CustomerDelete = (req, res) => {
  res.send("Delete a customer");
};
