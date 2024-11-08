-- create table --
CREATE TABLE quotesoftheday(
  quotes_id SERIAL PRIMARY KEY,
  quotes_description VARCHAR(255) NOT NULL -- BETTER use TEXT type data then VARCHAR for quotes case in here
) 

-- get all data -- 
SELECT * FROM quotesoftheday

-- get specific quote from id -- 
SELECT * FROM quotesoftheday WHERE quotes_id = "quotes_id" -- type integer value for quotes_id

-- update data qoutes from id -- 
UPDATE quotesoftheday SET quotes_description = "quotes terbarukan" WHERE quotes_id = "quotes_id" 

-- delete quotes from id -- 
DELETE FROM quotesoftheday WHERE quotes_id = '...'
