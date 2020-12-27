-- 8 kyu - Grasshopper - Terminal game move function
-- https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/sql

SELECT position, roll, position + roll * 2 AS res
FROM moves

-- prep

-- p: table is moves, columns is position and roll
-- r: table with a column res
-- e: move(3, 6) should equal 15
-- p: select statement for each column and for the res column
--    add the values of position and roll times two
