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


CREATE TABLE goal (
    goal_id SERIAL PRIMARY KEY, 
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id), 
    cat_id INT,
    FOREIGN KEY (cat_id) REFERENCES category(cat_id), 
    title VARCHAR,
    description VARCHAR,
    specific VARCHAR,
    measure VARCHAR,
    attain VARCHAR,
    relevant VARCHAR,
    timely VARCHAR
);

CREATE TABLE task (
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    task_id SERIAL PRIMARY KEY,
    goal_id INT,
    FOREIGN KEY (goal_id) REFERENCES goal(goal_id), 
    title VARCHAR,
    description VARCHAR
);


