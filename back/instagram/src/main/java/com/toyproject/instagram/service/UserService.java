package com.toyproject.instagram.service;

import com.toyproject.instagram.dto.SignupReqDto;
import com.toyproject.instagram.repository.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserMapper userMapper;
    private final BCryptPasswordEncoder passwordEncoder;
    // @Service UserService를 생성할 때 반드시 생성되야하는 상수 객체 UserMapper,BCryptPasswordEncoder를 자동으로 생성함

    public void signupUser(SignupReqDto signupReqDto) {
       Integer executeCount = userMapper.saveUser(signupReqDto.toUserEntity(passwordEncoder));
       System.out.println(executeCount);
    }

}
