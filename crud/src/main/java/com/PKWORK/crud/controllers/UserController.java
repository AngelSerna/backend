package com.PKWORK.crud.controllers;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.PKWORK.crud.models.UserDTO;
import com.PKWORK.crud.repositories.IUserDAO;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT,
		RequestMethod.DELETE })
@RequestMapping("/api/users")

public class UserController {

	@Autowired
	private IUserDAO repository;
	
	@CrossOrigin(origins = "http://localhost:80")
	@PostMapping("/user")
	public UserDTO create(@Validated @RequestBody UserDTO p) {
	return repository.insert(p);
	}
	@CrossOrigin(origins = "http://localhost:80")
	@GetMapping("/")
	public List<UserDTO> readAll(){
		return repository.findAll();
	}

	@GetMapping("/user/{id}")
	public Optional<UserDTO> show(@PathVariable String id) {
	    return repository.findById(id);
	    }
	@CrossOrigin(origins = "http://localhost:80")
	@PutMapping("/user/{id}")
	public UserDTO update(@PathVariable String id, @Validated @RequestBody UserDTO p) {
	return repository.save(p);
	}
	@CrossOrigin(origins = "http://localhost:80")
	@DeleteMapping("/user/{id}")
	public void delete(@PathVariable String id) {
		repository.deleteById(id);
	}
	
}
