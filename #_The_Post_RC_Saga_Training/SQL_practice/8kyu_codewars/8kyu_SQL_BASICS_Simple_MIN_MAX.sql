-- 8 kyu - SQL Basics: Simple MIN / MAX
-- https://www.codewars.com/kata/581113dce10b531b1d0000bd/train/sql
--
-- For this challenge you need to create a simple MIN / MAX statement that will return the Minimum and Maximum ages out of all the people.
--
-- people table schema
-- id
-- name
-- age
-- select table schema
-- age_min (minimum of ages)
-- age_max (maximum of ages)

SELECT MIN(age) AS age_min, MAX(age) AS age_max
FROM people
