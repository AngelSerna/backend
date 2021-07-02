package com.PKWORK.crud.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.PKWORK.crud.models.busesDTO;

public interface IbusesDAO extends MongoRepository <busesDTO, String> {

}
