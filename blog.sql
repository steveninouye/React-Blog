CREATE DATABASE blog;
USE blog;

CREATE TABLE authors( id int not null auto_increment primary key, name varchar(50) not null, email varchar(50) not null, _created datetime default current_timestamp);

CREATE TABLE blogs (id int not null auto_increment primary key, title varchar(100) not null, content text not null, author_id int, FOREIGN KEY(author_id) REFERENCES authors(id), _created datetime default current_timestamp);

CREATE TABLE tags( id int not null auto_increment primary key, name varchar(50) not null, _created datetime default current_timestamp);

CREATE TABLE blog_tags( blog_id INT, tag_id INT, FOREIGN KEY(blog_id) REFERENCES blogs(id), FOREIGN KEY(tag_id) REFERENCES tags(id), _created datetime default current_timestamp);