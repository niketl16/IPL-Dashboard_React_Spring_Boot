package com.example.IPL_Dashboard.repository;

import com.example.IPL_Dashboard.model.Team;
import org.springframework.data.repository.CrudRepository;


public interface TeamRepository extends CrudRepository<Team, Long>  {

    Team findByTeamName(String teamName);

}