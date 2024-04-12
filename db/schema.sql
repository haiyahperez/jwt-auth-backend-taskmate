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
    cat_id SERIAL PRIMARY KEY,
    color VARCHAR
);

CREATE TABLE task (
    task_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    cat_id INT REFERENCES category(cat_id), 
    title VARCHAR,
    description VARCHAR
);

CREATE TABLE goalform ( 
    user_id INT REFERENCES users(user_id),
    task_id INT REFERENCES task(task_id),  
    title VARCHAR,
    description VARCHAR,
    specific VARCHAR,
    measure VARCHAR,
    attain VARCHAR,
    relevant VARCHAR,
    timely VARCHAR
);
