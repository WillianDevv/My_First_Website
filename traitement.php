<html>
  <head>
  <title>réponse du serveur</title>
      <link rel="stylesheet" href="style.css">
  </head>
  
    <section class="all">
     <section class="sec-header">
        <header>
            <h1><a href="index.html">Mon Cv</a></h1>
            <nav>
            <ul>
                <li><a href="cv.html"> CV</a></li>
                <li><a href="projet.html"> Project</a></li>
                <li><a href="passion.html"> Hobbies</a></li>
                <li><a href="form.html">Contact</a></li>
                
            </ul>   
        </nav>
        </header>
    </section>
  
  
  <body>
      
    <div>  
      
  <?php print "Hello";
  print " ";
  print $_POST ["nom"] ;
  print " ";
print " We appreciate your comments, thank you for your visit ! ";
  ?>


  </body>
<a href="form.html"><button>Retour</button></a>

</div>


<style> 
html {
    background-color : #303437;
    color:white;
}

div {
    display:flex;
    justify-content :center;
    margin-top :20%;
}

.button {
height : 120px;
width:200px;
}
</style>
</html> 