INSERT INTO departments (name)
VALUES
('Marketing'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Content Creator', 50000, 1),
('Marketing Manager', 65000, 1),
('Software Engineer', 75000, 2),
('Lead Engineer', 90000, 2),
('Accountant', 70000, 3),
('Paralegal', 55000, 4),
('Lawyer', 150000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Leah', 'Johnson', 2, NULL),
('Jasmine', 'Woolf', 1, 1),
('Raul', 'Lockhart', 4, NULL),
('Jessica', 'LeRoi', 3, 3),
('Katherine', 'Miller', 5, NULL),
('Shannon', 'Carrington', 7, NULL),
('Bria', 'Bellamy', 6, 6);