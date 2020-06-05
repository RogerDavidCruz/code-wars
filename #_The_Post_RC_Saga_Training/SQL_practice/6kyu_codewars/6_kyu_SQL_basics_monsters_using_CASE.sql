-- 6 kyu - SQL Basics - Monsters using CASE
-- https://www.codewars.com/kata/593ef0e98b90525e090000b9/train/sql
--
-- You have access to two tables named top_half and bottom_half, as follows:
--
-- top_half schema
--
-- id
-- heads
-- arms
-- bottom_half schema
--
-- id
-- legs
-- tails
-- You must return a table with the format as follows:
--
-- output schema
--
-- id
-- heads
-- legs
-- arms
-- tails
-- species
-- The IDs on the tables match to make a full monster. For heads, arms, legs and tails you need to draw in the data from each table.
--
-- For the species, if the monster has more heads than arms, more tails than legs, or both, it is a 'BEAST' else it is a 'WEIRDO'. This needs to be captured in the species column.
--
-- All rows should be returned (10).
--
-- Tests require the use of CASE. Order by species.
--
-- Please use pure SQL, only testing is done in Ruby.

SELECT
     t.id as id,
     t.heads as heads,
     t.arms as arms,
     b.legs as legs,
     b.tails as tails,
CASE
  WHEN heads > arms then 'BEAST'
  WHEN tails > legs then 'BEAST'
  ELSE 'WEIRDO'
END AS species
FROM top_half t, bottom_half b
WHERE t.id = b.id
ORDER BY species
