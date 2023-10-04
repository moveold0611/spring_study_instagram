package com.toyproject.instagram.service;

import com.toyproject.instagram.dto.SigninReqDto;
import com.toyproject.instagram.dto.SignupReqDto;
import com.toyproject.instagram.entity.User;
import com.toyproject.instagram.exception.JwtException;
import com.toyproject.instagram.exception.SignupException;
import com.toyproject.instagram.repository.UserMapper;
import com.toyproject.instagram.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserMapper userMapper;
    private final BCryptPasswordEncoder passwordEncoder;
    // @Service UserService를 생성할 때 반드시 생성되야하는 상수 객체 UserMapper,BCryptPasswordEncoder를 자동으로 생성함
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;

    public void signupUser(SignupReqDto signupReqDto) {
        User user = signupReqDto.toUserEntity(passwordEncoder);

        String emailPattern = "^[a-zA-Z0-9]+@[0-9a-zA-Z]+\\.[a-z]*$";
        String phonePattern = "^[0-9]{11}$";

        Pattern emailRegex = Pattern.compile(emailPattern);
        Pattern phoneRegex = Pattern.compile(phonePattern);

        Matcher emailMatcher = emailRegex.matcher(signupReqDto.getPhoneOrEmail());
        Matcher phoneMatcher = phoneRegex.matcher(signupReqDto.getPhoneOrEmail());

        if(emailMatcher.matches()) {
            user.setEmail(signupReqDto.getPhoneOrEmail());
        }else if(phoneMatcher.matches()) {
            user.setPhone(signupReqDto.getPhoneOrEmail());
        }
        checkDuplicated(user);
        Integer executeCount = userMapper.saveUser(user);
    }


    private void checkDuplicated(User user) {
        if(StringUtils.hasText(user.getPhone())) {
            if(userMapper.findUserByPhone(user.getPhone()) != null) {
                Map<String, String> errorMap = new HashMap<>();
                errorMap.put("phone", "이미 사용중인 연락처입니다.");
                throw new SignupException(errorMap);
            }
        }
        if(StringUtils.hasText(user.getEmail())) {
            if(userMapper.findUserByEmail(user.getEmail()) != null) {
                Map<String, String> errorMap = new HashMap<>();
                errorMap.put("email", "이미 사용중인 이메일입니다.");
                throw new SignupException(errorMap);
            }
        }
        if(StringUtils.hasText(user.getUsername())) {
            if(userMapper.findUserByUsername(user.getUsername()) != null) {
                Map<String, String> errorMap = new HashMap<>();
                errorMap.put("username", "이미 사용중인 아이디입니다.");
                throw new SignupException(errorMap);
            }
        }
    }


    public String signinUser(SigninReqDto signinReqDto) {
        // 아이디와 비밀번호를 받아서 토큰 생성
        UsernamePasswordAuthenticationToken authenticationToken
                = new UsernamePasswordAuthenticationToken
                (signinReqDto.getPhoneOrEmailOrUsername(), signinReqDto.getLoginPassword());

        // 토큰을 시큐리티 빌더에 할당 -> PrincipalDetailsService클래스의 loadUserByUsername매서드로 이동
        Authentication authentication
                = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        String accessToken = jwtTokenProvider.generateAccessToken(authentication);
        return accessToken;
    }

    public boolean authenticate(String token) {
        String accessToken = jwtTokenProvider.convertToken(token);
        if(!jwtTokenProvider.validateToken(accessToken)) {
            throw new JwtException("사용자 정보가 만료되었습니다. 다시 로그인하세요.");
        }
        return true;
    }
}
