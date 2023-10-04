package com.toyproject.instagram.config;

import com.toyproject.instagram.exception.AuthenticateExceptionEntryPoint;
import com.toyproject.instagram.security.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity // 직접만든 security 이용
@Configuration
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final AuthenticateExceptionEntryPoint authenticateExceptionEntryPoint;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors(); // WebMVCConfig에서 설정한 cors 정책을 따르겠다.
        http.csrf().disable(); // csrf 토큰 비활성화

        http.authorizeRequests()
                .antMatchers("/api/v1/auth/**") // 주소값 이하
                .permitAll() // 요청 허용
                .anyRequest() // 나머지는??
                .authenticated() // 인증 받아라
                .and() // 그리고
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling()
                .authenticationEntryPoint(authenticateExceptionEntryPoint);

    }
}
