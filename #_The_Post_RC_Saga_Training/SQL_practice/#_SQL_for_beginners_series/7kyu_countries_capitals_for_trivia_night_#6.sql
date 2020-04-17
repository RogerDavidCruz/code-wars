-- 7kyu - Countries Capitals for Trivia Night (SQL for Beginners #6)
-- https://www.codewars.com/kata/5e5f09dc0a17be0023920f6f/train/sql

-- Your friends told you that if you keep coding on your computer, you are going to hurt your eyes. They suggested that you go with them to trivia night at the local club.
--
-- Once you arrive at the club, you realize the true motive behind your friends' invitation. They know that you are a computer nerd, and they want you to query the countries table and get the answers to the trivia questions.
--
-- Schema of the countries table:
--
-- country (String)
-- capital (String)
-- continent (String)
-- The first question: from the African countries that start with the character E, get the names of their capitals ordered alphabetically.
--
-- You should only give the names of the capitals. Any additional information is just noise
-- If you get more than 3, you will be kicked out, for being too smart
-- Also, this database is crowd-sourced, so sometimes Africa is written Africa and in other times Afrika.

SELECT capital
FROM countries
WHERE country LIKE 'E%'
AND continent IN ('Africa', 'Afrika')
ORDER BY capital ASC
LIMIT 3
