package com.vacademy.vacademy.dbServices;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.vacademy.vacademy.dbModels.UserEntity;

@Repository
@Transactional // To decalre that methods will perform transactions
public class UserDbService {
	
	@PersistenceContext // To make entityM. track all variables
	private EntityManager entityManager;
	
	//Insert data in db
	public long insert(UserEntity user)
	{
		entityManager.persist(user);
		return user.getId();
	}

}
