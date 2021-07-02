package com.PKWORK.crud.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.PKWORK.crud.models.UserDTO;

@Repository
public interface IUserDAO extends MongoRepository <UserDTO, String>{

}
