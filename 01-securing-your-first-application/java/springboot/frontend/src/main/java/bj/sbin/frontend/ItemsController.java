package bj.sbin.frontend;

import java.util.Arrays;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ItemsController {

  @GetMapping("/items")
  public String getItems(ModelMap modelMap) {
    modelMap.put("items", Arrays.asList("Ordinateur", "Téléphone", "Lunettes", "Souris", "Sac"));
    return "items";
  }

  @GetMapping("/logout")
  public String logout(HttpServletRequest request) throws ServletException {
    request.logout();
    
    return "redirect:/";
  }
}
