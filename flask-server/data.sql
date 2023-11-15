CREATE DATABASE chemistree;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    hashed_password VARCHAR(255) NOT NULL,
    is_patient BOOLEAN NOT NULL,
    is_caregiver BOOLEAN NOT NULL,
    twoAuth_code VARCHAR(5) DEFAULT NULL
);

CREATE TABLE caregivers (
    caregiver_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE,
    org_name VARCHAR(255) NOT NULL,
    caregiver_id_number VARCHAR(255) NOT NULL,
    mobile_number VARCHAR(20) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE patients (
    patient_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE,
    dob DATE,
    gender VARCHAR(10),
    screening_questions JSONB,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE carers_patients (
    caregiver_id INT,
    patient_id INT,
    PRIMARY KEY (caregiver_id, patient_id),
    FOREIGN KEY (caregiver_id) REFERENCES caregivers(caregiver_id),
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id)
);

CREATE TABLE medications (
    medication_id SERIAL PRIMARY KEY,
    user_id INT,
    name VARCHAR(255),
    dose VARCHAR(50),
    frequency VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


INSERT INTO users (user_id, email, hashed_password, is_patient, is_caregiver, twoauth_code, username)
VALUES ('000001', 'testuser@example.com', 'hashed_test_password', true, false, NULL, 'TestUser');
