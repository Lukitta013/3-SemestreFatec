package controls;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/frutas")

public class OlaMundo {
    @GetMapping("/mapping")
    public String palavara(){
        return "Banana, maça.";
    }
}
