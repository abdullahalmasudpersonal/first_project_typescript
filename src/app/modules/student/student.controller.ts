import { Request, Response } from 'express';
import { StudentServices } from './student.service';
//import { z } from 'zod'
import studentValidationSchema from './student.validation';
//import studentValidationSchema from './student.validation'

const createStudent = async (req: Request, res: Response) => {
  try {
    /// create a schema validation using a joi

    /// create a schema validation using a zod
    // const studentValidationSchema = z.object({
    //   id: z.string(),
    //   name: z.object({
    //     firstName: z.string().max(20, {message:'first Name connot be more then 20 characters'})
    //   })
    // })

    const { student: studentData } = req.body;

    // data validation using Joi
    // const { error, value } = studentValidationSchema.validate(studentData)
    //console.log({ error }, { value })

    // data validation using zod
    const zodparseData = studentValidationSchema.parse(studentData);

    const result = await StudentServices.createStudentIntoDB(zodparseData);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong',
    //     error: error.details,
    //   })
    // }

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      data: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Student are retrieved successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Single Student are retrieved successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
