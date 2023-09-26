package com.toyproject.instagram.service;

import com.toyproject.instagram.entity.User;
import com.toyproject.instagram.repository.UserMapper;
import com.toyproject.instagram.security.PrincipalUser;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {

    private final UserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String PhoneOrEmailOrUsername) throws UsernameNotFoundException {
        System.out.println("아이디 넘어옴? " + PhoneOrEmailOrUsername);

        User user = userMapper.findUserByPhone(PhoneOrEmailOrUsername);
        if(user != null) {
            return new PrincipalUser(user.getPhone(), user.getPassword());
        }

        user = userMapper.findUserByEmail(PhoneOrEmailOrUsername);
        if(user != null) {
            return new PrincipalUser(user.getEmail(), user.getPassword());
        }

        user = userMapper.findUserByUsername(PhoneOrEmailOrUsername);
        if(user != null) {
            return new PrincipalUser(user.getUsername(), user.getPassword());
        }
        System.out.println("test");
        return null;
//        throw new UsernameNotFoundException("사용자 정보가 일치하지 않습니다.");
    }



}
