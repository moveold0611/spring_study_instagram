package com.toyproject.instagram.service;

import com.toyproject.instagram.dto.SigninReqDto;
import com.toyproject.instagram.dto.SignupReqDto;
import com.toyproject.instagram.repository.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserMapper userMapper;
    private final BCryptPasswordEncoder passwordEncoder;
    // @Service UserService를 생성할 때 반드시 생성되야하는 상수 객체 UserMapper,BCryptPasswordEncoder를 자동으로 생성함
    private final AuthenticationManagerBuilder authenticationManagerBuilder;


    public void signupUser(SignupReqDto signupReqDto) {
       Integer executeCount = userMapper.saveUser(signupReqDto.toUserEntity(passwordEncoder));
       System.out.println(executeCount);
    }

    public void signinUser(SigninReqDto signinReqDto) {

        // 아이디와 비밀번호를 받아서 토큰 생성
        UsernamePasswordAuthenticationToken authenticationToken
                = new UsernamePasswordAuthenticationToken
                (signinReqDto.getPhoneOrEmailOrUsername(), signinReqDto.getLoginPassword());

        // 토큰을 시큐리티 빌더에 할당 -> PrincipalDetailsService클래스의 loadUserByUsername매서드로 이동
        Authentication authentication
                = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
    }
}
