import React from "react";
import './Footer.css'

function Footer() {
  return (
    <footer class="footer">
        <div class="footer-content">
            <div class="Explore">
                <h2 id="h3f">Explore</h2>
                <h4 id="h4f">Home</h4>
                <h4 id="h4s">Question</h4>
                <h4 id="h4t">Articles</h4>
                <h4 id="h4f">Tutorials</h4>   
            </div>
            <div class="Support">
                <h2 id="H3f">Support</h2>
                <h4 id="H4f">FAQs</h4>
                <h4 id="H4s">Help</h4>  
                <h4 id="H4s">Conttact Us</h4>  
            </div>
            <div class="StayConnected">
                <h2 id="H3f">Stay Connected</h2> 
                <img className="insta" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTciP5YwWfFR6CU7hbcaTeXecgXPub77FgEXRT3cLHvhA&s" alt="" />
                <img className="fb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAACTk5M9PT3Nzc0ICAjx8fEwMDDIyMi3t7e/v7/h4eE0NDRra2sLCws3Nzfs7Oybm5tnZ2f39/cYGBgTExPn5+d0dHSurq7a2tojIyOPj4/T09NcXFweHh56enpOTk5HR0dWVlalpaWBgYGQkJDgitGOAAADU0lEQVR4nO3d63aaQBSGYQ1EIp7AMZ7QeiC9/1usTZus5EeVjQPzYd/3Alj7WWTJCBPp9YLmnNsMi8kxSraLaf+j5y9N//Y6K5ZhZ7WXjXb5/rVfvdkm9MiWlnFp0r03caHHrppLy/nCyvtdFnryag3Wq20d3qVd6NmrlOX7HzV9/X4aevoKraPpbUiHhbvZHbwOCLPDfT51oXuJ7gVqC7O87gdoR4SjyfP9QGXh6OjBpywcJV6AusKdeQXaMWHs4TNGWrg5+QKKCkd7b0BNYbbyB5QUutwjUFK483GhlxZ6+xhVFU68AgWFsV+gntD5WY0KC9e+VmuqwuXZM1BOWHq9UggKlx6Xa5rCtXegmPD+O2vqwrjWk4kOCf0uuRWFy9OjCzcNALWETfyRSgmdp/uHusJlE0ApYfnwwnkjQqXNGA1c7i8NQrO+1AgwD6360ksTwELpFBa1Ga9JdNzPP5t8tMpHoVHfqnWPbXsuUqXTdLUat6B+HJSuBTez7yqJ1qFnNmVfs0WdOoGXLxbmm/ndOoOXi4V169qhI7sOP0utwq6dwt7QuGg7Ki04K2W9nf8WemBzpVH4M/TA5nLjJtKn0AObezI+sVD60lAto3BRhh7YnFG4HYYe2JxROO7Ykq1nFkZx6IHNIUSoH0KE+iFEqB9ChPohRKgfQoT6IeyA0A2u5QqjML1+vPdjtgvcrXz/J8XNkqc2HzHGjWw8vNWkPaLz/28GlWrv3n8zOytvN2/tJKaBhLPWdkUNAwkThAgRIkSIEOF/IBwjRIgQIUKECBEiRIgQIUKECB9C+PjPLRAiRIgQIUIlYaidClFrwiyQsL0tQ95/HrhiLf7wwr2v/KnXoc03y8Vv53Hy78bGn8WYbq8c7E/RPG/31Xlu83KleGXbfZmU8bXDvR9S7NWA1h20nXif2rceYI/wjRAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/fKpSXjq3u8mpguTcD8IPbA5dzIJi9Dz1mhjAZ5bfjO8n7LJthrveZw3O8kvHyhfB07lSzoAAAAASUVORK5CYII=" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAJPTJu_Cq2-L2mtVDpsGuO6MzX2V6mzkrg&usqp=CAU" alt=""  className="twitter"/>
            </div>
        </div>
        <div class="deakin">
            <h2><strong>DEV@Deakin 2022</strong></h2>
        </div>
        <div>
            <h3 className="privacy">Privacy Policy</h3>
        </div>     
    </footer>
  );
}

export default Footer;
