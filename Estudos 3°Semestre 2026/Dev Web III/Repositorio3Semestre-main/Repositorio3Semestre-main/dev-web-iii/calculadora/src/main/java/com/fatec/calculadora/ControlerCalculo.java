package com.fatec.calculadora;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Scanner;

@RestController
public class ControlerCalculo {

    @GetMapping("/soma/{numero1}/{numero2}")
    public String somar(@PathVariable double numero1, @PathVariable double numero2){
        return "Resultado: " + (numero1 + numero2);
        //Granularidade.
    }
    @GetMapping("/subtracao/{numero1}/{numero2}")
    public String subtracao(@PathVariable double numero1, @PathVariable double numero2){
        return "Resultado: " + (numero1 - numero2);
        //Granularidade.
    }
    @GetMapping("/multiplicacao/{numero1}/{numero2}")
    public String multiplicacao(@PathVariable double numero1, @PathVariable double numero2){
        return "Resultado: " + (numero1 * numero2);
        //Granularidade.
    }
    @GetMapping("/soma/{numero1}/{numero2}")
    public String divisao(@PathVariable double numero1, @PathVariable double numero2){
        return "Resultado: " + (numero1 / numero2);
        //Granularidade.
    }

}
