-- 6 kyu - SQL Basics: Top 10 customers by total payments amount
-- https://www.codewars.com/kata/580d08b5c049aef8f900007c/train/sql

-- Overview
-- For this kata we will be using the DVD Rental database.
--
-- Your are working for a company that wants to reward its top 10 customers with a free gift. You have been asked to generate a simple report that returns the top 10 customers by total amount spent. Total number of payments has also been requested.
--
-- The query should output the following columns:
--
-- customer_id [int4]
-- email [varchar]
-- payments_count [int]
-- total_amount [float]
-- and has the following requirements:
--
-- only returns the 10 top customers, ordered by total amount spent

SELECT customer.customer_id, customer.email,
COUNT(payment.payment_id) AS payments_count,
CAST(SUM(payment.amount) AS float) AS total_amount
FROM customer
INNER JOIN payment
ON payment.customer_id = customer.customer_id
GROUP BY customer.customer_id
ORDER BY total_amount DESC
LIMIT 10
