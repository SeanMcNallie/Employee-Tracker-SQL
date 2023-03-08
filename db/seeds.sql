USE employee_db;

INSERT INTO department (name)
VALUES 
('Executive'),
('Manager'),
('Programming'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('President', 1000000, 1),
('Vice President', 750000, 1),
('Sales Manager', 300000, 2),
('Programming', 275000, 2),
('Sales Director', 175000, 4),
('Sales Lead', 150000, 4),
('Sales Person', 120000, 4),
('Programmer', 125000, 3),
('Jr. Programmer', 85000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Sean', 'Austin', 1, NULL),
('Lola', 'Jones', 2, 1),
('Josh', 'Williams', 3, NULL),
('Jason', 'Mascow', 4, 3),
('Jeff', 'Robbins', 5, NULL),
('Sam', 'Theman', 6, 5),
('Georgia', 'Thewoman', 7, NULL),
('Joseph','Demingo', 8, 5),
('Lacy', 'Gardens', 9, 1),
('Alison', 'Pie', 7, 7);