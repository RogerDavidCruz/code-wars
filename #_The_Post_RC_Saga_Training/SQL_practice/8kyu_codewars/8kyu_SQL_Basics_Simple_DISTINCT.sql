-- 8 kyu - SQL Basics: Simple DISTINCT
-- https://www.codewars.com/kata/58111670e10b53be31000108/train/sql

-- For this challenge you need to create a simple DISTINCT statement,
-- you want to find all the unique ages.
--
-- people table schema
-- id
-- name
-- age
-- select table schema
-- age (distinct)

SELECT DISTINCT age AS age
FROM people
