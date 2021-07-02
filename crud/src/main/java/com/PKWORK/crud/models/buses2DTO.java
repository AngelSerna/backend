package com.PKWORK.crud.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "buses2")
public class buses2DTO {
	@Id
	 private String _id;
	 private String lugar;
	 private String cordx;
	 private String cordy;
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getLugar() {
		return lugar;
	}
	public void setLugar(String lugar) {
		this.lugar = lugar;
	}
	public String getCordx() {
		return cordx;
	}
	public void setCordx(String cordx) {
		this.cordx = cordx;
	}
	public String getCordy() {
		return cordy;
	}
	public void setCordy(String cordy) {
		this.cordy = cordy;
	}
}
