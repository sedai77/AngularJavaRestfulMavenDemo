package ngdemo.service;

import ngdemo.domain.User;

public class UserService {

    public User getDefaultUser() {
        User user = new User();
        user.setFirstName("Shyam");
        user.setLastName("Sedai");
        return user;
    }
}
