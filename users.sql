CREATE TABLE users
(
userid varchar(255) primary key,
username varchar(255) not null,
registered datetime not null,
password varchar(255) not null,
last_login datetime not null
);