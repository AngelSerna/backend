package com.PKWORK.crud.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.PKWORK.crud.models.buses2DTO;


public interface Ibuses2DAO extends MongoRepository <buses2DTO, String>{

}
