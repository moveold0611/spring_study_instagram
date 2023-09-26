package com.toyproject.instagram.dto;

import com.toyproject.instagram.entity.User;
import lombok.Data;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.security.Provider;

@Data
public class SignupReqDto {

//    @NotBlank(message = "전화번호 또는 이메일은 빈 값일 수 없습니다.")
//    @Pattern(regexp = "^[a-zA-Z]{1}[a-zA-Z0-9]+@[0-9a-zA-Z]+\\.[a-z]*\\.?[a-z]*$ | ^[0-9]{11}+$", message = "이메일 또는 전화번호를 다시 확인해주세요.")
    @Pattern(regexp = "^[a-zA-Z0-9]+@[0-9a-zA-Z]+\\.[a-z]*$|^[0-9]{11}$", message = "이메일 또는 전화번호를 다시 확인해주세요.")
//     "^[A-Za-z0-9+_.-]+@(.+)$"
    private String phoneOrEmail;

//    @NotBlank(message = "이름은 빈 값일 수 없습니다.")
    @Pattern(regexp = "^[가-힣]{2,6}$", message = "이름 형식을 다시 확인해주세요.")
    private String name;

//    @NotBlank(message = "아이디는 빈 값일 수 없습니다.")
    @Pattern(regexp = "^(?=.*[a-z])[a-z0-9_.]*$", message = "아이디를 다시 확인해주세요")
    private String username;

//    @NotBlank(message = "비밀번호는 빈 값일 수 없습니다.")
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$", message = "비밀번호 형식이 올바르지 않습니다. (영문, 숫자, 특수 문자 !,@,#,$,%,^,&,*,(,) 를 포함한 8자 이상)")
    private String password;

    public User toUserEntity(BCryptPasswordEncoder passwordEncoder) {
        return User.builder()
                .email(phoneOrEmail)
                .name(name)
                .username(username)
                .password(passwordEncoder.encode(password))
                .build();
    }
}
