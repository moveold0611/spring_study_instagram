package com.toyproject.instagram.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Authority {
    private int authorityId;
    private String userId;
    private String roleId;
    private Role role;
}
