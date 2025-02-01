import Customer from "../models/customers.model.js"

export const CustomerIndex = async(req, res) => {
  try {
    const customers=await Customer.find()
    res.json(customers)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
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

export const CustomerDetail=async(req,res)=>{
  try {
    const customer=await Customer.findById(req.params.id)

    if(customer==null){
      return res.status(404).json({message:"Cannot find the movie"})
    }
    return res.status(200).json(customer);

  } catch (error) {
    return res.status(500).json({message:error.message})
  }
}

export const CustomerUpdate =async (req, res) => {
  try {
    const updatedCustomer = await Customer.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        desc: req.body.desc,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const CustomerDelete =async (req, res) => {
  const customerId = req.params.id;

  try {
    await Customer.deleteOne({ _id: customerId });
    res.json({ message: "Movie deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
