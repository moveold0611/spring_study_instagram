package com.toyproject.instagram.repository;
import com.toyproject.instagram.entity.Selecter;
import com.toyproject.instagram.entity.User;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface UserMapper {
    public Integer saveUser(User user);
    public User findUserByPhone(String PhoneOrEmailOrUsername);
    public User findUserByEmail(String PhoneOrEmailOrUsername);
    public User findUserByUsername(String PhoneOrEmailOrUsername);

    public Selecter selecter(Selecter selecter);

}
