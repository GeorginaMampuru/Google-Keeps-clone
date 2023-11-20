package com.zaio.Entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Employee{
    @Id
    private Long id;
    private String name;
    private String designation;
    private double salary;

    private String department;

    // Default constructor

}

