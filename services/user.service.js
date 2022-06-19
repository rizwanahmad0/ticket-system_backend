const userModel = require("../models/user.model")

const tokenModel = require("../models/ticket.model")

const createUser = async (data)=>{
    const create = await userModel.create(data);
    return create;
    //console.log(create)
}

const login = async (data)=>{
    const login = await userModel.find({email:data.email,password:data.password});
    return login;
}

const createTicket = async (data)=>{
    const ticket = await tokenModel.create(data);
    return ticket;
}

const getAllToken = async ()=>{
    const login = await tokenModel.find({});
    return login;
}

const getTicketById = async (data)=>{
    const login = await tokenModel.find({_id:data});
    return login;
}

const updateTicket = async (data)=>{
    const login = await tokenModel.updateOne({_id:data.id},{status:"resolve"});
    return login;
}

const  addCommnet = async (data)=>{
    const login = await tokenModel.updateOne({_id:data.id},{comment:data.comment});
    return login;
}

module.exports ={
    createUser,
    login,
  createTicket,
  getAllToken,
  getTicketById,
  updateTicket,
  addCommnet


}