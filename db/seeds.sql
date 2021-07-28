INSERT into department (name)
VALUES 
    ('Marketing'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Content Creator', 50000, '1'),
    ('Sales Lead', 60000, '1'),
    ('Marketing Manager', 70000, '1'), 
    ('Software Engineer', 85000, '2'),
    ('Lead Engineer', 95000, '2'),
    ('Accountant', 65000, '3'),
    ('Lawyer', 150000, '4'),
    ('Paralegal', 55000, '4');
