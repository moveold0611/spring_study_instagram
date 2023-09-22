package com.toyproject.instagram.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class User {
    private Integer userId;
    private String email;
    private String phone;
    private String name;
    private String username;
    private String password;
    private String provider;
}
