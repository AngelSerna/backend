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

import com.PKWORK.crud.models.buses2DTO;
import com.PKWORK.crud.repositories.Ibuses2DAO;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT,
		RequestMethod.DELETE })
@RequestMapping("/api/buses2")
public class bus2Controller {
	@Autowired
	private Ibuses2DAO repository;
	
	@CrossOrigin(origins = "http://localhost:80")
	@PostMapping("/bus")
	public buses2DTO create(@Validated @RequestBody buses2DTO p) {
	return repository.insert(p);
	}
	@CrossOrigin(origins = "http://localhost:80")
	@GetMapping("/")
	public List<buses2DTO> readAll(){
		return repository.findAll();
	}

	@GetMapping("/bus/{id}")
	public Optional<buses2DTO> show(@PathVariable String id) {
	    return repository.findById(id);
	    }
	@CrossOrigin(origins = "http://localhost:80")
	@PutMapping("/bus/{id}")
	public buses2DTO update(@PathVariable String id, @Validated @RequestBody buses2DTO p) {
	return repository.save(p);
	}
	@CrossOrigin(origins = "http://localhost:80")
	@DeleteMapping("/bus/{id}")
	public void delete(@PathVariable String id) {
		repository.deleteById(id);
	}
}
