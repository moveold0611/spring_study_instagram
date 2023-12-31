package com.toyproject.instagram.controller;

import com.toyproject.instagram.dto.SigninReqDto;
import com.toyproject.instagram.dto.SignupReqDto;
import com.toyproject.instagram.exception.SignupException;
import com.toyproject.instagram.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthenticationController {

    private final UserService userService;
    // @RestController가 Auth..Controller를 생성할 때 반드시 생성되야하는 상수 객체 UserService를 자동으로 생성함

    @PostMapping("/user")
    public ResponseEntity<?> signup(@Valid @RequestBody SignupReqDto signupReqDto, BindingResult bindingResult) {

        if(bindingResult.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            bindingResult.getFieldErrors().forEach(error -> {
                errorMap.put(error.getField(), error.getDefaultMessage());
            });
                throw new SignupException(errorMap);
        }

        userService.signupUser(signupReqDto);
        return ResponseEntity.ok(200);
    }

    @PostMapping("/login")
    public ResponseEntity<?> signin(@RequestBody SigninReqDto signinReqDto) {
        String accessToken = userService.signinUser(signinReqDto);
        return ResponseEntity.ok().body(accessToken);
    }

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestHeader(value = "Authorization") String token) {
        return ResponseEntity.ok(userService.authenticate(token));
    }

}