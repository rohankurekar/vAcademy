package com.vacademy.vacademy.dbServices;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vacademy.vacademy.dbModels.UserEntity;

public interface UserRep extends JpaRepository<UserEntity,Long> {

}
