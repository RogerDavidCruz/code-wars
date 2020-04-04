-- 7 kyu - SQL Basics: Simple JOIN
-- https://www.codewars.com/kata/5802e32dd8c944e562000020/train/sql

-- For this challenge you need to create a simple
-- SELECT statement that will return all columns from the products table,
-- and join to the companies table so that you can return the company name.
--
-- products table schema
--
-- id
-- name
-- isbn
-- company_id
-- price
--
-- companies table schema
-- id
-- name
-- You should return all product fields as well
-- as the company name as "company_name".

SELECT prod.id,
       prod.name,
       prod.isbn,
       prod.company_id,
       prod.price,
       co.name AS company_name
FROM products prod
INNER JOIN companies co ON prod.company_id = co.id;
