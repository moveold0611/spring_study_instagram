package com.toyproject.instagram.dto;

import com.toyproject.instagram.entity.User;
import lombok.Data;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.security.Provider;

@Data
public class SignupReqDto {
    private String phoneAndEmail;
    private String name;
    private String username;
    private String password;

    public User toUserEntity(BCryptPasswordEncoder passwordEncoder) {
        return User.builder()
                .email(phoneAndEmail)
//                .phone()
                .name(name)
                .username(username)
                .password(passwordEncoder.encode(password))
                .build();
    }
}
