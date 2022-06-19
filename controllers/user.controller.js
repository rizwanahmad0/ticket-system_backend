const userService = require("../services/user.service")


const createUser = async (req, res) => {
    //console.log("hjdjk")
    console.log(req.body)
    try{

      const user = await userService.createUser(req.body);
      res.send({ status: 201, message: "user created successfully", data:user });
    }
    catch(err){
      console.log(err)
      res.send({ status: 201, message: "Internal server error"});
    }
  
};

const login = async (req, res) => {
  //console.log(req.body)
  try{
    const result = await userService.login(req.body);
    res.send({ status: 201, message: "user login successfully", data:result });

  }
  catch{
    res.send({ status: 201, message: "Internal server error"});
  }

};
const createTicket = async (req, res) => {
  //console.log(req.body)
  try{
    const result = await userService.createTicket(req.body)
    res.send({ status: 201, message: "ticket created successfully", data:result });
  }
  catch{
    res.send({ status: 201, message: "Internal server error"});
  }
 
};

const getAllToken = async (req, res) => {
 // console.log(req.body)
 try{
  const result = await userService.getAllToken();
  res.send({ status: 201, message: "tickets found successfully", data:result });

 }
 catch{
  res.send({ status: 201, message: "Internal server error"});
}


};

const getTicketById = async (req, res) => {
  //console.log(req.body)
  try{
    const result = await userService.getTicketById(req.params.id)
    res.send({ status: 201, message: "ticket found successfully", data:result });

  }
  catch{
    res.send({ status: 201, message: "Internal server error"});
  }


};

const updateTicket = async (req, res) => {
  console.log(req.body)
  try{
    const result = await userService.updateTicket(req.body)
    res.send({ status: 201, message: "ticket updated successfully", data:result });

  }
  catch{
    res.send({ status: 201, message: "Internal server error"});
  }
 
};

const userComment = async (req, res) => {
  console.log(req.body)
  try{
    const result = await userService.addCommnet(req.body)
    res.send({ status: 201, message: "comment added successfully", data:result });

  }
  catch{
    res.send({ status: 201, message: "Internal server error"});
  }
 
};


// const getUser = catchAsync(async (req, res) => {
//   const user = await userService.getUserById(req.params.userId);
//   if (!user) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
//   }
//   res.send(user);
// });

// const updateUser = catchAsync(async (req, res) => {
//   const user = await userService.updateUserById(req.params.userId, req.body);
//   res.send(user);
// });

// const deleteUser = catchAsync(async (req, res) => {
//   await userService.deleteUserById(req.params.userId);
//   res.status(httpStatus.NO_CONTENT).send();
// });

module.exports = {
  createUser,
  login,
  createTicket,
  getAllToken,
  getTicketById,
  updateTicket,
  userComment
};
