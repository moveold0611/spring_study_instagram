package com.toyproject.instagram.service;

import com.toyproject.instagram.entity.Selecter;
import com.toyproject.instagram.entity.User;
import com.toyproject.instagram.repository.UserMapper;
import com.toyproject.instagram.security.PrincipalUser;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;


@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {

    private final UserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String PhoneOrEmailOrUsername) throws UsernameNotFoundException {

//        User user = userMapper.findUserByPhone(PhoneOrEmailOrUsername);
//        if(user != null) {
//            return new PrincipalUser(user.getPhone(), user.getPassword(), user.getAuthorities());
//        }
//
//        user = userMapper.findUserByEmail(PhoneOrEmailOrUsername);
//        if(user != null) {
//            return new PrincipalUser(user.getEmail(), user.getPassword(), user.getAuthorities());
//        }
//
//        user = userMapper.findUserByUsername(PhoneOrEmailOrUsername);
//        if(user != null) {
//            return new PrincipalUser(user.getUsername(), user.getPassword(), user.getAuthorities());
//        }

//        String emailPattern = "^[a-zA-Z0-9]+@[0-9a-zA-Z]+\\.[a-z]*$";
//        String phonePattern = "^[0-9]{11}+$";
//        String ReqString = PhoneOrEmailOrUsername;
//
//        String whereType = "username";
//
//        if(Pattern.matches(emailPattern, ReqString)) {
//            whereType = "email";
//        }else if(Pattern.matches(phonePattern, ReqString)) {
//            whereType = "phone";
//        }
//
//        Selecter selecter = Selecter.builder()
//                .where(whereType)
//                .who(ReqString)
//                .build();
//
//        User user = userMapper.selecter(selecter);
//


        return null;
//        throw new UsernameNotFoundException("사용자 정보가 일치하지 않습니다.");
    }



}
