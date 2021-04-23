// 8 kyu - Job Matching #1
// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript

function match(candidate, job) {
  if(!candidate.minSalary || !job.maxSalary){
    throw TypeError('Missing Salary')
  }
  return job.maxSalary >= (candidate.minSalary * 0.9);
}

//prep

//p: object containing candidate.minSalary and object containing job.maxSalary
//r: either 'Missing Salary' string or boolean true or false
//e: { minSalary: 120000 }, { maxSalary: 130000 } => true
//p: first conditional check if the minSalary or maxSalary exist, if they don't
//   throw a TypeError named 'Missing Salary'. Then use a comparison operator 
//   to compare maxSalary and 90% of minSalary to return true or false.
