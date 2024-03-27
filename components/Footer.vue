<template>
    <div class="footer">
        <ul class="ul">
            <li class="li"><a href="">درباره ما</a></li>
            <li class="li"><a href="">سوالات متداول</a></li>
            <li class="li"><a href="">قوانین</a></li>
            <li class="li"><a href="">تماس با ما</a></li>
        </ul>
        <div class="logos mt-5">
       <a class="logo" href=""><i class="bi bi-telegram"></i></a>
       <a class="logo" href=""><i class="bi bi-instagram"></i></a>
       <a class="logo" href=""><i class="bi bi-whatsapp"></i></a>
       <a class="logo" href=""><i class="bi bi-twitter"></i></a>
       </div>
       <div class="text1">
       <h6>کلیه حقوق و امتیازات این وبسایت متعلق به رستوران دلینو میباشد و هرگونه کپی برداری پیگرد قانونی دارد.</h6>
       </div>
    </div>
</template>
<style scoped>
  .footer{
    margin-top:0;
    background: #383c47;
  }
  .ul{
    display: flex;
    justify-content: center;
    border-bottom: 1px solid white;
    margin-right: 8rem;
    margin-left: 8rem;
    padding-top:2rem;
    padding-bottom: 1rem;
  }
  
  .li{
    margin-left: 1.5rem;
  }
  .li a{
    font-size: 1.1rem;
    color:white;
  }

.logos{
  display: flex;
  justify-content: center;
}
.logo{
  font-size: 2rem;
  margin-left: 1rem;
  color:white
}
.text1{
  color: white;
  text-align: center;
  margin-top:2rem;
  padding-bottom: 1rem;
}
 h6{
  margin-bottom: 0;
 }
 .li a:hover{
  color: darkgray;
  transition: .7s;
 }
 .logo:hover{
  color: darkgray;
  transition: .7s;
 }
</style>

