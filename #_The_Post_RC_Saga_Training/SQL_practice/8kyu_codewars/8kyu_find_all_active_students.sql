-- 8kyu_ Find all active students
-- https://www.codewars.com/kata/5809b9ef88b750ab180001ec/train/sql

-- Create a simple SELECT query to display student information of all ACTIVE students.
--
-- TABLE STRUCTURE:
--
-- students
-- Id	FirstName	LastName	IsActive
--
-- Note: IsActive (true or false)
--
-- Create a simple SELECT query to display student information of all ACTIVE students.
--
-- TABLE STRUCTURE:
--
-- students
-- Id	FirstName	LastName	IsActive
--
-- Note: IsActive (true or false)


SELECT FirstName,LastName,IsActive
FROM students
WHERE IsActive = 1
