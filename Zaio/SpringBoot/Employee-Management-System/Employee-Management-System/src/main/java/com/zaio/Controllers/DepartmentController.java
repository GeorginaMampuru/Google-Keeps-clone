package com.zaio.Controllers;

import com.zaio.Entity.Department;
import com.zaio.Entity.Employee;
import com.zaio.MessageHandling.Response;
import com.zaio.Services.DepartmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DepartmentController {

    private final DepartmentService departmentService;

    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    /* write your function for @PostMapping("/departments") annotation maps the method createDepartment to handle
    HTTP POST requests with the "/departments" endpoint */

}
