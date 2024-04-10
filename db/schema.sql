-- db/schema.sql
DROP DATABASE IF EXISTS jwt_auth;

CREATE DATABASE jwt_auth;


\c jwt_auth


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE
);

CREATE TABLE category (
    cat_id INT,
    color VARCHAR
);


CREATE TABLE goal (
    goal_id INT, 
    user_id INT, 
    cat_id INT, 
    title VARCHAR,
    description VARCHAR,
    specific VARCHAR,
    measure VARCHAR,
    attain VARCHAR,
    relevant VARCHAR,
    timely VARCHAR
);

CREATE TABLE task (
    FOREIGN KEY (user_id) REFERENCES users(id),
    task_id INT,
    goal_id INT, 
    title VARCHAR,
    description VARCHAR
);


