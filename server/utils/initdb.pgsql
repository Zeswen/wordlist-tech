DROP TABLE IF EXISTS users;

-- Creates users table
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , username varchar(20) NOT NULL
    , password varchar(50) NOT NULL
);

DROP TABLE IF EXISTS words_es;

-- Creates users table
CREATE TABLE IF NOT EXISTS words_es (
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , name varchar(50) NOT NULL
    , description varchar(500) NOT NULL
    , audio varchar(500) DEFAULT NULL
);

DROP TABLE IF EXISTS words_en;

-- Creates users table
CREATE TABLE IF NOT EXISTS words_en (
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , name varchar(50) NOT NULL
    , description varchar(500) NOT NULL
    , audio varchar(500) DEFAULT NULL
);

DROP TABLE IF EXISTS words_img;

-- Creates users table
CREATE TABLE IF NOT EXISTS words_img (
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , url varchar(500) NOT NULL
);
