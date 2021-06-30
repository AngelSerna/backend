package com.PKWORK.crud.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class UserDTO {
@Id
 private String _id;
 private String name;
 private String cord;
 private String password;
public String get_id() {
	return _id;
}
public void set_id(String _id) {
	this._id = _id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getCord() {
	return cord;
}
public void setCord(String cord) {
	this.cord = cord;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
 
 
 
}
