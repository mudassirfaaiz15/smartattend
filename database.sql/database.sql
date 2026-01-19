CREATE TABLE users (
id SERIAL PRIMARY KEY,
name TEXT,
email TEXT UNIQUE,
password TEXT,
role TEXT
);


CREATE TABLE classes (
id SERIAL PRIMARY KEY,
name TEXT,
faculty_id INTEGER REFERENCES users(id)
);


CREATE TABLE sessions (
id SERIAL PRIMARY KEY,
class_id INTEGER REFERENCES classes(id),
token TEXT,
expires_at TIMESTAMP
);


CREATE TABLE attendance (
id SERIAL PRIMARY KEY,
student_id INTEGER REFERENCES users(id),
session_id INTEGER REFERENCES sessions(id),
marked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);