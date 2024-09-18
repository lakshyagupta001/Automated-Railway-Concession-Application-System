const { sendTokenAsCookie } = require("../middleware/auth");
var studentModal = require("../models/student");
var formModal = require("../models/form");
const jwt = require("jsonwebtoken");

const allStudent = async (req, res) => {
  let data = await studentModal.find();
  res.send({ data: data });
};

const studentLogin = async (req, res) => {
  try {
    const { erp_no, Password } = req.body;
  console.log(erp_no)
    let data = await studentModal.findOne({ erp_no });

    if (!data || erp_no != data.erp_no) {
      return res.status(401).json({ message: "User Not Found" });
    } else if (parseInt(Password, 10) != data.Password) {
      return res.status(403).json({ message: "Wrong Password" });
    } else {
      const token = jwt.sign({ userId: data._id }, process.env.secret_key, {
        expiresIn: "1h",
      });
      sendTokenAsCookie(res, token);
      return res
        .status(201)
        .json({ success: true, message: "Login successful", id: data._id });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const student = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    console.log("error");
  }
  const decodedToken = jwt.verify(token, process.env.secret_key);
  const userId = decodedToken.userId;
  const studentDetails = await studentModal.findById(userId);
  if (!studentDetails) {
    return res.status(404).json({ error: "Student not found" });
  }
  res.json(studentDetails);
};


const studentFormSubmission = async (req, res) => {
  try {
    console.log(req.body)
    const { className, destination, duration, line } = req.body;
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const decodedToken = jwt.verify(token, process.env.secret_key);
    const userId = decodedToken.userId;

    const student = await studentModal.findById(userId).populate('archiveForms');
    const latestArchiveForm = student.archiveForms.sort((a, b) => b.approvalDate - a.approvalDate)[0];
    switch (true) {
      case student.form:
        console.log("error already submitted");
        return res.status(400).json({ message: 'Form already submitted' });
      case student.fees_status === 'pending':
        return res.status(400).json({ message: 'Cannot submit form due to pending fees' });
      case student.academic_status === 'Dropout':
        return res.json({ message: 'Cannot submit form due to dropout academic status' });
      case latestArchiveForm:
        const currentDate = new Date();
        const approvalDate = new Date(latestArchiveForm.approvalDate);
        switch (duration) {
          case 'Monthly':
            if (approvalDate.getMonth() === currentDate.getMonth()) {
              return res.status(400).json({ message: 'Cannot submit form within the same month' });
            }
            break;
          case 'Quarterly':
            if (approvalDate.getMonth() >= currentDate.getMonth() - 2) {
              return res.status(400).json({ message: 'Cannot submit form within the same quarter' });
            }
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
    
    const submittedForm = await formModal.create({
      className,
      destination,
      line,
      duration,
      student: userId,
    });

    await studentModal.updateOne({ _id: userId }, { $set: { form: submittedForm._id } });

    res.status(201).json({ message: 'Form submitted successfully', success: true });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


const studentLogout = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    console.log("error");
    res
      .status(500)
      .json({ message: "You are already logged out", success: false });
  }

  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully", success: true });
};

module.exports = {
  allStudent,
  studentLogin,
  student,
  studentFormSubmission,
  studentLogout,
};
