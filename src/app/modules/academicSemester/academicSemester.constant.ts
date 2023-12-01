import {
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TAcademicSemesterNamecodeMapper,
  TMonths,
} from './academicSemester.interface';

export const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'Julai',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const AcademicSemesterName: TAcademicSemesterName[] = [
  'Autumn',
  'Summar',
  'Fall',
];
export const AcademicSemesterCode: TAcademicSemesterCode[] = ['01', '02', '03'];

export const academicSemesterNameCodeMapper: TAcademicSemesterNamecodeMapper = {
  Autumn: '01',
  Summar: '02',
  Fall: '03',
};
