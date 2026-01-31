package com.project.fitness.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy =  GenerationType.UUID)
    private String id;
    private String email;
    private String password;
    private String firstname;
    private String lastname;
    private LocalDateTime createdAt;
    private LocalDateTime updateAt;


    // One User can have multiple Activities (One-to-Many relationship)
    // Use CascadeType.ALL to propagate operations (persist, merge, remove, etc.) from parent to children
    // orphanRemoval = true => automatically deletes child entities (Activities) when removed from the parent's collection
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Activity> activities = new ArrayList<>();
}
