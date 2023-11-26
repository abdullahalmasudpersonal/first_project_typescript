import Joi from 'joi'

// Define Joi schemas for each sub-document
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(20)
    .pattern(/^[A-Z][a-z]*$/, 'capitalize')
    .message('First Name must start with a capital letter'),
  middleName: Joi.string().allow('').trim(),
  lastName: Joi.string()
    .required()
    .trim()
    .regex(/^[a-zA-Z]+$/),
})

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().trim(),
  fatherOccupation: Joi.string().required().trim(),
  fatherContactNo: Joi.string().required().trim(),
  motherName: Joi.string().required().trim(),
  motherOccupation: Joi.string().required().trim(),
  motherContactNo: Joi.string().required().trim(),
})

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().trim(),
  occupation: Joi.string().required().trim(),
  contactNo: Joi.string().required().trim(),
  address: Joi.string().required().trim(),
})

// Define the main schema using Joi
const studentValidationSchema = Joi.object({
  id: Joi.string().required().trim(),
  name: userNameValidationSchema.required(),
  gender: Joi.string().required().trim().valid('male', 'female', 'other'),
  dateOfBirth: Joi.string().allow('').trim(),
  email: Joi.string().required().trim().email(),
  contactNo: Joi.string().required().trim(),
  emergencyContactNo: Joi.string().required().trim(),
  bloodGroup: Joi.string()
    .trim()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
  presentAddress: Joi.string().required().trim(),
  permanentAddress: Joi.string().required().trim(),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImg: Joi.string().allow('').trim(),
  isActive: Joi.string().trim().valid('active', 'blocked').default('active'),
})

export default studentValidationSchema
