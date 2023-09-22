package com.toyproject.instagram.dto;

import lombok.Data;

@Data
public class SignupReqDto {
    private String phoneAndEmail;
    private String name;
    private String username;
    private String password;

}
