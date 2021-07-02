package com.PKWORK.crud.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.PKWORK.crud.models.buses3DTO;


public interface Ibuses3DAO extends MongoRepository <buses3DTO, String> {

}
