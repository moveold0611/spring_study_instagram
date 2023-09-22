package com.toyproject.instagram.dto;

import com.toyproject.instagram.entity.User;
import lombok.Data;

import java.security.Provider;

@Data
public class SignupReqDto {
    private String phoneAndEmail;
    private String name;
    private String username;
    private String password;

    public User toUserEntity() {
        return User.builder()
                .email(phoneAndEmail)
//                .phone()
                .name(name)
                .username(username)
                .password(password)
                .build();
    }
}
