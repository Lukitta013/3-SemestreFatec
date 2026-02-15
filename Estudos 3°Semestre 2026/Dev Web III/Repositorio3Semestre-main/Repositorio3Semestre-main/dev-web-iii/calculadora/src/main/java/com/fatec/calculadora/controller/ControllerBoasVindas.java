package com.fatec.calculadora.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/boas-vindas")

public class ControllerBoasVindas {
    @GetMapping("/sub/sub2")
    public String boasVindas(){
        return "Boas-Vindas.";
    }

}
