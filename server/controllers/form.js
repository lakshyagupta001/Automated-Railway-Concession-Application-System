var Form=require('../models/form')
var archive=require('../models/archive')
var studentModal=require('../models/student')
var jwt=require('jsonwebtoken')
const allForm = async (req, res) => {

    try {
      console.log("Fetching all forms...");
      const data = await Form.find().populate('student');
     
      console.log("this is data: " + data)
      if (!data || data.length === 0) {
        return res.status(404).json({ error: "No forms found" });
      }
      return res.status(200).json({ data });
    } catch (error) {
      console.error("Error fetching forms:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
  
  
  const particularStudentForm=async(req,res)=>
  {
    try {
      let id=req.params.id
      let data= await Form.findById(id).populate('student');
      if(!data)
      {
        console.log('no data found!!')
        res.send({message:"no data found"})
      }
      res.send({data})
    } catch (error) {
      console.log(error.message)
    }
  }
  const archiveForm = async (req, res) => {
    try {
      const {id} = req.body;

      // Find the form by ID
      const form = await Form.findById(id);
  console.log(form)
      if (!form) {
        return res.status(404).json({ message: 'Form not found' });
      }
  
      // Create a new archive document with form details
      const archiveData = {
        destination: form.destination,
        className: form.className,
        duration: form.duration,
        line: form.line,
        student: form.student,
        approvalDate: Date.now(),
      };
  
      const archivedForm = await archive.create(archiveData);

      await studentModal.updateOne(
        { _id: form.student },
        { $push: { archiveForms: archivedForm._id } }
      );
  
      // Delete the form from the 'Form' collection
      await Form.findByIdAndDelete(id);
 
      res.status(200).json({
        message: 'Form archived successfully',
        archivedForm,
        success: true
      });
    } catch (error) {
      console.error('Error archiving form:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

const studentArchiveForm = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const decodedToken = jwt.verify(token, process.env.secret_key);
    const userId = decodedToken.userId;
    const data = await archive.find({ student: userId });

    if (!data || data.length === 0) {
      return res.status(404).json({ error: 'No archived forms found' });
    }

    return res.status(200).json({ data });
  } catch (error) {
    console.error('Error fetching archived forms:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const allArchiveForm = async (req, res) => 
{
  
  try {
    console.log("Fetching all forms...");
    const data = await archive.find();
   
    console.log("this is data: " + data)
    if (!data || data.length === 0) {
      return res.status(404).json({ error: "No forms found" });
    }
    return res.status(200).send( data );
  } catch (error) {
    console.error("Error fetching forms:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

const archives=async(req,res)=>
{
  try {
    let data=await archive.find().populate('student')
    if(!data)
    {
      console.log('no data found!!')
      res.send({message:"no data found"})
    }
    res.send({data})
  } catch (error) {
    console.log(error.message)
  }
}

  module.exports={allForm,particularStudentForm,archiveForm,studentArchiveForm,allArchiveForm,archives}