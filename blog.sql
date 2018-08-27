CREATE DATABASE blog;
USE blog;

CREATE TABLE authors( id int not null auto_increment primary key, name varchar(50) not null, email varchar(50) not null, _created datetime default current_timestamp);

CREATE TABLE blogs (id int not null auto_increment primary key, title varchar(100) not null, content text not null, author_id int not null, FOREIGN KEY(author_id) REFERENCES authors(id), _created datetime default current_timestamp);

CREATE TABLE tags( id int not null auto_increment primary key, name varchar(50) not null, _created datetime default current_timestamp);

CREATE TABLE blog_tags( blog_id INT, tag_id INT, FOREIGN KEY(blog_id) REFERENCES blogs(id), FOREIGN KEY(tag_id) REFERENCES tags(id), _created datetime default current_timestamp);

delimiter //
CREATE PROCEDURE spBlogsTags (blogid int)
BEGIN
    SELECT t.id, t.name, t._created 
        FROM blogs b 
        JOIN blog_tags bt ON bt.blog_id=b.id 
        JOIN tags t ON t.id=bt.tag_id
        WHERE u.id = blogid;
END //
delimiter ;

CREATE USER 'blogger'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON blog.* TO 'blogger'@'localhost';

INSERT INTO authors (name, email) VALUES ('Bob Smith','bobsmith@hotmail.com');

INSERT INTO blogs (title, content, author_id) VALUES ('Wood Chuck', 'How much wood could a wood chuck chuck, if a wood chuck could chuck wood', 1);