/* Create Database and Table */
create database project_db;
 
use project_db;
 
CREATE TABLE `donors` 
(
	`id` int(11) NOT NULL auto_increment,
	`name` varchar(100) NOT NULL,
	`mobile` varchar(15) NOT NULL,
	`gender` varchar(10) NOT NULL,
	`age` varchar(15) NOT NULL,
	`blood_group` varchar(20) NOT NULL,
	`state` varchar(20) NOT NULL,
	`district` varchar(20) NOT NULL,
	`division` varchar(20) NOT NULL,
	`mandal` varchar(20) NOT NULL,
	PRIMARY KEY  (`id`)
);