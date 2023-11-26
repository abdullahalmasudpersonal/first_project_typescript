import { TStudent } from './student.interface'
import { Student } from './student.model'

const createStudentIntoDB = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('User alrady exists!')
  }

  const result = await Student.create(studentData) // build in static method

  // const student = new Student(studentData) /// create an instance
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User alrady exists!')
  // }

  // const result = await student.save() // build in instance method

  return result
}

const getAllStudentsFromDB = async () => {
  const result = await Student.find()
  return result
}
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id })
  return result
}

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
}
