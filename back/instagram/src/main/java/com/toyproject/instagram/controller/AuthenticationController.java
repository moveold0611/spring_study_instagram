package com.toyproject.instagram.controller;

import com.toyproject.instagram.dto.SignupReqDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthenticationController {



    @PostMapping("/user")
    public ResponseEntity<?> signup(@RequestBody SignupReqDto signupReqDto) {
        System.out.println(signupReqDto);
        return ResponseEntity.ok(null);
    }

}