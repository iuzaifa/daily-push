package com.security.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }


    @Bean
    public UserDetailsService userDetailService(PasswordEncoder encoder){
        // Admin Protected
        UserDetails admin = User.withUsername("admin@gmail.com")
                .password(encoder.encode("admin@123")).roles("ADMIN").build();

        // User Protected
        UserDetails user = User.withUsername("abuhuzaifaw7@gmail.com")
                .password(encoder.encode("huzaifa#123")).roles("USER").build();

        return new  InMemoryUserDetailsManager(admin, user);
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .csrf(Customizer.withDefaults()) // Enables CSRF protection
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers("rest/auth/getMessage").permitAll();
                    auth.requestMatchers("/product/**").authenticated();
                })
                .formLogin(Customizer.withDefaults()) // Enables default form login
                .build();
    }











}
